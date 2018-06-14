# proxy server

A proxy server is a dedicated computer or a software system running on a computer that acts as an intermediary between an endpoint device, such as a computer, and another server from which a user or client is requesting a service. The proxy server may exist in the same machine as a firewall server or it may be on a separate server, which forwards requests through the firewall.

An advantage of a proxy server is that its cache can serve all users. If one or more Internet sites are frequently requested, these are likely to be in the proxy's cache, which will improve user response time. A proxy can also log its interactions, which can be helpful for troubleshooting. 

Here’s a simple example of how proxy servers work:
When a proxy server receives a request for an Internet resource (such as a Web page), it looks in its local cache of previously pages. If it finds the page, it returns it to the user without needing to forward the request to the Internet. If the page is not in the cache, the proxy server, acting as a client on behalf of the user, uses one of its own IP addresses to request the page from the server out on the Internet. When the page is returned, the proxy server relates it to the original request and forwards it on to the user.


## Forward and reverse proxy servers  

### Forward proxy(on behalf of the client. The server thinks the requests are from proxy and doesn't know it's actually from the client)

Forward proxies send the requests of a client onward to a web server. Users access forward proxies by directly surfing to a web proxy address or by configuring their Internet settings. Forward proxies allow circumvention of firewalls and increase the privacy and security for a user but may sometimes be used to download illegal materials such as copyrighted materials or child pornography.

Reverse proxies transparently handle all requests for resources on destination servers without requiring any action on the part of the requester.


### Reverse proxies are used(on behalf of the servers, the client only knows the proxy, and doesn't know any information about the servers behind the proxy):   
To enable indirect access when a website disallows direct connections as a security measure.    
To allow for load balancing between severs.    
To stream internal content to Internet users.    
To disable access to a site, for example when an ISP or government wishes to block a website.    

