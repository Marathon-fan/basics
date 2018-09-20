
# mongoDBTest

## 

/////////////////////////////////////////////////////////////quesitons to remember 

```sh

5. What is a projection in MongoDB queries?
 It is the second argument in the find() method that may either specify a list of fields to return or list fields to exclude in the result documents.
 It is a condition which specifies the equality condition.
 It is the storage format to store the data into the hard disk.
 It is the query plan to optimize the query.
Explanation:
Answer: (c) Explanation: A projection in MongoDB queries is the storage format to store the data into the hard disk.

By default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return.

A projection can explicitly include several fields by setting the <field> to 1 in the projection document.

db.inventory.find( { status: "A" }, { item: 1, status: 1 } )

```

```sh
6. Which among the following is the way to access the different documents in the result set?
 Limit
 Sort
 Cursor
 Iterator
Explanation:
Answer: (c) Explanation: Cursor is a way to access the different documents in the result set.


The db.collection.find() method returns a cursor. To access the documents, you need to iterate the cursor. However, in the mongo shell, if the returned cursor is not assigned to a variable using the var keyword, then the cursor is automatically iterated up to 20 times [1] to print up to the first 20 documents in the results.

//////js code
var myCursor = db.sampleCollection.find();

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}

```

```sh
7. What is the maximum size of a document in the MongoDB?
 16 MB
 64 MB
 32 MB
 1024 MB
Explanation:
Answer: (a) Explanation: The maximum size of a document in the MongoDB is 16 MB.
```

```sh
8. Which among following is not a supported index type in MongoDB?
 Unique
 Neospatial
 Geospatial
 TTL Index
Explanation:
Answer: (b) Explanation: Neospatial is not a supported index type in MongoDB.


Index Properties
Unique Indexes
The unique property for an index causes MongoDB to reject duplicate values for the indexed field. Other than the unique constraint, unique indexes are functionally interchangeable with other MongoDB indexes.

Partial Indexes
Partial indexes only index the documents in a collection that meet a specified filter expression. By indexing a subset of the documents in a collection, partial indexes have lower storage requirements and reduced performance costs for index creation and maintenance.

Sparse Indexes
The sparse property of an index ensures that the index only contain entries for documents that have the indexed field. The index skips documents that do not have the indexed field.

TTL Indexes
TTL indexes are special indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time. This is ideal for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.


```

```sh
11. What is the name of the process that routes the read request to specific shard based on the specified shard key?
 Config servers
 Router
 Mongod
 Balancer
Explanation:
Answer: (b) Explanation: The router routes the read request to the specific shard, based on the specified shard key.




```

```sh
12. What is the name of the process that keeps the metadata of a sharded cluster?
 Config servers
 Router
 Mongod
 Balancer

Explanation:
Answer: (a) Explanation: Config servers keep the metadata of a sharded cluster.
```


```sh
13. In the replica set, by default, MongoDB always reads data from a replica set's:
 Secondary member
 Primary member
 Key
 Config server
Explanation:
Answer: (a) Explanation: In the replica set, by default, MongoDB always reads data from a replica set's primary member.
```

```sh
14. Which among the following are the valid use cases to specify read preference mode?
 Backup operations
 Reduction of latency in multi-data-center deployments
 Improvement of read throughput by distributing high read-volumes
 All of the above
Explanation:
Answer: (d) Explanation: Backup operations, reduction of latency in multi-data-center deployments, and improvement of read throughput by distributing high read-volumes are the valid use cases to specify read preference mode.
```

```sh
19. In a replica set, all write operations go to the set's primary that applies the write operation and then records the operations in a file called:
 WAL
 Commit Log
 HFile
 Oplog

Explanation:
Answer: (d) Explanation: In a replica set, all write operations go to the set's primary that applies the write operation and then records the operations in a file called oplog.
```


```sh
22. Which of the following examples select all documents in the inventory collection where the value of the type field is either 'food' or 'snacks'?
 db.inventory.find( { type: { $in: [ "food", "snacks"]}})
 db.inventory.find({$or: [ { type:"food"}, { type:"snacks"}]})
 Both of the above
Explanation:
Answer: (c) Explanation: Both the examples select all documents in the inventory collection where the value of the type field is either 'food' or 'snacks'?
```


```sh
24. What is the name of the specification to store and retrieve files that exceed the BSON-document size limit of 16MB?
 Chunks
 Files
 GridFS
 Oplog file
Explanation:
Answer: (c) Explanation: GridFS stores and retrieves files that exceed the BSON-document size limit of 16MB.

```

```sh
25. In MongoDB, document size cannot be more than 16 MB because:
 BSON cannot contain more than 16 MB
 MongoDB stores the data as 16 MB block
 A single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth
 All of the above
Explanation:
Answer: (c) Explanation: In MongoDB, document size cannot be more than 16 MB because a single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth.
```


```sh
26. ObjectId is a 12-byte BSON type, in which the last 3 bytes represent:
 The Process ID
 The seconds since the Unix epoch
 The machine identifier
 A 3-byte counter, starting with a random value
Explanation:
Answer: (d) Explanation: ObjectId is a 12-byte BSON type, in which the last 3 bytes represents a counter starting with a random value

The 12-byte ObjectId value consists of:

a 4-byte value representing the seconds since the Unix epoch,
a 5-byte random value, and
a 3-byte counter, starting with a random value.
```

```sh
28. Which of the following is a utility of MongoDB used for taking backups?
 Mongodump
 MongoStore
 Mongo Export
 Mongorestore
Explanation:
Answer: (a) Explanation: Mongodump is used for back ups in MongoDB.

```


```sh
30. Which of the following command queries the amount of storage used, the quantity of data contained in the database, object, collection, and index counters?
 mongostat
 mongotop
 dbStats
 serverStatus
Explanation:
Answer: (c) Explanation: dbStats queries the amount of storage used, the quantity of data contained in the database, object, collection, and index counters.
```


```sh
32. Which of the following monitoring tools can you install and configure to monitor a MongoDB cluster?
 Motop
 Gangila
 Nagios
 All of the above
Explanation:
Answer: (d) Explanation: Motop, Gangila, and Nagios can be installed to monitor a MongoDB cluster.

Motop
Realtime monitoring tool for several MongoDB servers. Shows current operations ordered by durations every second.

Ganglia 
a monitoring system that is easily scalable and allows to view a wide variety of system metrics of Linux servers and clusters (plus graphs) in real time.

Nagios 
One Open Source and a commercial version. The commercial version is Nagios XI. The open source version is more than enough for us. Nagios uses different strategies to monitor machines. The prominent one among them is NRPE ( Nagios Remote Plugin Executer ).

```



```sh
37. Which of the following are a supported authentication mechanism in MongoDB?
 Challenge and response mechanism (SCRAM-SHA-1)
 LDAP proxy authentication
 x509 certificate authentication
 All of the above
Explanation:
Answer: (d) Explanation: Challenge and response, LADP proxy authentication, and x509 certificate are supported authentication mechanisms in MongoDB.

In computer security, challenge–response authentication is a family of protocols in which one .... (RFC 6287); Salted Challenge Response Authentication Mechanism (SCRAM) (RFC 5802); ssh's challenge-response system based on RSA [1].

LDAP (Lightweight Directory Access Protocol) is a software protocol for enabling anyone to locate organizations, individuals, and other resources such as files and devices in a network, whether on the public Internet or on a corporate intranet.

In cryptography, X.509 is a standard defining the format of public key certificates. X.509 certificates are used in many Internet protocols, including TLS/SSL, which is the basis for HTTPS, the secure protocol for browsing the web.
```


```sh
38. Which of the following methods are supported in MongoDB for performing aggregation operations?
 Aggregate pipeline
 Map-reduce function
 Aggregate methods and commands
 All of the above
Explanation:
Answer: (d) Explanation: Aggregate pipeline, Map-reduce, and aggregate methods and commands are supported in MongoDB for performing aggregation operations.

Aggregation Pipeline Behavior
In MongoDB, the aggregate command operates on a single collection, logically passing the entire collection into the aggregation pipeline. To optimize the operation, wherever possible, use the following strategies to avoid scanning the entire collection.

```



```sh
42. Which of the following syntax is used for retrieving documents in MongoDB using Java code?
 DBCollection.find();
 DBCollection.findAll(query, update, options)
 DBCollection.findOne()
 DBCollection.find(); and DBCollection.findOne()
Explanation:
Answer: (d) Explanation: DBCollection.find(); and DBCollection.findOne() are used to retrieve documents in MongoDB using Java code.

```


```sh
43. Which of the following syntax is used for updating a collection in MongoDB using Java code?
 DBCollection.update();
 DBCollection.updateCollection(query, update, options)
 DBCollection.update(query, update, options)
 DBCollection.updateCollection();
Explanation:
Answer: (c) Explanation: DBCollection.update(query, update, options) is used for updating a collection in MongoDB using Java code.

```


```sh
44. Which among the following syntax is used to delete a collection in MongoDB using Java code?
 DBCollection.remove();
 DBCollection.remove(DBObject);
 DBCollection.removeCollection();
 DBCollection.deleteCollection();
Explanation:
Answer: (b) Explanation: DBCollection.remove(DBObject) is used to delete a collection in MongoDB using Java code.

```

```sh
48. Which of the following statements is correct about MongoDB?
 MongoDB uses JSON format to represent documents.
 MongoDB supports collection joins.
 MongoDB supports some of the SQL functions.
 MongoDB supports geospatial indexes.
Explanation:
Answer: (d) Explanation: MongoDB supports geospatial indexes.

When you create a geospatial index on legacy coordinate pairs, MongoDB computes geohash values for the coordinate pairs within the specified location range and then indexes the geohash values.

```

why d is wrong
```sh
49. Which of the following is a valid MongoDB JSON document?
 {}
 { "user_id"=1, "user_name"="Joe Sanders", "occupation"=["engineer","writer"] }
 { "user_id":1; "user_name":"Joe Sanders"; "occupation":["engineer","writer"] }
 { "user_id":1, "user_name":"Joe Sanders", "occupation":[ "occupation1":"engineer", "occupation2":"writer" ] }
Explanation:
Answer: (a) Explanation: {} represents a valid MongoDB JSON document.

b is not valid json ojbect, the correct one should be:
 { 	"user_id": 1, 	"user_name": "Joe Sanders",	"occupation": ["engineer", "writer"] }

d is not valid json object, the correct one should be:
 { 	"user_id": 1, 	"user_name": "Joe Sanders", 	"occupation": [{ "occupation1": "engineer" 	}, {"occupation2": "writer"	}] }
```


```sh
51. Consider collection posts which has the fields: _id, post_text, post_author, post_timestamp, post_tags etc. Which of the following query retrieves ONLY the key named post_text from the first document retrieved?
 db.posts.find({},{_id:0, post_text:1})
 db.posts.findOne({post_text:1})
 db.posts.finOne({},{post_text:1})
 db.posts.finOne({},{_id:0, post_text:1})
Explanation:
Answer: (d) Explanation: db.posts.finOne({},{_id:0, post_text:1}) retrieves ONLY the key named post_text from the first document retrieved.
```

what is cursor in mongo?
```sh
52. Which of the following statements is incorrect about the find and findOne operations in MongoDB?
 find() returns all the documents in a collection whereas findOne() retrieves only the first one.
 find() and findOne() returns cursors to the collection documents.
 findOne() returns the actual first document retrieved from a collection.
 find.limit(1) is not the same query as findOne().
Explanation:
Answer: (b) Explanation: find() and findOne() returns cursors to the collection documents    // it returns document

db.collection.findOne(query, projection)
Returns one document that satisfies the specified query criteria on the collection or view.


```


```sh
54. Which of the following verbosity mode is not supported by the MongoDB explain() method?
 queryPlanner
 executionStats
 allPlansExecution
 customExecutionStats
Explanation:
Answer: (d) Explanation: customExecutionStats is not supported by the MongoDB explain() method

```

```sh
56. Which of the following tags in a replica set configuration specify the operations to be read from the node with the least network latency?
 primaryPreferred
 secondaryPreferred
 nearest
 netLatency
Explanation:
Answer: (c) Explanation: nearest specifies the operations to be read from the node with the least network latency.

```


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


```sh
1. A collection in MongoDB is a group of:
 Related documents
 Databases
 Schema
 Rows

Explanation:
Answer: (a) Explanation: A collection in MongoDB is a group of related documents.
```

```sh

2. Select the correct query to find all the users whose age is greater than 18.
 db.users.find()
 db.users.find({age >18})
 db.users.find({age: {$gt : 18}})
 db.users.find({age: {$lt : 18}})
Explanation:
Answer: (c) Explanation: The db.users.find({age: {$gt : 18}}) query is used to find all the users whose age is greater than 18.
```

```sh

3. Select the correct query to isplay user age in the descending order.
 db.users.find().sort({age:1})
 db.users.find().limit()
 db.users.find()
 db.users.find().sort(age:-1)
Explanation:
Answer: (d) Explanation: The db.users.find().sort(age:-1) query is used to display user age in the descending order.
```

```sh

4. You want to return maximum 5 matching documents that will return with only the _id, name, and address fields. Which of the following queries will you use?
 db.users.find( { age: { $gt: 18 } }, { name: 1, address: 1 } ).limit(5)
 db.users.find( { age: { $gt: 18 } }, { name: 1, address: 1 } ).limit(15)
 db.users.find( { age: { $lt: 18 } }, { name: 1, address: 1 } ).limit(5)
 db.users.find( { age: { $lt: 18 } }, { name: 1, address: 1 } ).limit(15)
Explanation:
Answer: (a) Explanation: db.users.find( { age: { $gt: 18 } }, { name: 1, address: 1 } ).limit(5) will return 5 matching documents with only the _id, name, and address fields.
```

```sh
9. Which among the following is an example of compound index in MongoDB?
 db.inventory.createIndex( { type: 1, item: 1 } )
 db.inventory.createIndex( { item: 1 } )
 db.inventory.createIndex( { type:1 } )
 All of the above
Explanation:
Answer: (a) Explanation: An example of compound index in MongoDB is db.inventory.createIndex( { type: 1, item: 1 } )

```

```sh
10. Which of the following commands will you use to view the query plan of the given query?
 db.collection.explain()
 cursor.explain()
 db.explain()
 Both A & B
Explanation:
Answer: (d) Explanation: db.collection.explain() and cursor.explain() are used to view the query plan of the given query.

```

```sh
15. Which of the following statements is correct about an insert operation?
 All write operations in MongoDB are atomic at the database level.
 All write operations in MongoDB are atomic at the schema level.
 All write operations in MongoDB are atomic at the collection level.
 All write operations in MongoDB are atomic at the document level.
Explanation:
Answer: (d) Explanation: All write operations in MongoDB are atomic at the document level.

```

```sh

16. Which is the correct query to update multiple documents in the "users" collection?
 db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: true })
 db.users.save({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: true })
 db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: false})
 db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } })
Explanation:
Answer: (a) Explanation: db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: true }) updates multiple documents in the users" collection. "
```

```sh
17. Which among the following is the example of an upsert operation in MongoDB?
 db.users.upsert({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: true })
 db.users.save({ age: { $gt: 18 } },{ $set: { status: "A" } },{ multi: true })
 db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{upsert: false})
 db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{upsert: true})
Explanation:
Answer: (d) Explanation: db.users.update({ age: { $gt: 18 } },{ $set: { status: "A" } },{upsert: true}) is the example of an upsert operation in MongoDB.

```

```sh
18. What is the default write concern in MongoDB?
 Journaled
 Replica Acknowledged
 Acknowledged
 Unacknowledged
Explanation:
Answer: (d) Explanation: The default write concern in MongoDB is Unacknowledged.

```

```sh
20. What is the minimum and maximum size of oplog in 64-bit Linux system?
 1GB and 10 GB
 1GB and 50 GB
 10GB and 50GB
 2GB and 10GB
Explanation:
Answer: (b) Explanation: The minimum and maximum size of oplog in 64-bit Linux system is 1GB and 50 GB.

```

```sh
21. What is the name of default storage engine in MongoDB?
 WiredTiger
 MMAPV1
 MMAPV2
 MMAPV3
Explanation:
Answer: (b) Explanation: MMAPV1s the default storage engine in MongoDB.

```

```sh
23. Which of the following commands will you use to remove multiple documents whose type field value is "Book"?
 db.inventory.remove( { type : "Book" }, 1 )
 db.inventory.remove( { type : "Book" }, false )
 db.inventory.remove( { type : "Book" }, true )
 None of the above
Explanation:
Answer: (c) Explanation: The db.inventory.remove( { type : "Book" }, true ) command lets you remove multiple documents whose type field value is "Book".

```

```sh

27. Which among following data types is supported by BSON and not in JSON?
 Long
 String
 Binary data
 Boolean
Explanation:
Answer: (c) Explanation: Binary data type is supported by BSON and not in JSON.
```

```sh
29. Which of the following commands captures and returns the counts of database operations by type, such as insert, query, update, and delete?
 mongostat
 mongotop
 Column stat
 serverStatus
Explanation:
Answer: (a) Explanation: mongostat captures and returns the counts of database operations by type, such as insert, query, update, and delete.

```

```sh
31. Which among the following command returns an overview of your replica set's status?
 replSetGetStatus
 mongostat
 mongotop
 serverStatus
Explanation:
Answer: (a) Explanation: replSetGetStatus returns an overview of your replica set's status.

```

```sh
33. Which of the following statement is true about a capped collection?
 Capped collections guarantee preservation of insertion order
 Capped collections allow updates that fit the original document size that ensures a document does not change its location on disk
 Capped collections automatically remove the oldest documents in the collection without requiring any scripts or explicit remove operations
 All of the above
Explanation:
Answer: (d) Explanation: Capped collections guarantee preservation of insertion order, allow updates that fit the original document size, and automatically remove the oldest documents in the collection.

```

```sh
34. Which of the following syntax is used converting a non-capped collection to a capped collection?
 db.runCommand({"convertToCapped": "mycoll", size: 100000});
 db.runCommand({"convertingToCapped": "mycoll", size: 100000});
 db. convertToCapped ({size: 100000});
 None of the above
Explanation:
Answer: (a) Explanation: db.runCommand({"convertToCapped": "mycoll", size: 100000}); is used to convert a non-capped to a capped collection.

```

```sh

35. Which of the following is the recommended step to optimize query performance?
 Create Indexes to Support Queries
 Limit the Number of Query Results to Reduce Network Demand
 Use $hint to Select a Particular Index
 All of the above
Explanation:
Answer: (d) Explanation: To optimize query performance, create indexes, limit the number of queries, and use $hint.
```

```sh
36. What is Journaling in MongoDB?
 If mongod stops unexpectedly, the program can recover everything written to the journal
 A Write ahead log file
 All of the above
 None of the above
Explanation:
Answer: (c) Explanation: Journaling in MongoDB is if mongod stops unexpectedly, the program can recover everything written to the journal. It is also a Write ahead log file.

```

```sh
39. Which of following statements is true about aggregation pipeline MongoDB?
 An aggregation pipeline is a framework for performing aggregation tasks modeled on the concept of data processing pipelines.
 The pipeline provides efficient data aggregation using native operations within MongoDB and is the preferred method for data aggregation in MongoDB.
 A and B
 Aggregation pipeline is a collection of specific data aggregation operations that support a number of common data aggregation functions.
Explanation:
Answer: (c) Explanation: An aggregation pipeline performs aggregation tasks modeled on the concept of data processing pipelines and provides efficient data aggregation using native operations within MongoDB.

```

```sh
40. Which of the following statements is correct about MapReduce operations in MongoDB?
 In general, MapReduce operations have two phases: a map stage that processes each document and emits one or more objects for each input document, and reduce phase that combines the output of the map operation.
 MapReduce uses custom JavaScript functions to perform the map and reduce operations.
 MapReduce is less efficient and more complex than the aggregation pipeline.
 All of the above
Explanation:
Answer: (d) Explanation: All three statements are correct.

```

```sh
41. Which of the following statements is correct about mongoose in MongoDB?
 It is a PHP library to connect with MongoDB
 It is Java library to connect with MongoDB
 It is used for modeling your application data in node.js
 It is Python library to connect with MongoDB
Explanation:
Answer: (c) Explanation: Mongoose is used for modeling your application data in node.js.

```

```sh
45. Which among the following syntax is used to create a reference for "Test" collection in Java?
 db.getCollection("");
 db.getCollection("mycol")
 db.getTestCollection()
 db.getCollection("test");
Explanation:
Answer: (d) Explanation: The db.getCollection("test"); syntax is used to create a reference for "Test" collection in Java.

```

```sh

46. What kind of database is MongoDB?
 Graph Oriented
 Document Oriented
 Key Value Pair
 Column Based
Explanation:
Answer: (b) Explanation: MongoDB is a document oriented database.
```

```sh
47. A collection and a document in MongoDB is equivalent to which of the SQL concepts respectively?
 Table and Row
 Table and Column
 Column and Row
 Database and Table
Explanation:
Answer: (a) Explanation: A collection and a document in MongoDB is equivalent to table and row.

```

```sh
50. Which of the following statements is the correct explanation of MongoDB processes?
 mongod.exe is the shell process and mongo.exe is the actual database process.
 mongo.exe is the shell process and mongod.exe is the actual database process.
 mongos.exe is the MongoDB server process needed to run databases.
 mongodump.exe can be used to import database backup dumps.
Explanation:
Answer: (b) Explanation: mongo.exe is the shell process and mongod.exe is the actual database process.

```

```sh
53. In a collection containing 100 post documents, what purpose does the db.posts.find().skip(5).limit(5) command serve?
 Skip and limit nullify each other. Hence, it returns the first five documents.
 Skips the first five documents and returns the sixth document five times.
 Skips the first five documents and returns the next five.
 Limits the first five documents and then return them in the reverse order
Explanation:
Answer: (c) Explanation: The db.posts.find().skip(5).limit(5) command skips the first five documents and returns the next five.

```

```sh
55. In which default mode does the explain() command run?
 queryPlanner
 executionStats
 allPlansExecution
 customExecutionStats
Explanation:
Answer: (a) Explanation: The explain() command runs on the queryPlanner mode.

```

```sh
57. How long does it take for MongDB writes to be written to the journal?
 60 s
 100 ms
 1 s
 100 s
Explanation:
Answer: (b) Explanation: MongDB writes are written to the journal within 100 ms.

```

```sh
58. Which of the following statements is true about sharding?
 Sharding is enabled at the database level
 Creating a sharded key automatically creates an index on the collection using that key
 We cannot change a shard key directly/automatically once it is set up
 A sharded environment does not support sorting functionality since the documents lie on various mongod instances
Explanation:
Answer: (b) Explanation: Creating a sharded key automatically creates an index on the collection using that key.

```

```sh

59. What is the maximum size of a MongoDB document?
 2 MB
 16 MB
 12 MB
 There is no maximum size. It depends on the RAM.
Explanation:
Answer: (b) Explanation: The maximum size of a MongoDB document is 16 MB.
```

```sh
60. What is the maximum size of Index Key Limit and Number of Indexes per collection?
 64 bytes and 1024 indexes
 12 mega bytes and 64 indexes
 1024 bytes and 64 indexes
 1024 bytes and unlimited indexes
Explanation:
Answer: (c) Explanation: The maximum size of Index Key Limit and Number of Indexes per collection is 1024 bytes and 64 indexes.

```

```sh


```


## commands collections

https://dzone.com/articles/top-10-most-common-commands-for-beginners

https://stackoverflow.com/questions/30380751/importing-json-from-file-into-mongodb-using-mongoimport

## js emit

In node.js an event can be described simply as a string with a corresponding callback. An event can be "emitted" (or in other words, the corresponding callback be called) multiple times or you can choose to only listen for the first time it is emitted.

The on or addListener method (basically the subscription method) allows you to choose the event to watch for and the callback to be called. The emit method (the publish method), on the other hand, allows you to "emit" an event, which causes all callbacks registered to the event to 'fire', (get called).

