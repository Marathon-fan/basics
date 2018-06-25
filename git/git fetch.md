
Git command———



If you only want to download the latest changes and review them before merging or want to merge at a later time, git fetch is your friend. Like git pull, it will download latest changes. Unlike git pull, it will not merge those changes. You might wonder where the changes are stored since they are not merged. The answer is that they are stored in your local repository in what are called remote tracking branches. A remote tracking branch is a local copy (or mirror) of a remote branch. For example, when you run git branch -a you might notice origin/master in the output which is the remote tracking brach for master.


In short: Both are similar with one key difference: git fetch only downloads latest changes where as git pull also merges them.

///////////////////////////////////////////////////////////////

Git fetch commands and options


Fetch all of the branches from the repository. This also downloads all of the required commits and files from the other repository.
The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on. It’s similar to svn update in that it lets you see how the central history has progressed, but it doesn’t force you to actually merge the changes into your repository. Git isolates fetched content as a from existing local content, it has absolutely no effect on your local development work.

Fetched content has to be explicitly checked out using the git checkout command. 

This makes fetching a safe way to review commits before integrating them with your local repository.

git fetch example
```
git fetch coworkers feature_branch
fetching coworkers/feature_branch

git checkout coworkers/feature_branch
Note: checking out coworkers/feature_branch'.


```

when we are in local/master,
after 
```
git fetch origin
```

we may have several options:
```
git checkout origin/master               // remote master has renewed

git checkout origin/develop              // remote dev has renewed

git checkout origin/someFeature          // remote feature has renewed


```





```
git fetch <remote>
```

//////////////////////////////////////////////////////////////////////////////////////////////

```
git fetch <remote> <branch>

```
Same as the above command, but only fetch the specified branch.




//////////////////////////////////////////////////////////////////////////////////////////////

```
git fetch --all

```
A power move which fetches all registered remotes and their branches:



//////////////////////////////////////////////////////////////////////////////////////////////

```
git fetch --dry-run

```
The --dry-run option will perform a demo run of the command. I will output examples of actions it will take during the fetch but not apply them.



//////////////////////////////////////////////////////////////////////////////////////////////

example

```
git remote coworkers_repo git@bitbucket.org:coworker/coworkers_repo.git

```

Here we have created a reference to the coworker's repo using the repo URL. We will now pass that remote name to git fetch to download the contents.

```
git fetch coworkers feature_branch
fetching coworkers/feature_branch
```

We now locally have the contents of coworkers/feature_branch we will need the integrate this into our local working copy. We begin this process by using the git checkout command to checkout the newly downloaded remote branch.

```
git fetch coworkers feature_branch
fetching coworkers/feature_branch
```

We now locally have the contents of coworkers/feature_branch we will need the integrate this into our local working copy. We begin this process by using the git checkout command to checkout the newly downloaded remote branch.

```
git checkout coworkers/feature_branch
Note: checking out coworkers/feature_branch'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

git checkout -b <new-branch-name>

```

The output from this checkout operation indicates that we are in a detached HEAD state. This is expected and means that our HEAD ref is pointing to a ref that is not in sequence with our local history. Being that HEAD is pointed at the coworkers/feature_branch ref, we can create a new local branch from that ref. The 'detached HEAD' output shows us how to do this using the git checkout command:


```
git checkout -b local_feature_branch

```

Here we have created a new local branch named local_feature_branch this puts updates HEAD to point at the latest remote content and we can continue development on it from this point.

//////////////////////////////////////////////////////////////////////////////////////////////

```

```


//////////////////////////////////////////////////////////////////////////////////////////////

Git fetch summary
In review, git fetch is a primary command used to download contents from a remote repository. git fetch is used in conjunction with git remote, git branch, git checkout, and git reset to update a local repository to the state of a remote. The git fetch command is a critical piece of collaborative git work flows. git fetch has similar behavior to git pull however git fetch can be considered a safer, nondestructive version.


reference      
[1]https://www.atlassian.com/git/tutorials/syncing/git-fetch
