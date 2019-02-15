



```sh
2>/dev/null
```

The > operator redirects the output usually to a file but it can be to a device. You can also use >> to append.

```sh
> file               redirects stdout to file
1> file              redirects stdout to file
2> file              redirects stderr to file
&> file              redirects stdout and stderr to file
```

```sh
/dev/null is the null device it takes any input you want and throws it away. It can be used to suppress any output.
```

```sh
command > /dev/null 2>&1 &
```
Run command in the background, discard stdout and stderr


```sh
command >> /path/to/log 2>&1 &
```
Run command and append stdout and stderr to a log file.


