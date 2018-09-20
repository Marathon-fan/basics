

install mongo docker
```sh
docker-compose up -d
docker ps
```

import json data to docker
```sh
docker cp jsonData/sampleCollection.json dbsetup_mongodb_1:/sampleDb.json
docker cp jsonData/students.json dbsetup_mongodb_1:/students.json
docker cp jsonData/students_2.json dbsetup_mongodb_1:/students_2.json
docker cp jsonData/orders.json dbsetup_mongodb_1:/orders.json
docker cp jsonData/restaurants.json dbsetup_mongodb_1:/restaurants.json

docker exec -it dbsetup_mongodb_1 /bin/bash

mongoimport -d testdb -c sampleCollection --jsonArray sampleDb.json
mongoimport -d testdb -c sampleCollection --jsonArray students.json
mongoimport -d testdb -c sampleCollection2 --jsonArray students_2.json
mongoimport -d testdb -c restaurants --jsonArray restaurants.json

# tradeLedger is the db name, sampleCollection is the collection name

mongo
show dbs
use tradeLedger
show tables
use sampleCollection
db.sampleCollection.createIndex( { "id": 1})
db.sampleCollection.find().pretty()

db.sampleCollection.find({language:"Java"}, { _id: 0 })
db.sampleCollection.find({isJvmBased:"true"}, { _id: 0 })

db.sampleCollection.find({language:"Java", isJvmBased:"true"}, { _id: 0 })

db.sampleCollection.find({id:{$gte: 2, $lte: 4}}, { _id: 0 })

```


# commands collections

https://dzone.com/articles/top-10-most-common-commands-for-beginners

https://stackoverflow.com/questions/30380751/importing-json-from-file-into-mongodb-using-mongoimport

# mongo tutorial   

```
db.testdb.insert({"name":"Barry Bonds"})

db.testdb.insert([{"name":"Babe Ruth"}, {"name":"Hank Aaron"}])

db.testdb.find().pretty()

db.testdb.remove({"name":"Babe Ruth"})

db.testdb.update({"name":"Hank Aaron"}, {$set:{"name":"Hank Louis Aaron", "Home Runs":755}})

db.testdb.insert([{"name":"Babe Ruth", "Hall of Fame":"Inductee"},
{"name":"Ty Cobb", "Hall of Fame":"Inductee"},
{"name":"Walter Johnson", "Hall of Fame":"INductee"},
{"name":"Christy Mathewson", "Hall Of Fame":"Inductee"},
{"name":"Honus Wagner", "Hall of Fame":"Inductee"}])

db.testdb.update({"Hall Of Fame":"Inductee"}, {$set:{"Hall Of Fame":"Inducted in 1936"}}, {multi:true})
db.testdb.update({"Hall of Fame":"Inductee"}, {$set:{"Hall of Fame":"Inducted in 1936"}}, {multi:true})

```

