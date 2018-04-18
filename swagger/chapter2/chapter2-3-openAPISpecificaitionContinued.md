# chapter2


##  introduction  
1 security  
2 error conditions  
3 content types(JSON, JPEG, etc)  
4 operation IDs  


## security  

authentication:  user name and passwd  
authorization: have the access to the api and data   

security types:  
1 none  
2 api key               // indicates that the app has permission to use the API
3 basic authentication  // username and password is included in a header  
4 OAuth: complex issuance of temporary token// the token expires quickly    

How security is indicated  
1 each operation has a security key  
  contains an array of security definition objects  
  often just one element in the array  
2 security definitions  
  the file contains a securityDefinitions key  
  typically at the end  
  contains security objects  
3 security object  
  contains informaion needed for that type of security  

## security  
1 None  
we don't need to add anything   

2 API key  
add security key to each operation  
  use dash to indicate an array  
  create name for definition and use empty bracket, since no data is needed  

add security definition  
  add definition for that name in securityDefinition section  
  type: apiKey  
  name： name of the header or query parameter ot be used  
  in: query or header  


API key example  
put a security key in the get section and securityDefinitions at the end of the file  

example1-apiKEY-1
```
security:
  - api_key: []

securityDefinitions:
  api_key:
    type: apiKey
    name: application-key
    in: header


```

example2-apiKEY-2
```

securityDefinitions:
  api_key:
    type: apiKey
    name: token
    in: query

```


basic authentication  
  add security key to an operation  
    use dash to indication an array  
    create name for definition and use empty bracket, since no data is needed  

  add security definition  
    add definition for that name in securityDefinition section  
    type: basic    

basic auth example  
put a security key in the get section and securityDefinitions at the end of the file  
```
security:
  - basic_auth: []

securityDefinitions:
  basic_auth:
    type: basic

```


OAuth  
Add security key to request  
  add scopes in the array  
add security definition  
  add definition for that name in securityDefinition section  
  type: oauth2  
  authorizationUrl: URL where credentials are entered
  tokenUrl: URL for the token  
  flow: OAuth 2 flow(implicit, password, application or accessCode)
  scopes: list of scopes with descriptions     

OAuth example  
put a security key in the get section and securityDefinitions at the end of the file  
```
security: 
 - oauth_example:
   - write: albums  

 securityDefinitions:  
   oauth_example:  
     type: oauth2    
     authorizationUrl: http://example.com/authenticate  
     flow: implicit  # implicit/password/application/accessCode
     scopes:         # list of scopes with descriptions  
       write:albums: modify albums in your account  
       read:albums: read your albums  

```

## Errors  
Errors are simply different response codes  
Often APIs return a special structure with errors    
Example 401 (Unauthorized) code returned  
{"errorCode": 13, "message": "Username not found"}  

should include schema for every potential status code  

error example
```
responses:
  200:
    description: Successful response  
  401:
    description: Unauthorized
    schema:
      $ref: '#/definitions/error'  


definitions:
  error:
    properties:
      code:
        type: integer
      message:
        type: string  


```

## content types   
Content types indicate the format of the data in the request and response bodies  
this is done through the Content-Type header  
You can specify this for:  
  the whole API  
  individual operations  
Use the consumes and produces keys  
  consumes for requests, produces for responses  
  use the Content-Type value(for example, application/json)

Example Content-Type  
```
host: api.example.com  
basePath: /photo  
schemes:
  - https

consumes:
  - applications/json
produces:
  - applications/json    

```



```
consumes:
  - applications/json
produces:
  - applications/json    

responses:
  200:
    description: Successful response

```


## Operation ID  
You can optionally add an operation ID to each request  

example
```
paths:
  /album:
    get:
      operationsId: getAlbums
      parameters:
        


``` 




## exercise 


```
swagger: '2.0'

info:
  version: '0.3.0'
  title: music


host: api.muzicplayz.com
basePath: /v3
schemes: 
  - https

consumes:
  - application/json
produces:
  - application/json


paths:
  /playlist:
    get:
      parameters:
        - name: limit
          in: query
          required: false
          type: integer
        - name: offset
          in: query
          required: false
          type: integer        
        - name: search
          in: query
          required: false
          type: string
      security:  
        - basicAuth: []      
      responses:
        200: 
          description: Successful response    
        410:
          description: Playlist with that name already exists
          schema: 
            $ref: '#/definitions/error' 

    post:
      parameters:
        - name: newPlaylist
          in: body
          required: true
          schema: 
            $ref: '#/definitions/newPlaylist'
      responses:
        200: 
          description: Successful response        

  /playlist/{playlistID}:
    delete:
      parameters:
        - name: playlistID  
          in: path
          required: true
          type: string
      responses:
        200: 
          description: 
            successful response      
    get:
      parameters:
        - name: playlistID  
          in: path
          required: true
          type: string
      responses:
        200: 
          description: 
            successful response
          schema:
            $ref: '#/definitions/playlistWithSongs'     

  /playlists/{playlistID}/image:
    get:
      operationId: getImage
      parameters:
        - name: playlistID  
          in: path
          required: true
          type: string
      responses:
        200:
          description: Successful response
          schema: 
            type: file
      produces:
          - image/png      

            

definitions:
  newPlaylist:
    properties:
      name:
        type: string
      songIds:
        type: array
        items:
          type: integer  
  playlistWithSongs:
    properties:
      id:
        type: integer
      name:
        type: string
      song:
        type: array
        items:
            $ref: '#/definitions/song'            
  song:
    properties:
      id: 
        type: integer
      title:
        type: string

  error:
    properties:
       logData:
         type: object
         properties:
           entry: 
             type: integer
           data: 
             type: string      

securityDefinitions:
  basicAuth:
    type: basic


```


```yaml
# Every Open API file needs this
swagger: '2.0'

# Document metadata
info:
  version: "0.3.0"
  title: Music API
  
# URL data
host: api.muzicplayz.com
basePath: /v3
schemes:
  - https

# You can use the consumes and produces keywords to specify the MIME types understood by your API
# What key do you use to indicate in which format an API request will return data?
consumes:
  - application/json
produces:
  - application/json
  
# Endpoints
paths:
  # Playlists
  /playlist:
    # Get one or more playlists
    get:
      # Query parameters
      parameters:
        # Number to return
        - name: limit
          in: query
          required: false
          type: integer
          
        # Number to skip
        - name: offset
          in: query
          required: false
          type: integer
          
        # Search term
        - name: search
          in: query
          required: false
          type: string
          
      # Basic auth security
      security:
        - basicAuth: [ ]
        
      # Incomplete response (to finish later)



      responses:
        # Response code
        200:
          description: Successful response
          
    # Create a new playlist
    post:
      # Body 
      parameters:
        - name: newPlaylist
          in: body
          required: true
          schema: 
            $ref: '#/definitions/newPlaylist'
            
      # Incomplete response (to finish later)
      responses:
        # Response code
        200:
          description: Successful response
   
  # Playlists
  /playlist/{playlist-id}:    
    # Delete a playlist 
    delete:
      # Path parameter
      parameters:
        # Playlist id
        - name: playlist-id
          in: path
          required: true
          type: string
          
       # Incomplete response (to finish later)
      responses:
        # Response code
        200:
          description: Successful response
          
        410:
          description: Playlist already deleted
          schema:
            $ref: '#/definitions/error'
          
    # Return a playlist  
    get:
      # Path parameter
      parameters:
        # Playlist id
        - name: playlist-id
          in: path
          required: true
          type: string
          
      responses:
        # Response code
        200:
          description: Successful response
          schema:
            $ref: '#/definitions/playlistWithSongs'

  # Playlist image
  /playlist/{playlist-id}/image: 
    # Get one or more playlists
    get:
      operationId: getImage
      parameters:
        # Playlist id
        - name: playlist-id
          in: path
          required: true
          type: string
          
      responses:
         200:
          description: Successful response
          schema:
            type: file
            
      produces:
        - image/png
  
definitions:
  # New play list
  newPlaylist:
    properties:
      name:
        type: string
      songIds:
        type: array
        items: 
          type: integer
      
  # Playlist with song info    
  playlistWithSongs:
    properties:
      id:
        type: integer
      name:
        type: string
      song:
        type: array
        items: 
          $ref: '#/definitions/song'
          
  # Song info
  song:
    properties:
      id:
        type: integer
      title:
        type: string      
      artist:
        type: string  
        
  # Errors
  error:
    properties:
      logData:
        type: object
        properties:
          entry:
            type: integer
          date:
            type: string
            
          
securityDefinitions:
  basicAuth:
    type: basic  

``` 



## xxx 






```
//---------yml
---  # yaml starts

... # yaml ends


//---------json


```

