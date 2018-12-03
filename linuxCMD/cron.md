
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
