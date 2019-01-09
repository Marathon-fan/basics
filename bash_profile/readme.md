

## make your terminal more colorful and also to display the current git branch

for mac, add the following lines with vi ~/.bash_profile
```
# colors
PS1='\w\[\033[0;32m\]$( git branch 2> /dev/null | cut -f2 -d\* -s | sed "s/^ / [/" | sed "s/$/]/" )\[\033[0m\] \$ '

# Tell grep to highlight matches
export GREP_OPTIONS='--color=auto'

# Tell ls to be colourful
export CLICOLOR=1
export LSCOLORS=Exfxcxdxbxegedabagacad
```
then 
```
$> source ~/.bash_profile
```

## /etc/environment vs /etc/bash.bashrc   

The /etc/environment file sets the variable system wide for every user on boot. Commands in the /etc/bash.bashrc are is executed if the bash shell is opened by any user. So the variables would not be set unless a bash shell is opened at least one time.

One difference is that /etc/environment contains only variable definitions and doesn't appear to go through any sort of variable expansion/interpolation. Thus, you can't reference variables in definitions. This for instance won't work:
```
A="else"
B="something $A"
```
B will literally be something $A, not the expected something else.

