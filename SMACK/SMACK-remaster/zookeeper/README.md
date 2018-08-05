# zookeeper  

## Quorum Setup   




3 zookeepers - for small application
```
pros:
distributed 

preferred for small Kafka deployments

cons: 
only one server can go down

```

zookeeper1, zookeeper2, zookeeper3

////////// set up zookeeper in my machine  

## start from a raw machine    

install tools and preconfiguration  
```sh
# packages
sudo apt-get update && \
sudo  apt-get -y install wget ca-certificates zip net-tools vim nano tar netcat
#on aws AMI, use   sudo  yum install wget ca-certificates zip net-tools vim nano tar netcat

# java Open JDK 8
sudo apt-get -y install default-jdk   # sudo yum install java-1.8.0-openjdk
java -version

# disable RAM Swap - can set to 0 on certain Linux distro
sudo sysctl vm.swappiness
sudo sysctl vm.swappiness=1
sudo sysctl vm.swappiness

echo 'vm.swappiness=1' | sudo tee --append /etc/sysctl.conf
cat /etc/sysctl.conf

cat /etc/hosts

# mock DNS
echo "kafka1IPAddr(usePrivateIP) kafka1
zookeeper1IPAddr(usePrivateIP)   zookeeper1
kafka2IPAddr(usePrivateIP)  kafka2
zookeeper2IPAddr(usePrivateIP)  zookeeper2
kafka3IPAddr(usePrivateIP)  kafka3
zookeeper3IPAddr(usePrivateIP)  zookeeper3" | sudo tee append /etc/hosts

cat /etc/hosts       
```




```sh
wget http://apache.mirror.digitalpacific.com.au/kafka/0.10.2.1/kafka_2.12-0.10.2.1.tgz
tar -xvzf kafka_2.12-0.10.2.1.tgz
rm kafka_2.12-0.10.2.1.tgz
mv kafka_2.12-0.10.2.1 kafka      # rename the folder
cd kafka/
# 
cat config/zookeeper.properties   
ls config/
ls bin/
bin/zookeeper-server-start.sh config/zookeeper.properties
ctrl + c        # stop zookeeper

bin/zookeeper-server-start.sh -daemon config/zookeeper.properties          # launch zookeeper as a daemon(in the background)  
bin/zookeeper-shell.sh localhost:2181                                      # use zookeeper shell to see zookeeper's status
ls /                                                                       # if we see [zookeeper], then it means zookeeper works well
ctrl + c        # exit zookeeper shell
echo "ruok" | nc localhost 2181 ; echo                                     # zookeeper will respond imok

```

install zookeeper boot scripts, make it a linux service
```sh
sudo nano /etc/init.d/zookeeper       # here we input the sh of zookeeper which is the next sh script(sh of zookeeper as a linux service)

sudo chmod +x /etc/init.d/zookeeper   # make it executable    
sudo chown root:root /etc/init.d/zookeeper  # make the root own this file  

# you can safely ignore the warning
sudo update-rc.d zookeeper defaults    # update the service  

# stop zookeeper
sudo service zookeeper stop
# verify zookeeper's stopped
nc -vz localhost 2181
sudo service zookeeper status

sudo service zookeeper start
nc -vz localhost 2181     # connection to localhost 2181 prot [tcp/*] succeeded!
sudo service zookeeper status
cat logs/zookeeper.out    # check zookeeper logs 
```

script(sh of zookeeper as a linux service)
```sh
#!/bin/bash
#/etc/init.d/zookeeper
DAEMON_PATH=/home/bitnami/kafka/bin
DAEMON_NAME=zookeeper
# Check that networking is up.
#[ ${NETWORKING} = "no" ] && exit 0

PATH=$PATH:$DAEMON_PATH

# See how we were called.
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



////////// set up zookeeper on the other two machine   
do the same thing on the other two vms(but in different availability zones of aws)

```sh
# start zookeeper on every vm
sudo service zookeeper start
sudo service zookeeper status

# check the connection status on every vm
nc -vz zookeeper1 2181
nc -vz zookeeper2 2181
nc -vz zookeeper3 2181

# set up zookeepr quorum


```


script(sh of setting up zookeeper quorum)
```sh
#!/bin/bash
# create data dictionary for zookeeper
sudo mkdir -p /data/zookeeper
sudo chown -R bitnami:bitnami /data/
# declare the server's identity
echo "1" > /data/zookeeper/myid    # the first vm
cat /data/zookeeper/myid

echo "2" > /data/zookeeper/myid    # the second vm
cat /data/zookeeper/myid

echo "3" > /data/zookeeper/myid    # the third vm
cat /data/zookeeper/myid

# edit the zookeeper settings for each zookeeper
rm /home/bitnami/kafka/config/zookeeper.properties
nano /home/bitnami/kafka/config/zookeeper.properties     # enter content(zookeeper new properties) 

# restart the zookeeper service for each zookeeper       # 
sudo service zookeeper stop
sudo service zookeeper start                             # or we can use the following cmd on each vm to see the leader election process 
                                                         # bin/zookeeper-server-start.sh config/zookeeper.properties 

# ckeck if every zookeeper is OK                                                         
echo "ruok" | nc zookeeper1 2181 ; echo
echo "ruok" | nc zookeeper2 2181 ; echo
echo "ruok" | nc zookeeper3 2181 ; echo

echo "stat" | nc zookeeper1 2181 ; echo
echo "stat" | nc zookeeper2 2181 ; echo
echo "stat" | nc zookeeper3 2181 ; echo                                                  

# then the three zookeeper share the same data

# on zookeeper1 vm
bin/zookeeper-shell.sh zookeeper1:2181
ls /

# on zookeeper2 vm
bin/zookeeper-shell.sh zookeeper2:2181
ls /

# on zookeeper3 vm
bin/zookeeper-shell.sh zookeeper3:2181
ls /

# in zookeeper1
create /my-node "some data"
ls /

# in zookeeper2 and zookeeper3    # the three zookeepers are in distributed mode and sync data from each other
ls /      # and we see the same data as in zookeeper1
get /my-node

# in zookeeper2
rmr /my-node 
ls /  # /my-node was gone from zookeeper2, can also was gone from zookeeper1 and zookeeper3

# use the following cmd to see the log
cat logs/zookeeper.out
cat logs/zookeeper.out | head -100


# observe the logs - need to do this on every machine
cat /home/ubuntu/kafka/logs/zookeeper.out | head -100
nc -vz localhost 2181
nc -vz localhost 2888
nc -vz localhost 3888
echo "ruok" | nc localhost 2181 ; echo
echo "stat" | nc localhost 2181 ; echo
bin/zookeeper-shell.sh localhost:2181
# not happy
ls /


```

content(zookeeper new properties) 
```sh
# the location to store the in-memory database snapshots and, unless specified otherwise, the transaction log of updates to the database.
dataDir=/data/zookeeper
# the port at which the clients will connect
clientPort=2181
# disable the per-ip limit on the number of connections since this is a non-production config
maxClientCnxns=0
# the basic time unit in milliseconds used by ZooKeeper. It is used to do heartbeats and the minimum session timeout will be twice the tickTime.
tickTime=2000
# The number of ticks that the initial synchronization phase can take
initLimit=10
# The number of ticks that can pass between
# sending a request and getting an acknowledgement
syncLimit=5
# zoo servers
# these hostnames such as `zookeeper-1` come from the /etc/hosts file
server.1=zookeeper1:2888:3888
server.2=zookeeper2:2888:3888
server.3=zookeeper3:2888:3888

```

for the quorum consisting of 3 zookeepers, only one can be down. If two are down, the quorum is down.



////////////////////////////////////////////////////////////////////////////////////////////////
## using zookeeper Command Line Interface

```
1 create nodes, sub nodes, etc...
2 get/set data for a node
3 watch a node
4 delete a node

```

```sh
sudo service zookeeper start

bin/zookeeper-shell.sh  localhost:2181

ls /

create /my-node "foo"       // create a node with "foo" as the data
ls /
create /my-node/new-node "some data"
create /my-node/another-node ""
get /my-node/new-node
 
rmr /my-node/another-node     // remove node recursively   
ls /my-node 
rmr /my-node
ls /

create /my-node-to-watch "some data"
get /my-node true            # set a watch on the node
set /my-node "new data"      # now we can see a watch message  "WatchedEvent state:SyncConnected type:NodeDataChanged ... "
set /my-node "whatever"      # this time we cannot see any watch message as watch event only happens once

```

