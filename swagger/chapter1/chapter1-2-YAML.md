# chapter1


## YAML  
YAML Ain't Markup Language  

used for data, not content

## levels  
levels are indicated by white space indenting(not tab)  

## quotes

in general, you don't need quotes around strings  

exception: something that will be interpreted as a number or boolean

price: 11.47        #float
version: "11.47"    # string, not float
company: SDK Bridge #string

## list  

use a dash to indicate a list item

```
cart: 
  - part_no: A4786
    description: Photoresistor
    price: 1.47
    quantity: 4

  - part_no: B898
    description: LED
    color: blue
    price: 0.29


//---------
{
  "cart": [
    {
      "part_no": "A4786",
      "description": "Photoresistor",
      "price": 1.47,
      "quantity": 4
    },
    {
      "part_no": "B898",
      "description": "LED",
      "color": "blue",
      "price": 0.29
    }
  ]
}
```


## multi-line strings

| means preserve lines and spaces  
> means fold lines  
there are variations: |-, |+, etc  

```
//---------
speeech: |
  Four score
     and seven years ago

//---------

{
  "speeech": "Four score\n   and seven years ago"
}
```

```
//---------yml
speech: >
  Four score
  and seven years ago

//---------json
{
  "speech": "Four score and seven years ago"
}
```

## schemas  
OAS uses references for schemas  
used for request and response bodies  
use $ref to indicate a reference  
typically put the schema in a definitions section  




```
//---------yml
schema: 
  $ref: '#/definitons/user'  #// 1) $ sign with ref key  2) path to refer another part of file  
...
definitions:
  user: 
    required:
      - username
      - id
    properties:
      username:
        type: string
      id: 
        type: integer
        format: int64
              
//---------json
{
  "schema": {
    "$ref": "#/definitons/user"
  },
  "definitions": {
    "user": {
      "required": [
        "username",
        "id"
      ],
      "properties": {
        "username": {
          "type": "string"
        },
        "id": {
          "type": "integer",
          "format": "int64"
        }
      }
    }
  }
}
```


exercise 1

```
//---------yml
---  # yaml start
title: Wizard's Chioce
author: Delight Games

sections:
  - id: intro
    content: 
      - > 
        You are a young wizard seeking treasure and glory. You
        are walking along a path in the forest. Night has just
        fallen and you're thinking about how it might be a good
        idea to find a campsite. After all, you are in goblin
        territory, and it is dangerous to travel in the dark.
      - >
        Suddenly you smell something awful. What do you do?
    choices: 
      - description: Dive flat on your face
        id: dive      

      - description: Dive flat on your face
        id: dive      

      - description: Hide
        id: hide      

      - description: Stop and listen
        id: stop
  - id: hide
    content: | 
      When in doubt, hiding is a fine strategy. And the forest offers plenty of cover.

      Now inside the brush, you can see green, glowing eyes staring at you from behind a tree several paces away. You hear a snort as several green-skinned goblins charge out of hiding toward you.

      What do you do?

    chioces: 
      - description: Fight the goblins
        id: fight    

      - description: Run away
        id: run     


...  # yaml end


//---------json
{
  "title": "Wizard's Chioce",
  "author": "Delight Games",
  "sections": [
    {
      "id": "intro",
      "content": [
        "You are a young wizard seeking treasure and glory. You are walking along a path in the forest. Night has just fallen and you're thinking about how it might be a good idea to find a campsite. After all, you are in goblin territory, and it is dangerous to travel in the dark.\n",
        "Suddenly you smell something awful. What do you do?\n"
      ],
      "choices": [
        {
          "description": "Dive flat on your face",
          "id": "dive"
        },
        {
          "description": "Dive flat on your face",
          "id": "dive"
        },
        {
          "description": "Hide",
          "id": "hide"
        },
        {
          "description": "Stop and listen",
          "id": "stop"
        }
      ]
    },
    {
      "id": "hide",
      "content": "When in doubt, hiding is a fine strategy. And the forest offers plenty of cover.\n\nNow inside the brush, you can see green, glowing eyes staring at you from behind a tree several paces away. You hear a snort as several green-skinned goblins charge out of hiding toward you.\n\nWhat do you do?\n",
      "chioces": [
        {
          "description": "Fight the goblins",
          "id": "fight"
        },
        {
          "description": "Run away",
          "id": "run"
        }
      ]
    }
  ]
}
```







