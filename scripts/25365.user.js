// ==UserScript==
// ==/UserScript==
//
// Author: Paul Tweedy <paul at 70cities dot net> | http://www.70cities.net
//
// This program is free software: you can redistribute it and/or modify

var maxUsernameIdx = 4;

// Page HTML/CSS/JS injection

var editDiv = document.createElement('div');
editDiv.setAttribute('id', 'overlay');
var divtext = " <div style='margin-top:100px;'><b>TwitterIgnore v0.2</b><br/>" +
	          ' <b>Choose usernames to kill:</b> ' + 
			  ' <form action="#">' +
			  ' 1. <input type="text" size="20" name="pt_user0" id="pt_user0"> <br/>' +
              ' 2. <input type="text" size="20" name="pt_user1" id="pt_user1"> <br/>' +
              ' 3. <input type="text" size="20" name="pt_user2" id="pt_user2"> <br/>' +
              ' 4. <input type="text" size="20" name="pt_user3" id="pt_user3"> <br/>' +
              ' 5. <input type="text" size="20" name="pt_user4" id="pt_user4"> <br/> </form> ' +
              ' <a href="#" id="pt_modalsubmit">Update</a> | <a href="#" id="pt_modalcancel">Cancel</a></div>';
editDiv.innerHTML = divtext;

document.getElementsByTagName('body')[0].appendChild(editDiv);

var editCSS = ' #overlay { display: none; position: absolute; left: 0px; top: 0px; ' +
    		  ' width:100%; height:100%; text-align:center; z-index: 1000; background-color:#eee;' +
    		  ' opacity: 0.8; filter:alpha(opacity=0); -moz-opacity: 0; }' +
              ' border:1px solid #000; padding:15px; text-align:center }';

addGlobalStyle(editCSS);


// Dialog Box

function setModalOpacity (val, node) {
	mozopac = val / 100;
	node.style.MozOpacity = mozopac;

}

function showModal () {
	// Populate form
	user = GM_getValue('userlist2');
	user = user + ',';  // Gaaah
	userarr = user.split(",");
	for (var n = 0; n < userarr.length-1; n++) {
		input = document.getElementById('pt_user'+n);
		input.value = userarr[n];
	}
	
	if (xyz.style.display == "block") {	
		setTimeout(function() { setModalOpacity(80,xyz) },100)	
		setTimeout(function() { setModalOpacity(70,xyz) },200)	
		setTimeout(function() { setModalOpacity(60,xyz) },300)	
		setTimeout(function() { setModalOpacity(50,xyz) },400)	
		setTimeout(function() { setModalOpacity(40,xyz) },500)	
		setTimeout(function() { setModalOpacity(30,xyz) },600)	
		setTimeout(function() { setModalOpacity(20,xyz) },700)	
		setTimeout(function() { setModalOpacity(10,xyz) },800)	
		setTimeout(function() { xyz.style.display = "none"; },900)
	} else {
		xyz.style.display = "block";
		setTimeout(function() { setModalOpacity(10,xyz) },100)	
		setTimeout(function() { setModalOpacity(20,xyz) },200)	
		setTimeout(function() { setModalOpacity(30,xyz) },300)	
		setTimeout(function() { setModalOpacity(40,xyz) },400)	
		setTimeout(function() { setModalOpacity(50,xyz) },500)	
		setTimeout(function() { setModalOpacity(60,xyz) },600)	
		setTimeout(function() { setModalOpacity(70,xyz) },700)	
		setTimeout(function() { setModalOpacity(80,xyz) },800)
		setTimeout(function() { setModalOpacity(90,xyz) },900)
	}


function setUsernames () {
	var userArr = [];
	for (var n = 0; n < maxUsernameIdx; n++) {
		input = document.getElementById('pt_user'+n);
		if (input.value != '') {
			userArr.push(input.value);
		}
	}
	GM_setValue('userlist2', userArr.join(','));
	showModal();
	main();
}	

GM_registerMenuCommand("Edit Usernames..", function() { showModal() } );

var modalsubmit = document.getElementById('pt_modalcancel');
modalsubmit.addEventListener('click', showModal, true);

var modalsubmit = document.getElementById('pt_modalsubmit');
modalsubmit.addEventListener('click', setUsernames, true);

if (GM_getValue('userlist2') == undefined) {
	editUsernames();
}


main();


function main () {
	user = GM_getValue('userlist2');
	user = user + ',';  // Gaaah
	userarr = user.split(",");
	for (var n = 0; n < userarr.length-1; n++) {
		//alert("Killing "+userarr[n]);
		killUserTwits(userarr[n]);	
	}
}

function killUserTwits (username) {
	var allContentNodes, thisNode;	
	allContentNodes = document.evaluate(
	    
	//alert("Found "+allContentNodes.snapshotLength+" nodes");
	    
	for (var i = 0; i < allContentNodes.snapshotLength; i++) {
	    tr = findParentTr(thisNode);
	    tr.style.display = 'none';
	}
}

function findParentTr (node) {
		p = node.parentNode;
		if (p.tagName == 'TR') {
			return p;	
		} else {
			return findParentTr(p);	
		}
}


function addGlobalStyle(css) {
