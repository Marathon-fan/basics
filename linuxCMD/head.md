
head is a program on Unix and Unix-like systems used to display the beginning of a text file or piped data. The command syntax is: head [options] <file_name> By default, head will print the first 10 lines of its input to the standard output. The number of lines printed may be changed with a command line option.

get the first 50 lines of a file
```sh
head -50 fileName > newFileName
```

get the first 10000 characters of a file
```sh
head -c 10000 fileName > newFileName
```
