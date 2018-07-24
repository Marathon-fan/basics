
Git command———


Undoing Commits & Changes

**reset moves the current branch, and optionally copies data from the Repository to the other areas**

Reset does different things in different contexts.(three main Areas(working area, index, repository) and git's branches)

```
--hard      copy data from repository to index and working area

--mixed     (default option)     copy data from repository to index 

--soft      just move the branch, doesn't copy data
```


# Revert changes to modified files.(current branch)   
```
git reset --hard
```

# Remove all untracked files and directories. (`-f` is `force`, `-d` is `remove directories`)
```
git clean -fd
```
///////////////////////////////

First get the commit ID
```
git log
```
or use
```
git log --oneline
```


then use the following cmd to revert into the a commit ID
```
git revert commit-id

will add a new commit named revert xxx
```


**Be careful when you revert merge commits**

**Revert doesn't mean undo**


// git test
