// ==UserScript==
// @name           Replacer [PRYWATNY]v2
// @namespace      Zmiana tresci postow by miki
// @include        *darkwarez*mode=quote*
// ==/UserScript==

tresc_org = document.getElementById("message").value;
tresc_pornbb = tresc_org.replace(/\n\[color=dodgerblue\]\[size=24\]\[b\].*(\n.*)*\[\/list\]\n/, "")
tresc_pornbb = tresc_pornbb.replace(/\[quote=\"dejmein\"\]/, "")
tresc_pornbb = tresc_pornbb.replace(/\[\/quote\]/, "")
tresc_pornbb = tresc_pornbb.replace(/LUB/gi, "OR")
tresc_pornbb = tresc_pornbb.replace(/Bez hasła/gi, "NO PASSWORD")
tresc_pornbb = tresc_pornbb.replace(/\n\[color=#45a7a7\].*\[\/img]\n/gi, "")
tresc_pornbb = tresc_pornbb.replace(/\/OR\/\n\nhttp:\/\/turbobit.*/gi, "")
tresc_pornbb = tresc_pornbb.replace(/\nhttp:\/\/turbobit.*\n\n/gi, "")
tresc_pornbb = tresc_pornbb.replace("POJEDYNCZE LINKI, NIE MUSISZ NIC WYPAKOWYWAĆ! ŚCIĄGAJ I OGLĄDAJ!", "SINGLE LINKS, DONT NEED TO UNRAR IT! JUST DOWNLOAD IT AND WATCH!")

tresc_mega = tresc_org.replace(/\n\[color=dodgerblue\]\[size=24\]\[b\].*(\n.*)*\[\/list\]\n/, "")
tresc_mega = tresc_mega.replace(/\n\[color=#45a7a7\].*\[\/img]\n/gi, "")
tresc_mega = tresc_mega.replace("[size=24]", "[size=3]")
tresc_mega = tresc_mega.replace(/\[code\]/gi, "[hide][code]")
tresc_mega = tresc_mega.replace(/\[\/code\]/gi, "[/code][/hide]")
tresc_mega = tresc_mega.replace(/\[quote=\"dejmein\"\]/, "")
tresc_mega = tresc_mega.replace(/\[\/quote\]/, "")

tresc_org = document.getElementById("message").value;
tresc_multiposter = tresc_org.replace(/\n\[color=dodgerblue\]\[size=24\]\[b\].*(\n.*)*\[\/list\]\n/, "")
tresc_multiposter = tresc_multiposter.replace(/\[quote=\"dejmein\"\]/, "")
tresc_multiposter = tresc_multiposter.replace(/\[\/quote\]/, "")
tresc_multiposter = tresc_multiposter.replace(/LUB/gi, "OR")
tresc_multiposter = tresc_multiposter.replace(/Bez hasła/gi, "NO PASSWORD")
tresc_multiposter = tresc_multiposter.replace(/\n\[color=#45a7a7\].*\[\/img]\n/gi, "")
tresc_multiposter = tresc_multiposter.replace("POJEDYNCZE LINKI, NIE MUSISZ NIC WYPAKOWYWAĆ! ŚCIĄGAJ I OGLĄDAJ!", "SINGLE LINKS, DONT NEED TO UNRAR IT! JUST DOWNLOAD IT AND WATCH!")

tresc_org = document.getElementById("message").value;
tresc_mikiposter = tresc_org.replace(/\n\[color=dodgerblue\]\[size=24\]\[b\].*(\n.*)*\[\/list\]\n/, "")
tresc_mikiposter = tresc_mikiposter.replace(/\[quote=\"dejmein\"\]/, "")
tresc_mikiposter = tresc_mikiposter.replace(/\[\/quote\]/, "")
tresc_mikiposter = tresc_mikiposter.replace(/\n\[color=#45a7a7\].*\[\/img]\n/gi, "")
tresc_mikiposter = tresc_mikiposter.replace(/\[img\]/gi, "[spoiler][img]")
tresc_mikiposter = tresc_mikiposter.replace(/\[\/code\]/gi, "[/spoiler][/img]")


newDiv = document.createElement("div");
  newDiv.innerHTML =
  "<div style='position:absolute; font-size: 10px; text-align: center; font-family:Arial; top: 0; left: 0; color: #949494; background-color: #1c1c1c; width: 100%; height: 100%;'>" +
  "<span style='font-size:24px; font-weight: bold; color: #3f4041;'>Porn-BB</span><br />" +
  "<textarea  onclick='this.focus();this.select()' style='background: #121212; border: 1px solid #555555; width: 85%; height: 280px;'>" + 
  tresc_pornbb +
  "</textarea><br />" + 
  "<span style='font-size:24px; font-weight: bold; color: #3f4041;'>Megawarez / Exsite</span><br />" +
  "<textarea onclick='this.focus();this.select()' style='background: #121212; border: 1px solid #555555; width: 85%; height: 280px;'>" + 
  tresc_mega +
  "</textarea><br />" +
 "<span style='font-size:24px; font-weight: bold; color: #3f4041;'>MultiPoster</span><br />" +
  "<textarea onclick='this.focus();this.select()' style='background: #121212; border: 1px solid #555555; width: 85%; height: 280px;'>" + 
  tresc_mega +
  "</textarea><br />" +
 "<span style='font-size:24px; font-weight: bold; color: #3f4041;'>MikiPoster</span><br />" +
  "<textarea onclick='this.focus();this.select()' style='background: #121212; border: 1px solid #555555; width: 85%; height: 280px;'>" + 
  tresc_mega +
  "</textarea><br />" +
  "</div>";

  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);