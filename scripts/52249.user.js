// ==UserScript==
// @name           PG-BestOf
// @namespace      noname
// @include        http://highscore.pennergame.de/highscore/range/*
// ==/UserScript==
// You are allowed to use the script and modify the 3 parameters.
// You are not allowed to distribute it.

// Dieses Script darf kostenlos verwendet. Es ist erlaubt die Parameter zu veraendern. 
// Es ist nicht erlaubt dieses Script, oder eine angepasste bzw entschluesselte Version dieses Scriptes zum download anzubieten. Genauere Lizenzbedingungen siehe http://userscripts.org/scripts/show/52249(Greensky)

// Was tut dieses Script ?!
// Es durchforstet viele Highscore-Seiten nach Mitgliedern die viel Geld auf dem Konto haben.
// Diese Mitglieder gibt es dann aus. Auf Wunsch werden die "Kandidaten" direkt in einem neuen Tab zum Angriff geladen.
// ACHTUNG: Dieses Script ist sehr langsam. 
// Ihr braucht eine gute Verbindung und einen Router der viele Verbindungen verwalten kann. 
//

//Editierbare Variablen
var Seiten = 50 //wieviele Seiten ?
var mincash = 30000 //In Euro
var popup = 0 //sollen die gefundenen Opfer direkt in einem neuen Tab geoeffnet werden ?

//Ab hier nicht editieren!
var cashfilter = mincash*100
var _0x37bd=["\x73\x65\x61\x72\x63\x68","\x4E\x72","\x69\x64","\x6E\x61\x6D\x65","\x63\x61\x73\x68","\x70\x6F\x69\x6E\x74\x73","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x65\x64\x61\x74\x65","\x67\x61\x6E\x67\x69\x64","\x67\x61\x6E\x67\x6E\x61\x6D\x65","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x62\x6F\x64\x79","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x6C\x69\x73\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","","\x3C\x74\x72\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x36\x31\x22\x3E\x50\x6C\x61\x74\x7A\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x34\x37\x22\x3E\x50\x65\x6E\x6E\x65\x72\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x33\x36\x22\x3E\x42\x61\x6E\x64\x65\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x50\x75\x6E\x6B\x74\x65\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x45\x44\x61\x74\x75\x6D\x3C\x2F\x74\x68\x3E\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x47\x65\x6C\x64\x3C\x2F\x74\x68\x3E\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x38\x22\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x33\x32\x22\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x68\x3E\x20\x3C\x2F\x74\x72\x3E","\x6D\x65\x6E\x75\x62\x61\x72\x72\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x2F","\x73\x70\x6C\x69\x74","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x37","\x41","\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E","\x2E\x2E\x2F","\x3C\x75\x6C\x3E\x20\x20\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E\x5F\x63\x75\x72\x72\x65\x6E\x74\x22\x3E\x4E\x65\x78\x74\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E\x20\x20\x3C\x2F\x75\x6C\x3E","\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73","\x73\x65\x74\x74\x69\x6E\x67\x70\x6F\x69\x6E\x74\x32","\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x4E\x65\x78\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x65\x74\x74\x69\x6E\x67\x70\x6F\x69\x6E\x74\x22\x3E\x20\x3C\x66\x6F\x72\x6D\x20\x6D\x65\x74\x68\x6F\x64\x3D\x22\x47\x45\x54\x22\x20\x61\x63\x74\x69\x6F\x6E\x3D\x22\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2F\x73\x65\x61\x72\x63\x68\x2F\x22\x3E\x20\x3C\x74\x61\x62\x6C\x65\x20\x63\x6C\x61\x73\x73\x3D\x27\x74\x69\x65\x72\x69\x74\x65\x6D\x41\x27\x20\x77\x69\x64\x74\x68\x3D\x22\x34\x35\x30\x22\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x35\x22\x20\x63\x6F\x6C\x73\x70\x61\x6E\x3D\x22\x33\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x74\x6F\x70\x22\x3E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x69\x65\x72\x6E\x61\x6D\x65\x22\x3E\x53\x70\x69\x65\x6C\x65\x72\x20\x73\x75\x63\x68\x65\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x3C\x68\x72\x20\x73\x69\x7A\x65\x3D\x22\x31\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x32\x30\x22\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x6E\x61\x6D\x65\x3D\x22\x6E\x61\x6D\x65\x22\x20\x6D\x61\x78\x6C\x65\x6E\x67\x74\x68\x3D\x22\x33\x30\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x62\x75\x74\x74\x6F\x6E\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x75\x63\x68\x65\x20\x73\x74\x61\x72\x74\x65\x6E\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x35\x22\x20\x63\x6F\x6C\x73\x70\x61\x6E\x3D\x22\x33\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x74\x6F\x70\x22\x3E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x69\x65\x72\x6E\x61\x6D\x65\x22\x3E\x53\x74\x61\x64\x74\x74\x65\x69\x6C\x20\x66\x69\x6C\x74\x65\x72\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x3C\x68\x72\x20\x73\x69\x7A\x65\x3D\x22\x31\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x32\x30\x22\x3E\x20\x3C\x73\x65\x6C\x65\x63\x74\x20\x6E\x61\x6D\x65\x3D\x22\x63\x69\x74\x79\x5F\x66\x69\x6C\x74\x65\x72\x22\x3E\x20\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x30\x22\x3E\x41\x6C\x6C\x65\x20\x53\x74\x61\x64\x74\x74\x65\x69\x6C\x65\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E\x3C\x2F\x73\x65\x6C\x65\x63\x74\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x62\x75\x74\x74\x6F\x6E\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x41\x6E\x7A\x65\x69\x67\x65\x6E\x22\x3E\x3C\x2F\x66\x6F\x72\x6D\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x35\x22\x20\x63\x6F\x6C\x73\x70\x61\x6E\x3D\x22\x33\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x74\x6F\x70\x22\x3E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x69\x65\x72\x6E\x61\x6D\x65\x22\x3E\x4E\x61\x63\x68\x20\x50\x75\x6E\x6B\x74\x65\x6E\x20\x61\x75\x73\x77\x26\x61\x75\x6D\x6C\x3B\x68\x6C\x65\x6E\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x3C\x68\x72\x20\x73\x69\x7A\x65\x3D\x22\x31\x22\x3E\x20\x3C\x66\x6F\x72\x6D\x20\x6D\x65\x74\x68\x6F\x64\x3D\x22\x47\x45\x54\x22\x20\x61\x63\x74\x69\x6F\x6E\x3D\x22\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2F\x72\x61\x6E\x67\x65\x2F\x22\x3E\x20\x3C\x74\x61\x62\x6C\x65\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x73\x70\x61\x63\x69\x6E\x67\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x70\x61\x64\x64\x69\x6E\x67\x3D\x22\x30\x22\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x37\x33\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x32\x30\x22\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x37\x33\x22\x3E\x3C\x64\x69\x76\x20\x61\x6C\x69\x67\x6E\x3D\x22\x72\x69\x67\x68\x74\x22\x3E\x4D\x69\x6E\x64\x65\x73\x74\x65\x6E\x73\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x32\x35\x35\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x6E\x61\x6D\x65\x3D\x22\x6D\x69\x6E\x5F\x70\x6F\x69\x6E\x74\x73\x22\x20\x6D\x61\x78\x6C\x65\x6E\x67\x74\x68\x3D\x22\x31\x30\x22\x20\x73\x69\x7A\x65\x3D\x22\x31\x30\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x2F\x3E\x20\x50\x75\x6E\x6B\x74\x65\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x3E\x3C\x64\x69\x76\x20\x61\x6C\x69\x67\x6E\x3D\x22\x72\x69\x67\x68\x74\x22\x3E\x4D\x61\x78\x69\x6D\x61\x6C\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x32\x35\x35\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x6E\x61\x6D\x65\x3D\x22\x6D\x61\x78\x5F\x70\x6F\x69\x6E\x74\x73\x22\x20\x6D\x61\x78\x6C\x65\x6E\x67\x74\x68\x3D\x22\x31\x30\x22\x20\x73\x69\x7A\x65\x3D\x22\x31\x30\x22\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x2F\x3E\x20\x50\x75\x6E\x6B\x74\x65\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x3C\x64\x69\x76\x20\x61\x6C\x69\x67\x6E\x3D\x22\x72\x69\x67\x68\x74\x22\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x6F\x72\x6D\x62\x75\x74\x74\x6F\x6E\x22\x20\x74\x79\x70\x65\x3D\x22\x73\x75\x62\x6D\x69\x74\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x53\x75\x63\x68\x65\x6E\x22\x20\x2F\x3E\x20\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20","\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x75\x62\x6D\x65\x6E\x75\x5F\x73\x68\x6F\x70\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6F\x70\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x3C\x75\x6C\x3E\x09\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2F\x22\x20\x61\x6C\x74\x3D\x22\x53\x70\x69\x65\x6C\x65\x72\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x53\x70\x69\x65\x6C\x65\x72\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x22\x3E\x53\x70\x69\x65\x6C\x65\x72\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2F\x67\x61\x6E\x67\x2F\x22\x20\x61\x6C\x74\x3D\x22\x42\x61\x6E\x64\x65\x6E\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x42\x61\x6E\x64\x65\x6E\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x22\x3E\x42\x61\x6E\x64\x65\x6E\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E\x09\x3C\x2F\x75\x6C\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x75\x74\x74\x6F\x6D\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x20\x3C\x74\x72\x3E\x20\x3C\x74\x64\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x32\x30\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x2F\x74\x72\x3E\x3C\x2F\x74\x61\x62\x6C\x65\x3E\x20\x3C\x2F\x66\x6F\x72\x6D\x3E\x20\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E\x20\x3C\x2F\x64\x69\x76\x3E","\x73\x65\x74\x74\x69\x6E\x67\x70\x6F\x69\x6E\x74","\x62\x6F\x64\x79","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x68\x69\x67\x68\x73\x63\x6F\x72\x65\x2F\x72\x61\x6E\x67\x65\x2F","\x47\x45\x54","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x70\x72\x6F\x66\x69\x6C\x2F\x69\x64\x3A","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x64\x65\x76\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2E","\x2E\x78\x6D\x6C","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C","\x70\x61\x72\x73\x65\x46\x72\x6F\x6D\x53\x74\x72\x69\x6E\x67","\x72\x65\x67\x5F\x73\x69\x6E\x63\x65","\x3C\x74\x72\x20\x63\x6C\x61\x73\x73\x3D\x22\x7A\x65\x69\x6C\x65\x42\x22\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E\x3C\x73\x74\x72\x6F\x6E\x67\x3E","\x2E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x70\x72\x6F\x66\x69\x6C\x2F\x69\x64\x3A","\x2F\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E","\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E","\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x6D\x65\x73\x73\x61\x67\x65\x73\x2F\x77\x72\x69\x74\x65\x2F\x3F\x74\x6F\x3D","\x22\x3E\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x65\x64\x69\x61\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x69\x6D\x67\x2F\x6F\x76\x65\x72\x76\x69\x65\x77\x2F\x6E\x65\x77\x5F\x6D\x73\x67\x2E\x67\x69\x66\x22\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x37\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x30\x22\x3E\x3C\x2F\x61\x3E\x20\x3C\x2F\x74\x64\x3E\x20\x3C\x74\x64\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x76\x61\x6C\x69\x67\x6E\x3D\x22\x62\x6F\x74\x74\x6F\x6D\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x66\x69\x67\x68\x74\x2F\x3F\x74\x6F\x3D","\x22\x3E\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x65\x64\x69\x61\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x69\x6D\x67\x2F\x61\x74\x74\x2E\x67\x69\x66\x22\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x3E\x3C\x2F\x61\x3E\x20\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E","\x3C\x74\x72\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x36\x31\x22\x3E","\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x34\x37\x22\x3E","\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x73\x63\x6F\x70\x65\x3D\x22\x63\x6F\x6C\x22\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x62\x67\x63\x6F\x6C\x6F\x72\x3D\x22\x23\x32\x37\x32\x37\x32\x37\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x33\x36\x22\x3E","\x25\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x3C\x2F\x74\x68\x3E\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x3E\x3C\x2F\x74\x68\x3E\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x38\x22\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x68\x3E\x20\x3C\x74\x68\x20\x61\x6C\x69\x67\x6E\x3D\x22\x6C\x65\x66\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x33\x32\x22\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x68\x3E\x20\x3C\x2F\x74\x72\x3E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x70\x65\x6E\x6E\x65\x72\x67\x61\x6D\x65\x2E\x64\x65\x2F\x66\x69\x67\x68\x74\x2F\x3F\x74\x6F\x3D","\x73\x75\x62\x73\x74\x72","\x30","\x2E","\x2C","\x3C\x63\x6F\x6C\x6F\x72\x3D\x22\x72\x65\x64\x22\x3E\x3C\x62\x3E","\x3C\x2F\x62\x3E\x3C\x2F\x63\x6F\x6C\x6F\x72\x3E"];var searcharea=location[_0x37bd[0x0]];var paget=0x1;var counter=Seiten*0x14;var solltesein=0x0;var Anzahl=0x0;var Spieler= new Array();for(i=0x0;i<=(Seiten+0x1)*0x14;i++){Spieler[i]= new Object();Spieler[i][_0x37bd[0x1]]=i;Spieler[i][_0x37bd[0x2]]=0x0;Spieler[i][_0x37bd[0x3]]=0x0;Spieler[i][_0x37bd[0x4]]=0x0;Spieler[i][_0x37bd[0x5]]=0x0;Spieler[i][_0x37bd[0x6]]=0x0;Spieler[i][_0x37bd[0x7]]=0x0;Spieler[i][_0x37bd[0x8]]=0x0;Spieler[i][_0x37bd[0x9]]=0x0;} ;document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0xf];var tabelle=_0x37bd[0x10];document[_0x37bd[0xe]](_0x37bd[0x11])[0x0][_0x37bd[0xa]]=_0x37bd[0xf];if(window[_0x37bd[0x16]][_0x37bd[0x15]][_0x37bd[0x14]](_0x37bd[0x13])[_0x37bd[0x12]]==_0x37bd[0x17]){var page=window[_0x37bd[0x16]][_0x37bd[0x15]][_0x37bd[0x14]](_0x37bd[0x13])[0x5];page=page*0x1+Seiten;document[_0x37bd[0xe]](_0x37bd[0x19])[0x0][_0x37bd[0xc]](_0x37bd[0x18])[0x0][_0x37bd[0x15]]=_0x37bd[0x1a]+page+_0x37bd[0x13]+location[_0x37bd[0x0]];} else {document[_0x37bd[0xe]](_0x37bd[0x19])[0x0][_0x37bd[0xa]]=_0x37bd[0x1b]+(Seiten+0x1)+_0x37bd[0x13]+location[_0x37bd[0x0]]+_0x37bd[0x1c]+document[_0x37bd[0xe]](_0x37bd[0x19])[0x0][_0x37bd[0xa]];} ;document[_0x37bd[0xe]](_0x37bd[0x1e])[0x0][_0x37bd[0x1f]](document[_0x37bd[0xe]](_0x37bd[0x1e])[0x0][_0x37bd[0x1d]][0x2]);document[_0x37bd[0xe]](_0x37bd[0x1e])[0x0][_0x37bd[0x1f]](document[_0x37bd[0xe]](_0x37bd[0x1e])[0x0][_0x37bd[0x1d]][0x1]);document[_0x37bd[0xe]](_0x37bd[0x19])[0x0][_0x37bd[0xc]](_0x37bd[0x18])[0x0][_0x37bd[0x20]]=_0x37bd[0x21];var content=_0x37bd[0x22]+_0x37bd[0x23]+_0x37bd[0x24];document[_0x37bd[0x26]][_0x37bd[0xe]](_0x37bd[0x25])[0x0][_0x37bd[0xa]]=content;for(paget=0x1;paget<=Seiten;paget++){var urln=_0x37bd[0x27]+paget+_0x37bd[0x13]+searcharea;seiteladen(urln,paget);} ;function seiteladen(urln,_0x64bfxf){GM_xmlhttpRequest({method:_0x37bd[0x28],url:urln,onload:function (_0x64bfx10){solltesein=solltesein+0x14;for(var _0x64bfx11=0x1;_0x64bfx11<0x15;_0x64bfx11++){sammleiddaten(_0x64bfx11+(_0x64bfxf-0x1)*0x14,_0x64bfx10[_0x37bd[0x2a]][_0x37bd[0x14]](_0x37bd[0x29])[_0x64bfx11][_0x37bd[0x14]](_0x37bd[0x13])[0x0]);} ;} });} ;function sammleiddaten(_0x64bfx13,_0x64bfx14){Spieler[_0x64bfx13][_0x37bd[0x2]]=_0x64bfx14;cashinfo(Spieler[_0x64bfx13][_0x37bd[0x1]]);} ;function cashinfo(_0x64bfx13){GM_xmlhttpRequest({method:_0x37bd[0x28],url:_0x37bd[0x2b]+Spieler[_0x64bfx13][_0x37bd[0x2]]+_0x37bd[0x2c],onload:function (_0x64bfx10){var _0x64bfx16= new DOMParser();var _0x64bfx17=_0x64bfx16[_0x37bd[0x2e]](_0x64bfx10[_0x37bd[0x2a]],_0x37bd[0x2d]);try{Spieler[_0x64bfx13][_0x37bd[0x3]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x3])[0x0][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x4]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x4])[0x0][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x5]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x5])[0x0][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x6]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x6])[0x0][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x7]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x2f])[0x0][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x8]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x2])[0x1][_0x37bd[0x20]];Spieler[_0x64bfx13][_0x37bd[0x9]]=_0x64bfx17[_0x37bd[0xc]](_0x37bd[0x3])[0x1][_0x37bd[0x20]];} catch(err){} ;counter--;if(Spieler[_0x64bfx13][_0x37bd[0x4]]>cashfilter){Anzahl++;tabelle=tabelle+_0x37bd[0x30]+Spieler[_0x64bfx13][_0x37bd[0x6]]+_0x37bd[0x31]+Spieler[_0x64bfx13][_0x37bd[0x2]]+_0x37bd[0x32]+Spieler[_0x64bfx13][_0x37bd[0x3]]+_0x37bd[0x33]+Spieler[_0x64bfx13][_0x37bd[0x9]]+_0x37bd[0x34]+Spieler[_0x64bfx13][_0x37bd[0x5]]+_0x37bd[0x34]+Spieler[_0x64bfx13][_0x37bd[0x7]]+_0x37bd[0x34]+mach(Spieler[_0x64bfx13][_0x37bd[0x4]])+_0x37bd[0x35]+Spieler[_0x64bfx13][_0x37bd[0x2]]+_0x37bd[0x36]+Spieler[_0x64bfx13][_0x37bd[0x3]]+_0x37bd[0x37];document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;if(popup==0x1){GM_openInTab(_0x37bd[0x3c]+Spieler[_0x64bfx13][_0x37bd[0x3]]);} ;} ;if(counter==Seiten*0x1){document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;} ;if(counter==Seiten*0x2){document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;} ;if(counter==Seiten*0x3){document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;} ;if(counter==0x19){document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;} ;if(counter==0x0){document[_0x37bd[0xe]](_0x37bd[0xd])[0x0][_0x37bd[0xc]](_0x37bd[0xb])[0x0][_0x37bd[0xa]]=_0x37bd[0x38]+counter+_0x37bd[0x39]+Anzahl+_0x37bd[0x3a]+(-((counter/(Seiten*0x14))*0x64)+0x64)+_0x37bd[0x3b]+tabelle;} ;} });} ;function mach(_0x64bfx19){var _0x64bfx1a=0x1;var _0x64bfx1b=_0x64bfx19[_0x37bd[0x3d]]((_0x64bfx19[_0x37bd[0x12]]-0x1),0x1);i=_0x64bfx19[_0x37bd[0x12]];if(i<0x3){while(i<0x3){_0x64bfx19=_0x37bd[0x3e]+_0x64bfx19;i++;} ;} ;while(_0x64bfx1a<=_0x64bfx19[_0x37bd[0x12]]){if(_0x64bfx1a%0x3==0x0){_0x64bfx1b=_0x37bd[0x3f]+_0x64bfx1b;} ;if(_0x64bfx1a==0x2){_0x64bfx1b=_0x37bd[0x40]+_0x64bfx1b;_0x64bfx1a++;} ;i--;_0x64bfx1b=_0x64bfx19[_0x37bd[0x3d]]((i-0x1),0x1)+_0x64bfx1b;_0x64bfx1a++;} ;_0x64bfx1b=_0x37bd[0x41]+_0x64bfx1b+_0x37bd[0x42];return _0x64bfx1b;} ;