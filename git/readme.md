

git branch   

# branch setup    

```
1 develop     // for develop  
2 release     // for release    
3 hotfix      // for emergent fix in production environment    
4 feature     // for developing features      
```

# git branch example    
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

Pull requests
```
Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
```

