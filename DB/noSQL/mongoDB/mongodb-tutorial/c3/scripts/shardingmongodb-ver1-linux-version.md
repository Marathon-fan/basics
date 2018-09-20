


Say about mongo ref card
https://www.mongodb.com/collateral/quick-reference-cards?jmp=dfp&utm_medium=display&utm_source=docs&utm_campaign=QuickRefCardsOctober2015C


sh.shardCollection("students.grades", {"student_id" : 1}) { "collectionsharded" : "students.grades", "ok" : 1 }

```sh

//Create data directories for 3 Shard Servers & 1 for the config server
mkdir /test
mkdir /test/srx
mkdir /test/srx/db1
mkdir /test/srx/db2
mkdir /test/srx/db3
mkdir /test/configdbxv_1
mkdir /test/configdbxv_2
mkdir /test/configdbxv_3

//Start Shard Servers on different ports
mongod  --shardsvr --bind_ip 127.0.0.1 --port 10001 --dbpath /test/srx/db1
mongod  --shardsvr --bind_ip 127.0.0.1 --port 10002 --dbpath /test/srx/db2
mongod  --shardsvr --bind_ip 127.0.0.1 --port 10003 --dbpath /test/srx/db3

# mongo --port 10001
# cfg = {
#     _id : "rs1",
#     members : [
#     { _id : 0, host : "127.0.0.1 :10001" },
#     { _id : 1, host : "127.0.0.1 :10002" },
#     { _id : 2, host : "127.0.0.1 :10003" },

#     ] } 
# rs.initiate(cfg)
```

```sh
//Start config Server
mongod  --replSet rs2 --configsvr --bind_ip 127.0.0.1 --port 40001  --dbpath /test/configdbxv_1
mongod  --replSet rs2 --configsvr --bind_ip 127.0.0.1 --port 40002  --dbpath /test/configdbxv_2
mongod  --replSet rs2 --configsvr --bind_ip 127.0.0.1 --port 40003  --dbpath /test/configdbxv_3

mongo --port 40001
cfg = {
    _id : "rs2",
    configsvr: true, 
    members : [
    { _id : 10, host : "127.0.0.1 :40001" },
    { _id : 11, host : "127.0.0.1 :40002" },
    { _id : 12, host : "127.0.0.1 :40003" }    
    ] } 
rs.initiate(cfg)
```

```sh
db.getCollection('shards').find({})


//Using mongos start the Query Router for the config server and specify the chunk size
mongos --configdb rs2/localhost:40001 --port 40005 

//Connect to Router 
mongo --port 40005 --host localhost

// Use admin Priveleges
use admin

// Add shards
 db.runCommand( { addshard : "localhost:10001", "name":"shard_one_demo" } );
 db.runCommand( { addshard : "localhost:10002", "name":"shard_two_demo" } );
 db.runCommand( { addshard : "localhost:10003", "name":"shard_three_demo"  } );

// Enable Sharding on DB and in Collection
 db.runCommand( { enablesharding  : "person_shard_DB" } );
 db.runCommand( { shardcollection : "person_shard_DB.details_collection", key : { Name : 1 } } );
 
 // populate data to the DB 
 use person_shard_DB

 // Insert Test Data
for(i = 50000; i < 500000; i++) {
    db.details_collection.insert({Name:'Hello' + i, id:  i + 10, annual_income: 100000 + i})
}
db.details_collection.getShardDistribution()

for(i = 500000; i < 1000000; i++) {
    db.details_collection.insert({Name:'Hello' + i, id:  i + 10, annual_income: 100000 + i})
}
db.details_collection.getShardDistribution()
# then we see something like this
----
Shard shard_one_demo at localhost:10001
 data : 75.23MiB docs : 999999 chunks : 2
 estimated data per chunk : 37.61MiB
 estimated docs per chunk : 499999

Shard shard_three_demo at localhost:10003
 data : 37.61MiB docs : 500000 chunks : 1
 estimated data per chunk : 37.61MiB
 estimated docs per chunk : 500000

Shard shard_two_demo at localhost:10002
 data : 74B docs : 1 chunks : 1
 estimated data per chunk : 74B
 estimated docs per chunk : 1

Totals
 data : 112.85MiB docs : 1500000 chunks : 4
 Shard shard_one_demo contains 66.66% data, 66.66% docs in cluster, avg obj size on shard : 78B
 Shard shard_three_demo contains 33.33% data, 33.33% docs in cluster, avg obj size on shard : 78B
 Shard shard_two_demo contains 0% data, 0% docs in cluster, avg obj size on shard : 74B
 ----

db.getCollection('details_collection').count();


ps aux | grep mongo

sh.status() 

//  db.details_collection.ensureIndex({ Name : 1 });
```


