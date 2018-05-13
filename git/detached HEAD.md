


Git command

1  
```
$> git checkout development
$ git checkout 56a4e5c08
Note: checking out '56a4e5c08'.

You are in 'detached HEAD' state...

```

2  usually, you check out a branch, and not a specific commit    
```
$ git checkout master      // checkout a branch   

$ git checkout a05ef02     // checkout a commit


```

```
When you instead choose to check out a commit hash, Git won't do this for you. The consequence is that when you make changes and commit them, these changes do NOT belong to any branch.
This means they can easily get lost once you check out a different revision or branch: not being recorded in the context of a branch, you lack the possibility to access that state easily (unless you have a brilliant memory and can remember the commit hash of that new commit...).
```

As can be seen in https://git-scm.com/docs/git-checkout





