
Git command———


Undoing Commits & Changes

# Revert changes to modified files.   
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
```

