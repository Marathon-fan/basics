# basics

## curl   

To download output to a file that has the same name as on the system it originates from, use the -O flag, for example:

```
curl -O www.example.com/example.html
```
If the server responds that the file (example.html) is moved to a different location (indicated with a Location: header and a 3XX response code), use the -L flag, for example:
```
curl -OL www.example.com/example.html
```



