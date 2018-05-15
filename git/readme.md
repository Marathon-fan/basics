

git branch   

# branch setup    

```
1 develop     // for develop  
2 release     // for release    
3 hotfix      // for emergent fix in production environment    
4 feature     // for developing features      
```

# git branch example1 - normal development process   
```
1 create a local feature branch(call localFeature), use this branch to modify code and commit changes locally  

2 switch to develop branch, 

pull remote code

as other colleagues may have changed the code

3 switch back to localFeature branch

$> git rebase develop

so that the commitment in localFeature branch will be placed in the front of develop branch

4 switch back to develop branch, 

$> git merge localFeature

so that we merge the commitment from localFeature to develop branch  

5 push code in local develop branch to remote repo 

```



# git branch example2 - simple example of push a localBranch to a new remote branch   
```
1 commit local branch(say the local branch is call localBranch)

2 create a local branch called newRemoteBranch and switch to that branch 

$> git checkout -b newRemoteBranch


3 push the local content to remote, and use the branch call newRemoteBranch

$> git push origin newRemoteBranch

```



Pull requests
```
Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
```

Pushing to a remote
```
Use git push to push commits made on your local branch to a remote repository.

The git push command takes two arguments:

A remote name, for example, origin
A branch name, for example, master
```

