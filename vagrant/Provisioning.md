

Provisioning
Provisioners in Vagrant allow you to automatically install software, alter configurations, and more on the machine as part of the vagrant up process.

```
   config.vm.provision "shell", inline: <<-SHELL
     # Install JDK8
     apt update
     apt install -y openjdk-8-jdk
     apt install -y gradle
     # Make gradle to use BUD2 Artifactor
     mkdir -p /home/vagrant/.gradle
     cat > /home/vagrant/.gradle/gradle.properties << EOF
org.gradle.daemon=true
artifactory_contextUrl=https://artifactory.xxx.com/artifactory
artifactory_pluginsUrl=https://artifactory.xxx.com/artifactory/plugins-release
artifactory_user=dummy
artifactory_password=dummy
EOF
   SHELL
```
