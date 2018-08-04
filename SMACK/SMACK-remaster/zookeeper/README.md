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

## start from a raw machine    

install tools and preconfiguration  
```
# packages
sudo apt-get update && \
sudo  apt-get -y install wget ca-certificates zip net-tools vim nano tar netcat

# java Open JDK 8
sudo apt-get -y install default-jdk
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




```
wget http://apache.mirror.digitalpacific.com.au/kafka/0.10.2.1/kafka_2.12-0.10.2.1.tgz
tar -zvzf kafka_2.12-0.10.2.1.tgz
rm kafka_2.12-0.10.2.1.tgz
rm kafka_2.12-0.10.2.1.tgz kafka      # rename the folder
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
```
sudo nano /etc/init.d/zookeeper       # here we input the sh of zookeeper
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

content(sh of zookeeper)
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
