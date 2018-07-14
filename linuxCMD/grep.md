# basics

## grep(Global regular expression print)  

grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. 
Stands for: Global regular expression print

example1
```
$ ls | grep asset

asset_and_liability_view.sql


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
