
git remote

Manage set of tracked repositories


DESCRIPTION
Manage the set of repositories ("remotes") whose branches you track.

OPTIONS
-v
--verbose
Be a little more verbose and show remote url after name. NOTE: This must be placed between remote and subcommand.






```sh

$ git remote
origin
$ git branch -r
  origin/HEAD -> origin/master
  origin/master
$ git remote add staging git://git.kernel.org/.../gregkh/staging.git
$ git remote
origin
staging
$ git fetch staging
...
From git://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging
 * [new branch]      master     -> staging/master
 * [new branch]      staging-linus -> staging/staging-linus
 * [new branch]      staging-next -> staging/staging-next
$ git branch -r
  origin/HEAD -> origin/master
  origin/master
  staging/master
  staging/staging-linus
  staging/staging-next
$ git checkout -b staging staging/master
...

```
