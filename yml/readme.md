

# yml basics    

## start and end   
All YAML files  can optionally begin with --- and end with .... 

## list   
```
---
# A list of tasty fruits
fruits:
    - Apple
    - Orange
    - Strawberry
    - Mango
...

```

## dictionary

A dictionary is represented in a simple key: value form (the colon must be followed by a space):

```
# An employee record
martin:
    name: Martin D'vloper
    job: Developer
    skill: Elite
```
##

More complicated data structures are possible, such as lists of dictionaries, dictionaries whose values are lists or a mix of both:

```
# Employee records
-  martin:
    name: Martin D'vloper
    job: Developer
    skills:
      - python
      - perl
      - pascal
-  tabitha:
    name: Tabitha Bitumen
    job: Developer
    skills:
      - lisp
      - fortran
      - erlang
```

## abbreviated form of Dictionaries and lists(Flow collections)  

Dictionaries and lists can also be represented in an abbreviated form if you really want to:

```
---
martin: {name: Martin D'vloper, job: Developer, skill: Elite}
fruits: ['Apple', 'Orange', 'Strawberry', 'Mango']
```



