# Exercises

### Lab 1: hello-world


```
vagrant@ubuntu-bionic:~$ docker container run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:d1668a9a1f5b42ed3f46b70b9cb7c88fd8bdc8a2d73509bb0041cf436018fbf5
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

vagrant@ubuntu-bionic:~$ docker container run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

### Lab 2: Running your first container from image

```
vagrant@ubuntu-bionic:~$ docker image pull alpine
Using default tag: latest
latest: Pulling from library/alpine
e6b0cf9c0882: Pull complete
Digest: sha256:2171658620155679240babee0a7714f6509fae66898db422ad803b951257db78
Status: Downloaded newer image for alpine:latest
docker.io/library/alpine:latest
vagrant@ubuntu-bionic:~$ docker image ls
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
alpine                                    latest              cc0abc535e36        3 weeks ago         5.59MB
k8s.gcr.io/kube-proxy                     v1.17.0             7d54289267dc        5 weeks ago         116MB
k8s.gcr.io/kube-scheduler                 v1.17.0             78c190f736b1        5 weeks ago         94.4MB
k8s.gcr.io/kube-apiserver                 v1.17.0             0cae8d5cc64c        5 weeks ago         171MB
k8s.gcr.io/kube-controller-manager        v1.17.0             5eb3b7486872        5 weeks ago         161MB
kubernetesui/dashboard                    v2.0.0-beta8        eb51a3597525        5 weeks ago         90.8MB
k8s.gcr.io/coredns                        1.6.5               70f311871ae1        2 months ago        41.6MB
k8s.gcr.io/etcd                           3.4.3-0             303ce5db0e90        2 months ago        288MB
kubernetesui/metrics-scraper              v1.0.2              3b08661dc379        2 months ago        40.1MB
k8s.gcr.io/kube-addon-manager             v9.0.2              bd12a212f9dc        5 months ago        83.1MB
hello-world                               latest              fce289e99eb9        12 months ago       1.84kB
k8s.gcr.io/pause                          3.1                 da86e6ba6ca1        2 years ago         742kB
gcr.io/k8s-minikube/storage-provisioner   v1.8.1              4689081edb10        2 years ago         80.8MB
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container run alpine ls -l
total 56
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 bin
drwxr-xr-x    5 root     root           340 Jan 15 12:09 dev
drwxr-xr-x    1 root     root          4096 Jan 15 12:09 etc
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 home
drwxr-xr-x    5 root     root          4096 Dec 24 15:04 lib
drwxr-xr-x    5 root     root          4096 Dec 24 15:04 media
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 mnt
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 opt
dr-xr-xr-x  112 root     root             0 Jan 15 12:09 proc
drwx------    2 root     root          4096 Dec 24 15:04 root
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 run
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 sbin
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 srv
dr-xr-xr-x   13 root     root             0 Jan 15 12:09 sys
drwxrwxrwt    2 root     root          4096 Dec 24 15:04 tmp
drwxr-xr-x    7 root     root          4096 Dec 24 15:04 usr
drwxr-xr-x   12 root     root          4096 Dec 24 15:04 var
vagrant@ubuntu-bionic:~$ docker container run alpine echo "hello from alpine"
hello from alpine
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container run alpine /bin/sh
vagrant@ubuntu-bionic:~$ docker container run -it alpine /bin/sh
/ # ls -l
total 56
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 bin
drwxr-xr-x    5 root     root           360 Jan 15 12:10 dev
drwxr-xr-x    1 root     root          4096 Jan 15 12:10 etc
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 home
drwxr-xr-x    5 root     root          4096 Dec 24 15:04 lib
drwxr-xr-x    5 root     root          4096 Dec 24 15:04 media
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 mnt
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 opt
dr-xr-xr-x  114 root     root             0 Jan 15 12:10 proc
drwx------    1 root     root          4096 Jan 15 12:11 root
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 run
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 sbin
drwxr-xr-x    2 root     root          4096 Dec 24 15:04 srv
dr-xr-xr-x   13 root     root             0 Jan 15 12:10 sys
drwxrwxrwt    2 root     root          4096 Dec 24 15:04 tmp
drwxr-xr-x    7 root     root          4096 Dec 24 15:04 usr
drwxr-xr-x   12 root     root          4096 Dec 24 15:04 var
/ # uname -a
Linux 1f8f5b8feb81 4.15.0-72-generic #81-Ubuntu SMP Tue Nov 26 12:20:02 UTC 2019 x86_64 Linux
/ # exit
vagrant@ubuntu-bionic:~$ docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
vagrant@ubuntu-bionic:~$ docker container ls -a
CONTAINER ID        IMAGE                  COMMAND                  CREATED             STATUS                          PORTS               NAMES
1f8f5b8feb81        alpine                 "/bin/sh"                2 minutes ago       Exited (0) About a minute ago                       laughing_solomon
61cb6c7dd54c        alpine                 "/bin/sh"                2 minutes ago       Exited (0) 2 minutes ago                            trusting_williams
2d5a9b83e0cd        alpine                 "/bin/sh"                2 minutes ago       Exited (0) 2 minutes ago                            silly_chaplygin
2b6f16e133cc        alpine                 "echo 'hello from al…"   3 minutes ago       Exited (0) 3 minutes ago                            hopeful_leavitt
bec741efa1b8        alpine                 "ls -l"                  3 minutes ago       Exited (0) 3 minutes ago                            zealous_matsumoto
e5ca30b4b329        hello-world            "/hello"                 8 minutes ago       Exited (0) 8 minutes ago 
vagrant@ubuntu-bionic:~$
```

### Lab 3: Deletion

```
vagrant@ubuntu-bionic:~$ docker container run -ti alpine
/ # ls /
bin    etc    lib    mnt    proc   run    srv    tmp    var
dev    home   media  opt    root   sbin   sys    usr
/ # rm -rf / > /dev/null 2>&1
/ # ls
/bin/sh: ls: not found
/ # whoami
/bin/sh: whoami: not found
/ # date
/bin/sh: date: not found
/ #
vagrant@ubuntu-bionic:~$ docker container run -ti alpine
/ # ls /
bin    etc    lib    mnt    proc   run    srv    tmp    var
dev    home   media  opt    root   sbin   sys    usr
/ #

vagrant@ubuntu-bionic:~$ docker container ls -as
CONTAINER ID        IMAGE                  COMMAND                  CREATED              STATUS                       PORTS               NAMES                                                                                                         SIZE
57ed68d0bb78        alpine                 "/bin/sh"                About a minute ago   Exited (0) 26 seconds ago                        romantic_gauss                                                                                                10B (virtual 5.59MB)
68a61ab6401d        alpine                 "/bin/sh"                3 minutes ago        Exited (127) 2 minutes ago                       elastic_nobel                                                                                                 0B (virtual 5.59MB)
f05e3a777f30        alpine                 "/bin/sh"                4 minutes ago        Exited (1) 4 minutes ago
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container run --rm -it alpine
/ # exit
vagrant@ubuntu-bionic:~$ docker container ls -as
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES               SIZE
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container run -ti alpine
/ # exit
vagrant@ubuntu-bionic:~$ docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
ed71b2604c30        alpine              "/bin/sh"           20 seconds ago      Exited (0) 9 seconds ago                       gracious_pike
vagrant@ubuntu-bionic:~$ docker container rm gracious_pike
gracious_pike
vagrant@ubuntu-bionic:~$ docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker image ls
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
alpine                                    latest              cc0abc535e36        3 weeks ago         5.59MB
k8s.gcr.io/kube-proxy                     v1.17.0             7d54289267dc        5 weeks ago         116MB
k8s.gcr.io/kube-controller-manager        v1.17.0             5eb3b7486872        5 weeks ago         161MB
k8s.gcr.io/kube-scheduler                 v1.17.0             78c190f736b1        5 weeks ago         94.4MB
k8s.gcr.io/kube-apiserver                 v1.17.0             0cae8d5cc64c        5 weeks ago         171MB
kubernetesui/dashboard                    v2.0.0-beta8        eb51a3597525        5 weeks ago         90.8MB
k8s.gcr.io/coredns                        1.6.5               70f311871ae1        2 months ago        41.6MB
k8s.gcr.io/etcd                           3.4.3-0             303ce5db0e90        2 months ago        288MB
kubernetesui/metrics-scraper              v1.0.2              3b08661dc379        2 months ago        40.1MB
k8s.gcr.io/kube-addon-manager             v9.0.2              bd12a212f9dc        5 months ago        83.1MB
hello-world                               latest              fce289e99eb9        12 months ago       1.84kB
k8s.gcr.io/pause                          3.1                 da86e6ba6ca1        2 years ago         742kB
gcr.io/k8s-minikube/storage-provisioner   v1.8.1              4689081edb10        2 years ago         80.8MB
vagrant@ubuntu-bionic:~$ docker image rm fce289e99eb9
Untagged: hello-world:latest
Untagged: hello-world@sha256:d1668a9a1f5b42ed3f46b70b9cb7c88fd8bdc8a2d73509bb0041cf436018fbf5
Deleted: sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e
Deleted: sha256:af0b15c8625bb1938f1d7b17081031f649fd14e6b233688eea3c5483994a66a3
vagrant@ubuntu-bionic:~$ docker image ls
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
alpine                                    latest              cc0abc535e36        3 weeks ago         5.59MB
k8s.gcr.io/kube-proxy                     v1.17.0             7d54289267dc        5 weeks ago         116MB
k8s.gcr.io/kube-scheduler                 v1.17.0             78c190f736b1        5 weeks ago         94.4MB
k8s.gcr.io/kube-apiserver                 v1.17.0             0cae8d5cc64c        5 weeks ago         171MB
k8s.gcr.io/kube-controller-manager        v1.17.0             5eb3b7486872        5 weeks ago         161MB
kubernetesui/dashboard                    v2.0.0-beta8        eb51a3597525        5 weeks ago         90.8MB
k8s.gcr.io/coredns                        1.6.5               70f311871ae1        2 months ago        41.6MB
k8s.gcr.io/etcd                           3.4.3-0             303ce5db0e90        2 months ago        288MB
kubernetesui/metrics-scraper              v1.0.2              3b08661dc379        2 months ago        40.1MB
k8s.gcr.io/kube-addon-manager             v9.0.2              bd12a212f9dc        5 months ago        83.1MB
k8s.gcr.io/pause                          3.1                 da86e6ba6ca1        2 years ago         742kB
gcr.io/k8s-minikube/storage-provisioner   v1.8.1              4689081edb10        2 years ago         80.8MB
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Total reclaimed space: 0B
vagrant@ubuntu-bionic:~$ docker image prune
WARNING! This will remove all dangling images.
Are you sure you want to continue? [y/N]
Total reclaimed space: 0B
vagrant@ubuntu-bionic:~$ docker network prune
WARNING! This will remove all networks not used by at least one container.
Are you sure you want to continue? [y/N] y
vagrant@ubuntu-bionic:~$ docker volume prune
WARNING! This will remove all local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
Total reclaimed space: 0B
vagrant@ubuntu-bionic:~$ docker system prune
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] y
Total reclaimed space: 0B
vagrant@ubuntu-bionic:~$
```

### Lab 4: Port-forward

```
vagrant@ubuntu-bionic:~$ docker container run -p 8080:80 nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
8ec398bc0356: Pull complete
dfb2a46f8c2c: Pull complete
b65031b6a2a5: Pull complete
Digest: sha256:8aa7f6a9585d908a63e5e418dc5d14ae7467d2e36e1ab4f0d8f9d059a3d071ce
Status: Downloaded newer image for nginx:latest
10.0.2.2 - - [15/Jan/2020:12:31:54 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36" "-"

vagrant@ubuntu-bionic:~$ docker container run -p 8080:80 -d nginx
ed0618dc23346e9c511ffea8b1f5f14ec2abd68125dd0c0ada52d424e6e3fc23
vagrant@ubuntu-bionic:~$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
ed0618dc2334        nginx               "nginx -g 'daemon of…"   15 seconds ago      Up 13 seconds       0.0.0.0:8080->80/tcp   hardcore_ganguly
vagrant@ubuntu-bionic:~$
```

### Lab 5: Attaching to your container

```
vagrant@ubuntu-bionic:~$ docker container run -d -p 8080:80 nginx
d58796155cb83e21941760caacc243c262afa795cda042897f46cb3b212817c5
vagrant@ubuntu-bionic:~$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
d58796155cb8        nginx               "nginx -g 'daemon of…"   22 seconds ago      Up 20 seconds       0.0.0.0:8080->80/tcp   quizzical_black
vagrant@ubuntu-bionic:~$ docker container attach --sig-proxy=false quizzical_black
10.0.2.2 - - [15/Jan/2020:12:37:43 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36" "-"
^C
vagrant@ubuntu-bionic:~$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
d58796155cb8        nginx               "nginx -g 'daemon of…"   2 minutes ago       Up 2 minutes        0.0.0.0:8080->80/tcp   quizzical_black
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container run -d -p 8080:80 nginx
078f00d32d7278fcb33766f146ac6acbbb03d94cd8d084f30bbab3c2ec1db241
vagrant@ubuntu-bionic:~$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
078f00d32d72        nginx               "nginx -g 'daemon of…"   15 seconds ago      Up 13 seconds       0.0.0.0:8080->80/tcp   trusting_chatelet
vagrant@ubuntu-bionic:~$ docker container exec -it trusting_chatelet bash
root@078f00d32d72:/# apt-get update && apt-get install iputils-ping -y
Get:2 http://deb.debian.org/debian buster InRelease [122 kB]
Get:3 http://deb.debian.org/debian buster-updates InRelease [49.3 kB]
Get:4 http://deb.debian.org/debian buster/main amd64 Packages [7908 kB]
Get:1 http://security-cdn.debian.org/debian-security buster/updates InRelease [65.4 kB]
Get:5 http://deb.debian.org/debian buster-updates/main amd64 Packages [5792 B]
Get:6 http://security-cdn.debian.org/debian-security buster/updates/main amd64 Packages [171 kB]
Fetched 8321 kB in 4s (2052 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  libcap2 libcap2-bin libpam-cap
The following NEW packages will be installed:
  iputils-ping libcap2 libcap2-bin libpam-cap
0 upgraded, 4 newly installed, 0 to remove and 0 not upgraded.
Need to get 104 kB of archives.
After this operation, 315 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian buster/main amd64 libcap2 amd64 1:2.25-2 [17.6 kB]
Get:2 http://deb.debian.org/debian buster/main amd64 iputils-ping amd64 3:20180629-2 [43.0 kB]
Get:3 http://deb.debian.org/debian buster/main amd64 libcap2-bin amd64 1:2.25-2 [28.8 kB]
Get:4 http://deb.debian.org/debian buster/main amd64 libpam-cap amd64 1:2.25-2 [14.3 kB]
Fetched 104 kB in 0s (814 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package libcap2:amd64.
(Reading database ... 7203 files and directories currently installed.)
Preparing to unpack .../libcap2_1%3a2.25-2_amd64.deb ...
Unpacking libcap2:amd64 (1:2.25-2) ...
Selecting previously unselected package iputils-ping.
Preparing to unpack .../iputils-ping_3%3a20180629-2_amd64.deb ...
Unpacking iputils-ping (3:20180629-2) ...
Selecting previously unselected package libcap2-bin.
Preparing to unpack .../libcap2-bin_1%3a2.25-2_amd64.deb ...
Unpacking libcap2-bin (1:2.25-2) ...
Selecting previously unselected package libpam-cap:amd64.
Preparing to unpack .../libpam-cap_1%3a2.25-2_amd64.deb ...
Unpacking libpam-cap:amd64 (1:2.25-2) ...
Setting up libcap2:amd64 (1:2.25-2) ...
Setting up libcap2-bin (1:2.25-2) ...
Setting up libpam-cap:amd64 (1:2.25-2) ...
debconf: unable to initialize frontend: Dialog
debconf: (No usable dialog-like program is installed, so the dialog based frontend cannot be used. at /usr/share/perl5/Debconf/FrontEnd/Dialog.pm line 76.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.28.1 /usr/local/share/perl/5.28.1 /usr/lib/x86_64-linux-gnu/perl5/5.28 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl/5.28 /usr/share/perl/5.28 /usr/local/lib/site_perl /usr/lib/x86_64-linux-gnu/perl-base) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Setting up iputils-ping (3:20180629-2) ...
Processing triggers for libc-bin (2.28-10) ...
root@078f00d32d72:/# ping 127.0.0.1 -c 100 > /tmp/ping
read escape sequence
vagrant@ubuntu-bionic:~$

vagrant@ubuntu-bionic:~$ docker container exec -it trusting_chatelet bash
root@078f00d32d72:/# tail -f /tmp/ping
64 bytes from 127.0.0.1: icmp_seq=61 ttl=64 time=0.081 ms
64 bytes from 127.0.0.1: icmp_seq=62 ttl=64 time=0.062 ms
64 bytes from 127.0.0.1: icmp_seq=63 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=64 ttl=64 time=0.065 ms
64 bytes from 127.0.0.1: icmp_seq=65 ttl=64 time=0.065 ms
64 bytes from 127.0.0.1: icmp_seq=66 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=67 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=68 ttl=64 time=0.058 ms
64 bytes from 127.0.0.1: icmp_seq=69 ttl=64 time=0.061 ms
64 bytes from 127.0.0.1: icmp_seq=70 ttl=64 time=0.059 ms
64 bytes from 127.0.0.1: icmp_seq=71 ttl=64 time=0.054 ms
64 bytes from 127.0.0.1: icmp_seq=72 ttl=64 time=0.060 ms
64 bytes from 127.0.0.1: icmp_seq=73 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=74 ttl=64 time=0.065 ms
64 bytes from 127.0.0.1: icmp_seq=75 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=76 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=77 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=78 ttl=64 time=0.064 ms
64 bytes from 127.0.0.1: icmp_seq=79 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=80 ttl=64 time=0.061 ms
64 bytes from 127.0.0.1: icmp_seq=81 ttl=64 time=0.060 ms
64 bytes from 127.0.0.1: icmp_seq=82 ttl=64 time=0.080 ms
64 bytes from 127.0.0.1: icmp_seq=83 ttl=64 time=0.065 ms
64 bytes from 127.0.0.1: icmp_seq=84 ttl=64 time=0.068 ms
64 bytes from 127.0.0.1: icmp_seq=85 ttl=64 time=0.063 ms
^C
root@078f00d32d72:/# exit
vagrant@ubuntu-bionic:~$
```

### Lab 6: Volumes

#### Bind mounts

```
vagrant@ubuntu-bionic:~$ git clone https://github.com/eficode/docker-katas.git
Cloning into 'docker-katas'...
remote: Enumerating objects: 1440, done.
remote: Total 1440 (delta 0), reused 0 (delta 0), pack-reused 1440
Receiving objects: 100% (1440/1440), 1.04 MiB | 1.94 MiB/s, done.
Resolving deltas: 100% (727/727), done.
warning: unable to access '/home/vagrant/.config/git/attributes': Permission denied
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ pwd
/home/vagrant/docker-katas/labs/volumes
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker container run -p 8000 --name some-nginx -v /home/vagrant/docker-katas/labs/volumes:/usr/share/nginx/html:ro -d nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
8ec398bc0356: Pull complete
dfb2a46f8c2c: Pull complete
b65031b6a2a5: Pull complete
Digest: sha256:8aa7f6a9585d908a63e5e418dc5d14ae7467d2e36e1ab4f0d8f9d059a3d071ce
Status: Downloaded newer image for nginx:latest
d46b605dfc572316fcc6d2b57cccb0044960c5427ff439072ffc0fef249b69e9
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$

```

#### Volumes

```
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker volume create data
data
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker volume ls
DRIVER              VOLUME NAME
local               129c80b958b51f1b33e32969fbe56ceefb898316f7a9965fbe8aa6d528195b4d
local               2258bc0b1cbea6a369bd9bab618ea52dc253a1f924c1284da148808320cdd968
local               data
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker volume inspect data
[
    {
        "CreatedAt": "2020-01-19T07:55:35Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/data/_data",
        "Name": "data",
        "Options": {},
        "Scope": "local"
    }
]
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker container run --rm --name www -d -p 8080:80 -v data:/usr/share/nginx/html nginx
6bae4c56fadb2bcac004b9659f760ac5a53c5c1375cd574cb61ba6c085c5aebd
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ sudo ls /var/lib/docker/volumes/data/_data/
50x.html  index.html
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker container run -ti --rm -v data:/tmp ubuntu bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
5c939e3a4d10: Pull complete
c63719cdbe7a: Pull complete
19a861ea6baf: Pull complete
651c9d2d6c4f: Pull complete
Digest: sha256:8d31dad0c58f552e890d68bbfb735588b6b820a46e459672d96e585871acc110
Status: Downloaded newer image for ubuntu:latest
root@f481c0d79b42:/# echo "<html><h1>hello world</h1></html>" > /tmp/hello.html
root@f481c0d79b42:/# ls /tmp
50x.html  hello.html  index.html
root@f481c0d79b42:/# exit
exit
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ sudo ls /var/lib/docker/volumes/data/_data/
50x.html  hello.html  index.html
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker container stop www
www
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker volume rm data
data
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$ docker volume prune -f
Deleted Volumes:
129c80b958b51f1b33e32969fbe56ceefb898316f7a9965fbe8aa6d528195b4d
2258bc0b1cbea6a369bd9bab618ea52dc253a1f924c1284da148808320cdd968

Total reclaimed space: 103.9MB
vagrant@ubuntu-bionic:~/docker-katas/labs/volumes$
```

### Lab 7: Building an image

```
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ vi Dockerfile
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker build -t myfirstapp .
Sending build context to Docker daemon  4.096kB
Step 1/8 : FROM ubuntu:latest
 ---> ccc6e87d482b
...
Step 8/8 : CMD ["python", "/usr/src/app/app.py"]
 ---> Running in 30dd837fe7f8
Removing intermediate container 30dd837fe7f8
 ---> e1daa8919b91
Successfully built e1daa8919b91
Successfully tagged myfirstapp:latest
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker image ls
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
myfirstapp                                latest              e1daa8919b91        40 seconds ago      436MB
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker container run -p 8888:5000 --name myfirstapp myfirstapp
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)

vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ vi Dockerfile
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker build -t myfirstapp .
Sending build context to Docker daemon  4.096kB
Step 1/8 : FROM ubuntu:latest
 ---> ccc6e87d482b
Step 2/8 : COPY app.py /usr/src/app/
 ---> 42c06e54c679
Step 3/8 : COPY requirements.txt /usr/src/app/
 ---> 478932f7ceca
...
Step 8/8 : CMD ["python", "/usr/src/app/app.py"]
 ---> Running in b94399867b75
Removing intermediate container b94399867b75
 ---> fe7efc7ad26d
Successfully built fe7efc7ad26d
Successfully tagged myfirstapp:latest

vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker container run -ti -p 5000:5000 myfirstapp bash
root@ed8dbad15268:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@ed8dbad15268:/# ls /usr/src/app/
app.py  requirements.txt
root@ed8dbad15268:/# python /usr/src/app/app.py
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
root@a7926b71d990:/# exit
exit
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker container ls -a
CONTAINER ID        IMAGE                  COMMAND                  CREATED              STATUS                        PORTS                             NAMES
a7926b71d990        myfirstapp             "bash"                   42 seconds ago       Exited (0) 36 seconds ago 
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker container rm a79
a79
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker rmi -f myfirstapp:latest
Untagged: myfirstapp:latest
Deleted: sha256:fe7efc7ad26d1b453dd3f08eeb58586fe7559e8f3bb8a0121196466e5ea14af4
Deleted: sha256:b145f3e993195ccd730776f18eb17527bdd7df2cd0bbe13772379b765ac10042
Deleted: sha256:129db67d94e82400073c8254fe081db58c56a801b73a37b62e9ce7c24e2ca4fb
Deleted: sha256:cfc1f49c57b427e96717a26823df5c5e83e16797ba215dc42799d6fe518db004
Deleted: sha256:7404d3641b0189eb677b3ee4711b6295bda81210a09dd179b47d55ce1491771f
Deleted: sha256:478932f7ceca78bcfca67a645ceeb59ce3ce64573ae44cec3333114ca3826e19
Deleted: sha256:42c06e54c679967e80e2f0c818c0a7ec0393bb3ae8b5884adbce2f54491d0310
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$ docker images
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
<none>                                    <none>              e1daa8919b91        18 minutes ago      436MB
weatherapp_frontend                       2.0.0               cfd7340aace3        13 hours ago        148MB
weatherapp_backend                        2.0.0               7ae8d315cc6f        14 hours ago        112MB
weatherapp_weatherapp_backend             latest              7ae8d315cc6f        14 hours ago        112MB
weatherapp_weatherapp_frontend            latest              43337801f348        14 hours ago        148MB
node                                      10-alpine           cb69d515e572        28 hours ago        80.5MB
ubuntu                                    latest              ccc6e87d482b        3 days ago          64.2MB
nginx                                     latest              c7460dfcab50        9 days ago          126MB
k8s.gcr.io/kube-proxy                     v1.17.0             7d54289267dc        6 weeks ago         116MB
k8s.gcr.io/kube-controller-manager        v1.17.0             5eb3b7486872        6 weeks ago         161MB
k8s.gcr.io/kube-scheduler                 v1.17.0             78c190f736b1        6 weeks ago         94.4MB
k8s.gcr.io/kube-apiserver                 v1.17.0             0cae8d5cc64c        6 weeks ago         171MB
kubernetesui/dashboard                    v2.0.0-beta8        eb51a3597525        6 weeks ago         90.8MB
k8s.gcr.io/coredns                        1.6.5               70f311871ae1        2 months ago        41.6MB
k8s.gcr.io/etcd                           3.4.3-0             303ce5db0e90        2 months ago        288MB
kubernetesui/metrics-scraper              v1.0.2              3b08661dc379        2 months ago        40.1MB
k8s.gcr.io/kube-addon-manager             v9.0.2              bd12a212f9dc        5 months ago        83.1MB
k8s.gcr.io/pause                          3.1                 da86e6ba6ca1        2 years ago         742kB
gcr.io/k8s-minikube/storage-provisioner   v1.8.1              4689081edb10        2 years ago         80.8MB
vagrant@ubuntu-bionic:~/docker-katas/labs/building-an-image$
```

### Lab 9: Multi container

```
vagrant@ubuntu-bionic:~$ docker container run --name mysql-container --rm -p 3306:3306 -e MYSQL_ROOT_PASSWORD=YOUR_PASSWORD -d mysql:5.7
Unable to find image 'mysql:5.7' locally
5.7: Pulling from library/mysql
804555ee0376: Pull complete
c53bab458734: Pull complete
ca9d72777f90: Pull complete
2d7aad6cb96e: Pull complete
8d6ca35c7908: Pull complete
6ddae009e760: Pull complete
327ae67bbe7b: Pull complete
9e05241b7707: Pull complete
e822978df8f0: Pull complete
14ca71ed53be: Pull complete
026afe6fd35e: Pull complete
Digest: sha256:2ca675966612f34b4036bbcfa68cb049c03e34b561fba0f88954b03931823d29
Status: Downloaded newer image for mysql:5.7
35acaf6b00e2d7490f1e2ddc93371074d153d7e89221e420ee71afd10381337c
vagrant@ubuntu-bionic:~$ docker container run --name wordpress-container --rm -e WORDPRESS_DB_HOST=172.17.0.1 -e WORDPRESS_DB_PASSWORD=YOUR_PASSWORD -p 8080:80 -d wordpress
Unable to find image 'wordpress:latest' locally
latest: Pulling from library/wordpress
8ec398bc0356: Already exists
85cf4fc86478: Pull complete
970dadf4ccb6: Pull complete
8c04561117a4: Pull complete
d6b7434b63a2: Pull complete
83d8859e9744: Pull complete
9c3d824d0ad5: Pull complete
9e316fd5b3b3: Pull complete
578b40496c37: Pull complete
814ae7711d3c: Pull complete
4896fed78b6b: Pull complete
e74d71e9611d: Pull complete
46017765526c: Pull complete
280386098458: Pull complete
f32eb0d8c540: Pull complete
5c47b9ea747a: Pull complete
ecda5b7aad12: Pull complete
84256a6b6b44: Pull complete
35d4f385efb7: Pull complete
bf697c2ae701: Pull complete
d054b015f084: Pull complete
Digest: sha256:73e8d8adf491c7a358ff94c74c8ebe35cb5f8857e249eb8ce6062b8576a01465
Status: Downloaded newer image for wordpress:latest
68455bbc82f69ee8b4119789445e6c4f9b48e323f4f0a5aa75e022fdacce1a55
vagrant@ubuntu-bionic:~$ docker network create if_wordpress
1310e28fc1c6e4e82fe518a88cd9f4dce9388fa7e08dbc8c455fe8b214d3e90e
vagrant@ubuntu-bionic:~$ docker container run --name mysql-container --rm --network if_wordpress -e MYSQL_ROOT_PASSWORD=YOUR_PASSWORD -d mysql:5.7
2d340038bd310e13bc79d9f640a0753727f189eafb9f6193d07c68cb43f31529
vagrant@ubuntu-bionic:~$ docker container run --name wordpress-container --rm --network if_wordpress -e WORDPRESS_DB_HOST=mysql-container -e WORDPRESS_DB_PASSWORD=YOUR_PASSWORD -p 8080:80 -d wordpress
a552e53db6708a317721ce925470993fc871670f43af8cabbbe8aefce5c550e1
vagrant@ubuntu-bionic:~$ docker network inspect if_wordpress
[
    {
        "Name": "if_wordpress",
        "Id": "1310e28fc1c6e4e82fe518a88cd9f4dce9388fa7e08dbc8c455fe8b214d3e90e",
        "Created": "2020-01-19T08:45:53.276321935Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "2d340038bd310e13bc79d9f640a0753727f189eafb9f6193d07c68cb43f31529": {
                "Name": "mysql-container",
                "EndpointID": "aab0ed9e8139abb390aefe5b0b4df2da296a8b8a781b8e12fe3ccc5923a23a18",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            },
            "a552e53db6708a317721ce925470993fc871670f43af8cabbbe8aefce5c550e1": {
                "Name": "wordpress-container",
                "EndpointID": "6db804d4fc9b1a44a9a56e583aafea9e8e1fffeb8a3c50f99af22338923d1cf1",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
vagrant@ubuntu-bionic:~$ docker container stop wordpress-container mysql-container
wordpress-container
mysql-container
vagrant@ubuntu-bionic:~$ cd docker-katas/labs/multi-container/
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$ docker-compose up -d
Creating network "multi-container_default" with the default driver
Creating multi-container_mysql_container_1 ... done
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$ docker-compose down
Stopping multi-container_mysql_container_1 ... done
Removing multi-container_mysql_container_1 ... done
Removing network multi-container_default
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$ vi docker-compose.yaml
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$ docker-compose up -d
Creating network "multi-container_default" with the default driver
Creating multi-container_mysql_container_1 ... done
Creating multi-container_wordpress_container_1 ... done
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$ docker-compose down
Stopping multi-container_wordpress_container_1 ... done
Stopping multi-container_mysql_container_1     ... done
Removing multi-container_wordpress_container_1 ... done
Removing multi-container_mysql_container_1     ... done
Removing network multi-container_default
vagrant@ubuntu-bionic:~/docker-katas/labs/multi-container$
```
