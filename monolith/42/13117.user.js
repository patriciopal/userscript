﻿// ==UserScript==

// @name           Travian Village Building Level Tracker 0.7 HUN

// @namespace      Travian

// @description    Displays all your buildinglevels and compares to wanted levels. Shows witch buildings need to be upgraded, and witch not.

// @include        http://*.travian.*/dorf2*

// @include        http://*.travian.*/build.php?newdid*

// ==/UserScript==

// HUNGARIAN version by vic


// ›› Event listener starts things off once the page is done loading.
window.addEventListener("load",init,false);

// ›› Set styles.
function init(){
	var cssString2 = '.TMbuildingtags2{' +
		'background-color:#99FF99;' + 
		'border:thin solid #000000;' +
		'font-family: Verdana, Arial, Helvetica, sans-serif;' +
		'font-size:8pt;' +
		'font-weight:bold;' +
		'text-align:center;' +
		'position:absolute;' +
		'width:230px;' +
		'height:14px;' +
		'cursor:pointer;' +
		'visibility:hidden;' +
		'z-index:50;}';
	var cssString3 = '.TMbuildingtags3{' +
		'background-color:#FF9999;' + // RED
		'border:thin solid #000000;' +
		'font-family: Verdana, Arial, Helvetica, sans-serif;' +
		'font-size:8pt;' +
		'font-weight:bold;' +
		'text-align:center;' +
		'position:absolute;' +
		'width:230px;' +
		'height:14px;' +
		'cursor:pointer;' +
		'visibility:hidden;' +
		'z-index:50;}';
	addCSS(cssString2);
	addCSS(cssString3);
	TM_ShowMainBuildingNumbers();
}

// ›› Main.
function TM_ShowMainBuildingNumbers(){
	// ›› x and y offset in pixels added to every absolutely positioned style element
	var x = 700;
	var y = 350;
	
	// ›› could get this from the styles, but hard coding them is faster and allows for a simpler loop
	buildArr1 = new Array(21);
	buildArr1[0] = x;
	buildArr1[1] = x;
	buildArr1[2] = x;
	buildArr1[3] = x;
	buildArr1[4] = x;
	buildArr1[5] = x;
	buildArr1[6] = x;
	buildArr1[7] = x;
	buildArr1[8] = x;
	buildArr1[9] = x;
	buildArr1[10] = x;
	buildArr1[11] = x;
	buildArr1[12] = x;
	buildArr1[13] = x;
	buildArr1[14] = x;
	buildArr1[15] = x;
	buildArr1[16] = x;
	buildArr1[17] = x;
	buildArr1[18] = x;
	buildArr1[19] = x;
	buildArr1[20] = x;
	buildArr1[21] = x;

	buildArr2 = new Array(21);
	buildArr2[0] = y;
	buildArr2[1] = 20 + y;
	buildArr2[2] = 40 + y;
	buildArr2[3] = 60 + y;
	buildArr2[4] = 80 + y;
	buildArr2[5] = 100 + y;
	buildArr2[6] = 120 + y;
	buildArr2[7] = 140 + y;
	buildArr2[8] = 160 + y;
	buildArr2[9] = 180 + y;
	buildArr2[10] = 200 + y;
	buildArr2[11] = 220 + y;
	buildArr2[12] = 240 + y;
	buildArr2[13] = 260 + y;
	buildArr2[14] = 280 + y;
	buildArr2[15] = 300 + y;
	buildArr2[16] = 320 + y;
	buildArr2[17] = 340 + y;
	buildArr2[18] = 360 + y;
	buildArr2[19] = 380 + y;
	buildArr2[20] = 400 + y;
	buildArr2[21] = 420 + y;

	// ›› Map1 holds building names, level and building spot IDs in area elements (2 are duplicate walls to be ignored).
	var map1Element = document.getElementsByName('map1')[0];
	if (map1Element){
	
		// ›› Map1 ONLY has area children. 
		var areaElements = map1Element.childNodes;	
		var BuildingLevel, smallDIV;
		var BuildingName = new Array(21);
		var BuildingURL = new Array(21);
		
		for (var i = 0; i < 22; i++) {
			BuildingLevel = /(\d+)/.exec(areaElements[i].getAttribute("title"));
			// BuildingName = /[A-z0-9äÄöÖåÅ -]+/.exec(areaElements[i].getAttribute("title"));
			BuildingName = /[A-z0-9íÍéÉáÁűŰőŐúÚöÖüÜóÓ -]+/.exec(areaElements[i].getAttribute("title"));
			var Name = BuildingName[0];
			var spot = Name.indexOf(" Szint"); //REPlase this with level
			Name = Name.slice(0,spot);
			BuildingURL = areaElements[i].getAttribute("href");

			// ›› Only show spots with buildings on them.
			if (BuildingLevel){
				
				// *********************************************************************************************************
				// **** EDIT THIS IF YOU NEED ANOTHER LANQUAGE								****
				// **** IN DIFFRENT LANQUAGES, CHANGE BUILDING NAMES AS THEY SHOULD BE 					****
				// **** THIS WORKS IN HUNGARIAN AND IN THE COMMMENTS YOU CAN FIND BUILDING NAMES IN ENGLISH 		****
				// *********************************************************************************************************

				Buildings = new Array(35);
				Buildings[0] = "Piac"; 		// Marketplace
				Buildings[1] = "Kaszárnya"; 		// Barracks
				Buildings[2] = "Gyülekezőtér"; 		//Rally Point
				Buildings[3] = "Pékség"; 		//Bakery
				Buildings[4] = "Agyagégető"; 		//Brickyard
				Buildings[5] = "Malom"; 		//Grain Mill
				Buildings[6] = "Magtár"; 		//Granary
				Buildings[28] = "Nagy Magtár"; 	//Great Granary
				Buildings[7] = "Nagy Raktár"; 	//Great Warehouse
				Buildings[8] = "Vasöntöde"; 		//Iron Foundry
				Buildings[9] = "Fafeldolgozó"; 		//Sawmill
				Buildings[10] = "Raktár"; 		//Warehouse
				Buildings[11] = "Akadémia"; 		//Academy
				Buildings[12] = "Fegyverkovács"; 		//Blacksmith
				Buildings[13] = "Páncélkovács"; 		//Armoury
				Buildings[14] = "Kőfal"; 		//City Wall
				Buildings[29] = "Nagy Kaszárnya"; 	//Great Barracks
				Buildings[30] = "Nagy Istálló"; 	// Great Stable
				Buildings[15] = "Hősök háza"; 	//Hero's Mansion
				Buildings[16] = "Istálló"; 		//Stable
				Buildings[17] = "Gyakorlótér"; 	//Tournament Square
				Buildings[18] = "Csapdakészítő"; 		//Trapper
				Buildings[19] = "Műhely"; 		//Workshop
				Buildings[20] = "Rejtekhely"; 		//Cranny
				Buildings[21] = "Követség"; 		//Embassy
				Buildings[22] = "Főépület"; 	//Main Building
				Buildings[23] = "Palota"; 		//Palace
				Buildings[24] = "Rezidencia"; 		//Residence
				Buildings[25] = "Kőfaragó"; 		//Stonemason
				Buildings[26] = "Tanácsháza"; 		//Townhall
				Buildings[27] = "Kereskedelmi központ"; 	//Trade Office
				Buildings[31] = "Kincstár"; 		//Treasury
				Buildings[32] = "Világcsoda"; 	//Wonder Of The World
				Buildings[33] = "Földfal"; 		//Earth Wall
				Buildings[34] = "Cölöpfal"; 		//Palisade
				
				// *********************************************************************************************************
				// **** EDIT THIS											****
				// **** EDIT VALUES FROM HERE, DESIDE HOW FAR YOU WANT TO UPDRADE EACH BUILDING 			****
				// **** EXAMPLE: "WantedLevels[1] = 15; // Barracks" MEANS THAT YOU WANT BARRACKS TO BE AT LEVEL 15 	****
				// *********************************************************************************************************

				WantedLevels = new Array(35);
				WantedLevels[0] = 20; // Marketplace
				WantedLevels[1] = 15; // Barracks
				WantedLevels[2] = 1; //Rally point
				WantedLevels[3] = 5; //Bakery
				WantedLevels[4] = 5; //Brickyard
				WantedLevels[5] = 5; //Grain Mill
				WantedLevels[6] = 13; //Granary
				WantedLevels[7] = 1; //Great Warehouse
				WantedLevels[8] = 5; //Iron Foundry
				WantedLevels[9] = 5; //Sawmill
				WantedLevels[10] = 15; //Warehouse
				WantedLevels[11] = 10; //Academy
				WantedLevels[12] = 5; //Blacksmith
				WantedLevels[13] = 5; //Armoury
				WantedLevels[14] = 20; //City Wall
				WantedLevels[15] = 10; //Hero's Mansion
				WantedLevels[16] = 10; //Stable
				WantedLevels[17] = 1; //Tournament Square
				WantedLevels[18] = 1; //Trapper
				WantedLevels[19] = 1; //Workshop
				WantedLevels[20] = 1; //Cranny
				WantedLevels[21] = 6; //Embassy
				WantedLevels[22] = 19; //Workshop
				WantedLevels[23] = 20; //Palace
				WantedLevels[24] = 10; //Residence
				WantedLevels[25] = 10; //Stonemason
				WantedLevels[26] = 5; //Townhall
				WantedLevels[27] = 10; //Trade Office
				WantedLevels[28] = 1; //Great Granary
				WantedLevels[29] = 1; //Great Barracks
				WantedLevels[30] = 1; // Great Stable
				WantedLevels[31] = 1; //Treasury
				WantedLevels[32] = 1; //Wonder Of The World
				WantedLevels[33] = 20; //Earth Wall
				WantedLevels[34] = 20; //Palisade
				
				// *********************************************************************************************************
				// **** STOP EDITING											****
				// *********************************************************************************************************

				for (var j = 0; j < 35; j++) {
					if (Buildings[j] == Name){
						//document.write(Name);
						//document.write(Buildings[j]);
						//document.write(WantedLevels[j]);
						//document.write(BuildingLevel[0]);
						if (WantedLevels[j] <= BuildingLevel[0]){
							//document.write("vihreä");
							smallDIV = addDiv('TMbuildingtag' + i,'TMbuildingtags2',Name + ' ' + BuildingLevel[0] + '/' + WantedLevels[j],false);
						}else{
							//document.write("punainen");
							smallDIV = addDiv('TMbuildingtag' + i,'TMbuildingtags3',Name + ' ' + BuildingLevel[0] + '/' + WantedLevels[j],false);
						}
					}
				}

				//smallDIV = addDiv('TMbuildingtag' + i,'TMbuildingtags2',Name + ' ' + BuildingLevel[0],false);
				smallDIV.style.top = buildArr2[i] + 'px';
				smallDIV.style.left = buildArr1[i] + 'px';
				smallDIV.style.visibility = "visible";
				smallDIV.setAttribute('goto', BuildingURL);
				smallDIV.addEventListener('click', function() {
					window.location.href = this.getAttribute('goto');
					}, true);
			}
		}
	}
}

// ›› Adds a generic div.
function addDiv(id,style,html,parent){
	var body, div;
	if (!parent){body = document.getElementsByTagName('body')[0];}else{body = document.getElementsByTagName(parent);}
	if (!body) { return false; }
	div = document.createElement('div');
	div.id = id;
	div.className = style;
	if (html){div.innerHTML = html;}
	body.appendChild(div);
	return div;
}

// ›› Add generic CSS.
function addCSS(cssString2) {
	var style = document.createElement('STYLE');
	style.type = 'text/css';
	style.innerHTML = cssString2;
	document.getElementsByTagName('HEAD')[0].appendChild(style);
}