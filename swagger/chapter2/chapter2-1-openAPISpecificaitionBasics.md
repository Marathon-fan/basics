# chapter1


##  example 1

```
swagger: '2.0'   # every Open API file needs this

info: 
  version: "0.0.1"
  title: Example Photo Service

host: api.example.com
basePath: /photo
schemes:
  - https 


``` 


```
//---------yml
---  # yaml starts

... # yaml ends


//---------json
{
  "swagger": "2.0",
  "info": {
    "version": "0.0.1",
    "title": "Example Photo Service"
  },
  "host": "api.example.com",
  "basePath": "/photo",
  "schemes": [
    "https"
  ]
}

```



##  example 2 

GET https//api.example.com/photo/album?start=2017-09-01&end=2017-09-31


```
//---------yml
---  # yaml starts
# endpoints
path:
  /album:
    get:
      parameters:
        - name: start
          in: query
          required: false
          type: string
        - name: end
          in: query
          required: false
          type: string  

... # yaml ends


//---------json
{
  "path": {
    "/album": {
      "get": {
        "parameters": [
          {
            "name": "start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ]
      }
    }
  }
}

```




##  example 3 

GET https//api.example.com/photo/album/123456




```
//---------yml
---  # yaml starts
path:
  /album/{id}:
    get: 
      parameters:
        - name: id
          in: path
          required: true
          type: integer



... # yaml ends


//---------json
{
  "path": {
    "/album/{id}": {
      "get": {
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer"
          }
        ]
      }
    }
  }
}

```


## data type  
1 boolean  
2 integer  
3 number  
4 string  
5 array


## custom headers


```
//---------yml
---  # yaml starts
- name: Access-level
  in: header
  required: false
  type: string

... # yaml ends


//---------json
[
  {
    "name": "Access-level",
    "in": "header",
    "required": false,
    "type": "string"
  }
]

```


## documentation

documentation is added using the description key


## exercise example 1


```
//---------yml
---  # yaml starts
swagger: '2.0'

# document meta data
info: 
  version: "0.0.1"
  title: Example Photo Service

# url data
host: api.example.com
basePath: /photo
schemes:
  - https 

# endpoints
paths:
  # photo albums
  /album:
    # get one or more albums
    get:
      # query parameters
      parameters:
        # starting data
        - name: start
          in: query
          required: false
          type: string
        # ending data
        - name: end
          in: query
          required: false
          type: string
       # incomplete response(to finish later)
      responses:
        # response code
        200:
          description: successful response

  # photo album 
  /album/{id}:
    # get an album
    get:
      # query parameters
      parameters:
      # ablum id
        - name: id
          in: path
          required: true
          type: integer
      # customer level  
        - name: Access-level     
          in: header
          required: false
          type: string
      # incomplete response(to finish laster)
      responses:
        # response code
        200: 
          description: Successful response            

... # yaml ends


//---------json
{
  "swagger": "2.0",
  "info": {
    "version": "0.0.1",
    "title": "Example Photo Service"
  },
  "host": "api.example.com",
  "basePath": "/photo",
  "schemes": [
    "https"
  ],
  "paths": {
    "/album": {
      "get": {
        "parameters": [
          {
            "name": "start",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "end",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful response"
          }
        }
      }
    },
    "/album/{id}": {
      "get": {
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer"
          },
          {
            "name": "Access-level",
            "in": "header",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        }
      }
    }
  }
}

```

## exercise example 2



```
//---------yml
---  # yaml starts
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

... # yaml ends


//---------json
{
  "swagger": "2.0",
  "info": {
    "version": "0.3.0",
    "title": "music"
  },
  "host": "api.muzicplayz.com",
  "basePath": "/v3",
  "schemes": [
    "https"
  ],
  "paths": {
    "/playlist": {
      "get": {
        "parameters": [
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "type": "integer"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer"
          },
          {
            "name": "search",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        }
      }
    },
    "/playlist/{playlistID}": {
      "delete": {
        "parameters": [
          {
            "name": "playlistID",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful response"
          }
        }
      }
    }
  }
}

```

swagger editor  

http://editor2.swagger.io/#!/



