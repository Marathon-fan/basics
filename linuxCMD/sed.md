# basics

## sed

sed, which is short for **stream editor**, is to modify each line of a file or stream by replacing specified parts of the line. 

It makes basic text changes to a file or input from a pipeline. For example, say you have a file named "songs.text" that contains these lines:
```
1, Justin Timberlake, Title 545, Price $6.30
2, Taylor Swift, Title 723, Price $7.90
3, Mick Jagger, Title 610, Price $7.90
4, Lady Gaga, Title 118, Price $6.30
5, Johnny Cash, Title 482, Price $6.50
6, Elvis Presley, Title 335, Price $6.30
7, John Lennon, Title 271, Price $7.90
```

### Making Text Substitutions With Sed


If you want to change all price occurrences of $6.30 to $7.30, you can make the changes using the sed command in this way:
```sh
sed 's/6.30/7.30/' songs.txt > songs2.txt
```

This code makes the change and writes the modified file to "songs2.txt". The output file contains:

```
1, Justin Timberlake, Title 545, Price $7.30
2, Taylor Swift, Title 723, Price $7.90
3, Mick Jagger, Title 610, Price $7.90
4, Lady Gaga, Title 118, Price $7.30
5, Johnny Cash, Title 482, Price $6.50
6, Elvis Presley, Title 335, Price $7.30
7, John Lennon, Title 271, Price $7.90
```

### Filtering With the Sed Command

Sed is also frequently used to filter lines in a file or stream. For example, if you only want to see the lines containing "John," you use:
```sh
sed -n '/John/p' songs.txt > johns.txt
```

which writes the following lines to file johns.txt:
```
5, Johnny Trash, Title 482, Price $6.50
7, John Lennon, Title 271, Price $7.90
```

## Use sed to fix date format

Data sample (after the whole sed pipe):
```
500,2,13/09/2007,30000.00,12,B-1
501,2,15/09/2007,14000.00,8,B-2
```

Expected result:
```
500,2,2007-09-13,30000.00,12,B-1
501,2,2007-09-15,14000.00,8,B-2
```

answer1
```
sed -E 's,([0-9]{2})/([0-9]{2})/([0-9]{4}),\3-\2-\1,g'
```
answer2
```
sed "s:,\([0-9]\+\)/\([0-9]\+\)/\([0-9]\+\),:,\3-\2-\1,:"
```


## remove leading whitespace from each line in a file   
I have a file that looks something like this:
```java
for (i = 0; i < 100; i++)
    for (i = 0; i < 100; i++)
  for (i = 0; i < 100; i++)
       for (i = 0; i < 100; i++)
     for (i = 0; i < 100; i++)
           for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
```
I want it to look like this (remove indentations):
```java
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
for (i = 0; i < 100; i++)
```

For this specific problem, something like this would work:
```sh
$ sed 's/^ *//g' < input.txt > output.txt
```
It says to replace all spaces at the start of a line with nothing. If you also want to remove tabs, change it to this:
```sh
$ sed 's/^[ \t]+//g' < input.txt > output.txt
```



## Unix Sed to remove leading and trailing spaces in the CSV formatted file without considering String value which has comma      

Source CSV file has the data like this :
```
"112", 21,,"4563446" , "VASQUE, HILARI", 365, "LOPEZ, ESTHER O" ,"16:06","00:00",, , 267.95, 463.48,"Test"
```
Expected OutPut CSV file:
```
"112",21,,"4563446","VASQUE, HILARI",365,"LOPEZ, ESTHER O","16:06","00:00",,,267.95,463.48,"Test"
```

answer
```sh
sed -r 's/("[^"]*"|[^,]+|,)\s*,\s*/\1,/g' file
```

```sh
sed -r 's/("[^"]*"|[^,]+|,)\s*,\s*/\1,/g' <inputFile> > <outputFile>  
```

## remove last 4 columns from csv file

```sh
sed -r 's/(,[^,]*){4}$//' <inputFile>
sed -r 's/(,[^,]*){4}$//' <inputFile> > <outputFile>  
```

