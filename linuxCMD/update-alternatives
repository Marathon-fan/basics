

It updates the links in /etc/alternatives to point to the program for this purpose. There's lots of examples, like x-www-browser, editor, etc. that will link to the browser or editor of your preference. Some scripts or system tools may want you to edit a file manually (e.g. configuration conflict in dpkg) and they'll look into the alternatives to give you the editor of choice. For java, this is the Java runtime environment - Oracle's, OpenJRE, etc.

The links in /etc/alternatives are just symbolic links. You can see them using for example

```
ls -l /etc/alternatives
````
Moreover, the regular /usr/bin binaries are also symlinks. E.g.:
```
ls -l /usr/bin/java
  lrwxrwxrwx 1 root root 22 Aug 14 10:33 /usr/bin/java -> /etc/alternatives/java
ls -l /etc/alternatives/java
  lrwxrwxrwx 1 root root 46 Aug 14 10:33 /etc/alternatives/java -> /usr/lib/jvm/java-6-openjdk-amd64/jre/bin/java
```
  
So, no PATH has to be modified. It just uses symbolic links.
