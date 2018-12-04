
# basic ideas  

From where to get dependencies?   

Where to put the artifact? 
-Source Control Systems
-File System
-Binary Repository System

artifact(binaries) = anything other than source code  

artifactory = artifact repository  
```
The binary repository manager
The place where you can store all your artifacts
Proxy for remote repositories
you dependenciy manager will work against it
```

**JFrog Artifactory**    
JFrog Artifactory is an artifact repository manager, which is entirely technology agnostic and fully supports software created in any language or using any tool. It is also the only enterprise-ready repository manager available that supports secure, clustered, high availability Docker registries.


Sources vs Binaries  
```sh
Sources                Binaries

Text                   Blob
Diffable               Not Diffable
Versioned by content   Versioned by name
Stored by override     Should never override
```

