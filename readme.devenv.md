#1 dev na native fedora

na Fedora 37 dnf isntaluje node 18.18 
taki jak w tym instalerze https://docs.zepp.com/docs/guides/quick-start/environment/#linux

potem ten skrypt i tak failurje podczas wykonywania :

npm i @zeppos/zeus-cli -g


#2 doker od nodejs - ale to nie ma dobrego gui
https://nodejs.org/en/download/
tutaj reklamuja oficjalny docker img 

https://hub.docker.com/_/node/
docker pull node
no to robie 
$podman pull node
poszlo mam dockera node

$ podman run -it docker.io/library/node bash
root@aca7a459f6d5:/# npm i @zeppos/zeus-cli -g
poszlo 

root@aca7a459f6d5:/# zeus -v
1.3.7 (zpm v3.0.1)

root@aca7a459f6d5:/# cd /home/node
root@aca7a459f6d5:/home/node# zeus create hello-world

#3 tutaj jest desktop w kontenerze dostepny via vnc. to sie udalo, ale symulator nie dziala. nie moze odpalic qemu w kontenerze.
nowe mocne podejscie
git clone https://github.com/ConSol/docker-headless-vnc-container/blob/master/Dockerfile.debian-icewm-vnc
tam mam swojego clona Dockerfilea, i zbuduje img kontenera ubuntu , ktory ma desktop oraz vnc . no i ma node.js 
to jest gotowe drodowisko dev do apek zeus/zepp

przepis na budowanie:
podman build -t local/ubuntu-node-xfce-vnc -f ./Dockerfile.ubuntu-node-xfce-vnc

kilka sposobow na odpalenie:
podman run -d -p 5901:5901 -p 6901:6901 local/ubuntu-node-xfce-vnc
podman run -d -p 5901:5901 -p 6901:6901 localhost/local/debian-node-xfce-vnc:version3
podman run -d -p 5901:5901 -p 6901:6901 -v /home/tommy/src/zepp/linux/node:/home/node:Z  localhost/local/debian-node-xfce-vnc:versionXX

podman ps
podman image ls
podman commit 33ef2c5a271d local/ubuntu-node-xfce-vnc:versionYY

#nie dziala z symulatorem# podman network create --subnet=192.168.166.0/24 tm166
#nie dziala z symulatorem# podman run -d -p 5901:5901 -p 6901:6901 --net tm166 --ip 192.168.166.1 -v /home/tommy/src/zepp/linux/node:/home/node:Z  localhost/local/debian-node-xfce-vnc:versionXX

wszystko poszlo dziala vnc - localhost:5901

zeus create hey-tm
  watch face
  OS API 2.
zeus login (tmistat@wp.pl Tommy11!!)
zeus preview
  Amazfit T-Rex2

potem na telefon do apki ZePP -> profile / device / scanQR 

#4
kolejne podejscie do srodowisa dev. celem jest pelne odpalenie symulatora raze z logiem consoli.
vmka debian11. install z iso.
install node.js from targz  nodejs.org guide https://github.com/nodejs/help/wiki/Installation
zainstalowalem zeus 
doszedlem dokladnie do stanu #3 tj. zeus dziala symulator nie dziala



