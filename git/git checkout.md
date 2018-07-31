


Git command———branch


1 git checkout <branch>    /// - Switch branches or restore working tree files      

```
To prepare for working on <branch>, switch to it by updating the index and the files in the working tree, and by pointing HEAD at the branch. Local modifications to the files in the working tree are kept, so that they can be committed to the <branch>.
```    

2 git checkout -b|-B <new_branch> [<start point>]  //      

```
Specifying -b causes a new branch to be created as if git-branch[1] were called and then checked out. 
```

3 git checkout --detach [<branch>]    

Prepare to work on top of <commit>, by detaching HEAD at it (see "DETACHED HEAD" section), and updating the index and the files in the working tree. Local modifications to the files in the working tree are kept, so that the resulting working tree will be the state recorded in the commit plus the local modifications.   


4 --detach   
Rather than checking out a branch to work on it, check out a commit for inspection and discardable experiments. This is the default behavior of "git checkout <commit>" when <commit> is not a branch name. See the "DETACHED HEAD" section below for details.


5 -m   
--merge   
When switching branches, if you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context. However, with this option, a three-way merge between the current branch, your working tree contents, and the new branch is done, and you will be on the new branch.



6 git checkout [revision] .

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






