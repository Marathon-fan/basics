
Git command———

delete a remote branch using
```sh
$> git push <remote_name> --delete <branch_name>
Like $> git push origin --delete <branch_name>
```

To delete the local branch :
```sh
$> git branch -d branch_name

or
$ git branch -D branch_name

```


what happens when we delete a branch in git
```
Branches are just pointers to commits in git. In git each commit has a complete source tree, it is a very different structure from svn where all branches and tags (by convention) live in separate 'folders' of the repository alongside the special 'trunk'.

If the branch was merged into another branch before it was deleted then all of the commits will still be reachable from the other branch when the first branch is deleted. They remain exactly as they were.

If the branch is deleted without being merged into another branch then the commits in that branch (up until the point where the forked from a commit that is still reachable) will cease to be visible.

The commits will still be retained in the repository and it is possible to recover them immediately after the delete, but eventually they will be garbage collected.
```
