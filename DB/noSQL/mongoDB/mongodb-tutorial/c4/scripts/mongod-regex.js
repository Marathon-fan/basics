

db.getCollection('demobook').find({bookname:'EXTREME PREY, by John Sandford'})







db.getCollection('demobook').find({})

db.getCollection('demobook').find({bookname:/EXTREME/})

db.getCollection('demobook').find({bookname:/MILE/})

db.getCollection('demobook').find({bookname:/John/})

db.getCollection('demobook').find({bookname:/JOHN/i})

db.getCollection('demobook').find({bookname:/JOHN/})



//db.demobook.find( { bookname: { $regex: /JOHN SANDFORD/ ,$options: "i"  } } )





db.demobook.find( { bookname: { $regex: /JOHN SANDFORD/ ,$options: "i"  } } )

//not working

//db.demobook.find( { bookname: { $regex: /john sandford/ ,$options: "x"} } )



db.demobook.find( { bookname: { $regex: /JOHN/, $options: "i" } } )





db.demobook.find( { bookname: { $regex: 'John' } } )



db.demobook.find( { bookname: { $regex: 'JOHN', $options: "i" } } )



//db.demobook.find( { bookname: { $regex: '!~JOHN', $options: "i" } } )



db.demobook.find( { bookname: { $regex: 'John|GIRL' } } )



db.demobook.find( { bookname: { $regex: '[J]' } } )



db.demobook.find( { bookname: { $regex: '[O-P]' } } )



db.demobook.find( { bookname: { $regex: '[\^a-r'] } } )



//Starting with 

db.demobook.find( { bookname: { $regex: '^15' } } )

//has 15

db.demobook.find( { bookname: { $regex: '15' } } )



//ending with



db.demobook.find( { bookname: { $regex: 'McCarter$' } } )

//followed by 

db.demobook.find( { bookname: { $regex: 'McCar*' } } )

//Paula or Paul

db.demobook.find( { bookname: { $regex: '(Paul)+' } } )

// with digits

db.demobook.find( { bookname: { $regex: '[0-9]' } } )











db.demobook.find( { f_name: /P/ } )


Connect to Mongo Server
Create database
Create collection under that database
----CRUD---
Create Document   -- insert()
Read Document     -- find()
Update Document   -- update()
Delete Document   -- delete() / remove()


copy collection
copy document
export collection
drop collection
drop database
Disconnect from Server


    Index are the base for high performance find Queries.

    Without indexes mongodb queries through all the documents

    Index increases storage amount but completely reduces the query execution time.

    Indexes will affect insert and update operation speediness.

    Default _id Index
    MongoDB creates a unique index on the _id field during the creation of a collection.You can delete this.


    CoveredQueries -> projection of a query include only the indexed fields

    There are around 5 types of indexes in mongodb

      1. Single field index 
      2. Compound index  -- Multiple field indexes
      3. MultiKey index  -- indexig arrays of values
      4. Text indexes    -- for text search
      5. GeoSpatial indexes



  getindexes()    -- Lists all the indexes
  ensureindex() / createindex() --- create new index
  dropindex() / dropindexes()   ---  remove index 
  reindex() --- Rebuild or modify indexes

  What I love is Partial Indexes
  