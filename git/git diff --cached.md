

show uncommitted changes in Git

if You have already staged the changes (presumably by running git add),  in order to get their diff, you need to run:

**git diff --cached**    
(A plain git diff will only show unstaged changes.)

Here are some of the options it expose which you can use
```
git diff (no parameters)
Print out differences between your working directory and the index.

git diff --cached:
Print out differences between the index and HEAD (current commit).

git diff HEAD:
Print out differences between your working directory and the HEAD.

git diff --name-only
Show only names of changed files.

git diff --name-status
Show only names and status of changed files.

git diff --color-words
Word by word diff instead of line by line.
```
