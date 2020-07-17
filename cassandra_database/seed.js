"use strict";
const cassandra = require('cassandra-driver');
const executeConcurrent = cassandra.concurrent.executeConcurrent;
const Uuid = cassandra.types.Uuid;
const faker = require('faker');



const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

/**
 * Inserts multiple rows in a table from an Array using the built in method <code>executeConcurrent()</code>,
 * limiting the amount of parallel requests.
 */
async function example() {
  await client.connect();
  await client.execute(`CREATE KEYSPACE IF NOT EXISTS applications
                        WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' }`);
  await client.execute(`USE applications`);
  await client.execute(`CREATE TABLE IF NOT EXISTS Applications (
    id int,
    name text,
    author text,
    imageUrl text,
    category text,
    updatedAt timestamp,
    size text,
    editorChoice boolean,
    rating decimal,
    ratings decimal,
    currentVersion decimal,
    installs int,
    createdAt timestamp,
    PRIMARY KEY (id))`);

  // The maximum amount of async executions that are going to be launched in parallel
  // at any given time
  const concurrencyLevel = 32;
  const promises = new Array(concurrencyLevel);

  const info = {
    totalLength: 10000000,
    counter: 0
  };

  // Launch in parallel n async operations (n being the concurrency level)
  for (let i = 0; i < concurrencyLevel; i++) {
    promises[i] = executeOneAtATime(info);
  }

  try {
    // The n promises are going to be resolved when all the executions are completed.
    await Promise.all(promises);

    console.log(`Finished executing ${info.totalLength} queries with a concurrency level of ${concurrencyLevel}.`);

  } finally {
    await client.shutdown();
  }
}

async function executeOneAtATime(info) {
  const query = 'INSERT INTO Applications (id, name, author, imageUrl, category, updatedAt, size, editorChoice, rating, ratings, currentVersion, installs, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };//WTF is this?

  while (info.counter++ < info.totalLength) {
    var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
    var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
    var randomIndex = Math.floor((Math.random() * 5));
    var randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    var randomRating = (Math.floor((Math.random() * 10) + 1))/2;

    const params = [ info.counter,faker.commerce.product(), fullName, `https://loremflickr.com/160/160?lock=${Math.floor(Math.random() * 1000)}`, categories[randomIndex], faker.date.past(), faker.random.number() + 'MB', faker.random.boolean(), randomRating, faker.random.number(), randomVersion, faker.random.number(), faker.date.past()];
    await client.execute(query, params, options);
  }
}

example();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });
