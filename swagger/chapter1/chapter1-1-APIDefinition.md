# chapter1


## anatomy 

```
POST http://api.example.com/user?source=ios&devices=ipad

Accetp: application/json
Content-type: application/json

{
  "name": "xxx yyy",
  "email": "peter@xxx.com"

}

```

method: POST

URL: http://api.example.com/user

query parameters: source=ios&devices=ipad

Headers:  
Accetp: application/json  
Content-type: application/json  

body:  

{
  "name": "xxx yyy",
  "email": "peter@xxx.com"

}


## parameter

https://api.example.com/v2/user/{user-id}/connections/degrees=2

path parameters:  
{user-id}

query parameters:  
degrees


## security

1) none

2) basic auth

3) API key

4) OAuth


