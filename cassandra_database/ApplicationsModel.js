var ExpressCassandra = require('express-cassandra');


const models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['localhost'],
    protocalOptions: { port: 9042 },
    keyspace: 'applications',
    ormOptions: {
      defaultReplicationStrategy : {
          class: 'SimpleStrategy',
          replication_factor: 1,
          queryOptions: {consistency: ExpressCassandra.consistencies.one}
        },
        ormOptions: {
            defaultReplicationStrategy : {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe',
        }
    }
  }
});

var MyModel = models.loadSchema('Applications',{
      fields:{
          id : 'int',
          name : 'text',
          author : 'text',
          imageUrl : 'text',
          category : 'text',
          updatedAt : "timestamp",
          size : 'text',
          editorChoice : 'boolean',
          rating: 'decimal',
          ratings: 'decimal',
          currentVersion: 'decimal',
          installs : 'int',
          createdAt:"timestamp",
        },
      key:["id"]
    })

console.log(models.instance.Applications === MyModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});