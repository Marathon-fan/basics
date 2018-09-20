
# chapter1   

mongodb is a document database
```
a document is a JSON content
```

```json
{
	song: 'xxx',
	artist: 'Tayler Swift'
}
```

in SQL databases, we save text content in structured tables

in mongoDB, we save structured JSON

Mongodb 
```sh
server -> db -> collections -> documents
```

SQL databases
```sh
server -> databases -> schema -> tables -> sql queries
```


MongoDB uses BSON [Binary form of JSON] to save data under the hood. Is this True?   true



MongoDB supports multiple storage engines:
```
WiredTiger Storage Engine (including support for Encryption at Rest)
In-Memory Storage Engine
MMAPv1 Storage Engine (Deprecated in MongoDB 4.0)
```
//////////////////////////////////////////////////////////////////////


7 things 

```
1 
a good client


2
_id field: auto-generated unique id as a document(json) identifier
ObjectId values consist of 12 bytes, where the first four bytes are a timestamp that reflect the ObjectId’s creation. Specifically:
a 4-byte value representing the seconds since the Unix epoch,
a 5-byte random value, and
a 3-byte counter, starting with a random value.


3 JSON & CRUD & SQL
3/7 learn about JSON+CRUD+SQLmapping

4 learn about the Manual 

5 aggregation
GridFS, Aggregation, REplication, Sharding
Aggregation pipeline

6 GridFS

7 the basic small things
Embedded documents or related documents

8 data modeling 

9 index

10 text search, transactions   

11 batch operation


```



//////////////////////////////////////////////////////////////////////

two primary requirements for the mongoDB Design Team

1 it's for Analysis OLAP not for Transaction OLTP

2 it has to be Modern



//////////////////////////////////////////////////////////////////////

| MySQL | MongoDB |
| --- | --- |
| ACID Transactions | ACID Transactions |
| Table | Collection|
| Row | Document|
| Column | Field|
| Secondary Index | Secondary Index|
| JOINs | Embedded documents, $lookup & $graphLookup|
| GROUP_BY | Aggregation Pipeline|

	               

//////////////////////////////////////////////////////////////////////
	               
1 SchemaLess[Document based]
```
1 needs powerful language support(Javascript)
2 need unique identifier for every document
3 full text search support

```       

```
1 handle lots of Data -> Horizontal Scalable -> Sharding
2 Has to Integrate with Big Data Systems and BI platforms -> Connectors
3 Administration must be easy -> JS capable Shell
```
	
```
1 support Mapreduce -> Aggregation pipeline
2 support for large file formats -> GridFS      # support blob, etc

```

has to be Modern
```
1 javascript support, Regex support, Time based Data, JSON-BSON data format
Easy backup and restore

2 Cloud support 
3 Driver support for most widely modern languages

```

//////////////////////////////////////////////////////////////////////	

