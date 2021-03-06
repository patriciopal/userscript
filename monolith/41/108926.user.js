// ==UserScript==
// @name           Am Fotboll Player Notes
// @namespace      Am Fotboll Player Notes
// @include        http://www.grid-iron.org/index.php?page=club&subpage=pldetails*
// @include        http://grid-iron.org/index.php?page=club&subpage=pldetails*
// @include        http://www.grid-iron.org/index.php?page=club&subpage=players*
// @include        http://grid-iron.org/index.php?page=club&subpage=players*
// @include        http://www.grid-iron.org/index.php?page=club&subpage=trainin*
// @include        http://grid-iron.org/index.php?page=club&subpage=trainin*
// @include        http://www.grid-iron.org/index.php?page=club&subpage=makeorder*
// @include        http://grid-iron.org/index.php?page=club&subpage=makeorder*
// @include        http://www.grid-iron.org/index.php?page=club&subpage=plcompare*
// @include        http://grid-iron.org/index.php?page=club&subpage=plcompare*
// @include        http://www.grid-iron.org/index.php?page=club&subpage=spreadshee*
// @include        http://grid-iron.org/index.php?page=club&subpage=spreadshee*
// ==/UserScript==

// initial by Xiong Yoshi
// reviewed, enhanced by pstimpel

window.setTimeout( function()
{
var url = window.location.href;
var plyrid= url.substring(url.indexOf('playerid=')+9, url.length);

//create save link
     var saveLink = document.createElement('div');
     var style='font-size: 10px; font-family: verdana, arial, sans-serif;text-decoration: underline;';
     var style2='font-size: 10px; font-family: verdana, arial, sans-serif;';
     
     saveLink.innerHTML = '<span style="cursor:pointer;"><font style="'+style+'">SPARA</font></span>';
     saveLink.addEventListener('click',saveNotes, false);

if (url.indexOf('pldetails') > 0) {
	
	var container=document.getElementById('leftmenu_header')
		
	
	if (!container) {
	       container=document.getElementById('profile')    ;
	}
	
	var plyrNotes = document.createElement('div');
	
	plyrNotes.innerHTML = '<div id="player_notes" class="content_container"><font style="'+style2+'">Spelarinfo:<br>' +   '<textarea cols=70 rows=17 id="txtNotes"></textarea></font><div id="stored"></div></div>';
	
	plyrNotes.appendChild(saveLink);
	
	container.parentNode.insertBefore(plyrNotes, container.nextSibling);
	
	var currentNotes = GM_getValue(plyrid  + "_notes", null);
	
	if (currentNotes != null) {
	       var notesbox = document.getElementById('txtNotes');
	       notesbox.value = currentNotes;
	}
	var allPlayers, thisPlayer;
	allPlayers = document.evaluate(
	    '//td[@width="25"]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
	    thisPlayer = allPlayers.snapshotItem(i);
	    if (thisPlayer.innerHTML.indexOf('progress_maybe.png')>=0){
	    	thisPlayer.style.background="yellow";
	    }
	    if (thisPlayer.innerHTML.indexOf('progress_not.png')>=0){
	    	thisPlayer.style.background="red";
	    }
	}
	allPlayers = document.evaluate(
	    '//option[@value]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
		thisPlayer = allPlayers.snapshotItem(i);
		thisid=thisPlayer.value;
		var thisNotes = GM_getValue(thisid  + "_notes", null);
		if (thisNotes != null) {
			var mynote="";
			if(thisNotes.length > 0) {
				mynote=thisNotes.substring(0,4);
			}
			
			if(mynote != "") {
				thisPlayer.innerHTML=thisPlayer.innerHTML + " /" + mynote + "/";
			}
		}
		
	    
	}
}
//check for player table

var allPlayers, thisPlayer;
if ((url.indexOf('players') > 0) || (url.indexOf('training') > 0)) {
	allPlayers = document.evaluate(
	    '//a[@style="text-decoration: none;"]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
	    thisPlayer = allPlayers.snapshotItem(i);
	    if(thisPlayer.href.indexOf('&playerid=') >= 0) {
		thisone=thisPlayer.href.split(/playerid/);
		thisid=thisone[1];
		tplyrid=thisid.replace(/=/,'');
		var thisNotes = GM_getValue(tplyrid  + "_notes", null);
		if (thisNotes != null) {
			var mynote="";
			if(thisNotes.length > 0) {
				mynote=thisNotes.substring(0,10);
			}
			var shorty="";
			if(thisNotes.length > 10) {
				shorty="...";
			}
			
			if(mynote != "") {
				thisPlayer.innerHTML=thisPlayer.innerHTML + " (" + mynote + shorty + ")";
			}
		}
		
	    }
	}
	//age font-size: 12px; font-family: verdana, arial, sans-serif; cursor: pointer;
	allPlayers = document.evaluate(
	    '//td[@width="30"]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
	    thisPlayer = allPlayers.snapshotItem(i);
	    char1=thisPlayer.innerHTML.substring(0,1);
	    if((char1 == "1") || (char1 == "2") || (char1 == "3") || (char1 == "4")) {
		if(thisPlayer.innerHTML >= "30") {
			thisPlayer.style.background="red";
			} else {
			
		}
		if((thisPlayer.innerHTML >= "27") && (thisPlayer.innerHTML <= "29")) {
			thisPlayer.style.background="yellow";
			} else {
			
		}
	    }
	    
	    
	}
	
}
if (url.indexOf('makeorders') > 0) {
	allPlayers = document.evaluate(
	    '//option[@value]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
		thisPlayer = allPlayers.snapshotItem(i);
		thisid=thisPlayer.value;
		var thisNotes = GM_getValue(thisid  + "_notes", null);
		if (thisNotes != null) {
			var mynote="";
			if(thisNotes.length > 0) {
				mynote=thisNotes.substring(0,4);
			}
			
			if(mynote != "") {
				thisPlayer.innerHTML=thisPlayer.innerHTML + " /" + mynote + "/";
			}
		}
		
	    
	}
}
if (url.indexOf('plcompare') > 0) {
	allPlayers = document.evaluate(
	    '//option[@value]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
		thisPlayer = allPlayers.snapshotItem(i);
		thisid=thisPlayer.value;
		var thisNotes = GM_getValue(thisid  + "_notes", null);
		if (thisNotes != null) {
			var mynote="";
			if(thisNotes.length > 0) {
				mynote=thisNotes.substring(0,4);
			}
			
			if(mynote != "") {
				thisPlayer.innerHTML=thisPlayer.innerHTML + " /" + mynote + "/";
			}
		}
		
	    
	}
}
if (url.indexOf('spreadsheet') > 0) {
	allPlayers = document.evaluate(
	    '//a[@style="text-decoration: none; font-size: 10px;"]',
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	    
	for (var i = 0; i < allPlayers.snapshotLength; i++) {
		thisPlayer = allPlayers.snapshotItem(i);
		if(thisPlayer.href.indexOf('playerid') > 0) {
			
			var plid=thisPlayer.href.substring(thisPlayer.href.indexOf('playerid=')+9, thisPlayer.href.length);
			
			var theNote = GM_getValue(plid  + "_notes", null);
			if(theNote.length > 0) {
				theNote=theNote.substring(0,4);
			}
			
			if(theNote != "") {
				thisPlayer.innerHTML=thisPlayer.innerHTML + " /" + theNote + "/";
			}
		}
		
			    
	}
}
function saveNotes(){
       var style2='font-size: 10px; font-family: verdana, arial, sans-serif;';
       var notesbox = document.getElementById('txtNotes');
       GM_setValue(plyrid  + "_notes",notesbox.value);
       document.getElementById('stored').innerHTML='<font color=red style="'+style2+'">KLAR</font>';
}





},100);