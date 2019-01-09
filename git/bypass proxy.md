
The proxy can be overridden on a per-remote basis - see http://git-scm.com/docs/git-config (look for the "http.proxy" and "remote.<name>.proxy" settings). Assuming you have the remote called "origin" then the command you could use to bypass proxy for this remote is:

```
git config --add remote.origin.proxy ""
```
