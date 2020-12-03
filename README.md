# Vps4you API

Szia! Ha bármi probléma merülne fel, kérlek keress Discordon *(BigLev#2342)* vagy nyiss egy új Issuest. Nagyon megköszönném, ha adnál egy csillagot erre a projektre. :smiley: 

# Telepítése
```
npm i vps4you --save
```
# Mi vagyok én?
Egy *node.js* könyvtár amely képes kommunikálni a vps4you api szerverével, így vezérelhetjük a saját VPS szolgáltatásunkat.

# Api hívások
Node-fetch és a form-data könyvtár segítségével történik.

# Dokumentáció

Első lépésként importáljuk a könyvtárat.

```
const vps = require('vps4you');
```
Miután importáltük a könyvtárat, be kell jelentkeznünk a vps4you API-ba.

## Api kulcs?
Az api kulcsot a *vps4you oldalán* a profil menünpontál tudjátok megnézni. Ugyan itt tudjátok újragenerálni az API kulcsot. 

Lépjünk is be az API-ba. **(# jelölést szerkeszthetjük)**

```
const vps = require('vps4you'); 
const client = vps.Client;

client.login('#https://vps4you.hu/api.php', '#email', '#api-kulcs', 'service-list', (login) => {
    console.log(login)
}); 
```
A **getStatus** funkció segítségével megkapjuk a vps szolgáltatásunknak az információit. *(pl: stopped, running, stb)*

```
const vps = require('vps4you'); 
const client = vps.Client;

client.login('#https://vps4you.hu/api.php', '#email', '#api-ulcs', 'service-list', (login) => {
    console.log(login)
}); 

client.getStatus('vps-get-status', '#vps-id', (callback) =>{
    console.log(callback)
});
``` 

## Tövábbi funkciók

```
startVPS..
stopVPS..
shutdownVPS..
restartVPS..
```

Innen is köszönöm a segítséget Mányoki Ádámnak :heart: !
