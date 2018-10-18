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
