
# setup

install mongo docker
```sh
docker-compose up -d
docker ps
```


import json data to docker
```sh
docker cp jsonData/sampleCollection.json db_mongodb_1:/sampleDb.json

docker exec -it db_mongodb_1 /bin/bash
or 
docker exec -it nosql_mongodb_1 /bin/bash


mongoimport -d tradeLedger -c sampleCollection --jsonArray sampleDb.json
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




# basic CRUD, filter, skip, limit, ...   


```sh
# insert
db.testdb.insert({"name":"Barry Bonds"})

db.testdb.insert([{"name":"Babe Ruth"}, {"name":"Hank Aaron"}])


db.testdb.insert([{"name":"Babe Ruth", "Hall of Fame":"Inductee"},
{"name":"Ty Cobb", "Hall of Fame":"Inductee"},
{"name":"Walter Johnson", "Hall of Fame":"INductee"},
{"name":"Christy Mathewson", "Hall of Fame":"Inductee"},
{"name":"Honus Wagner", "Hall of Fame":"Inductee"}])

# delete
db.testdb.remove({"name":"Babe Ruth"})




# update $set
db.testdb.update({"name":"Hank Aaron"}, {$set:{"name":"Hank Louis Aaron", "Home Runs":755}})

db.testdb.update({"Hall of Fame":"Inductee"}, {$set:{"Hall of Fame":"Inducted in 1936"}}, {multi:true})

# update $inc
db.testdb.find({"name":"Hank Louis Aaron"})
db.testdb.update({"name":"Hank Louis Aaron"}, {"$inc":{"Home Runs":1}})
db.testdb.find({"name":"Hank Louis Aaron"})
db.testdb.update({"name":"Hank Louis Aaron"}, {"$inc":{"Home Runs":-1}})
db.testdb.find({"name":"Hank Louis Aaron"})

# update $mul
db.testdb.update({"name":"Hank Louis Aaron"}, {"$mul":{"Home Runs":1.04}})
db.testdb.find({"name":"Hank Louis Aaron"})

# update $push
 db.testdb.update({"name":"Barry Bonds"},
 {"$push":{"Records":
{"Single Season HRs":73,
"HRs Career":762,
"Walks":232}}})

db.testdb.find({"name":"Barry Bonds"})

# slice -5 means the last 5 elements
db.testdb.update({"name":"Barry Bonds"},
... {"$push":{"Best Home Run Years":{"$each":
... [45,45,46,46,49,73],
... "$slice":-5}}})

# $addToSet if exists, then don't add. Else, add it to set
db.testdb.update({"name":"Barry Bonds"},  {"$addToSet":{"Best Home Run Years":47}});

```

```sh
# update and pop     
# pop the last element out
db.testdb.update({"name":"Barry Bonds"}, {"$pop":{"Best Home Run Years": 1}})

db.testdb.find({"name":"Barry Bonds"}).pretty()
# pop the first element out
db.testdb.update({"name":"Barry Bonds"}, {"$pop":{"Best Home Run Years": -1}})

```

```sh
# update and pull     
# remove an element
db.testdb.update({"name":"Barry Bonds"}, {"$pull":{"Best Home Run Years": 73}})

db.testdb.find({"name":"Barry Bonds"}).pretty()

```

```sh
# Date
db.testdb.insert([
	{"name":"Dale Cooper", "dob":new Date(1959, 2, 22), "tests":[10,9,9], "contact info":{"email":"th@aol.com", "phone":"792-223-1115"}},
	{"name":"Andy Brennan", "dob":new Date(1960, 12, 27), "tests":[7,8,8], "contact info":{"email":"ab@aol.com", "phone":"792-223-8902"}}
	])

# in the following line,  {"name":1, "dob": 1, "_id":0} is like a filter
# means that return name, dob, don't return _id
db.testdb.find({"name":"Dale Cooper"}, {"name":1, "dob": 1, "_id":0}).pretty()
```

```sh
# $gte,  $lte
db.testdb.find({"gpa":{"$gte":3.0, "$lte":"3.5"}}, {"name":1, "gpa":1, "_id":0})

```

```sh
# $gte,  $lte
year1969 = new Date("01/01/1969")
db.testdb.find({"dob":{$gt:year1969}}, {"name":1, "dob":1 ,"_id":0}

# $ne    not equal to
# the following cmd finds guys who are not M, and who have the status of student
db.testdb.find({"sex":{"$ne":"M"}, "status":"student"}, {"name": 1, "_id":0})

# $in
db.testdb.find({"gpa":{"$in":[3.4, 3,5, 3,6, 3,7]}})

# $nin   
# $nin means not in
db.testdb.find({"gpa":{"$nin":[3.4, 3,5, 3,6, 3,7]}})

# $or
# find students either are drop, or with gpa $lt 3.0
db.testdb.find({"$or":
	[{"status":"dropout"},
	 {"gpa":{"$lt": 3.0}}
	]
})

# $not
# find who's gpa is not $gt 3.0
db.testdb.find({"gpa":{$not: {$gt:3.0}}
})

db.testdb.find({"gpa":{$not: {$gt:3.0}}
}).limit(3)


db.testdb.find({"gpa":{$not: {$gt:3.0}}}, {"name":1, "_id": 0}).skip(3).limit(3)

db.testdb.find({"gpa":{$not: {$gt:3.0}}}, {"name":1, "_id": 0}).sort({"name":1})



# One could understand both by the following simple explanation. Paging results can be accomplished via the limit and skip cursor methods. To get the second and third heaviest unicorn, we could do:

db.unicorns.find()
.sort({weight: -1})
.limit(2)
.skip(1)

# regular expression
db.testdb.find({"name":/^D.*$/})  # find the guys who's name starts with D

db.testdb.find({"tests":0},{"name":1, "_id":0})

db.testdb.find({"tests":{$all :[0, 10]}}, {"name":1, "_id": 0})

db.testdb.update({"name":"Dale Cooper"}, {"$push":{"tests": 9}})

# $size
# find the guy whose tests array has size of 4
db.testdb.find({"tests":{"$size":4}}, {"name":1, "_id": 0}) 

# slice filter     show the first 2 results of tests array   
db.testdb.find({"name": "Dale Cooper"}, {"tests":{"$slice":2}}) 

# slice filter     show the last 2 results of tests array   
db.testdb.find({"name": "Dale Cooper"}, {"tests":{"$slice":-2}}) 

# slice filter     show the  2 results of tests array  which start with index 1 
db.testdb.find({"name": "Dale Cooper"}, {"tests":{"$slice": [1,2]}}) 

# filter     
db.testdb.find({"name":"Lucy Moran"}, {"name": 1, "contact info.email": 1, "_id": 0})

# query
db.testdb.find({"contact info.phone": "792-223-1115"})

```

```sh
# drop
# delete the collection
db.testdb.drop()
db.testdb.find()
```

```sh
db.testdb.insert([
	])
```


```sh
# find
db.testdb.find().pretty()

db.testdb.find({"name":"Hank Louis Aaron"})
```



## commands collections

https://dzone.com/articles/top-10-most-common-commands-for-beginners

https://stackoverflow.com/questions/30380751/importing-json-from-file-into-mongodb-using-mongoimport

