// ==UserScript==
// @name           Geocaching Rot_13 
// @namespace      rot_13
// @author	Nadaillat
// @description    Modification pour decrypter au survol de la souris
// @include        http://www.geocaching.com/*
// ==/UserScript==
function rot13(src)
{
    var dst = new String('');
    var len = src.length;
    var b;
    var t = new String('');
    var clear = 0;

    if(len > 0)
    {
	for (var ctr = 0; ctr < len; ctr++)
	{
	    b = src.charCodeAt(ctr);

	    if (60 == b || 91 == b)
	    { 
		clear  = 1;
	    }

	    if (!clear)
	    {
		if (((b>64) && (b<78)) || ((b>96) && (b<110)))
		{ 
		    b = b + 13 
		}
		else
		{ 
		    if (((b>77) && (b<91)) || ((b>109) && (b<123)))
		    { 
			b = b - 13 
		    }
		}
	    }

	    t = String.fromCharCode(b);
	    dst = dst.concat(t);

	    if (b == 62 || b == 93)
	    { 
		clear = 0;
	    }
	}
    }
    return dst;
	
}

function rot()
{
    this.innerHTML = rot13(this.innerHTML);
}

(
function() 
{
    var node = document.getElementById("div_hint");

    if (node) {
	
	node.addEventListener("mouseover", rot, true);
    }
}
)();