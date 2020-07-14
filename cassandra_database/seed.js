"use strict";
const cassandra = require('cassandra-driver');
const executeConcurrent = cassandra.concurrent.executeConcurrent;
const Uuid = cassandra.types.Uuid;



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

  // Use an Array with 10000 different values
  const values = Array.from(new Array(1).keys()).map(x => [ 1, 'SampleApp', 'Warner Lin', 'www.google.com', 'Business', Date.now(), '234 MB', true, 2.3, 5.2, 5.22, 121, Date.now()]);
  console.log(values)

  // const values = Array.from(new Array(1).keys()).map(x => [ 1, 'SampleApp', 'Warner Lin', 'www.google.com', 'Business', Date.now(), '234 MB', true, 2.3, 5.2, 5.22, 121, Date.now()]);
  // console.log(values)


  try {

    const query = 'INSERT INTO Applications (id, name, author, imageUrl, category, updatedAt, size, editorChoice, rating, ratings, currentVersion, installs, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await executeConcurrent(client, query, values);

    console.log(`Finished executing ${values.length} queries with a concurrency level of ${concurrencyLevel}.`);

  } finally {
    await client.shutdown();
  }
}

example();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });