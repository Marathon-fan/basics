# basics

## grep(Global regular expression print)  

grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. 
Stands for: Global regular expression print

example1
```
$ ls | grep asset

asset_and_liability_view.sql

$> aws s3 ls | grep k8s    // check if the bucket is there

xxxx  cluster1.k8s.xxx
```

use the --color option, our successful matches will be highlighted for us   
specify the -n option, grep will prefix each matching line with the line number   
example2
```
$ grep --color -n "al" asset_and_liability_view.sql 

3:SELECT al.sfid AS asset_and_liability_sf_id
4:	,al.NAME AS asset_and_liability_name
5:	,al.account__c AS account
6:	,al.opportunity__c AS opportunity
...
```

specify the -i option to perform a case-insensitive match:    
example3
```
grep -n -i "name" asset_and_liability_view.sql 
4:	,al.NAME AS asset_and_liability_name
12:		WHEN (rt.developername)::TEXT ~~ 'Asset%'::TEXT
30:	,al.account_name__c AS account_name
54:	,al.street_name__c AS street_name
65:	,rt.name AS category
66:	,rt.developername AS developername
67:	,(rt.name::varchar(255)) AS recognition_type
81:	ON al.institution__c = ad.acfbank_short_name__c
```

