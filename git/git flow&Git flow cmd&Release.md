
Git flow

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow


A complete example demonstrating a Feature Branch Flow is as follows. Assuming we have a repo setup with a master branch.

```
git checkout master
git checkout -b develop
git checkout -b feature_branch
# work happens on feature branch
git checkout develop
git merge feature_branch
git checkout master
git merge develop
git branch -d feature_branch
```


In addition to the feature and release flow, a hotfix example is as follows:

```
git checkout master
git checkout -b hotfix_branch
# work is done commits are added to the hotfix_branch
git checkout develop
git merge hotfix_branch
git checkout master
git merge hotfix_branch
```

uat
```
always push code to uat, but never pull code from uat(as some code is unnecessary and will be not published)

uat git flow

https://www.linkedin.com/pulse/git-flow-extended-qa-uat-balazs-hideghety/

```

Summary
Here we discussed the Gitflow Workflow. Gitflow is one of many styles of Git workflows you and your team can utilize.

Some key takeaways to know about Gitflow are:
```
The workflow is great for a release-based software workflow.
Gitflow offers a dedicated channel for hotfixes to production.
```

The overall flow of Gitflow is:
```
A develop branch is created from master
A release branch is created from develop
Feature branches are created from develop
When a feature is complete it is merged into the develop branch
When the release branch is done it is merged into develop and master
If an issue in master is detected a hotfix branch is created from master
Once the hotfix is complete it is merged to both develop and master
```

/////////////////////////////////////


- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Master` 
This is a highly stable branch that is always production-ready and contains the last release version of source code in production.


- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Develop` 
Derived from the master branch, the development branch serves as a branch for integrating different features planned for an upcoming release. This branch may or may not be as stable as the master branch. It is where developers collaborate and merge feature branches.


- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Feature` 
This derives from the develop branch and is used to develop features.



- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Release` 
This also derives from develop branch but is used during releases.


- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `Hotfix` 
This derives from the master branch and is used to fix a bug in the production branch that was identified after a release.



![giflowForRelease](./pics/gitFlow-release.jpg)


/////////////////////////////////////
git flow tools

https://blog.axosoft.com/gitflow/

https://gist.github.com/JamesMGreene/cdd0ac49f90c987e45ac

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow



mac install git flow
```
brew install git-flow
```

```
$ git flow
usage: git flow <subcommand>

Available subcommands are:
   init      Initialize a new git repo with support for the branching model.
   feature   Manage your feature branches.
   release   Manage your release branches.
   hotfix    Manage your hotfix branches.
   support   Manage your support branches.
   version   Shows version information.
```


