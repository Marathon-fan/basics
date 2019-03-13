
# PortScanning    

## online port scanner      
we can use a online port scanner to scan the address that we want to connect  

The result could be:


A machine's ip   
```
PORT     STATE    SERVICE
21/tcp   filtered ftp
22/tcp   filtered ssh
23/tcp   filtered telnet
80/tcp   filtered http
110/tcp  filtered pop3
143/tcp  filtered imap
443/tcp  open     https
3389/tcp filtered ms-wbt-server

```
or 

B machine's ip   
```
PORT     STATE    SERVICE
21/tcp   filtered ftp
22/tcp   open     ssh
23/tcp   filtered telnet
80/tcp   closed   http
110/tcp  filtered pop3
143/tcp  filtered imap
443/tcp  filtered https
3389/tcp filtered ms-wbt-server
```

**The difference between Filtered Port and Closed Port are:**   

```sh
Closed Port: If you send a SYN to a closed port, it will respond back with a RST.
Filtered Port: Presumably, the host is behind some sort of firewall. Here, the packet is simply dropped and you receive no response (not even a RST).
Open Port: If you send a SYN to an open port, you would expect to receive SYN/ACK.
```


# Tunneling   

## Definition - What does Tunneling mean?    
Tunneling is a protocol that allows for the secure movement of data from one network to another. Tunneling involves allowing private network communications to be sent across a public network, such as the Internet, through a process called encapsulation. The encapsulation process allows for data packets to appear as though they are of a public nature to a public network when they are actually private data packets, allowing them to pass through unnoticed.

Tunneling is also known as **port forwarding.**    


Techopedia explains Tunneling

In tunneling, the data are broken into smaller pieces called packets as they move along the tunnel for transport. As the packets move through the tunnel, they are encrypted and another process called encapsulation occurs. The private network data and the protocol information that goes with it are encapsulated in public network transmission units for sending. The units look like public data, allowing them to be transmitted across the Internet. Encapsulation allows the packets to arrive at their proper destination. At the final destination, de-capsulation and decryption occur.

There are various protocols that allow tunneling to occur, including:
```
Point-to-Point Tunneling Protocol (PPTP):
 PPTP keeps proprietary data secure even when it is being communicated over public networks. Authorized users can access a private network called a virtual private network, which is provided by an Internet service provider. This is a private network in the “virtual” sense because it is actually being created in a tunneled environment.

Layer Two Tunneling Protocol (L2TP): 
This type of tunneling protocol involves a combination of using PPTP and Layer 2 Forwarding.
```

Tunneling is a way for communication to be conducted over a private network but tunneled through a public network. This is particularly useful in a corporate setting and also offers security features such as encryption options.

## Dynamic Port Forwarding    
**Dynamic Port Forwarding: Use Your SSH Server as a Proxy**   

There’s also “dynamic port forwarding”, which works similarly to a proxy or VPN. The SSH client will create a SOCKS proxy you can configure applications to use. All the traffic sent through the proxy would be sent through the SSH server. This is similar to local forwarding—it takes local traffic sent to a specific port on your PC and sends it over the SSH connection to a remote location.

For example, let’s say you’re using a public Wi-Fi network. You want to browse securely without being snooped on. If you have access to an SSH server at home, you could connect to it and use dynamic port forwarding. The SSH client will create a SOCKS proxy on your PC. All traffic sent to that proxy will be sent over the SSH server connection. No one monitoring the public Wi-Fi network will be able to monitor your browsing or censor the websites you can access. From the perspective of any websites you visit, it will be as if you were sitting in front of your PC at home. This also means you could use this trick to access US-only websites while outside of the USA—assuming you have access to an SSH server in the USA, of course.

As an another example, you may want to access a media server application you have on your home network. For security reasons, you may only have an SSH server exposed to the Internet. You don’t allow incoming connections from the Internet to your media server application. You could set up dynamic port forwarding, configure a web browser to use the SOCKS proxy, and then access servers running on your home network through the web browser as if you were sitting in front of your SSH system at home. For example, if your media server is located at port 192.168.1.123 on your home network, you could plug the address 192.168.1.123 into any application using the SOCKS proxy and you’d access the media server as if you were on your home network.

