
Linux Crontab Syntax

Linux crontab has six fields. 1-5 fields defines the date and time of execution. The 6’th fields are used for command or script to be executed.The Linux crontab syntax are as following:

[Minute] [hour] [Day_of_the_Month] [Month_of_the_Year] [Day_of_the_Week] [/path/to/script.sh]

```sh
[Minute]                  0 - 59
[hour]                    0 - 23
[Day_of_the_Month]        1 - 31
[Month_of_the_Year]       1 - 12 
[Day_of_the_Week]         0 - 7   (0, 7 are "Sunday")
[/path/to/script.sh]      Command/Script to Execute

```


examples:


Schedule a cron to execute at 2am daily.  
This will be useful for scheduling database backup on daily basis.
```
0 2 * * * /bin/sh backup.sh
```

Schedule a cron to execute twice a day.  
Below example command will execute at 5 AM and 5 PM daily. You can specify multiple time stamp by comma separated.
```
0 5,17 * * * /scripts/script.sh
```


Schedule a cron to execute on every Sunday at 5 PM.  
This type of cron is useful for doing weekly tasks, like log rotation etc.
```
0 17 * * sun  /scripts/script.sh
```


Schedule a cron to execute on every 10 minutes.
```
*/10 * * * * /scripts/monitor.sh
```
*/10: means to run on every 10 minutes. Same as if you want to execute on every 5 minutes use */5.


Schedule a cron to execute on selected months.   
Sometimes we required scheduling a task to be executed for selected months only. Below example script will run in January, May and August months.
```
* * * jan,may,aug *  /script/script.sh
```

