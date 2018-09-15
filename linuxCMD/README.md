# basics

##   


```sh
ps -aux

ps -aux | grep java




```

```sh
kill -9 portNumber


```

```sh
top

```

see the port 
```sh
lsof -i:portNumber

```

tar
```sh
tar -zcf target.tar sourceName

tar -zxvf 1.tar #unzip the file

```

zip
```sh

```

see all file(directory) info
```sh
du -sh *

```

see the file system info
```sh
df -h
```

Scan each input file for lines that match any of a set of patterns specified literally in prog or in one or more files specified as -f file
```sh
awk

# split with ' ', the output the first 1 and 4th items
aws '{print $1, $4}' log.txt      


```


fi
```sh
if  xxx

else 
    xxx
fi

```



“#!/bin/sh” 
```sh
It's called a shebang, and tells the parent shell which interpreter should be used to execute the script.
e.g.

#!/usr/bin/perl   <--perl script'
#!/usr/bin/php <-- php script
#!/bin/false <--- do-nothing script, because false returns immediately anyways.



#!/bin/bash
/pathToTomcat/bin/start.sh

echo "tomcat has started"


```


linux scp
```sh
# copy files from other servers


```


/////////////////////

execute sh 
```sh
chmod 777 shFileName.sh
sh shFileName.sh
```


```sh

#!/bin/bash        # bash     
#/etc/init.d/zookeeper
DAEMON_PATH=/home/bitnami/kafka/bin
DAEMON_NAME=zookeeper
# Check that networking is up.
#[ ${NETWORKING} = "no" ] && exit 0

PATH=$PATH:$DAEMON_PATH

# See how we were called.
# $1 means use the first var
case "$1" in
  start)
        # Start daemon.
        pid=`ps ax | grep -i 'org.apache.zookeeper' | grep -v grep | awk '{print $1}'`
        if [ -n "$pid" ]
          then
            echo "Zookeeper is already running";
        else
          echo "Starting $DAEMON_NAME";
          $DAEMON_PATH/zookeeper-server-start.sh -daemon /home/bitnami/kafka/config/zookeeper.properties
        fi
        ;;
  stop)
        echo "Shutting down $DAEMON_NAME";
        $DAEMON_PATH/zookeeper-server-stop.sh
        ;;
  restart)
        $0 stop
        sleep 2
        $0 start
        ;;
  status)
        pid=`ps ax | grep -i 'org.apache.zookeeper' | grep -v grep | awk '{print $1}'`
        if [ -n "$pid" ]
          then
          echo "Zookeeper is Running as PID: $pid"
        else
          echo "Zookeeper is not Running"
        fi
        ;;
  *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
esac

exit 0


```
