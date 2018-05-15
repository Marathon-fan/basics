
Git command———



Git push usage
```
git push <remote> <branch>
```


What does git push -u mean?
```
From the docs, the -u is related to the variable
branch.<name>.merge

Defines, together with branch.<name>.remote, the upstream branch 
for the given branch. It tells git fetch/git pull which branch to merge.

"Upstream" would refer to the main repo that other people will be pulling from, e.g. your GitHub repo. The -u option automatically sets that upstream for you, linking your repo to a central one. That way, in the future, Git "knows" where you want to push to and where you want to pull from, so you can use git pull or git push without arguments. 

```


