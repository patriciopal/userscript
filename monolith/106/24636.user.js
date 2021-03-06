// --[greasemonkey meta data start]--
// title: Puretna Show Popular
// version: 1.0 beta
// created: 2006-03-30
// copyright: (c) 2006, reddwarf
// license: [url=GPL license]http://www.gnu.org/copyleft/gpl.html[/url]
// description: [url=Puretna]http://www.puretna.com[/url] is a members only **ahem** adult site. Use this script to show only torrents with high seedcount.
// --[greasemonkey meta data stop]--
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Puretna Show Popular
// @description   Shows only popular torrents with more than "threshold" seeds. You can change threshold ofcourse.
// @include       *http://www.puretna.com/*
// @exclude       http://forum.puretna.com/*
// ==/UserScript==

(
   function() {
   
	if(document.location.href.indexOf("browse.php") >= 0) {
   		var newCode = ""; // new HTML code for table
		var threshold = 40; // threshold for seedcount, lower than this will not be showed
      
   		var tables = document.getElementsByTagName("TABLE");        

		var row = tables[13].rows; //this table contains the torrentslisting
		var rowLength = row.length;
   		
		newCode+='<table border="0" cellspacing=0 cellpadding=5>';
		newCode+=row[0].innerHTML; // row contains type etc
		
		for (var i=1; i< rowLength;i++) {
			if (row[i].cells.length == 10) {
//alert (row[i].cells[7].textContent)
				if (row[i].cells[7].textContent >= threshold) { //cells[7] contains seedcount
			
					newCode+='<tr>';
					newCode+=row[i].innerHTML;
					newCode+='</tr><tr>';
					newCode+=row[i+1].innerHTML;
					newCode+='</tr>';
				}
			}
		}
		newCode+= '</table>';
		tables[13].innerHTML = newCode;
      	}
   }
   )();