// ==UserScript==
// @name              Monster Homepage
// @namespace         myspace.com/cometa289
// @description       Monster Homepage
// @include           http://*myspace.com/*=user
// @include           http://*myspace.com/*=user&*
// ==/UserScript==

if(location.href.match(/collect.*=user.*[^(commentForm)]*/)) location.href = 'http://myspace.com/index.cfm?fuseaction=user';

s = "body{background:url(http://joyboner.com/gmscripts/img/bg04.png) center repeat-y #FFF!important;}\n";
s+= "#header,#home_additionalLinks,#home_userURLInfo,#home_setHomePage,#home_schools,#home_searchAddressBook,#splash_coolNewPeople,#splash_profile,th,#footer{display:none;}\n";
s+= "div, table, tr, td, .heading{color:#00FF00!important; background-color:transparent!important;border:0px!important;}\n";
s+= "#home_image a, #topnav a{font-size:9px!important;}\n";
s+= "*{font-family:Courier New, Courier, mono!important;font-size:11px!important; font-weight:normal!important;}\n";
s+= "#topnav{background:#444!important;padding-top:55px!important;}\n";
s+= "a{color:#00AF28!important;text-decoration:none!important;}\n";
s+= "a:hover{color:#9a9a9a!important;}\n";
s+= "#topnav a{color:#FFFFFF!important;}\n";
s+= "#topnav a:hover{color:silver!important;}\n";
s+= ".heading{border-bottom: 1px solid #444444!important; height:20!important; padding-bottom:0px!important; padding-top:0px!important;}\n";
s+= "#home_infoBar span{color:#FFF;}\n";
s+= "#home_infoBar{position:relative;left:6px;}\n";
s+= "#main{min-height:0!important;height:0px!important}\n";
s+= ".indicator span {color:inherit!important;}\n";
s+= "#ctl00_Main_ctl00_Bulletins1_HyperLink2{position:relative; top:10px;}\n";
s+= "*::-moz-selection{background:#00FF00;color:#000;}\n";

document.getElementById('squareAd').innerHTML = '<img src="http://i8.photobucket.com/albums/a48/clintcometa16/Monster.jpg"/></a>';
html = document.body.innerHTML.replace(/Hello,/, "Whudafxup,"); 
document.body.innerHTML = html;

html = document.body.innerHTML.replace(/classifieds.myspace.*Classifieds/, 'viewmorepics.myspace.com/index.cfm?fuseaction=signout">Signout');
document.body.innerHTML = html;

GM_addStyle(s);