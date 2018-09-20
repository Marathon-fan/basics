

# indexing and aggregation  


mongo shell supports writing javascript directly

## index   

**use ensureIndex to create index**

**use getIndexes() to see all indexes**

**use dropIndex("indexName") to drop all indexes**


```sh
for (i = 0; i < 500000; i++) {
	db.testdb.insert(
		{ "account":"account" + 1,
          "age": Math.floor(Math.random() * 90)
	    }
	)
}

db.testdb.find({"age":50}).explain("executionStats")

# create a compound index
db.testdb.ensureIndex({"age":1, "account":1})

db.testdb.find({"age":50}).explain("executionStats")
# then we see that "totalDocsExamined" is much less than previous. like 5720 compared to 500000

db.testdb.getIn  

db.testdb.getIndexes()  

db.testdb.dropIndex("age_1_account_1")
db.testdb.find({"account":"account100"}).explain("executionStats")
# then we can see that we need to search "totalDocsExamined" : 500000 docs to get the result

# create unique index
db.testdb.ensureIndex({"account":1}, {"unique":true, "dropDups": true})
db.testdb.find({"account":"account100"}).explain("executionStats")

# 
db.testdb.ensureIndex({"account":1}, {"unique":true, "sparse": true})

# 

```

## aggregations   
```sh
# drop the db 
# db.testdb.drop()


# insert new data
db.testdb.insert([{"recipe":"Chipotle Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2014, 12,27)}])
db.testdb.insert([{"recipe":"Tomato Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2015, 12,27)}])
db.testdb.insert([{"recipe":"Tomatillo Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2014, 12,27)}])
db.testdb.insert([{"recipe":"Barbecue Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2012, 12,27)}])
db.testdb.insert([{"recipe":"Orange Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2013, 12,27)}])
db.testdb.insert([{"recipe":"brocolli Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2011, 12,27)}])
db.testdb.insert([{"recipe":"Apple Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2014, 12,27)}])
db.testdb.insert([{"recipe":"Rice Sofrita", "author":"Sally Smith", "likes":205, "dislikes": 2, "type":"latin", "datePosted": new Date(2014, 11,27)}])


# aggregate
db.testdb.aggregate([{$group:{_id:"$author", num_recipes:{$sum:1}}}])

db.testdb.aggregate([{$group:{_id:"$author", num_recipes:{$sum:1}}}, {$sort:{num_recipes: -1}}])

db.testdb.aggregate([{$group:{_id:"$author", num_recipes:{$sum: "$likes"}}}, {$sort:{num_likes: -1}}])

db.testdb.aggregate([{$group:{_id:"$author", num_recipes:{$avg: "$likes"}}}, {$sort:{num_likes: -1}}])

db.testdb.aggregate([{$group:{_id:"$author", num_likes:{$min: "$likes"}}}, {$sort:{num_likes: -1}}])

db.testdb.aggregate([{$group:{_id:"$author", num_likes:{$max: "$likes"}}}, {$sort:{num_likes: -1}}, {$limit : 3}])

# use match to filter
# Expression 1 to a document will return 1, since the expression will apply to each document in the group, so {$sum: 1} will return the amount of documents in the group
db.testdb.aggregate([{$match: {"type":"latin"}}, {$group: {_id: "$author", num_recipes:{$sum:1}}}])


# project # like creating a view
# Passes along the documents with the requested fields to the next stage in the pipeline. The specified fields can be existing fields from the input documents or newly computed fields.
# 
db.testdb.aggregate({"$project":{"Recipe":"$recipe", "_id":0}})

db.testdb.aggregate({"$project":{"Strong Impressions":{"$add":["$likes", "$dislikes"]}, "_id":0}})

db.testdb.aggregate({"$project":{"Strong Impressions":{"$subtract":["$likes", "$dislikes"]}, "_id":0}})

db.testdb.aggregate({"$project":{"Strong Impressions":{"$multiply":["$likes", "$dislikes"]}, "_id":0}})

db.testdb.aggregate({"$project":{"Strong Impressions":{"$divide":["$likes", "$dislikes"]}, "_id":0}})

db.testdb.aggregate({"$project":{"Month Posted":{"$month":"$datePosted"}, "recipe":1, "_id":0}})

# project and string operation
db.testdb.aggregate({"$project":{"Type":{"$substr":["$type", 0, 3]}, "_id":0}})

db.testdb.aggregate({"$project":{"Title":{"$concat":[{$toUpper: "$recipe"}, " by ", "author"]}, "_id":0}})

db.testdb.aggregate({
	"$project": {
	"Score": {
		"$cond" : {if : {$gte:["$likes", 200]},
		then : "Great", else : "Ok"}
	}, "recipe": 1, "_id":0	}})


db.testdb.aggregate({
	"$project": {
	"Compare to 200": {
		$cmp : ["$likes", 200]
	}, "recipe":1, "_id":0}})


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

