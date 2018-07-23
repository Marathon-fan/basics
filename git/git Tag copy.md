


Tags are ref's that point to specific points in Git history. Tagging is generally used to capture a point in history that is used for a marked version release (i.e. v1.0.1). A tag is like a branch that doesn’t change. Unlike branches, tags, after being created, have no further history of commits.


To create a new tag execute the following command:


```
git tag <tagname>
```


Annotated Tags

Annotated tags are stored as full objects in the Git database. To reiterate, They store extra meta data such as: the tagger name, email, and date. Similar to commits and commit messages Annotated tags have a tagging message.

```
git tag -a v1.4
```



Lightweight Tags
```
git tag v1.4-lw
```

Listing Tags

```
git tag

v0.10.0
v0.10.0-rc1
v0.11.0
v0.11.0-rc1
v0.11.1
v0.11.2
v0.12.0
v0.12.0-rc1
v0.12.1
v0.12.2
v0.13.0
v0.13.0-rc1
v0.13.0-rc2

```

```
$ git tag -l *-rc*

v0.10.0-rc1
v0.11.0-rc1
v0.12.0-rc1
v0.13.0-rc1
v0.13.0-rc2
v0.14.0-rc1
v0.9.0-rc1
v15.0.0-rc.1
v15.0.0-rc.2
v15.4.0-rc.3

```


Checking Out Tags
You can view the state of a repo at a tag by using the git checkout command.
```
git checkout v1.4
```

Deleting Tags
Deleting tags is a straightforward operation. Passing the -d option and a tag identifier to git tag will delete the identified tag.
```
$ git tag
v1
v2
v3
$ git tag -d v1
$ git tag
v2
v3
```

## Summary  -- Tagging is an additional mechanism used to create a snap shot of a Git repo.

To recap, Tagging is an additional mechanism used to create a snap shot of a Git repo. Tagging is traditionally used to create semantic version number identifier tags that correspond to software release cycles. The git tag command is the primary driver of tag: creation, modification and deletion. There are two types of tags; annotated and lightweight. 

Annotated tags are generally the better practices as they store additional valuable meta data about the tag. 

Additional Git commands covered in this document were git push, and git checkout. 

Visit their corresponding pages for discussion on their extended use.


