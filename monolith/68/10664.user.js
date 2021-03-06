// ==UserScript==
// @name             Torrentz.com VCDQuality Search
// @namespace        
// @description      Search for torrents directly from VCDQuality's release lists, just click on a release.
// @include          http://www.vcdquality.com/*
// ==/UserScript==



// -- Variable Info ---------------------------------
// var strip = Strip the release name from tags (ie; PROPER, SVCD, REPACK) and year? (Recommended!)
// var group = Include the group name as a keyword in the search for a more specific search?
// var g1url = This url template is used when group name is included in the search ($1=release name, $2=group name).
// var g0url = This url template is used when not searching for group name ($1=release name).
// -- Configure -------------------------------------
   var strip = true;
   var group = true;
   var g1url = 'http://www.torrentz.com/search?q=+$1+$2&iht=-1&ihs1=2&iho1=d';
   var g0url = 'http://www.torrentz.com/search?q=+$11&iht=-1&ihs1=2&iho1=d';
// --------------------------------------------------



function vcdq_fixlinks()
{
   var allElements, thisElement;
   allElements = document.getElementsByTagName('a');
   
   for(var i=0; i < allElements.length; i++)
   {
      thisElement = allElements[i];
      
      if (thisElement.href.indexOf("vcdreview.com/info.php") >= 0){
         var rlsname = thisElement.innerHTML;
         
         if(strip){
            var j = rlsname.indexOf("*");
            var h = rlsname.indexOf("(");
            if(j >= 0){
               rlsname = rlsname.substring(0, j-1);}
            if(h >= 0){
               rlsname = rlsname.substring(0, h-1);}
         }        
         
         var url;
         
         if(group){
            var x=1;
            while(allElements[i+x].href.indexOf("grp=") < 0){
               x++;
            }
            url = g1url.replace(new RegExp(/\$1/), rlsname);
            url = url.replace(new RegExp(/\$2/), allElements[i+x].innerHTML);
         }
         else{
            url = g0url.replace(new RegExp(/\$1/), rlsname);
         }
         
         thisElement.href = url;
      }
   }
}


vcdq_fixlinks();

