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
mam swojego clona Dockerfilea, zbuduje img kontenera ubuntu, ktory ma desktop oraz vnc . no i ma node.js 
to jest gotowe drodowisko dev do apek zeus/zepp
