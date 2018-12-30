


html-wrapped, default:
```sh
https://github.com/raspberrypi/linux/blob/rpi-4.9.y/arch/arm/configs/bcmrpi_defconfig
```
raw link, if you right-click the [raw] button on the html page:
```sh
https://github.com/raspberrypi/linux/raw/rpi-4.9.y/arch/arm/configs/bcmrpi_defconfig
```
final url, after being redirected:
```sh
https://raw.githubusercontent.com/raspberrypi/linux/rpi-4.9.y/arch/arm/configs/bcmrpi_defconfig
```
You can then download with either(**Notice "blob" is deleted**):
```sh
wget https://raw.githubusercontent.com/raspberrypi/linux/rpi-4.9.y/arch/arm/configs/bcmrpi_defconfig
curl https://raw.githubusercontent.com/raspberrypi/linux/rpi-4.9.y/arch/arm/configs/bcmrpi_defconfig -o bcmrpi_defconfig
```

The simplest way would be to go to the github page of the content you want and right-click to get the [raw] link for each file. If your needs are more complex, requiring many files, etc. you may want to abandon wget and curl and just use git. It is probably a more appropriate tool for pulling data from git repositories.