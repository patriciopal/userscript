// ==UserScript==
// @name           Flickr - Ilustrar Portugal - Tópicos
// @namespace      http://sixhat.net/
// @version        0.7
// @include        http://www.flickr.com/groups/ilportugal/discuss/72157602023428870/*
// @include        http://www.flickr.com/groups/ilportugal/discuss/72157605067183202/*
// @include        http://www.flickr.com/groups/ilportugal/discuss/72157605067222140/*
// ==/UserScript==


aa=document.location.href;

if (aa.indexOf("#")>=0){
  b=aa.substr(0,aa.indexOf("#"));
  document.location.href=b;
}

a=document.evaluate( '//title', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
reg='(\\d+) bandeiras';
tp=a.snapshotItem(0).textContent.match(reg);
topico=[];
topico[3]=3;
topico[4]=6;
topico[5]=6;
topico[6]=6;
topico[7]=9;
topico[8]=9;
topico[9]=9;
topico[10]=10;



tabela=document.evaluate(
	'//table[@class=\'TopicReply\']/tbody/tr/td[@class=\'Said\']/p/a',
	document,
	null,
	XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	null);


max=parseInt(tabela.snapshotLength);


for (var i = max - 1; i >= 0; i--){

	aa=" "+tabela.snapshotItem(i).innerHTML;

	if (aa.substr(0,5)==" <img") {

		newEl=document.createElement("div");
		newEl.innerHTML="<b>IP ToolBox</b><br/><a href='ip_admins' class='ip_p' id='ip_id"+i+"'>Verificar Foto</a>";
		newEl.id="iportugal"+i;

		tabela.snapshotItem(i).parentNode.insertBefore(newEl,tabela.snapshotItem(i));
		newEl=document.getElementById('iportugal'+i);

		newEl.setAttribute("style","float:right; background:#eeeeee; padding: 10px;");
	}
};

document.addEventListener('click', function(event){

	if (event.target==window.location.href+"ip_admins"){
		event.stopPropagation();
		event.preventDefault();
		event.target.innerHTML="Carregando...";
		var i=parseInt(event.target.id.substr(5,5));
		GM_xmlhttpRequest({
			method: 'GET',
			url: ""+tabela.snapshotItem(i),
			headers: {
				'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
				'Accept': 'text/html',
			},
			onload: function(responseDetails) {
				if (responseDetails.readyState == 4) {	
					numFlags=responseDetails.responseText;
					hasNext=numFlags.match(/Paginator/g);
					numFlags=numFlags.match(/1569868867_a67d367154_m/g);
					if (numFlags){
						numFlags=numFlags.length;
					} else {
						numFlags=0;
					}	
					if (hasNext){
						GM_xmlhttpRequest({
							method: 'GET',
							url: ""+tabela.snapshotItem(i)+"/page2/",
							headers: {
								'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey',
								'Accept': 'text/html',
							},
							onload: function(responseDetails) {
								if (responseDetails.readyState == 4) {	
									numFlags2=responseDetails.responseText;
									numFlags2=numFlags2.match(/1569868867_a67d367154_m/g);
									if (numFlags2){
										numFlags2=numFlags2.length;
									} else {
										numFlags2=0;
									}	
									newEl=document.getElementById('iportugal'+i);					
									newEl.innerHTML="<b>IP ToolBox</b><br/>"+(numFlags+numFlags2)+" Bandeiras! ";
									newEl.setAttribute("style","float:right; background:#eeeeee; padding: 10px;");
									if ((numFlags+numFlags2)<parseInt(tp[1])){
										newEl.setAttribute("style","float:right; background:#ff9999; padding: 10px;");
									};
									if ((numFlags+numFlags2)>=(topico[parseInt(tp[1])+1])) {
										newEl.setAttribute("style","float:right; background:#99ff99; padding: 10px;");
									};
								};
							}
						});
					} else {
						newEl=document.getElementById('iportugal'+i);					
						newEl.innerHTML="<b>IP ToolBox</b><br/>"+numFlags+" Bandeiras! ";
						newEl.setAttribute("style","float:right; background:#eeeeee; padding: 10px;");
						if (numFlags<parseInt(tp[1])){
							newEl.setAttribute("style","float:right; background:#ff9999; padding: 10px;");
						};
						if (numFlags>=(topico[parseInt(tp[1])+1])) {
							newEl.setAttribute("style","float:right; background:#99ff99; padding: 10px;");
						};
					}
				};
			}	
		});
	};
}, true);


