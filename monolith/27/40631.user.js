// ==UserScript==
// @name           Alianza Sociedad Anónima
// @namespace      Stark21
// @description    Utilidades para la Alianza SA
// @include        http://*ikariam.*/index.php*
// ==/UserScript==




// Function to add styles
if(!window.addGlobalStyle){
   function addGlobalStyle(css) {
      var head, style;
      head = document.getElementsByTagName('head')[0];
      if (!head) { return; }
      style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      head.appendChild(style);
   }
}

// The actual styles
addGlobalStyle(
'#flBox { height: 29px; width: 29px; position: absolute; margin:-170px 29px -18px 945px; z-index:31; }' +
'#flHeader { height: 26px; background-image: url(http://img375.imageshack.us/img375/4042/flheadervv3xu6.jpg); background-repeat: no-repeat; font-weight: bold; font-size: 13px; text-align: center; padding-top: 5px; cursor: pointer; margin-top: 170px;}' +
'#flHeader2 { height: 26px; width: 26px; background-image: url(http://img529.imageshack.us/img529/4585/flheader2kf8.jpg); background-repeat: no-repeat; background-position: right; font-weight: bold; font-size: 13px; text-align: right; cursor: pointer; margin-top: 170px; }' +
'#flContent { height: 395px; background-image: url(http://img361.imageshack.us/img361/768/flbackgroundum3as3.jpg); margin-top: -5px; padding: 7px; overflow: auto; display: none; font-family: Arial; font-size: 12px; }' +
'#flFooter { background-image: url(http://img360.imageshack.us/img360/4628/flfooterwc5fo2.jpg); height: 5px; display: none;  }' +
'#flBox ul { margin-left: 25px; } #flBox li { list-style: disc; } #flBox img{ margin-bottom:-3px; } #flBox ul a, #flBox p a { color: #542c0f; text-decoration: none; } #flBox ul a:hover, #flBox p a:hover{ color: #542c0f; text-decoration: underline; }' +
'#flBox input[type=text]{ color: #542c0f; background-color: #f3edd3; border: 1px solid #542c0f; font-size: 12px; padding: 1px; width: 100px;}');

// If the list does not exist make it with value 0
if(!GM_getValue("IkariamFriendList")){
   GM_setValue("IkariamFriendList", "0");
}

var IkariamFriendList = GM_getValue("IkariamFriendList");

// Add friend function
unsafeWindow.flAddFriend = function(){

   var flNewName = document.getElementById("flNewName");
   var flNewLink = document.getElementById("flNewLink");

   if(flNewName.value == "" || flNewName.value == flNewName.defaultValue || flNewLink.value == "" || flNewLink.value == flNewLink.defaultValue){
      return alert("Please fill in all fields.");
   }

   var NewFriendListContent = '';

   if(IkariamFriendList == "0"){
      NewFriendListContent = flNewName.value + '|' + flNewLink.value + ';';
   }
   else{
      NewFriendListContent = IkariamFriendList + flNewName.value + '|' + flNewLink.value + ';';
   }

   window.setTimeout(GM_setValue, 0, "IkariamFriendList", NewFriendListContent);

   return window.location.reload();


};

// Delete friend function
unsafeWindow.flDeleteFriend = function(FriendName, FriendLink){

   var flConfirm = confirm("Seguro que quieres borrar a " + FriendName + "?");

   if(flConfirm == 1){

      var NewFriendListContent = '';

      flFiler = FriendName + '|' + FriendLink + ';';
      NewFriendListContent = IkariamFriendList.replace(flFiler, '');

      if(NewFriendListContent == ""){
         NewFriendListContent = "0";
      }

      window.setTimeout(GM_setValue, 0, "IkariamFriendList", NewFriendListContent);

      return window.location.reload();

   }

   return;
};

// Function to open/close the frame
unsafeWindow.flToggleFrame = function(nr){

   if(nr == 1){
      document.getElementById("flButtonArea").innerHTML = '<div id="flHeader" onClick="flToggleFrame(0);">ATAJOS</div>';
      document.getElementById("flContent").style.display = 'block';
      document.getElementById("flFooter").style.display = 'block';
      document.getElementById("flBox").style.height = '442px';
      document.getElementById("flBox").style.width = '165px';
      document.getElementById("flBox").style.margin = '-170px 29px -18px 806px';
   }
   else{
      document.getElementById("flButtonArea").innerHTML = '<div id="flHeader2" oNdblClick="flToggleFrame(1);"></div>';
      document.getElementById("flContent").style.display = 'none';
      document.getElementById("flFooter").style.display = 'none';
      document.getElementById("flBox").style.height = '29px';
      document.getElementById("flBox").style.width = '29px';
      document.getElementById("flBox").style.margin = '-170px 29px -18px 945px';
   }

};

// Function to add the current URL to the Link Field
unsafeWindow.flInsertCurrentURL = function(){

   var flNewLink = document.getElementById("flNewLink");
   var flCurrentURL = window.document.location;

   return flNewLink.value = flCurrentURL;

};

// Export function
unsafeWindow.flExport = function(){

   if(IkariamFriendList == "0"){
      return alert("No hay atajos en tu lista.");
   }

   prompt('Copiar esta linea de texto en la caja de importar.', IkariamFriendList);

}

// Import function
unsafeWindow.flImport = function(){
   var flImportValue = prompt('Pega la linea de texto en la caja de abajo. Asegurate que el texto tiene el formato correcto');

   if(flImportValue){
      if(IkariamFriendList == "0"){
         NewFriendListContent = flImportValue;
      }
      else{
         NewFriendListContent = IkariamFriendList + flImportValue;
      }
      window.setTimeout(GM_setValue, 0, "IkariamFriendList", NewFriendListContent);
      alert("Hecho");
      return window.location.reload();
   }else{
      return alert("Por favor, importa una linea de texto correcta.");
   }

   return false;
}




// remplazar function
unsafeWindow.flRemplaza = function(){
   var flRemplazaValue = prompt('Introduce la nueva lista de atajos. Si deseas borrar la lista actual, escribe 0 (cero)');

   if(flRemplazaValue){
      NewFriendListContent = flRemplazaValue;
      window.setTimeout(GM_setValue, 0, "IkariamFriendList", NewFriendListContent);
      alert("Hecho");
      return window.location.reload();
   }else{
      return alert("Por favor, escriba una linea de texto correcta.");
   }

   return false;
}




// Time to build the Friendlist in HTML
var flHTML = '';
var CurrentIkariamFriendList = '';

if(IkariamFriendList == "0"){

   flHTML += '<center>No hay atajos en la lista.</center>';

}
else{

   // Slice the last ; of the list
   CurrentIkariamFriendList = IkariamFriendList.slice(0, -1);
   // Split the long string up
   CurrentIkariamFriendList = CurrentIkariamFriendList.split(';');
   // And sort it alphabetical
   CurrentIkariamFriendList.sort();

   var IkariamFriend = '';

   flHTML += '<ul id="flList">';

   for(i=0;i<=CurrentIkariamFriendList.length-1;i++){

      IkariamFriend = CurrentIkariamFriendList[i];

      // Split every piece to get the name and link
      IkariamFriend = IkariamFriend.split('|');

      flFriendName = IkariamFriend[0];
      flFriendLink = IkariamFriend[1];

      flHTML += '<li><a href="' + flFriendLink + '">' + flFriendName + '</a> <a href="javascript:flDeleteFriend(\'' + flFriendName + '\', \'' + flFriendLink + '\');"><img src="http://www.idivimage.com/files/tmwwn5vzgmitwnooili2.gif"></a></li>';

   }

   flHTML += '</ul>';
}

// Add the HTML for the adding friends part
flHTML += '<div style="text-align:center;"><hr>Agregar Atajo<br><input type="text" name ="flNewName" id="flNewName" value="Nombre" onFocus="javascript:if(this.value == this.defaultValue) this.value = \'\';" onblur="javascript:if(this.value == \'\') this.value = this.defaultValue;" /><p><a onClick="javascript:flInsertCurrentURL();" style="font-size: 9px; cursor: pointer;">Usar URL actual</a></p><input type="text" name ="flNewLink" id="flNewLink" value="URL" onFocus="javascript:if(this.value == this.defaultValue) this.value = \'\';" onblur="javascript:if(this.value == \'\') this.value = this.defaultValue;" /><br /><br /><a href="javascript:flAddFriend();" class="button">&nbsp;&nbsp;&nbsp;Agregar&nbsp;&nbsp;&nbsp;</a><br><p style="padding-top: 8px;"><a href="javascript:flExport();" class="flSmall" style="font-size: 10px;">Exportar</a> | <a href="javascript:flImport();" class="flSmall" style="font-size: 10px;">Importar</a></p> <p><a href="javascript:flRemplaza();" class="flSmall" style="font-size: 10px;">Reemplazar</a></p></div>';

// And now its time to place it in the right position, before the 'mainview' (playfield) div that is
var main, newElement;
main = document.getElementById('mainview');
if (main) {
    newElement = document.createElement('div');
   newElement.setAttribute('id', 'flBox');
    main.parentNode.insertBefore(newElement, main);
}

// And finally put layout + friendlist HTML in it all together, we're done :)
document.getElementById("flBox").innerHTML = '<div id="flButtonArea"><div id="flHeader2" oNdblClick="flToggleFrame(1);"></div></div><div id="flContent">' + flHTML + '</div><div id="flFooter"></div>';

// ==UserScript==
// @name           ALIANZAS COA`S ALPHA
// @namespace      ikatips
// @description    Herraminetas para la alianza
// @include        http://*ikariam.*/index.php*
// @author         Original por Verx - Modificado por ALEX para ALIANZAS COA -
// @version        20080619 120713
// ==/UserScript==

var tagsAModificar = new Array("A","SPAN");
var diaLimite     = 2;
var cookieIKO    = 'IKAFONT';
var cookie_SEPARA    = '|';
var css_MenuIKO_String = '#menu {'+
'align:right;'+
'margin-left:680px;'+
'margin-top: -16.5px;'+
'color:#FF0000;'+
'width: 50px;'+
'cursor: hand;'+
'}'+
'#menu ul {'+
'list-style: none;'+
'margin: 0;'+
'padding: 0;'+
'width: 13em;'+
'}'+
'#menu a, #menu h2 {'+
'font: bold 11px/16px arial, helvetica, sans-serif;'+
'display: block;'+
'margin: 0;'+
'padding: 2px 3px;'+
'cursor: hand;'+
'}'+
'#menu a {'+
'color: RGB(84,44,15);'+
//Colores menu normal.
'background: RGB(246,235,188);'+
'border: double 3px RGB(84,44,15);'+
'border-left: double 3px RGB(84,44,15);'+
'border-right: double 3px RGB(84,44,15);'+
'text-decoration: none;'+
'}'+
'#menu a:hover {'+
'color: RGB(84,44,15);'+
//Color menu seleccionado.
'background: RGB(222,180,120);'+
'border: double 3px RGB(84,44,15);'+
'}'+
'#menu li {position: relative; }'+
'#menu ul ul {'+
'position: relative;'+
'z-index: 500;'+
'}'+
'#menu ul ul ul {'+
'position: absolute;'+
'top: 0;'+
'left: 100%;'+
'}'+
'div#menu ul ul,'+
'div#menu ul li:hover ul ul,'+
'div#menu ul ul li:hover ul ul'+
'{display: none;}'+
'div#menu ul li:hover ul,'+
'div#menu ul ul li:hover ul,'+
'div#menu ul ul ul li:hover ul'+
'{display: block;}';
//esta caracterÃ­stica es casi estÃ¡ndar, utilizado en muchos scripts de Greasemonkey
if(!window.add_Global_Style){
       function add_Global_Style(css) {
               var head, style;
               head = document.getElementsByTagName('head')[0];
               if (!head) { return; }
               style = document.createElement('style');
               style.type = 'text/css';
               style.innerHTML = css;
               head.appendChild(style);
       }
}

function getAlltagsAModificar(){

var arrResult = new Array();
var lastI     = 0;
var xTags     = null;

for (tagX = 0; tagX<tagsAModificar.length; tagX++) {
xTags = document.getElementsByTagName(tagsAModificar[tagX]);
for(i=0;i<xTags.length;i++){arrResult[lastI] = xTags[i];lastI++;}
}

return arrResult;

}

unsafeWindow.setFontIka = function () {
 var FamilyIndex = document.getElementById("Family").selectedIndex;
 var FI = document.getElementById("Family").options[FamilyIndex].text;
 changeAllFamily(FI);
 var SizeIndex = document.getElementById("Size").selectedIndex;
 var SI = document.getElementById("Size").options[SizeIndex].text;
 changeAllSize(SI);
 var ColorIndex = document.getElementById("Color").selectedIndex;
 var CI = document.getElementById("Color").options[ColorIndex].text;
 changeAllColor(CI);
 createCookie(cookieIKO,FI+cookie_SEPARA+SI+cookie_SEPARA+CI,diaLimite);
}
function createCookie(name,value,days) {
       if (days) {
               var date = new Date();
               date.setTime(date.getTime()+(days*24*60*60*1000));
               var expires = "; expires="+date.toGMTString();
       }
       else var expires = "";
       document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(c_name) {
       if (document.cookie.length>0)
 {
 c_start=document.cookie.indexOf(c_name + "=");
 if (c_start!=-1)
   {
   c_start=c_start + c_name.length+1;
   c_end=document.cookie.indexOf(";",c_start);
   if (c_end==-1) c_end=document.cookie.length;
   return unescape(document.cookie.substring(c_start,c_end));
   }
 }
       return "";
}
function initFont(){
var rC     = readCookie(cookieIKO);
if (rC){
var myFont = rC.split(cookie_SEPARA);
changeAllFamily(myFont[0]);
changeAllSize(myFont[1]);
changeAllColor(myFont[2]);
}
}
function eraseCookie(name) {
       createCookie(name,"",-1);
}
function changeAllFamily(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.fontFamily = valueOfSelect;
}
}
function changeAllSize(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.fontSize = valueOfSelect;
}
}
function changeAllColor(valueOfSelect){
var dataToChange = getAlltagsAModificar();
for (i=0;i<dataToChange.length;i++){
 dataToChange[i].style.color = valueOfSelect;
}
}
unsafeWindow.clearFont = function(){
eraseCookie(cookieIKO);
window.location.reload();
}
function addIKOS_ToolsMenu(){

var xTags = document.getElementsByTagName('LI');
var xLi   = null;
var IKOSTools_Link       = document.createElement('LI');
IKOSTools_Link.setAttribute('id', 'IKOSTools');

for(i=0;i<xTags.length;i++){
xLi = xTags[i];
if (xLi.className == 'help') {
xLi.parentNode.appendChild(IKOSTools_Link,xLi);
add_Global_Style(css_MenuIKO_String);
document.getElementById('IKOSTools').innerHTML =
'<div id="menu">'
+ '<ul>'
+ ' <li><h2>SOCIEDAD ANÓNIMA</h2>'
+ '   <ul>'
+ '     <li><a target="_blank" href="http://s2.ar.ikariam.com/index.php?view=sendAllyMessage&oldView=embassy&id=53604&position=7&type=50" title="Mensaje Global" align="left">&nbsp;Mensaje Global</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/suche.php?view=suche_insel&land=ar" title="Buscador de Islas" align="left">&nbsp;Buscar Isla</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/suche.php?view=suche_spieler&land=ar" title="Buscador de Jugadores" align="left">&nbsp;Buscar Jugador</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/suche.php?view=suche_stadt&land=ar" title="Buscador de Ciudades" align="left">&nbsp;Buscar Ciudad</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/suche.php?view=suche_allianz&land=ar" title="Buscador de Alianzas" align="left">&nbsp;Buscar Alianza</a></li>'
+ '     <li><a target="_blank" href="http://www.serpini.es/chivakariam/busqueda.php?pais=ar" title="Buscador Chivacariam" align="left">&nbsp;Buscador Chivacariam</a></li>'
+ '     <li><a target="_blank" href="http://ikariamlibrary.com/?content=IkaFight" title="Simulador de Batallas" align="left">&nbsp;Ika Fight</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/rechner.php?view=handelshafen" title="Para Calcular Saqueos" align="left">&nbsp;Puerto Comercial</a></li>'
+ '     <li><a target="_blank" href="http://www.ika-world.com/ar/rechner.php?view=reisezeit" title="Para Calcular tiempos de Flotas" align="left">&nbsp;Tiempo de Flotas</a></li>'
+ '     <li><a target="_blank" href="http://www.online-stopwatch.com/countdown-clock/full-screen/" title="Cronómetro para las Batallas" align="left">&nbsp;Cronómetro</a></li>'
+'</ul>'
+'</DIV>';

break;
}}}

addIKOS_ToolsMenu();