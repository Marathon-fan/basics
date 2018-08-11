

```
http://tech.marksblogg.com/designing-data-intensive-applications-review.html
```

A Review of "Designing Data-Intensive Applications"

I bought an electronic early release of the book Designing Data-Intensive Applications by Martin Kleppmann in March of 2016. At the time, 9 of the 12 chapters of the book were populated with content. By November all 12 chapters were populated and the book spanned 561 pages cover-to-cover in PDF format. The book is due to be published next month so I wanted to take an opportunity to give some insights around the book that I've enjoyed having in my possession for the past year.

Martin Kleppmann worked as a Senior Software Engineer at LinkedIn for two and a half years and is a committer to open source projects such as Apache Avro and Apache Samza. He comes across in the book as someone whom is very well versed in the architectures and algorithms used in many databases.

Early chapters do a very good job of concisely covering the fundamentals of data storage and retrieval. The book makes scant use of algebraic equations and opts to use the power of the English language to covey teachings. References are given regularly with an average of 68 per chapter and that number growing as the chapters progress.

I think the data community as a whole will enjoy this book but there are three types of readers in particular I think would benefit the most. The first is any developer who sees databases as black boxes and/or feels they're playing catch-up with performance in their data layer all the time. The second is anyone who feels overwhelmed by the variety of data systems available as they might come to terms with the themes shared between offerings. The third is anyone that believes a single data system offering blankets most use cases as this book will give great technical explanations justifying the many offerings available today and give good reason for their use in ensembles.

The 12 chapters of the book are broken up into three parts: Part I. "Foundations of Data Systems", Part II. "Distributed Data" and Part III. "Derived Data". In this blog post I'll walk through the chapters giving an overview of what I consider to be highlights as well as some of my observations and feedback.

Part I. Foundations of Data Systems
The first chapter discusses reliable, scalable and maintainable applications. It discusses how CPUs are rarely the primary data-related bottleneck these days and how the amounts of data, the complexity of their structures and the speed at which they change are much more at the forefront of challenges.

Martin discusses how different data stores, such as databases, caches, search indices, streaming engines and batch processors are built to meet different needs. Seeing them as an ensemble rather than overlapping in terms of functionality will go a long way to getting the most out of them. Martin discusses how APIs are often a front end to multiple data systems and uses an example of the life cycle of a tweet on Twitter to explain how different systems can work together.

Emphasis is given for engineers to value reliability, scalability and maintainability in the systems they construct.

In a section of describing performance the concepts of percentiles, outliers, latency and response times are introduced to help quantify performance. These are key to defining any sort of service level agreements (SLA) you may have with the owner and/or users of a service.

Finally, a section on operability goes into describing how systems can be built around simplicity, allow for evolution and allow for operations teams to keep the systems running smoothly.

The second chapter discusses various approaches to modelling data with examples around relational, denormalised, document and graph structures given.

Approaches to interacting with data are discussed with SQL and MapReduce receiving the most attention. I found the comparison between declarative (asking what you want) and imperative systems (asking how you want it done) a great explanation into why SQL has been so resilient for all these decades as declarative systems can be easier to optimise for.

In the final part of chapter two there is a discussion on how ORMs aim to address the impedance mismatch between object-oriented programming languages and data stored in relational tables.

Chapter 3 discusses storage and retrieval of data and I think this is probably one of the best chapters for helping to explain how many databases work. Big-O notation is introduced to explain computational complexity of algorithms. Append-only systems, b-trees, bloom filters, hash maps, sorted string tables, log-structured merge-trees are all brought up. Storage system implementation details such as how to handle deleting records, crash recovery, partially-written records and concurrency control are covered as well. It's also explained how the above play a role in systems such as Google's Bigtable, HBase, Cassandra and Elasticsearch to name a few.

There is a fun section where the world's "simplest" database, a key-value store, is implemented using two functions in bash.

Page 88 onward does a good job of contrasting OLTP and OLAP systems and uses this as a segue into data warehousing. Data cubes, ETL, column-oriented storage, star- and snowflake schemas, fact and dimension tables, sort orderings and aggregation are all discussed. Teradata, Vertica, SAP HANA and ParAccel, Redshift and Hadoop are mentioned as systems incorporating these concepts into their offerings.

The fourth chapter discusses data encoding techniques and how data can be stored so that its structure can evolve. Martin is a contributor to Apache Avro, a file format project started by the creator of Hadoop, Doug Cutting. Martin does an amazing job of explaining how Avro files have "reader's" and "writer's" schemas. The writer's schema can add and remove columns from the table and the reader's schema will do it's best to match the field names it knows about with the version of the schema the writer was using. Avro files will carry around schemas with their data so that previous as well as current versions of the reader's schema should be able to consume data found within the file.

The chapter also goes into detail around JSON, MessagePack, XML, Protocol Buffers, Thrift and distinguishing between data types or lack thereof in the case of some serialisation systems.

Modes of data flow also get an introduction in chapter four. REST, RPC, microservices, streams and message brokers are explained and implementations such as TIBCO, IBM WebSphere, webMethods, RabbitMQ, ActiveMQ, HornetQ, NATS and Kafka are referenced.

Part II. Distributed Data
Chapter 5 starts the second section of the book where the topics discussed go a long way to explaining what happens when multiple machines are involved in the storage and retrieval of data. Single-leader, multi-leader and leaderless replication, synchronous and asynchronous replication, fault tolerance, node outages, leadership elections, replication logs, consistency, monotonic reads, consistent prefix reads and replication lag are all discussed at length in chapter 5.

Chapter 6 is focused on the topic of partitioning data in order to achieve scalability. Approaches on handling skewed workloads, relieving hot spots and rebalancing partitions are covered over 22 pages in this chapter. Martin does well to clarify that the partitions he's referring to are called shards in MongoDB, Elasticsearch and SolrCloud, regions in HBase, tablets in BigTable, vnodes in Cassandra and Riak and vBuckets in Couchbase.

Chapter 7 discusses transactions. The chapter starts out discussing the "harsh reality" of data systems where many things can and do go wrong. Transactions have been a common mechanism for handling unexpected situations for decades in the data world. They exist in order to simplify the programming model for developers working with databases. A large number of concepts are discussed in this chapter included ACID, weak isolation levels, dirty reads and writes, materialising conflicts, locks and MVCC.

I enjoyed Martin's criticism against the statement that transactions are essential requirements for "serious applications" with "valuable data" and that transactions are the antithesis of scalability.

Chapter 8 discusses the sorts of troubles that can be had with distributed systems. Network partitions, unreliable clocks, process pauses and mitigating garbage collection issues are discussed. From this chapter forward the reference count really begins to increase.

Chapter 9 discusses consistency and consensus. The CAP theorem, linearisability, serialisability, quorums, ordering guarantees, coordinator failure, exactly-once message processing among many other topics are discussed. This chapter had the highest number of references at 109.

Part III. Derived Data
Chapter 10, which is focused on batch processing, really felt like the "Home of Hadoop" chapter. MapReduce and distributed file systems are discussed at length as are data flow engines such as Spark, Tez and Flink.

Batch processing can be seen as an "Offline" task. "Online" tasks, like querying a database, fetching a web page, etc... are tasks where the user is waiting for the result. "Offline" tasks are ones where often the user will request the task, or it will be triggered from a pre-defined schedule and its results will be stored at a later point in time in a pre-determined location.

Martin does a good job of contrasting batch processing against stream processing with concise analogies in this chapter as well. I personally see these two types systems as complimenting one another rather than overlapping so it's good to see someone agrees with me in print.

In the Hadoop world a lot of different pieces of software are decoupled from one another. You can mix and match file storage formats, storage systems and data flow engines. This means you can improve components of the system without needing to completely change everything to do so. Diversity of storage and processing models discussions in this chapter go a long way to explain this key selling feature of the Hadoop ecosystem's ability to evolve.

Chapter 11 discusses stream processing. Producers, consumers, brokers, logs, offsets, topics, partitions, replaying, immutability, windowing methods, joins and fault tolerance all make an appearance.

I think a chapter like this could use a book of its own with a streaming engine like Kafka used as an example implementation. Streams are like highways of moving traffic, relational databases are like parking lots full of cars. Developers coming from a relational database background have a lot to get up to speed with when working with streaming engines. There are a lot of concepts that exist within streaming that don't have good parallels in relational databases. Chapter 11 does well to go over the fundamentals but I feel the selling points of streams are lost.

If you can imagine have 20 microservices needing to talk to one another, instead of each having to interface with one another's API they simply feed and read to and from topics of interest and it greatly reduces the amount of bespoke API code and documentation needed.

The ways in which systems like Kafka can perform extremely well out of the box can be difficult to orchestrate in a traditional relational database. Being able to serialise your writes to disk means you'll reach its peak performance of the underlying disk drives a lot faster. If all of your consumers are reading from the most recent messages in the topics they're subscribed to then they're much more likely to take advantage of the disk cache and minimise random I/O.

Chapter 12: The Future of Data Systems

Chapter 12 isn't like any other chapter in this book. The first 11 chapters are based on technical facts whereas in this chapter Martin makes predictions on the future of data systems as well as touching on ethical topics around data.

The first topic I want to highlight is the unbundling of database components. This is something that's seen in the Hadoop ecosystem and is something that will hopefully happen more with offerings in the future.

The second topic is migration of data between systems becoming as easy as the following would go a long way to make data systems act in a more unix pipe-like fashion.

```
$ mysql | elasticsearch
```
The third topic is on databases that check themselves for failure and auto-heal. Blockchains with their self-verifying datasets do go some way to begin to address this.

But the topic that hit me the hardest was the discussion of "victims of algorithms". In a data-driven world the systems we build could be put together with the greatest intentions only to later be used for evil. This had me thinking about people with unexplainable credit scores prevented from accessing financial services and people predicted to be more likely to succumb to illness due to family history, ethnic background and/or other data points being denied health insurance. Models could very well make life hell for certain people for unexplainable reasons in the future.

Also, people are rarely able to control when and how their data is being accessed and used. Companies are very opaque about what sorts of jobs they're running on their Hadoop clusters and the deepnets they're developing on their GPU clusters. Rarely is there a chance to correct an assumption an organisation is making about you. Martin mentions how "reads are events too"; being able to audit organisations that use our data to see how they've used it would be empowering to say the least.

Platform engineers, data scientists and anyone building models and deepnets is in a unique position to do all they can to ensure their skills are used to help humanity rather than harm it.

Thank you for taking the time to read this post. I offer consulting, architecture and hands-on development services to clients in North America & Europe. If you'd like to discuss how my offerings can help your business please contact me via LinkedIn.
