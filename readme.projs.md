tm1
zeus create tm1
app type - APP
OS 2.0 API
app template - Calories
zeus dev - GTS 4

tm2
zeus create tm2
type APP
OS 2.0
Empty
app-side y
sett y
platform Rex-2 (ale wyszlo Amazfit GTR Mini)

tm3 rebuild
zeus create tm3
type APP
OS 2.0
Empty
app-side y
sett y
platformy Rex-2

tm4
zeus create tm4
type watchface
OS 2.0
Empty
platformy Rex-2 

tm5
zeus create tm5
type APP
OS 2.0
hello-world
platformy dopiero po zeus dev i wybralem gtr, wyszlo gtr 4

tm6 
zeus create tm6
type APP
OS 2.0
Empty
app-side y
sett y
platformy GTR 4

tm7
clone sportowanego na rex-2 showcase
tutaj chce poprobowac inne sensory 
dodam tez settings oraz app-side tak jak w tm5

tm8 
port clalories z sampli na rex-2
potem rozwijamy pomysl na apke morska 
tj. 
geo - lat long / cog sog
log - distance nM / re-start
time-date - utc / local / PL - 3 zegarki na jacht




robie porownanie tm6 vs tm3 to sa wygenerowane app empty
tm6 na gtr 4 , tm3 na rex-2 , spisze roznice i potem sprobuje recznie wprowadzic takie roznice na bazie tm5 zeby dostac appke rex2
/assets - tutaj mam folder 466x466-amazfit-gtr-4 vs 454x454-amazfit-t-rez-2 i tam plik icon.png jest akurat taki sam 64x64 pixele
/app.json - tuta jest wiecej roznic :
appID 
targets - 466x466-amazfit-gtr-4 vs 454x454-amazfit-t-rex-2
platforms 
name deviceSource
dedisth width 



quick how to - jak odpalic srodowisko developerskie u mnie na fedorce
podman run -d -p 5901:5901 -p 6901:6901 -v /home/tommy/src/zepp/linux/node:/home/node:Z  localhost/local/debian-node-xfce-vnc:versionXX
cd /home/tommy/src/zepp/linux/node/tm5
code .
vnc localhost:5901
right-click open terminal
# cd /opt/simulator
# ./simulator --no-sandbox
login tmistat@wp.pl Tommy11!!
<via vnc>
cd /home/node/tm5/
zeus login (tmistat@wp.pl Tommy11!!)
zeus dev -- export buildu apki na local symulator, niestety symultor nie dziala w tutaj w kontenerze, tam symulator chce odpalac qemu ..
zeus preview -- wymaga login, generuje QR code, ktory jest linkiem do apki. QRcode trzeba zeskanowac telefonem i wciagnac w ten sposob apke via telefon do zegarka.
( tam w telefonie trzeba wlaczyc developer mode dla zegarka )







