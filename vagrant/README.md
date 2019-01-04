
# vagrant

## common debug   

### case 1   

vagrant file   
```sh

vagrantNode = { :host => "master", :ip => "10.10.45.9", :box => "debian/jessie64", :gui => false}


varDomain = "hadoopVagrantTest"

puts "#{vagrantNode[:host]}.#{varDomain}"
puts "#{vagrantNode[:box]}"

Vagrant.configure("2") do |config|

  config.vm.box = vagrantNode[:box]
  config.vm.network "private_network", ip: vagrantNode[:ip], :netmask => "255.255.255.0"
  config.vm.hostname = "#{vagrantNode[:host]}.#{varDomain}"

  config.vm.synced_folder ".", "/vagrant", type: "nfs" # this line is for mac. When uder Windows, we don't need this line


  #
  config.vm.provider "virtualbox" do |vb|
     vb.name = vagrantNode[:host].to_s
     vb.gui = vagrantNode[:gui]
     vb.memory = "2048"
     vb.cpus = 2
   end
  #

   config.vm.provision "shell", inline: <<-SHELL
     # Install JDK8
     apt update
     apt install -y openjdk-8-jdk
     apt install -y gradle
     # Make gradle to use BUD2 Artifactor
     mkdir -p /home/vagrant/.gradle
     cat > /home/vagrant/.gradle/gradle.properties << EOF
org.gradle.daemon=true
artifactory_contextUrl=https://xxx/artifactory
artifactory_pluginsUrl=https://xxx/artifactory/plugins-release
artifactory_user=dummy
artifactory_password=dummy
EOF
   SHELL
end

```

error message:   
```
Vagrant error :NFS is reporting that your exports file is invalid
==> default: Exporting NFS shared folders...
NFS is reporting that your exports file is invalid. Vagrant does
this check before making any changes to the file. Please correct
the issues below and execute "vagrant reload":

exports:2: path contains non-directory or non-existent components: /Users/<username>/path/to/vagrant
exports:2: no usable directories in export entry
exports:2: using fallback (marked offline): /
exports:5: path contains non-directory or non-existent components: /Users/<username>/path/to/vagrant
exports:5: no usable directories in export entry
exports:5: using fallback (marked offline): /
```

solution:  
```sh
This means that you may already have old vagrant path definitions in your /etc/exports file.

Try opening up /etc/exports file to identify old or unwanted vagrant paths and removing them if necessary

On opening /etc/exports file each set begins with # VAGRANT-BEGIN: and ends with # VAGRANT-END:. Make sure to delete these and any other lines between VAGRANT-BEGIN: and VAGRANT-END:

or maybe(on host machine)   

sudo rm /etc/exports
sudo touch /etc/exports    # which means that we remove all the content in exports and new an empty exports file

vagrant halt
vagrant up                 # or `vagrant reload`
```


