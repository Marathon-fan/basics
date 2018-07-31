


Git command———branch


gitflow model with UAT releases is too chaotic, how to simplify?
```

At $DAYJOB, we have the following release/delivery pipeline:

Get new features, work on new features.
Once all features are completed, our own QA performs regressions, etc.
QA signs off on first UAT build, ships to customer UAT department (this is really customer's own QA force). This begins our initial version (e.g. v1.0)
Customer QA (UAT) finds issues, sends us back a list.
Development addresses the list of issues. Sometimes they might ask for non-defects, such as improvements or small features. We triage these on a case-by-case basis. Our own QA also verifies the fixes. They sign off, we ship a new build (this gets a version bump, like v1.1)
This "get list" and "work on the list" process cycles a few times, until customer signs off on the build (UAT Pass).
Signed-off build becomes "production". Now developers can start working on new features for the next release.
Some notes on this process:

We use a bastardized version of git-flow for this process (will explain in more detail later).
Regarding versioning, we do not differentiate between UAT releases and production releases. We have to assume any release to UAT might be signed off and go gold at any time. For us, each build "out the door" is treated as a "production release".
Developers work on branches off of develop for new features. We even work on features for the next release. However, we do not merge features until they are scheduled for release. This is because we do not create 'release' branches (more on this later).
Here is how our development process goes for both bugs and features:

Developer branches off develop and begins work.
Developer finishes work, performs code review
Code review passes, and we indicate to QA the branch is ready for testing. Our CI build system builds every branch in the remote repository, and QA can grab ad-hoc builds off of any branch. QA tests features in branches (and not off of develop) for a few reasons:
Builds on develop might include multiple features or bug fixes from multiple developers over the course of some time. When regressions occur, it becomes more difficult to track down what caused the regressions. The "test-each-branch" model allows us to isolate regressions to the changes on that branch (i.e. the one feature or bugfix).
All features must be tested on a branch because we do not merge them into develop until QA is happy with it. Also QA controls deployment schedule, so they know when develop is ready for new features.
We're tight on QA resources. At the moment we have a 4-to-1 ratio of developers to QA personnel. They simply can't keep up with the work we do.
Once QA is happy with the feature on the branch, they mark it as "verified".
Once verified, it sits there unchanged until someone with appropriate authority "approves" the feature or branch. At this point, a developer rebases/merges latest into the branch, fixes conflicts, then merges it into develop.
When we finally release software (new UAT build usually), we do a merge from develop directly into master.

Symptoms of the current system:

Tons of branches sitting around waiting to be merged. Over 100 at the moment, and the turnaround time is sometimes months before they are merged.
Process is complex and tightly controlled by QA
Throw submodules into the mix and you've got a recipe for disaster and complexity.
The reason we don't use the release branches right now is because we've had a bad experience with them. UAT process can sometimes take months. Sometimes they request features, unreasonably, and upper management allows it. We've had our release branches become numerous, long-lived, with huge parity issues (in other words, they accumulate tons of changes over their lifetime).

This whole thing is pretty chaotic and tough to manage. However, QA gives us a ton of great feedback on this process because our releases are super stable. This is because QA touches every branch before it is merged, whereas before developers merged all day long to develop and QA couldn't keep up with the changes, so a bunch of stuff went untested in releases.

Now that I've explained our process and situation, some questions:

How can we simplify this process?
How should release branches be handled when you have UAT process in the middle? Ideally we want to be able to continue active development on develop after UAT starts.
```

////////////////////

```
Many familiar issues that I've also seen at many organizations.

My suggestions are as follows:

Branch off master for feature branches
Have QA do the merge back into master and push it
Release master weekly and tag each release with the release date
That's code and workflow-wise.

The harder parts are likely to be:

changing the culture
There are probably a diversity of opinion on what is wrong and why it is. You'll need to have buy in and championing from the highest (relevant) level of the organization. You'll need to explain and sell the advantages of such a slimmed down system. Explain the simplicity and the rapid turnaround. Make sure your (probably) agile process is not just lip service but fully thought out from actual agile practices and, when possible, scrum masters.

changing the existing workflow You'll need to put together the new workflow and then develop a plan that will let you transition to it.

Other thoughts:

consider implementing a comprehensive feature switch system that will let your merge in (some) changes but have the features turns on/off through an admin gui.

in your deliver pipeline rather than finishing the feature and passing to QA, consider involving QA through the design, implementation and testing so that their final ok is a pass thru of well understood and agreed on assumptions. You don't want QA surprised by an implementation and you don't want developers surprise by how QA decides to test.

Have a weekly release meeting with all parties involved and go thru all the tickets. This can easily be 50-100 tickets. Touch base on each one for: release implications to the business, pre release steps, post release steps, downtimes, etc.

```