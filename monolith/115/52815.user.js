// ==UserScript==
// @name           Fast Navigation
// @description   Fuegt in "Die Staemme" zusaetzliche Gebaeude-Links ein, sowie eine kleine Popup-Karte mit den eigenen Doerfern in bunt. Siehe auch die Beschreibung im Quellcode.
// @include       http://*.die-staemme.de/game.php*
// @include       http://*.staemme.ch/game.php*
// ==/UserScript==


/*

**************************************
*** DS Fast Navigation Version 1.5 ***
**************************************


Dieses Script erlaubt einen schnelleren Wechsel zwischen Gebaeuden und Doerfern
in "Die Staemme".

Zum einen fuegt das Script auf der Uebersichtsseite unterhalb der Namen der
eigenen Doerfer kleine Icons ein, die direkte Links zu den wichtigsten Gebaeuden
des jeweiligen Dorfes sind. So kann man von der Uebersichtsseite aus schnell zu
einem beliebigen Gebaeude eines beliebigen Dorfes kommen.

Des weiteren werden auf jeder Seite die selben Link-Icons auch rechts neben dem
Namen des aktuellen Dorfes im Menue gezeigt, um schnell zu einem beliebigen
Gebaeude des selben Dorfes wechseln zu koennen.

Links neben jenen Link-Icons im Menue gibt es ein weiteres kleines Icon. Durch
Anklicken dieses Icons wird eine Popup-Karte aufgetan, auf der alle eigenen
Doerfer angezeigt sind. Die Doerfer haben dort zufaellige aber unveraenderliche
Farben, so dass man seine Doerfer nach einiger Zeit schon an der Farbe erkennt.
Die Doerfer auf der Popup-Karte koennen angeklickt werden, um schnell zwischen
den Doerfern wechseln zu koennen.

Schliesslich gibt es fuer die Popup-Karte noch einen zusaetzlichen Link auf der
Seite "Rohstoffe verschicken", so dass man auf der Karte ein eigenes Dorf als
Ziel auswaehlen kann.

WICHTIG: Die Popup-Karte wird durch jeden Besuch der Uebersichtsseite
aktualisiert (kombinierte Uebersicht, oder eine andere Uebersicht die alle
Doerfer listet). Falls also ein neu erworbenes Dorf nicht auf der Karte
erscheint, muss einfach einmal die Uebersichtsseite besucht werden. Die
Uebersichtsseite muss auch so eingestellt sein, dass immer alle Doerfer gezeigt
werden (=>setze "Doerfer pro Seite" entsprechend hoch).

*/


(function(){


function village_links(id)
{
	return(
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=main"><img width=14 height=12 src="graphic/buildings/main.png" title="Hauptgebaeude" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=barracks"><img width=14 height=12 src="graphic/buildings/barracks.png" title="Kaserne" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=stable"><img width=14 height=12 src="graphic/buildings/stable.png" title="Stall" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=garage"><img width=14 height=12 src="graphic/buildings/garage.png" title="Werkstatt" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=snob"><img width=14 height=12 src="graphic/buildings/snob.png" title="Adelshof" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=smith"><img width=14 height=12 src="graphic/buildings/smith.png" title="Schmiede" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=place"><img width=14 height=12 src="graphic/buildings/place.png" title="Versammlungsplatz" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=market"><img width=14 height=12 src="graphic/buildings/market.png" title="Markt" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=market&mode=own_offer"><img width=14 height=12 src="graphic/buildings/market.png" title="Markt Angebote" alt="" /></A>' +
		'&nbsp;<a href="game.php?village=' + id + '&amp;screen=train"><img width=14 height=12 src="graphic/unit/unit_spear.png" title="Rekrutierung" alt="" /></A>'
	);
}


function map_link(isForMarket)
{
	return (
		'<a href="javascript:toggle_visibility(\'' +
		(isForMarket ? 'minimap_m' : 'minimap') +
		'\');"><img ' +
		(isForMarket ? 'width=15 height=15' : 'width=14 height=12') +
		' src="graphic/map/v5.png" title="Popup-Karte" alt="" /></A>&nbsp;'
	);
}


function map_div(isForMarket, village_id)
{
	var res = "";

	var div_name = isForMarket ? "minimap_m" : "minimap";

	var list = GM_getValue('village_list', '');
	var vs = new Array();
	for (var i = 0; i < list.length; ) {
		var j = list.indexOf('<>', i);
		var str;
		if (j < 0) {
			str = list.substr(i);
			i = list.length;
		}
		else {
			str = list.substr(i, j - i);
			i = j + 2;
		}
		j = str.indexOf(':');
		if (j < 0) continue;
		var vid = str.substr(0, j);
		str = str.substr(j + 1);
		j = str.lastIndexOf('(');
		var k = str.lastIndexOf('|');
		var l = str.lastIndexOf(')');
		if (j <= 0 || k <= j || l <= k) continue;
		var vname = str.substr(0, j - 1);
		var vx = parseInt(str.substr(j + 1, k - j - 1));
		var vy = parseInt(str.substr(k + 1, l - k - 1));
		vs.push(new Array(vx, vy, vid, vname));
	}

	var ref = location.href;
	var refpart1 = null;
	var refpart2 = null;
	var i = ref.indexOf('village=');
	if (i >= 0) {
		refpart1 = ref.substr(0, i + 8);
		var j = ref.indexOf('&',i);
		if (j > i) refpart2 = ref.substr(j);
		else refpart2 = "";
	}

	if (vs.length <= 0 || refpart1 == null) {
		res += '<div id="' + div_name + '" name="' + div_name + '"';
		res += ' style="position:absolute;left:10px;top:10px;display:none;';
		res += 'z-index:10;padding:10px;background:#fcc;border:1px solid #000">';
		if (vs.length <= 0) {
			res += '<p>Besuche bitte einmal die kombinierte Uebersicht damit dies funktioniert.</p>';
		}
		else {
			res += '<p>Fehler: Unerwartete URL</p>';
		}
		res += '<a href="javascript:toggle_visibility(\'' + div_name + '\');">&lt;OK&gt;</a>';
		res += '</div>';
		return (res);
	}

	var tx = 100000;
	var ty = 100000;
	var tw = -100000;
	var th = -100000;
	for (var i = 0; i < vs.length; i++) {
		var vx = vs[i][0];
		var vy = vs[i][1];
		if (tx > vx) tx = vx;
		if (ty > vy) ty = vy;
		if (tw < vx) tw = vx;
		if (th < vy) th = vy;
	}
	tw = tw - tx;
	th = th - ty;
	if (tw < 16) { tx -= Math.floor((16 - tw) / 2); tw = 16; }
	if (th < 16) { ty -= Math.floor((16 - th) / 2); th = 16; }

	var vsz = Math.min((window.outerHeight - 200) / th, (window.outerWidth - 100) / tw);
	if (vsz < 2) vsz = 2;
	if (vsz > 12) vsz = 12;

	var fsz = Math.floor(vsz * 1.3 + 0.5);
	if (vsz < 3) vsz = 3;
	if (vsz > 13) vsz = 13;

	res += '<div id="' + div_name + '" name="' + div_name + '"';
	res += ' style="display:none;position:absolute;z-index:10;left:10px;top:10px;';
	res += 'width:' + Math.floor(tw * vsz + fsz * 1.3 + 5 + 0.5) + 'px;';
	res += 'height:' + Math.floor(th * vsz + fsz * 1.3 + 13 + 0.5) + 'px;';
	res += 'padding-top:0px;';
	res += 'padding-right:5px;';
	res += 'padding-bottom:5px;';
	res += 'padding-left:5px;';
	res += 'background:#2a2;border:1px solid #000">';
	res += '<div align=right><a href="javascript:toggle_visibility(\'' + div_name + '\');">&lt;Schlie&szlig;en&gt;</a></div><br>';

	for (var i = 0; i < vs.length; i++) {
		var vx = vs[i][0];
		var vy = vs[i][1];
		var vid = vs[i][2];
		var vname = vs[i][3];
		var vcolors = '#000#f00#fa0#ff0#af0#0f0#0fa#0ff#0af#00f#a0f#f0f#f0a#eee#700#740#077#047#007#407#707#704#f66#fa6#ff6#6f6#6ff#6af#f6a';
		var vcol = vcolors.substr(
			(Math.floor(((vx * 15619) ^ + vy) * 36473) % (vcolors.length / 4)) * 4,
			4
		);
		var url = refpart1 + vid + refpart2;
		if (isForMarket) {
			url =
				"javascript:" +
				"document.forms[0].x.value=" + vx + ";" +
				"document.forms[0].y.value=" + vy + ";" +
				"toggle_visibility('" + div_name + "');"
			;
		}
		res += '<div style="position:absolute;z-index:11;padding:0px;';
		res += 'left:' + Math.floor((vx - tx) * vsz + 5) + 'px;';
		res += 'top:' + Math.floor((vy - ty) * vsz + 12) + 'px;';
		res += (vid == village_id ? 'border:3px solid #fff' : 'border:1px solid #000');
		res += '">';
		res += '<a href="' + url + '" title="'+vname+'"';
		res += ' style="font-size:' + fsz + 'px;font-family:courier;font-weight:bold;';
		res += 'background-color:' + vcol + ';color:#2a2;">';
		res += '&nbsp;&nbsp;';
		res += '</a>';
		res += '</div>';
	}

	res += '</div>';
	return (res);
}


if (/screen=/.test(location.href)) {

	var village_id = null;

	var trs = document.getElementsByTagName('tr');
	for (var i = 0; i < trs.length; i++) {
		if (trs[i].id == 'menu_row2') {
			var id = trs[i].innerHTML;
			var j = id.indexOf('village=');
			if (j >= 0) {
				id = id.substr(j+8);
				for (j = 0; id.charCodeAt(j) >= 48 && id.charCodeAt(j) < 58; j++) {}
				village_id = id.substr(0,j);
				trs[i].innerHTML += '<td>' + map_div(false, village_id) +
					map_link(false) + village_links(village_id) + '</td>';
			}
			break;
		}
	}

	if (
		/screen=market/.test(location.href) &&
		(!/mode=/.test(location.href) || /mode=send/.test(location.href)) &&
		village_id != null
	) {
		var elems = document.getElementsByTagName('select');
		var elem = null;
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].name == 'target') { elem = elems[i]; break; }
		}
		if (elem != null) {
			var new_elem = document.createElement('span');
			new_elem.innerHTML =
				map_div(true, village_id) +
				"&nbsp;" + map_link(true) + "&nbsp;"
			;
			elem.parentNode.insertBefore(new_elem, elem);
		}
	}

	if (/screen=overview_villages/.test(location.href)) {
		var tables = document.getElementsByTagName('table');
		var village_table = null;
		for (var i = 0; i < tables.length; i++) {
			if (tables[i].className == 'vis') {
				var trs = tables[i].getElementsByTagName('tr');
				if (trs.length >= 2) {
					var spans = trs[1].getElementsByTagName('span');
					if (
						spans.length >= 2 &&
						spans[1] != null &&
						spans[1].id != null &&
						spans[1].id.substr(0, 11) == 'label_text_'
					) {
						village_table = tables[i];
						break;
					}
				}
			}
		}
		if (village_table != null) {
			var trs = village_table.getElementsByTagName('tr');
			var list = "";
			for (var i = 1; i < trs.length; i++) {
				var span = trs[i].getElementsByTagName('span')[1];
				if (
					span != null &&
					span.id != null &&
					span.id.substr(0, 11) == 'label_text_'
				) {
					var id = span.id.substr(11);
					list += id + ":" + span.innerHTML + "<>";
					var td = trs[i].getElementsByTagName('td')[0];
					td.innerHTML += '<BR>&nbsp;' + village_links(id);
				}
			}
			if (list.length > 0) {
				GM_setValue('village_list', list);
			}
		}
	}
}


})()