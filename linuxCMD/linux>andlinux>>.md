
> redirects output to a file, overwriting the file.

>> redirects output to a file appending the redirected output at the end.


```sh
1 0 * * * /vol01/sites/provisioning/MNMS/45627/45627.sh1 >> /vol01/sites/provisioning/MNMS/45627/output/cron.log 2>&1

```
