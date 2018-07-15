# basics

## export    

In general, the export command marks an environment variable to be exported with any newly forked child processes and thus it allows a child process to inherit all marked variables. 

The export command is one of the bash shell BUILTINS commands, which means it is part of your shell. The export command is fairly simple to use as it has straightforward syntax with only three available command options. 

```
-p
List of all names that are exported in the current shell
-n
Remove names from export list
-f
Names are exported as functions
```

example
```
$ a=linuxcareer.com
$ echo $a
linuxcareer.com
$ export a
$ bash
$ echo $a
linuxcareer.com
$
```

Exporting a shell function
With the option -f the export command can also be used to export functions. In the example below, we will create a new bash function called printname, which will simply use the echo command to print the string "Linuxcareer.com".
```
$ printname () { echo "Linuxcareer.com"; }
$ printname
Linuxcareer.com
$ export -f printname
$ bash
$ printname
Linuxcareer.com
```
