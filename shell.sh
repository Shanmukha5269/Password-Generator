#!/bin/bash

# by this script the password page can be deployed


set -e

# updating packages

echo "Updating packages..."
sudo apt update
sudo apt-get upgrade

# building docker images

echo "Building docker image..."
sudo docker build -t password .

# running container

sudo docker run -d -p 2300:80 password
echo "Container is runnig in port 2300....."

echo "Deployment Successfull"

