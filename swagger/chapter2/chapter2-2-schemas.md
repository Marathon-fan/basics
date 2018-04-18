# chapter2


##  example 1


```
//---------yml
---  # yaml starts
post:
  parameters:
    - name: album
      in: body
      required: true
      schema: 
        $ref: '#/definitions/newAlbum'

... # yaml ends
{
  "post": {
    "parameters": [
      {
        "name": "album",
        "in": "body",
        "required": true,
        "schema": {
          "$ref": "#/definitions/newAlbum"
        }
      }
    ]
  }
}

//---------json


```

##  example 2 - simple schema


```
//---------yml
---  # yaml starts
definitions:
  newAlbum:
    properties:
      name:
        type: string
      date:
        type: string  

... # yaml ends


//---------json
{
  "definitions": {
    "newAlbum": {
      "properties": {
        "name": {
          "type": "string"
        },
        "date": {
          "type": "string"
        }
      }
    }
  }
}

```


##  example 3 - simple schema - object type

```
//---------yml
---  # yaml starts
author: 
  type: object
  properties:
    firstName:
      type: string
    lastName:
      type: string  
... # yaml ends


//---------json
{
  "author": {
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      }
    }
  }
}

```




##  example 3 - simple schema - objects with $ref




```
//---------yml
---  # yaml starts
author: 
  type: object
  additionalProperties:
    $ref: '#/definitions/person'

definition:
  person:
    properties:
      firstName:
        type: string
      lastName:
        type: string  

... # yaml ends


//---------json
{
  "author": {
    "type": "object",
    "additionalProperties": {
      "$ref": "#/definitions/person"
    }
  },
  "definition": {
    "person": {
      "properties": {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      }
    }
  }
}

```




##  example 3 - simple schema - array


```
//---------yml
---  # yaml starts
relatedAlbumIds:
  type: array
  items: 
    type: string

... # yaml ends


//---------json
{
  "relatedAlbumIds": {
    "type": "array",
    "items": {
      "type": "string"
    }
  }
}

```


##  example  - schema array with $ref

```
//---------yml
---  # yaml starts
photos: 
  type: array
  items:
    $ref: '#/definitions/photo'

... # yaml ends


//---------json
{
  "photos": {
    "type": "array",
    "items": {
      "$ref": "#/definitions/photo"
    }
  }
}

```

##  example  - required - a list of all properties that are required

```
//---------yml
---  # yaml starts
photos: 
  properties:
    id:
      type: integer
    longitude:
      type: number
    latitude:
      type: number
  required:     # we can put a list under required key 
    - id  


//---------json
∫

```

##  example  - response body

under response, under the response code

```
//---------yml
---  # yaml starts
responses:
  200:
    description: Successful response
    schema:
      $ref: '#/definitions/album'

... # yaml ends


//---------json
{
  "responses": {
    "200": {
      "description": "Successful response",
      "schema": {
        "$ref": "#/definitions/album"
      }
    }
  }
}

```


##  example  - allOf  
use allOf key to combine several objects into one


```
//---------yml
---  # yaml starts
album: 
  allOf:
    - $ref: '#/definitions/newAlbum'
    - type: object
      properties:
        id:
          type: integer

... # yaml ends


//---------json
{
  "album": {
    "allOf": [
      {
        "$ref": "#/definitions/newAlbum"
      },
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          }
        }
      }
    ]
  }
}

```



##  example  - headers and examples  

responses can also have custom headers

search Open API Specification

##  example  - Form Data

sometimes the request body uses form data instead of JSON

for form data, each parameter is a property

in key has value formData



```
//---------yml
---  # yaml starts
parameters:
  - name: firstFileName
    in: formData
    requred: true
    type: string

... # yaml ends
{
  "parameters": [
    {
      "name": "firstFileName",
      "in": "formData",
      "requred": true,
      "type": "string"
    }
  ]
}

//---------json


```


##  exercise  

```
swagger: '2.0'

info:
  version: '0.3.0'
  title: music


host: api.muzicplayz.com
basePath: /v3
schemes: 
  - https

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
      responses:
        200: 
          description: Successful response    
          
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

```

##  xxx 1





```
//---------yml
---  # yaml starts

... # yaml ends


//---------json


```



