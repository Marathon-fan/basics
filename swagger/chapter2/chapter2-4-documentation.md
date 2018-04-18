# chapter2-4


##  description key   
1 use the description key to add documentation. 
2 add description key to:
  API info
  Operations(get, post, etc)
  Parameters
  Responses
  Schema definitions

## Markdown.  
in the description value, you can use Markdown.  
  Markdown is a simple Markup language.  
Bold, italic, images, links, etc.  
 
## exercise 

```
swagger: '2.0'

info:
  version: '0.3.0'
  title: music
  description: Music API with playlists


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
      description: returns one or more playlist(s) 
      parameters:
        - name: limit
          in: query
          required: false
          type: integer
          description: number of playlists to return
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
        description: Playlist name
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
    description: username and password


```











## xxx 






```
//---------yml
---  # yaml starts

... # yaml ends


//---------json


```

