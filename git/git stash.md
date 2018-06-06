
Git command———

The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy. 

```
git add -A
git stash            // save all the tracks in a stash
...
git stash pop        // apply the stash to current branch, and the stash is gone
git stash apply      // apply the stash to current branch, and the stash can be resued for other branch  

```



