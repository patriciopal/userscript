// ==UserScript==
// @name           BPTrade in new Window
// @namespace      http://unidomcorp.com
// @description    Make "Trade" blueprint open in a popunder
// @include        http://*.war-facts.com/blueprints.php*
// ==/UserScript==
/* BPTrade in new Window
*/
unsafeWindow.poptrade = function(url) {
	var winfeatures="width=800,height=510,scrollbars=1,resizable=1,toolbar=0,location=0,menubar=0,status=1,directories=0"
	trade.blur()
	window.focus()

var inputs = document.getElementsByTagName('input');