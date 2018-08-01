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

## select from two tables   

```SQL
SELECT E1.Name as Employee
FROM Employee AS E1, Employee AS E2
WHERE E1.Salary > E2.Salary and E1.ManagerId = E2.ID
```

## select and order by   
select * from cinema
where id % 2 = 1 and description != 'boring'
order by rating desc;



## Distinct    

```SQL
182. Duplicate Emails
https://leetcode.com/problems/duplicate-emails/description/

select Distinct(p1.Email)
from
Person p1, Person p2
where p1.Email = p2.Email and p1.Id != P2.Id
```

## distinct and in

```SQL

https://leetcode.com/problems/customers-who-never-order/description/

select Name as Customers from Customers where Id NOT in
(select distinct(CustomerId) from Orders)

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

## CREATE OR REPLACE VIEW   

```
CREATE OR REPLACE VIEW xxx_view AS
SELECT XX AS XX1,
       XX AS XX2,
FROM XXXX 
WHERE (XXX);        

```

## CASE   

```SQL
SELECT player_name,
       year,
       CASE WHEN year = 'SR' 
            THEN 'yes'
            ELSE NULL 
       END AS is_a_senior
FROM benn.college_football_players playerTable

```      

```SQL
SELECT player_name,
       weight,
       CASE WHEN year > 1999 THEN 'over 1999'
            WHEN year > 1995 THEN '1996-1999'
            ELSE '1995 or under' 
       END AS year_group
  FROM benn.college_football_players playerTable
```

```SQL

CREATE
    OR REPLACE VIEW bank_view AS

SELECT bank.sfid AS bank_sf_id
    ,bank.NAME AS bank_name
    ,bank.lendi_bank_uuid__c AS bank_uuid
    ,CAST(bank.acfbank_name__c AS VARCHAR(30)) AS bank_full_name
    ,bank.acfbank_short_name__c AS bank_short_name
    ,bank.onlineapplicationallowed__c AS bank_onlineapplicationallowed
    ,bank.Initial_Assessment__c AS initial_assessment
    ,bank.acfBankSlugName__c AS slug_name
    ,bank.clickShow_on_Bank_Statements_Integration__c AS is_support_bankstatement
    ,bank.serv_calc_tax_table__c AS tax_table_year
    ,bank.living_expenses_driver__c AS living_expenses_driver
    ,bank.payg_serv_calculator_accuracy__c AS payg_serv_calculator_accuracy
    ,bank.sole_trader_serv_calculator_accuracy__c AS sole_trader_serv_calculator_accuracy
    ,bank.company_serv_calculator_accuracy__c AS company_serv_calculator_accuracy
    ,bank.Allows_non_f2f__c as allow_non_f2f
    ,bank.living_expenses_range_type__c as living_expenses_range_type
    ,CASE
        WHEN bank.medicare_levy__c::text = '2% With Surcharge'::text THEN true
        ELSE false
    END as with_surcharge
	,bank.buffer__c as buffer

FROM salesforce.acfbank_detail__c bank
WHERE (bank.isdeleted != true);

```


## COALESCE  

Return the first non-null expression in a list:

```SQL



SELECT COALESCE(NULL, NULL, NULL, 'W3Schools.com', NULL, 'Example.com');

SELECT COALESCE(NULL, 1, 2, 56);


SELECT COALESCE(NULL, 1, 2, 'W3Schools.com');  // THIS EXAMPLE WILL NOT PASS UNDER POSTGRESQL AS IT THINKS ALL ELEMENTS HERE ARE INTEGER



```

## LIKE (wildcard)

The SQL LIKE Operator
The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards used in conjunction with the LIKE operator:

% - The percent sign represents zero, one, or multiple characters
_ - The underscore represents a single character
Note: MS Access uses a question mark (?) instead of the underscore (_).
```SQL
SELECT *  FROM salesforce.click_applicant__c  where acf_applicant_name__c like 'a%';
----apple apple
----a d
----a c
```



```SQL
SELECT *  FROM salesforce.click_applicant__c  where acf_applicant_name__c like 'a_p%';
----apple apple
```

```SQL
WHERE CustomerName LIKE 'a%'                 -- Finds any values that start with "a"
WHERE CustomerName LIKE '%a'                 --Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'               --Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'                --Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%_%'              --Finds any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'                 --Finds any values that start with "a" and ends with "o"

```



## SQL aggregate functions syntax

**An aggregate function allows you to perform a calculation on a set of values to return a single scalar value.** 


The following are the most commonly used SQL aggregate functions:

```
AVG – calculates the average of a set of values.
COUNT – counts rows in a specified table or view.
MIN – gets the minimum value in a set of values.
MAX – gets the maximum value in a set of values.
SUM – calculates the sum of values.
```

```SQL
aggregate_function (DISTINCT | ALL expression)
```
**The  ALL modifier is used by default if you do not specify any modifier explicitly.**



Notice that all aggregate functions above ignore NULL values except for the COUNT function.


We often use aggregate functions with the GROUP BY and HAVING clauses of the SELECT statement.


### groupBy(used with aggregate functions)   

The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.

```SQL
SELECT count(click_applicant__c), gender__c  FROM salesforce.click_applicant__c group by gender__c ;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```



### group by xxx    having count(yyy) > 

```SQL    

select class
from courses
group by class
having count( distinct student) > 4;
```


