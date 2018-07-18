
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


