// ==UserScript==

// @name           Orkut  Themes changes automaticly
// @namespace      Diogok [Edited By Gautam]

// @description    It randomly displays any orkut theme automatically
// @include        http://www.orkut.*
// @exclude        *.js

// ==/UserScript==
function CssApply(linkCss){
	void(CSS = document.createElement('link'));
	void(CSS.rel = 'stylesheet');
	void(CSS.href = linkCss);
	void(CSS.type = 'text/css');
	void(document.body.appendChild(CSS));
	};
csslinks = new Array("http://img3.orkut.com/skins/gen/beach001.css","http://img3.orkut.com/skins/gen/country_side001.css","http://img2.orkut.com/skins/gen/seasonal001.css","http://img2.orkut.com/skins/gen/snowman001.css","http://img2.orkut.com/skins/gen/bus_stop001.css","http://img2.orkut.com/skins/gen/winter001.css","http://img2.orkut.com/skins/gen/autumn001.css","http://img2.orkut.com/skins/gen/aja_tiger001.css","http://img2.orkut.com/skins/gen/jr001.css","http://img2.orkut.com/skins/gen/tea_house001.css");
CssApply(csslinks[Math.floor(Math.random()*csslinks.length)]);