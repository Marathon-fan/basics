# SQL


## join .... on

```
There are different types of joins available in SQL:

INNER JOIN: returns rows when there is a match in both tables.

LEFT JOIN: returns all rows from the left table, even if there are no matches in the right table.

RIGHT JOIN: returns all rows from the right table, even if there are no matches in the left table.

FULL JOIN: It combines the results of both left and right outer joins.

The joined table will contain all records from both the tables and fill in NULLs for missing matches on either side.

SELF JOIN: is used to join a table to itself as if the table were two tables, temporarily renaming at least one table in the SQL statement.

CARTESIAN JOIN: returns the Cartesian product of the sets of records from the two or more joined tables.
```

```SQL
175. Combine Two Tables
https://leetcode.com/problems/combine-two-tables/description/

select t1.FirstName, t1.LastName, t2.City, t2.State
from Person as t1 left join Address as t2
on t1.PersonId = t2.PersonId


```


## max    

```SQL
176. Second Highest Salary
https://leetcode.com/problems/second-highest-salary/description/

select max(salary) as SecondHighestSalary from Employee 
where salary < (select max(Salary) from Employee)

```

## delete duplicate   

```SQL
196. Delete Duplicate Emails
https://leetcode.com/problems/delete-duplicate-emails/description/

delete p1
from Person p1, Person p2
where p1.Email = p2.Email and p1.id > p2.id


```


## Distinct    

```
182. Duplicate Emails
https://leetcode.com/problems/duplicate-emails/description/

select Distinct(p1.Email)
from
Person p1, Person p2
where p1.Email = p2.Email and p1.Id != P2.Id
```




## TO_DAYS        


```SQL
197. Rising Temperature
https://leetcode.com/problems/rising-temperature/description/

select w2.Id
from 
Weather w1, Weather w2
where TO_DAYS(w2.RecordDate) = TO_DAYS(w1.RecordDate)  + 1 and w2.Temperature > w1.Temperature 


```
