
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


# Rollback to an old Git commit in a public repo


```
git checkout [revision] .
```
where [revision] is the commit hash (for example: 12345678901234567890123456789012345678ab).

Don't forget the . at the end, very important. This will apply changes to the whole tree. Then commit and you should be good.

You can undo this by
```
git reset --hard; 
```
that will delete all modifications from the working directory and staging area.



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

revert a revert(when you mistakenly reverted something)
```
Reverting the revert will do the same thing, with a messier commit message:
git revert <commit sha of the revert>
```


**Be careful when you revert merge commits**

**Revert doesn't mean undo**

///////////////////////////////
reset vs checkout

In their simplest form, 
**reset** resets the index without touching the working tree, while 
**checkout** changes the working tree without touching the index.




// git test
