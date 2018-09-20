

# map, reduce, finalize, group


## 

```sh
var students = [
{name: "Dale Cooper", class: "Calculus", tests:[30,28,45]},
{name: "Harry T", class: "Geomerty", tests:[28,26,44]},
{name: "Shelly J", class: "Calculus", tests:[27,26,43]},
{name: "Bobby B", class: "College Algebra", tests:[20,18,35]},
{name: "Nonna H", class: "College Algebra", tests:[22,26,44]},
{name: "James H", class: "Calculus", tests:[20,20,38]},
{name: "Lucy Moran", class: "College Algebra", tests:[26,24,40]},
{name: "Tommy Hill", class: "College Algebra", tests:[30,29,46]},
{name: "Andy B", class: "Geomerty", tests:[20,21,38]}
];

> var studNames = [];
> 
> 
> 
> for (i = 0; i < students.length; i++) {
... studNames.push(students[i].name);
... }

9

# map is a callback function
var studInfo = students.map(
	function(x){ return x.name + ' is in '+ x.class; }
);

# reduce receives each object and iterate among them
var tests = [
	{score:30},
	{score:28},
	{score:45}
]
> var testSum = tests.reduce(function(sum, tests){
... return sum + tests.score;},0)
> 
> 
> testSum
103


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

db.dropDatabase()

db.classes.insert({
	class: "Philosophy 101",
	startDate: new Date(2016, 1, 10),
	students: [
	{fName: "Dale", lName:"Cooper", age:42},
	{fName: "Lucy", lName:"Moran", age:35},
	{fName: "Tommy", lName:"Hill", age:44}
	],
	cost:1600,
	professor:"Paul S",
	topics: "Socrates, Plato, Aristotle, Francis B",
	book: 
	{
		isbn: "1133612105",
		title: "Philosophy: A text with Readings",
		Price: 165.42
	}
})

var mapFunc = function(){
	for (i = 0; i < this.students.length; i++) {
		var student = this.students[i];
		emit(student.fName + " " + student.lName, 1);
	}
};


var reduceFunc = function(student, value) {
	count = 0;
	for (i = 0; i < values.length; i++) {
		count += values[i];
	}
	return count;
};

db.classes.mapReduce(
	mapFunc,
	reduceFunc,
	{out: "map_ex"}
	)

db.map_ex.find()

```



```sh
# find
db.testdb.find().pretty()

db.testdb.find({"name":"Hank Louis Aaron"})
```



## commands collections

https://dzone.com/articles/top-10-most-common-commands-for-beginners

https://stackoverflow.com/questions/30380751/importing-json-from-file-into-mongodb-using-mongoimport

## js emit

In node.js an event can be described simply as a string with a corresponding callback. An event can be "emitted" (or in other words, the corresponding callback be called) multiple times or you can choose to only listen for the first time it is emitted.

The on or addListener method (basically the subscription method) allows you to choose the event to watch for and the callback to be called. The emit method (the publish method), on the other hand, allows you to "emit" an event, which causes all callbacks registered to the event to 'fire', (get called).

