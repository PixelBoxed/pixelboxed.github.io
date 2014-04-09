# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Specify box to load with source url to download if we don't already have it
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  # Provision everything specified in the bootstrap file
  config.vm.provision :shell, :path => "vagrantprov"

  # Configure port forwarding so we can access localhost:8080 and hit port 80 on the box
  config.vm.network :forwarded_port, host: 8080, guest: 80

  # Set permissions on the shared www directory in Apache so we can modify files in it
  config.vm.synced_folder ".", "/vagrant", :mount_options => ['dmode=777,fmode=666']

end