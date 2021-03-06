<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang='en-US' xml:lang='en-US' xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta content='text/html; charset=utf-8' http-equiv='Content-Type' />
<title>Source for &quot;Better Facebook&quot; &amp;ndash; Userscripts.org</title>
<link href='/images/script_icon.png' rel='shortcut icon' type='image/x-icon' />
<link href="http://static.userscripts.org/stylesheets/compiled/screen.css?1268187647" media="screen, projection" rel="stylesheet" type="text/css" />
<link href="http://static.userscripts.org/stylesheets/compiled/print.css?1268187646" media="print" rel="stylesheet" type="text/css" />
<script src="http://static.userscripts.org/javascripts/all.js?1268187638" type="text/javascript"></script>
<link href="http://static.userscripts.org/stylesheets/sh_style.css?1268187638" media="screen" rel="stylesheet" type="text/css" />
<script src="http://static.userscripts.org/javascripts/sh_main.min.js?1268187638" type="text/javascript"></script>
<script src="http://static.userscripts.org/javascripts/sh_javascript.min.js?1268187638" type="text/javascript"></script>

<!--[if IE]>
<link href="http://static.userscripts.org/stylesheets/compiled/ie.css?1268187646" media="screen, projection" rel="stylesheet" type="text/css" />
<![endif]-->
</head>
<body class='scripts wide' id='scripts-review'>
<div id='root'>
<div id='header'>
<div class='container'>
<div id='site-logo'><a href="/" title="Userscripts.org"><img alt="Userscripts.org" src="http://static.userscripts.org/images/powerups.png?1268187638" /></a></div>
</div>
<div id='navbox'>
<div id='nav'>
<form action='/scripts/search' id='script_search' method='get'>
<label for='script_q' id='script_q_label'>Search all scripts</label>
<input id="script_q" name="q" type="text" />
<input id='search-go' src='/images/search.gif' type='image' />
</form>
<ul id='login'>
<li><a href="/signup" rel="nofollow">Signup</a></li>
<li class='border'><a href="/login?redirect=%2Fscripts%2Freview%2F61761" rel="nofollow">Login</a></li>
</ul>
<ul id='mainmenu'>
<li><a href="/scripts">Scripts</a></li>
<li><a href="/tags">Tags</a></li>
<li><a href="/forums">Forums</a></li>
<li><a href="/users">People</a></li>
<li><a href="/articles">Blog</a></li>
<li><a href="/books">Books</a></li>
</ul>

</div>
</div>
</div>
<div class='container'>

<div id='content'>
<div class='icon' id='heading'>
<a href="http://s3.amazonaws.com/uso_ss/icon/61761/large.png?1257973686" id="icon" rel="lightbox" title="Better Facebook"><img alt="Large" src="http://s3.amazonaws.com/uso_ss/icon/61761/large.png?1257973686" width="125" /></a>
<div id='details'>
<h1 class='title'><a href="/scripts/show/61761">Better Facebook</a></h1>
<span class='author'>By <a href="/users/86416" gravatar="http://www.gravatar.com/avatar.php?gravatar_id=c0e05ac77567885760f81ead5c4cf9a9&amp;r=PG&amp;s=80&amp;default=identicon" rel="nofollow" user_id="86416">Matt Kruse</a></span>
&mdash;
<span class='date'>
Last update
May  7, 2010
</span>
&mdash;
Installed
929,500 times.
<img alt="Daily Installs: 4135, 3637, 5458, 6288, 6153, 5385, 4114, 2332, 3310, 3318, 4485, 3974, 2733, 2294, 2639, 2019, 1167, 2979, 2972, 3592, 3675, 1990, 2538, 1625, 2373, 3400, 3061, 3397, 3290, 3684, 2357, 2294" height="15" src="http://chart.apis.google.com/chart?chs=94x15&amp;cht=lfi&amp;chco=0077CC&amp;chm=B,E6F2FA,0,0,0&amp;chls=1,0,0&amp;chd=t:65,57,86,100,97,85,65,37,52,52,71,63,43,36,41,32,18,47,47,57,58,31,40,25,37,54,48,54,52,58,37,36&amp;chf=bg,s,f8f8f8" width="94" />
</div>
</div>
<ul class='icon' id='script-nav'>

<li class='menu'><a href="/scripts/show/61761">About</a></li>
<li class='menu current'>Source Code</li>
<li class='menu'><a href="/scripts/reviews/61761">Reviews <span>10</span></a></li>
<li class='menu'><a href="/scripts/discuss/61761">Discussions <span>166</span></a></li>
<li class='menu'><a href="/scripts/fans/61761">Fans <span>73</span></a></li>
<li class='menu'><a href="/scripts/issues/61761" rel="nofollow">Issues</a></li>
<li><a href="http://www.addtoany.com/share_save?linkname=Better+Facebook&amp;linkurl=http%3A%2F%2Fuserscripts.org%2Fscripts%2Fshow%2F61761" class="a2a_dd" rel="nofollow">Share</a></li>
</ul>

<p class='notice'>
There are
<a href="/scripts/versions/61761">41 previous versions</a>
of this script.
</p>
<p class='notice'>the source is over 100KB, syntax highlighting in the browser is too slow</p>
<pre class='sh_javascript' id='source'>// ==UserScript==

// @name           Better Facebook

// @namespace      http://userscripts.org/users/86416

// @include        http://www.facebook.com/*

// ==/UserScript==



// JSON 

// ----

(function() {

if(!this.JSON){this.JSON={};}

(function(){function f(n){return n&lt;10?'0'+n:n;}

if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+

f(this.getUTCMonth()+1)+'-'+

f(this.getUTCDate())+'T'+

f(this.getUTCHours())+':'+

f(this.getUTCMinutes())+':'+

f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}

var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','&quot;':'\\&quot;','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'&quot;'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'&quot;':'&quot;'+string+'&quot;';}

function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&amp;&amp;typeof value==='object'&amp;&amp;typeof value.toJSON==='function'){value=value.toJSON(key);}

if(typeof rep==='function'){value=rep.call(holder,key,value);}

switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}

gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i&lt;length;i+=1){partial[i]=str(i,value)||'null';}

v=partial.length===0?'[]':gap?'[\n'+gap+

partial.join(',\n'+gap)+'\n'+

mind+']':'['+partial.join(',')+']';gap=mind;return v;}

if(rep&amp;&amp;typeof rep==='object'){length=rep.length;for(i=0;i&lt;length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}

v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+

mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}

if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i&lt;space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}

rep=replacer;if(replacer&amp;&amp;typeof replacer!=='function'&amp;&amp;(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}

return str('',{'':value});};}

if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&amp;&amp;typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}

return reviver.call(holder,key,value);}

cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+

('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}

if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}

throw new SyntaxError('JSON.parse');};}}());

})();

// Catch JSON errors and alert them nicely

var parse = (function() {

	var count = 0;

	return function(str,desc) {

		try { return JSON.parse(str); }

		catch (e) { trace(&quot;Invalid JSON data! [&quot;+desc+&quot;]&quot;); trace(str); return {}; }

	}

})();



var tracelog = &quot;&quot;;

function trace(str) {

	tracelog += str+&quot;&lt;br&gt;&quot;;

}



// Main Script

// -----------

(function(){ // Outer wrapper so we can exit early

	var version = 2.7;

	var is_extension_local=false;



	

// For CHROME compatibility

var is_chrome = false;

if ( (typeof unsafeWindow=='undefined' || (window &amp;&amp; window===unsafeWindow) ) &amp;&amp; localStorage) {

	unsafeWindow = window;

	is_chrome = true;

	function GM_addStyle(css) {

		var style = document.createElement('style');

		style.textContent = css;

		document.getElementsByTagName('head')[0].appendChild(style);

	}

	function GM_deleteValue(name) {localStorage.removeItem(name);}

	function GM_getValue(name, defaultValue) {return localStorage.getItem(name) || defaultValue;}

	function GM_log(message) {console.log(message);}

	function GM_setValue(name, value) {localStorage.setItem(name, value);}

	function GM_getScript(url) {

		var head = document.getElementsByTagName('head')[0];

		var script = el('script',null,{src:url});

		head.appendChild(script);

	}

}



// Don't run in frames

if (unsafeWindow!=unsafeWindow.top) { return;  } 



// First order of business - find out who we are!

var userid = &quot;anonymous&quot;;

var m,a = $('navAccountPic');

if (a &amp;&amp; a.href &amp;&amp; /profile/i.test(a.href)) {

	var href = a.href;

	if (m = href.match(/id=(\d+)\b/)) { userid = m[1]; }

	else if (m = href.match(/\/([a-z0-9\.]+)\?ref=profile/)) { userid = m[1]; }

	trace(&quot;userid=&quot;+userid);

}



// Options for this script

var options = new GM_options('better_facebook',userid);



// CHECK! Per-user settings are new. Check to see if the user has the old prefs format. If so, convert it.

if (options.prefs.old_prefs_format) {

	var newoptions = { users:{} };

	options.prefs.old_prefs_format = false;

	newoptions.users[userid] = options.prefs;

	options.prefs = newoptions;

	options.userprefs = newoptions.users[userid];

	options.save();

}



// Script Options

if (options) {

	var a = function(name,type,def,opt) { options.addOption(name,type,def,opt); }

	// RIGHT SIDEBAR

	a('show_friend_tracker','checkbox',true);

	a('friend_tracker_duration','input',3,{size:2} );

	a('friend_tracker_interval','input',1,{size:2} );

	a('friend_tracker_last_update','hidden',null);

	a('friend_tracker_content','hidden',null);



	a('show_group_activity','checkbox',true);

	a('group_activity_interval','input',1,{size:2} );

	a('group_activity_last_update','hidden',null );

	a('group_activity_content','hidden',null );



	a('show_friend_activity','checkbox',true );

	a('friend_activity_interval','input',1,{size:2} );

	a('friend_activity_show_pics','checkbox',true );

	a('friend_activity_hide_text','input','^Profile Picture$',{size:15} );

	a('friend_activity_last_update','hidden',null );

	a('friend_activity_content','hidden',null );

	a('friend_activity_last_seen','hidden','' );



	a('hide_connect_box','checkbox',false );

	a('hide_suggestions_box','checkbox',false );

	a('hide_events_box','checkbox',false );



	// LEFT PANEL

	a('show_nav_all_connections','checkbox',true );

	a('show_nav_edit_friends','checkbox',true );

	a('show_nav_write_a_note','checkbox',true );

	a('show_nav_pages_i_admin','checkbox',true );

	a('show_nav_unblock_applications','checkbox',true );



	a('expand_nav_apps','checkbox',true );

	a('expand_nav_messages','checkbox',false );

	a('expand_nav_events','checkbox',false );

	a('expand_nav_photos','checkbox',false );

	a('expand_nav_friends','checkbox',false );

	a('expand_nav_friends_full','checkbox',false );

	a('hide_status_updater','checkbox',false );



	a('show_my_pages','checkbox',true );

	a('my_pages_new_window','checkbox',true );

	a('my_pages_default_open','checkbox',true );

	a('my_pages_position','input','3',{size:2} );

	a('my_pages_max_height','input','700',{size:3} );



	a('show_my_events','checkbox',true );

	a('my_events_new_window','checkbox',true );

	a('my_events_default_open','checkbox',false );

	a('my_events_position','input','4',{size:2} );

	a('my_events_max_height','input','700',{size:3} );



	a('show_my_groups','checkbox',true );

	a('my_groups_new_window','checkbox',true );

	a('my_groups_default_open','checkbox',false );

	a('my_groups_position','input','5',{size:2} );

	a('my_groups_max_height','input','700',{size:3} );



	a('show_my_apps','checkbox',true );

	a('my_apps_new_window','checkbox',true );

	a('my_apps_default_open','checkbox',false );

	a('my_apps_position','input','6',{size:2} );

	a('my_apps_max_height','input','700',{size:3} );



	a('show_friends_by_network','checkbox',true );

	a('friends_by_network_new_window','checkbox',true );

	a('friends_by_network_default_open','checkbox',false );

	a('friends_by_network_position','input','7',{size:2} );

	a('friends_by_network_order_by_count','checkbox',false );

	a('friends_by_network_max_height','input','700',{size:3} );



	// DISPLAY OPTIONS

	a('expand_similar_posts','checkbox',true );

	a('expand_similar_posts_delay','input','1000',{size:4} );

	a('display_control_panel','checkbox',true );

	a('hide_options_icon','checkbox',false );

	a('left_align','checkbox',false );

	a('pin_notifications','checkbox',false );

	a('pin_notifications_width','input','',{size:5} );

	a('force_most_recent_feed','checkbox',true );

	a('auto_click_more_times','input',0,{size:2} );

	a('alternate_read_display','checkbox',false );

	a('reload_when_mark_all_read','checkbox',false );

	a('auto_mute_count','input',0,{size:3} );

	a('auto_mute_all','checkbox',false );

	a('hide_when_muted','checkbox',true );

	a('new_comment_notif_bg_color','input','#EDEFF4',{size:10} );

	a('hide_old_comments','checkbox',true );

	a('hide_content_regex','input','',{size:25} );

	a('hide_update_email','checkbox',false );

	

	// MISC

	a('show_version_changes','checkbox',true );

	a('check_for_updates','checkbox',true );

	a('update_check_interval','input','3',{size:3} );

	a('debug','checkbox',false );

	

	// CSS

	a('css_url','input',null,{size:50} );

	a('css','textarea',null,{rows:25,cols:80} );



	// FEED FILTER



	// Hidden options

	a('highlight_cp','hidden',true );

	a('version','hidden',0 );

	a('version_ack','hidden',0 );

	a('last_update_check','hidden',0 );

	a('last_update_check','hidden',0 );

	a('last_msg','hidden',0 );

	a('installed_on','hidden',0 );

}



// Set the install time of the script

if (options.get('installed_on')==0) {

	if (options.userprefs &amp;&amp; options.userprefs.story_data) {

		var oldest_time = 0;

		var story_data = options.userprefs.story_data;

		for (var story_id in story_data) {

			var cc = story_data[story_id].cc;

			if (cc &amp;&amp; cc.t) {

				if (oldest_time==0 || cc.t&lt;oldest_time) {

					oldest_time = cc.t;

				}

			}

		}

		options.set('installed_on',oldest_time);

		options.save();

	}

	else {

		options.set('installed_on',time());

		options.save();

	}

}

else { trace(&quot;installed_on=&quot;+options.get('installed_on')); }



// DEBUG?

var DEBUG = options.get('debug');

function debugmsg(str) {

	return '&lt;div class=&quot;debug_small&quot;&gt;'+str+'&lt;/div&gt;';

}



// Check to make sure that Add-on _and_ Greasemonkey script are not both installed

function show_conflict_msg() { alert(&quot;Better Facebook Alert!\n\nIt looks like you have both the Firefox Add-on and the Greasemonkey script for Better Facebook installed! This causes problems, and only one should be installed. Go to Tools-&gt;Add-ons and disable Better Facebook to leave only the Greasemonkey script running, then restart Firefox.&quot;); }

onIdLoad(&quot;content&quot;,function() {

	if (document &amp;&amp; document.body &amp;&amp; document.body.className) {

		var cn = document.body.className;

		if (typeof isExtension!=&quot;undefined&quot; &amp;&amp; isExtension) {

			if (cn.indexOf('bf_gm')&gt;-1) { show_conflict_msg(); }

			document.body.className += &quot; bf_extension&quot;;

		}

		else {

			if (cn.indexOf('bf_extension')&gt;-1) { show_conflict_msg(); }

			document.body.className += &quot; bf_gm&quot;;

		}

	}

});



// FACEBOOK CLASS NAMES, ETC

// These are defined up-top because Facebook seems to change them randomly

var messageContentClasses = {uiStreamMessage:true,GenericStory_Message:true};

var messageContentClass = null;

var feedCommentClass = &quot;feed_comments&quot;;

var timestampClass = &quot; uiStreamSource timestamp &quot;;

var streamContainerClass = &quot;UIIntentionalStream_Content&quot;;

var streamContainerClassRegex = /(^|\s)UIIntentionalStream_Content(\s|$)/;

var streamCollapsedClass = &quot;uiStreamCollapsed&quot;;



// UTILITY functions

// ==================================================================

function log(s,a1,a2,a3,a4,a5) { unsafeWindow.console.log( _template(s,a1,a2,a3,a4,a5) ); }

function debug(msg) { unsafeWindow.console.log(msg); } 

function profileStart() { unsafeWindow.console.time('temp'); }

function profileStop() { unsafeWindow.console.timeEnd('temp'); }

// Simple string templating

function _template(s) {

	for (var i=1; i&lt;arguments.length; i++) {

		var arg = arguments[i];

		if (&quot;object&quot;==typeof arg) {

			for (var key in arg) {

				var val = arg[key];

				if (typeof val=='undefined') {val = '';}

				s = s.replace( new RegExp(&quot;%&quot;+key+&quot;%&quot;,&quot;g&quot;),val);

			}

		}

		else {

			s = s.replace( new RegExp(&quot;%&quot;+i+&quot;%&quot;,&quot;g&quot;),arg);

		}

	}

	return s;

}

function trim(str) { if (str.trim) { return str.trim(); } return str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,&quot;&quot;); }

function $(id) { return document.getElementById(id); }

// Do something to the first element with a given class name

function $first(o,cn,func) {

	if (o &amp;&amp; o.getElementsByClassName) {

		var cns = o.getElementsByClassName(cn);

		if (cns &amp;&amp; cns.length) {

			func(cns[0],o);

		}

	}

}

// Do something to each element with a given class

function $$(cn,func,context) {

	context = context || document;

	var els = context.getElementsByClassName(cn);

	if (els &amp;&amp; els.length) {

		if (typeof func==&quot;string&quot;) {

			func = new Function(func);

		}

		for (var i=els.length-1; i&gt;=0; i--) {

			func.call(els[i]);

		}

	}

}

function bind(el,ev,func) {

	if (typeof el==&quot;string&quot;) { el = $(el); }

	if (typeof func==&quot;string&quot;) { func = new Function(func); }

	if (el &amp;&amp; el.addEventListener) { el.addEventListener(ev,func,false); }

}

function toggle(o,default_open_option) {

	if (typeof o==&quot;string&quot;) { o=$(o); }

	if (o &amp;&amp; o.style) {

		var closed = (o.style.display==&quot;none&quot;);

		o.style.display = closed?&quot;&quot;:&quot;none&quot;;

		if (default_open_option) {

			options.set(default_open_option,closed);

			options.save();

		}

	}

}

function setValue(key,val) {window.setTimeout( function() { GM_setValue(key,val); },0);}

function getValue(key, def) {return GM_getValue(key,def);}

function hasClass(o,re) {if (typeof re==&quot;string&quot;) {re = new RegExp(&quot;(^|\\s)&quot;+re+&quot;(\\s|$)&quot;);}return (o.className &amp;&amp; re.test(o.className));}

function addClass(o,cn) {if (o.className==null || o.className=='') { o.className = cn; return;}if (hasClass(o,cn)) { return; }o.className = o.className + &quot; &quot; + cn; }

function removeClass(o,re) { if (!hasClass(o,re)) { return; } if (typeof re==&quot;string&quot;) { re = new RegExp(&quot;(^|\\s)&quot;+re+&quot;(\\s|$)&quot;); } o.className = o.className.replace(re,' '); };

/* Trigger a function when an element with a certain ID is loaded */

function onIdLoad(id,func,retries,doc,delay) {

	delay = delay || 250;

	retries = retries || 20;

	doc = doc || document;

	var o = doc.getElementById(id);

	if (o==null) {

		retries--;

		if (retries&lt;=0) {

			trace('onIdLoad('+id+') stopped trying.');

		}

		else {

			//debug('onIdLoad('+id+') not found, trying again...');

			setTimeout( function() { onIdLoad(id,func,retries,doc,delay) } ,delay);

		}

	}

	else {

		trace(&quot;onIdLoad(&quot;+id+&quot;) found&quot;);

		func(o);

	}

}

/* Trigger a function when an element exists and has content */

function onElementContent(id,func,doc,delay) {

	delay = delay || 250;

	doc = doc || document;

	var o = doc.getElementById(id);

	if (o==null || !o.childNodes || o.childNodes.length==0) {

		setTimeout( function() { onElementContent(id,func,doc,delay) } ,delay);

	}

	else {

		func(o);

	}

}

// Add CSS to the page

function addGlobalStyle(css) {

	// Allow the CSS block to be split by __section:

	// Only display a given __section__ if there is a user pref called 'section' that is true-ish.

	// The first section is always displayed.

	var actualCss = &quot;&quot;;

	var sections = css.split('__');

	if (sections) {

		actualCss += sections[0];

		sections.splice(1).forEach(function(str,i) {

			var x = str.indexOf(':');

			if (x&gt;0) {

				if (options &amp;&amp; options.get(str.substring(0,x))) {

					actualCss += str.substring(x+2);

				}

			}

		});

	}

	GM_addStyle(actualCss);

}

function insertStylesheet(url) {

  document.getElementsByTagName(&quot;head&quot;)[0].appendChild(el(&quot;link&quot;,null,{rel:&quot;stylesheet&quot;,type:&quot;text/css&quot;,href:url}));

  trace(&quot;Inserted stylesheet:&quot;+url);

}

// Create an element and attach class name, properties and events

function el(type,cn,props,events,innerHTML) {

	var o = document.createElement(type);

	if (cn) { o.className=cn; }

	if (props) {

		for (var i in props) {

			o[i] = props[i];

		}

	}

	if (events) {

		for (var i in events) {

			o.addEventListener(i,events[i],false);

		}

	}

	if (innerHTML) {

		o.innerHTML = innerHTML;

	}

	return o;

}

function insertFirst(container,el) { insertAtPosition(container,el,1); }

function insertAtPosition(container,el,pos) {

	if (pos&lt;1) { pos=1; }

	if (container &amp;&amp; container.childNodes &amp;&amp; container.childNodes.length&gt;pos-1) {

		container.insertBefore(el, container.childNodes[pos-1]);

	}

	else {

		container.appendChild(el);

	}

}

// ==================================================================



// Check to see if we are on Live Feed

var was_live = null;

function getNewsFeedLink() {

	var header = $('pagelet_stream_header');

	if (header!=null) {

		var a = header.getElementsByTagName('A');

		if (a &amp;&amp; a[0] &amp;&amp; a[0].href) {

			return a[0].href;

		}

	}

	return null;

}

function isLiveFeed() {

	var a = getNewsFeedLink();

	if (a==null) { return null; }

	var is_live = (a &amp;&amp; !/sk=lf/i.test( a ) );

	if (was_live==null) {

		was_live = is_live;

		if (options.get('display_control_panel')) { is_live?show_cp():hide_cp(); }

	}

	else {

		if (was_live!=is_live) {

			if (options.get('display_control_panel')) { is_live?show_cp():hide_cp(); }

			was_live = is_live;

		}

	}

	if (!is_live) {

		control_panel = null;

	}

	return is_live;

}

var control_panel = null;

function resolve_cp() {

	if (control_panel==null) { control_panel = $('better_fb_cp'); }

	return control_panel;

}

function show_cp() { 

	if (resolve_cp()==null) { 

		var ca = $('contentArea');

		if (ca!=null) {

			createControlPanel(ca);

		}

	} else {

		control_panel.style.display=&quot;block&quot;; 

	} 

}

function hide_cp() { if (resolve_cp()!=null) { control_panel.style.display=&quot;none&quot;; } }



var facebook_page_image = &quot;data:image/gif,GIF89a%3A%00%18%00%F7%00%00424%CC%9A%5C%5C%9A%CC%C4%DE%A4%9C%D2%EC42%7C%B4%EA%EC%D4%BA%7CLj%A4%EC%EA%EC%8C%8A%8C%D4%D2%9C%EC%F6%E4D%96%0C%9C%9A%9C%B4%C2%DC%5CZ4%94%A2%C4%CC%EA%EC4~%B4%EC%CE%9C%84%B6D%CC%E2%BC%E4%E2%E44Z%9C4z%B4%F4%F2%F4%F4%F6%F4%D4%F2%F4t%8A%B4%EC%D6%9C42%5C%D4%9E%5C%5C%9A%D4%EC%BA%7C%EC%EE%F4%CC%B6%7C%D4%EE%EC4%5E%9C%FC%FE%FC%5C24%D4%9A%5C%CC%E2%B4%C4%CE%E4%5Cr%AC%EC%EE%EC%BC~44Z%5C%9C%AE%CC%D4%EA%EC4~%BC%EC%D2%9C%D4%E6%C4%E4%E6%E4%3CZ%9Cdz%AC%F4%FA%F4%7C%8E%BC%F4%D6%9C%5C%9E%D4%F4%BA%7C%EC%B6%7C%91%FDA%7C%7F~%FF%C4%A4%FF%E9%85%FF%12A%FF%00~%5D%BE%3A%00c%0B%91E%04%7C~%00%95%00%01%E7%00%00%81%0C%00%7C%00%00%00%00%87%00%00%F7%15%00A%00%00~%60%B0%E7%03%E9%0B%00%12%18%00%00%00(%1AX%1A%7C%D6!%80A%00%18~8%00%E4_%00%EA%15%00%12%00%00%00%00%9C%87%00%0B%C4%00%06A%00%00~~%00%93%00%00%C4%00%00A%C0%03~%00%11%87%00%01%F7%00%00A%00%00~%FF%AC%E7%FF%0B%0B%FF%0E%18%FF%00%00%FF%ECX%FF%E9%D6%FF%12A%FF%00~%00%0C%01%00%B5%00%00A%00%00~%00%00%08%BC%00%99%EA%00%85%12%00%00%00%00%11%00%00%01%00%15%00%00%00%00%00%C4%00p%C0%00%9E%00%00%80%00%03%7C%10%1C%00%E9%B5%00%12A%00%00~%00%AF%00%00%EB%00%00%81%00%00%7C%00%00Z%00%07%E3%00%00%81%00%00%7C%00%00%40%00%00%B9%00%00P%00%00%00%00%008%00%00_%00%40%01%00%16%00%00%00lD%00%00%EA%00%00%12%00%00%00%00L%C4%00%E8%C0%00%12%00%00%00%00%004(%00%00%EA%00%00%12%00%C0%00%00%AC%CD%00%FB%2B%00%12%83%00%00%7C%00%20%00x%E9%00%9E%90%00%80%7C%00%7C%60%00%FF%00%00%FF%91%00%FF%7C%00%FF%FF%00p%FF%00%9E%FF%00%80%FF%00%7C%5D%00%3B%00%01%00%91%00%00%7C%00%00Z1%3B%F4%2C%00%80%83%00%7C%7C%00%00L%FC%00%EA%F0%15%12%12%00%00%00%00%0C%FF%00%2C%FF%00%83%FF%00%7C%FF8%00%00_%00%00%15%00%00%00%00%00%00%18T%01%00%EB%00%00%12%00%00%00%00%7CF%00d%83%00%83L%00%7C%00g%004%F4%00%EB%80%00%12%7C%00%008Pw%EA%EBP%12%12O%00%00%008%B5h_d%EB%15%83%12%00%7C%00%00%D4%7C%00ld%0CO%83%00%00%7C%00%E0%23%00w%ED%00O%12%00%00%00%B0%00%C3%E9%01%FF%12%00%FF%00%00%7F%7CL%E8%E9%EA%EC%12%12%12%00%00%00%86%00%00%7D%01%00%80%00%00%18%00%00%A7%D0%7C%01dd%03%83%83%00%7C%7C%00%01%00%00%00%00%00%00%00%00%00%00%00%00%C4%00%00%C0%00%00%00%00%00%00%B0%00%08%E9%00J%12%00%16%00%00%00%00%00%01%F0%00-%FD%00H%7F%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%3A%00%18%00%07%08%FF%00%1D%08%1CH%B0%A0%C1%83%08%13*%24x%A2%A1%C3%87%10%23J%9CH%B1%E2%09%81%1B2j%DC%C8%B1%A3%C7%8F%20Cn%10%A8aC%C9%93%269%A2%5C%99%F2%24%CB%95%1Ab%C6l%D9%F2%24%C6%97%26e%E2%C4%99%11e%CF%8F%2C%7F%92%9Cy%B2B%83%A3H%93%22%AD%203g%D3%99%23RF%D5I%94%AAI%92Nc6%B0%40%A3%2BW%0B%60%BDZh%E0%12%26%D5%B35%ADjh%81%B1%C5%06%B7n%1B%A8%180W%85%0A%1B%08%EC%D2UAv%AD%C9%16~%DD%FA%D5)%B8%B0I%06'%05%0B%04%CCx%AD%5C%BBso%9C%40%B0%D7n%83%C6%80%DF%AE%DD%AC%C1%03%0A%13%25%02%8B%C6%BCv1%60%CEr%F7%0E%B0q%C2%C6%80%CA%977%B7%E0%01%40%C6f%10%00vx6%C1Av%CC%D3%A4%D9%3Ah1%A2%05q%E3%8F%ED%C2%C8%D1Z5%DF%E2%D0E%D4%3E%BE%B6%C5%EE%12%C6%8B%1B%DF~%BC%BBi%EE-%1A%D0%FF%7D%CD%BA%B5%0D%1B%1D%2C%83%97%3Ea%BBt%19%D7%5D%00%00-%1D%C0%7C%EC%E0%17'h%B1%3F%C1%8D%F3%00Fd%83z%FD%B5%F0%1E%7F-%F4%00%C0%043%7Cv%C0%82%094%B8%83%81%B9%ED%87%60%02%02%D5%C0_%7F6D%10Ay%02%D2%D5%40q%FD)8A%02(%B2%D7%E0%0B%9Fa%87%9B%7D%F6%B5%87%22%82%02%15%A8!z%1D%80%08%D1%80%034P%03%8A%09%D4%F0%E0%89%FC%99%D8%E0%07%10%00%20%40%0D%01(i%E1%8F%FBiXC%86A%A2X%03%8E%3A%3Ed%C3Q%15X%89%A2%89U%1A%89%02%06%0B%A0%F0%01%01%0A%16%60%00%94%3FB%89%A1%03U%06ye%079N%84%01%03%0ClP%E5%8F%0A%C2%88%01%09%00d%40%C1%98%124%A9%E6%A00%0A%00d%9BT%D6%D0%26%06t%9E%07%E9%0A%0F%B1%E0%A8%9Cr%B6y%A9%A3%9Av%9Ai%A6%9Af%C8%E9%05%FEa%60jq%0Ft%60*%06%2C%8CP%03%A9%8E%C2S%FA%AA%9C%B2%D6J%EB%AD%9Cr*%D0%05%BC%BEJC%AF%BF%5EPC%B0%C3%02k%AC%B0%C4%26%7Bl%B1%C8%F6%CA%EB%05%BB%06%FB%EC%B4%D4Vk%ED%B5%D8%5E%FB%EB%AE%D9v%EB%ED%B7%D8r%0B%EE%B8%E4%86%EB%80%02%E8%A6%AB%EE%BA%EC%B6%EB%EE%BB%F0*%E0%40%40%00%3B&quot;;

// Static CSS to add to the doc

// ============================

(function() {  // Wrapped for code collapsing

	var stop_comments_icon = &quot;\&quot;data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%F3%FFa%00%00%00%07tIME%07%D9%01%13%17%03%00%B4m%D0%B0%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%04gAMA%00%00%B1%8F%0B%FCa%05%00%00%02ZIDATx%DAu%93Mh%13A%14%C7%DF%EE%26%9B%CDW%B3iBR%08H%0B%D2%80%EE!%09%04%14%0F%96%24%1AAJ%C8%B9%08%15%15%15%F1%2C%F8AO%DE%0A9%A9%07%0F%A2%88%1ET%14%3C%D8CJz%14%14rP%10%25%A2P%A5%91%12%1Acb%926t%FC%BFe%82Q%D2%81%1F3%F3%E6%7D%CD%9B7D%23C%10i%60%09%BC%03%BF%80%90l%81*%B8D%7B%0D%1C%C6%C1%1Bi%C0s%09%2C%803%E0%0E%A8%CB%B3%15%10%1Bg%CC%117%C1%C9%3D%9C%EF%80%CFRo%03%84F%D3%E6%88%EB%20*8%06%91I%9C2%D66D%15v%90%23zp%0A%D7%90N%9E%0F%1D%2C%C9%D4%B2%AC%AC(%8A%09%AA%AA%AA%0Ai%CC%D7%105%A2%FB%90%2F%82%AD%3A%D1ei%B3%A0p%C1%E0%E7%2B%B6%F3%9A%A6%990%AC%80%04%3B%EFoos%26%B0%A5%5E%D0%E1%F0w%E0%00%EB%02%1C7w%06%03%24D%DFH%A6s%C5%E9t%0A%97%CB%25%3C%1E%8F%F0%F9%7C%F6%2C%8B'%AEk%DAc%C30%16A%D5%EDv%CFA%EF%0B%E4w%B9%164L%DF%EF%F7%8B%600(B%A1%90%08%87%C3%22%87%3D%9F%B5%88V%BD%5E%AF%7D%1D%D6%E1%99%03%C8%D7%11%AA%5D%88%A9)%17%BC%13%BC%13%BC%93%5B%D7%A9%D4%ED%F2I%EF%D1%F4%F4Md%C7k%B7%C3%E1%F8%3B%07%02%3AoX%D2F%0E%87YI%D7m%19%9Dn%B5%C8%1A%0C%F0%26%D1%E5%DB%13%13VD%D7%97S%A9%D49%04y%9F%CF%E7O%20%C8%3Au%BBG%A0Z'%BB%EBL%B3%82%D4%E2%E5r9%7D%3C%1E%FF%D4%C1%0B%D4P%13%D1h%1C%80%3C%04%F6%C7b%B1%9F%C5b%F1%A2eY%CF%12%89%C4%3D%14%EC%23l_%F1%15%9ER%B39G%86%B1%2F%9B%CDv_6%9B%1B%9E%DD%5D%BA%1A%89%10MN%FAp%DE%00%81%0B%18%C82%DAn%B7%8FU%0Cc%93%FA%FDY%C8%1F%FE%DBH%86a%BFyoff5%99L%D6%109'%9B%89%AB7%9B%C9d%9E%DC*%14JB%D3~%0BEy1%AE%95%07%A0-%D6%D6%E6apTB%92%83%22%9D%BE!T%B5%03~%0C%5BY%19q%C2%CD%B3%02%A2%E0-x-1%C0!%89%25u%CE%C2%F0%FB%B8%1F%C9%D7%B9%06%3E%8C%7Ce!%3F%12%7F%F1%F3%FF%DB%FC%01d%D1G%9Dc%B2%BB%D6%00%00%00%00IEND%AEB%60%82\&quot;&quot;;

	var mini_message_icon = &quot;\&quot;data:image/gif,GIF89a%0B%00%0D%00%F7%00%00%9C%9A%9C%FC%FE%FC%00%00%12%00%00%00%60%94%00%23%E9%D0%00%12%FD%00%00%7F)%00%80!%D0%EA%00%FD%12%00%7F%00%00J%04%00%F8%26%15A%83%00~%7C%12%00J%00%00%F8%00%00A%00%00~%00%00%00%02%00%00%00%00%00%00%00%00%00%94%00%03%E9%00%00%12%00%00%00%00%D8%FC%98%E8%05%EA%12%07%12%00%00%00%F9%F6%11%E5%05%01%81%07%00%7C%00%00%00%98%90%00%E9%EA%01%12%7D%00%00%00VJ%AC%00%F8%EA%00A%12%00~%00%E0%00%BE%E7%00c%12%00E%00%00~n%00%00%00%00%00%00%00%0C%00%00%00%00%B0%00%E9%E9%00%12%12%00%00%00%00%20%00%98%E9%00%EA%90%00%12%7C%00%00%60%00%FC%00%D0%84%91%FDA%7C%7F~%FF%C4%A4%FF%E9%85%FF%12A%FF%00~%5D%BE%0E%00c%06%91E%09%7C~%00%95%00%01%E7%00%00%81%0C%00%7C%00%00%00%00%87%00%00%F7%15%00A%00%00~%60%B0%3B%03%E9%04%00%12%D4%00%00%00%10%1AX%BE%7C%D6%1A%80A%00%18~8%00%E4_%00%EA%15%00%12%00%00%00%00%FC%87%00%05%C4%00%07A%00%00~~%00%93%00%00%C4%00%00A%C0%03~%00%11%87%00%01%F7%00%00A%00%00~%FF%F6%3B%FF%05%04%FF%07%D4%FF%00%00%FF%ECX%FF%E9%D6%FF%12A%FF%00~%00%0C%01%00%B5%00%00A%00%00~%00%00%90%BC%00%EA%EA%00%7D%12%00%00%00%00%11%00%00%01%00%15%00%00%00%00%00%A8%00p%FD%00%9E%00%00%80%00%03%7C%10%1C%00%E9%B5%00%12A%00%00~%00%AF%00%00%EB%00%00%81%00%00%7C%00%00Z%00%07%E3%00%00%81%00%00%7C%00%00%40%00%00%B9%00%00P%00%00%00%00%008%00%00_%00%40%01%00%15%00%00%00lD%00%00%EA%00%00%12%00%00%00%00L%A8%00%E8%FD%00%12%00%00%00%00%004(%00%00%EA%00%00%12%00%C0%00%00%AC%CD%00%FB%2B%00%12%83%00%00%7C%00%20%00x%E9%00%9E%90%00%80%7C%00%7C%60%00%FF%00%00%FF%91%00%FF%7C%00%FF%FF%00p%FF%00%9E%FF%00%80%FF%00%7C%5D%00%3D%00%01%00%91%00%00%7C%00%00Z1%3D%F4%2C%00%80%83%00%7C%7C%00%00L%FC%00%EA%F0%15%12%12%00%00%00%00%0C%FF%00%2C%FF%00%83%FF%00%7C%FF8%00%00_%00%00%15%00%00%00%00%00%00%18T%01%00%EB%00%00%12%00%00%00%00%7CF%00d%83%00%83L%00%7C%00g%004%F4%00%EB%80%00%12%7C%00%008Pw%EA%EBP%12%12O%00%00%008%B5h_d%EB%15%83%12%00%7C%00%00%D4%7C%00ld%0CO%83%00%00%7C%00%E0%25%00w%ED%00O%12%00%00%00%B0%00%C1%E9%01%FF%12%00%FF%00%00%7F%7CL%E8%E9%EA%EC%12%12%12%00%00%00%86%00%00%7D%01%00%80%00%00%18%00%00%CB%D0%7C%00dd%05%83%83%00%7C%7C%00%01%00%00%00%00%00%00%00%00%00%00%00%00%A8%00%00%FD%00%00%00%00%00%00%B0%00p%E9%00H%12%00%15%00%00%00%00%00%01%D0%00-%FD%00H%7F%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%0B%00%0D%00%07%08)%00%03%08%1CH%B0%A0%C1%83%07%01%00%18%A8%90%A0%C2%85%0F%0B%3Elh0b%C5%89%12%1BZ%14H1%40G%84%20C%16%0C%08%00%3B\&quot;&quot;;

	var mini_message_hover_icon = &quot;\&quot;data:image/gif,GIF89a%0B%00%0D%00%F7%00%00%3CZ%9C%FC%FE%FC%00%00%12%00%00%00%60%94%00%23%E9%D0%00%12%FD%00%00%7F!%00%80!%D0%EA%00%FD%12%00%7F%00%00J%04%00%F8%26%15A%83%00~%7C%12%00J%00%00%F8%00%00A%00%00~%00%00%00%02%00%00%00%00%00%00%00%00%00%94%00%03%E9%00%00%12%00%00%00%00%D8%DE%98%E8%06%EA%12%0F%12%00%00%00%F9%A2%11%E5%07%01%81%18%00%7C%00%00%00%98%B8%00%E9%DF%01%12%81%00%00%00VJ%AC%00%F8%EA%00A%12%00~%00%E0%00%BE%E7%00c%12%00E%00%00~n%00%00%00%00%00%00%00%0C%00%00%00%00%B0%00%E9%E9%00%12%12%00%00%00%00%20%00%98%E9%00%EA%90%00%12%7C%00%00%60%00%FC%00%D0%84%91%FDA%7C%7F~%FF%C4%A4%FF%E9%85%FF%12A%FF%00~%5D%BE%AE%00c%07%91E%0E%7C~%00%95%00%01%E7%00%00%81%0C%00%7C%00%00%00%00%87%00%00%F7%15%00A%00%00~%60%B0%0F%03%E9%08%00%12%24%00%00%00%40%1AX2%7C%D6!%80A%00%18~8%00%E4_%00%EA%15%00%12%00%00%00%00%DE%87%00%06%C4%00%0FA%00%00~~%00%93%00%00%C4%00%00A%C0%03~%00%11%87%00%01%F7%00%00A%00%00~%FF%A2%0F%FF%07%08%FF%18%24%FF%00%00%FF%ECX%FF%E9%D6%FF%12A%FF%00~%00%0C%01%00%B5%00%00A%00%00~%00%00%B8%BC%00%DF%EA%00%81%12%00%00%00%00%11%00%00%01%00%15%00%00%00%00%00%24%00p%7D%00%9E%00%00%80%00%03%7C%10%1C%00%E9%B5%00%12A%00%00~%00%AF%00%00%EB%00%00%81%00%00%7C%00%00Z%00%07%E3%00%00%81%00%00%7C%00%00%40%00%00%B9%00%00P%00%00%00%00%008%00%00_%00%40%01%00%15%00%00%00lD%00%00%EA%00%00%12%00%00%00%00L%24%00%E8%7D%00%12%00%00%00%00%004(%00%00%EA%00%00%12%00%C0%00%00%AC%CD%00%FB%2B%00%12%83%00%00%7C%00%20%00x%E9%00%9E%90%00%80%7C%00%7C%60%00%FF%00%00%FF%91%00%FF%7C%00%FF%FF%00p%FF%00%9E%FF%00%80%FF%00%7C%5D%00%3B%00%01%00%91%00%00%7C%00%00Z1%3B%F4%2C%00%80%83%00%7C%7C%00%00L%FC%00%EA%F0%15%12%12%00%00%00%00%0C%FF%00%2C%FF%00%83%FF%00%7C%FF8%00%00_%00%00%15%00%00%00%00%00%00%18T%01%00%EB%00%00%12%00%00%00%00%7CF%00d%83%00%83L%00%7C%00g%004%F4%00%EB%80%00%12%7C%00%008Pw%EA%EBP%12%12O%00%00%008%B5h_d%EB%15%83%12%00%7C%00%00%D4%7C%00ld%0CO%83%00%00%7C%00%E0%23%00w%ED%00O%12%00%00%00%B0%00%C3%E9%01%FF%12%00%FF%00%00%7F%7CL%E8%E9%EA%EC%12%12%12%00%00%00%86%00%00%7D%01%00%80%00%00%18%00%00%D9%D0%7C%00dd%06%83%83%00%7C%7C%00%01%00%00%00%00%00%00%00%00%00%00%00%00%24%00%00%7D%00%00%00%00%00%00%B0%00p%E9%00H%12%00%15%00%00%00%00%00%01%D0%00-%FD%00H%7F%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%0B%00%0D%00%07%08)%00%01%08%1CH%B0%A0%C1%83%07%03%04%18%A8%90%A0%C2%85%0F%0B%3Elh0b%C5%89%12%1BZ%14H%11%40G%84%20C%16%0C%08%00%3B\&quot;&quot;;

	var message_icon = &quot;\&quot;data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%23%00%00%00%23%08%02%00%00%00%91%BB%24%0E%00%00%00%06tRNS%00%00%00%00%00%00n%A6%07%91%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%06.IDATx%DA%E5%97%5Dl%DB%D6%15%C7%FF%A4%24J%B2d%C9%96%AA%C5%8A%12%3B%8E%5D%E7s%C1%92eu%8B%A4S%8B%C6Y%DD%06%CD%87%8B%3C%04%5B%83%3E5%D8V%EC%E3%A1%F0C%91%01%1D0l%E8%B0%97%14%E9%8A%AC%40%1E%16%17k%96%B5%CD%86%B9M%D6%C0%CE%9C%CD%AE%5D'UmGql%CB%B2%ADY%1F%96%25J%A4H%5E%92%F7%EEAN%90%D5%5Em%A7%C1%5E%F6%7F%22.%0F%CF%8F%FF%83s%EF!%81%FF%95%B8%95%87%8E%0Fv%C5%23%03%F3%B3%09R%92%84%0A%B7%CB%5B%B9%A6~%7B%C3%EE%C7%BD%81%E0%83!%A9R%F1%FAG%E7%BA%3B%CE%24%A2%11%00N%B7%DDQa'%84W%8A%25j%12O%20%B4%F3%3B%87%F7%1E%FBAM%5D%E3W%22M%0D%F5w%FC%ECD%22%1A%F1%04B%E1%A3%5B%EAv%B4%F8BM%8E%0A%AF%AE%5Bsi-%1D%8B%96%DF%C0%13%08%1Dx%B9%FD%B1%B6%13%F7Y%D9%A1%AE%3F%B7%EF%09%BC%D2%EC%EE%3C%7DRM%7F%C8%A8%C8%BE%20*S%7D%F8%9F%17~%FB%FAa%DF%8Fv%B8%3AO%9F%BC%1F%CCd%A4%B7%7DO%E0%E4%93%FE%5B%3D%BF%A1%FA03%A6%18%15%19%95%17%C1DF%C5%5C%E2%FC%A9%176%BC%BC%CDv%E5%EC%AFW%87Q%A5%E2%2F%DB%BE%F9J%B3%FBVw%3BcW%A8%DA%C7%CC4%A32c%84-!%C2%A8H%E6%DEx%FD%B0%AF%7DO%602%D2%BBdN~%C9%D5%7F%FC%F1%ADD4%B2%EF%F8%E3%0F7%D71%0D%9C%B5%DC%5D%06%00%40%FFb4%D3%01%D8%7C%DF%7B%FE%C7%B5J%B1%F4%D73%BFX)I%16%E7%BB%3B%DE%AEm%AA%7Cl_%08%E6%3A%C0%C5%18%01S%EF%26%BD%03%BB%07%C94%00u%CD%2F%3D%F247%DA%D35%3E%D8%B5%22R%EC%FA51%93%D8%FC%A8%C7%B5%A6%1A%00%A0%01%1Ac%04L%03%8CE%B0%3B%3C*r%F6M%FB%9F%A9d%A6y%FD%A3%0F%16%A7%B5.%5E%9A%1E%E9%07%B0%F9%EB%B5%8CV%82%8A%1C%00%D8a%C1%82-%0E%60%E5%0Db%BB%E3%D2(%DFb%1A%7C%5B%D6z%FDdl%E0%EA%8A%3C%E5fg%3DU%B6%AAj%C1%24%C4%D4%F2%8C%8A%80%0C%AA-%D4%B0%EC%0C%06%98%B2%E0%8F%8A%8C%11%C6%8A0e%00k%B7%98J%B1%24ff%97%F7%94%CF%A7%EET_%E4%E1%06%AA%60%CA%B0XA%C1x%CF%7Fnu%0D%00c%C4%24%BC%C5%22%19J%DC%02T%BA%8DIyN)%C9%CB%93%9C%82%BB%7CA%F23B%B5%97%D7f%60%07%07%C0%02P0%DE%0EF8N%00%E7%00g%07%E7%A4%B4%1A%98%26%85%9C%60%8FC%89%14%25%97%C5%E6rV%B8%96%AF%5E%E5Ck%D4%92%96%CF%11%00T%8DQSZ%A8%A1)%82%E5aJ%00%C0%FB%C1%07%00%2Bh%9E%91iUJ%F0%FC%18S%AFh%12W%9C%E5%2B%FD~%AB%60_%DES%A8i%93%A6%B0%B9X%3A%B8%D1o(%25%2Bb%BC%03L%93%60%07g%0Dq%B6%06%00%A0Yf%0C%C1LS%26%98%25%86%92%88%8A%24G%22b%9E%CF%A6-%B5%BBB.%AFoyR%FD%EE%7D%CE%CA%8A%81%3E%B5qW%D1%EAp%00%25%A6%25y%A1%CE%EE%080%3D%C3%1B%09F%C5%BB%C1T%CB%EBr%80%EA%19*%9D%85%80%DB%83%D5J%B1%B8%F3%89gp%EA%E2%F2%D5%AB%A9k%DC%F4h%CB%F8%E7%F3c%833%86%AA%EA%8An%C8I%AD%A0%15%26%FE%AE%CD%7DbH%7D0%26%60L%98%A5%A8)%F7%E9R%8E%EA%19*%7F%C8HZ%93%B8%1B%7D%8E%AA%9A%DA%AD%DF%3E%B8%A2%FD%04%E0%A9%17%7Fr%B3%E7b%CF%DF%D2%EBjy%C1%E9%B4%BA(%EF%00%91*L%E5!%00%8Ejb%B3%2B%0B%9E%88%22O%8D%D8%5D%098%F0%AF%09%F7%F4%AD%B9-%7B%9F%5Br6.%7D%EE%D5n%FF%D6%93%C7%7F%3A3%AE%BD%7F%BED%14E%2F%E8%24%3Bk%B5%DE%06%1D%D5%8B%B9%E2%94%AC%CC%8B%864D%B2%97%D5%EC%A4%C5n%02%D0%95*1c'%84%AFih%5C%C5%09%0B%A0%F5%FB%AF5%1F%3C6%FAi%E2%FD%F3%A5B%862%BD%A8%CE%17uq%9Ci%FDR%F2%B3%B9%1BS%E9%D1%92V%B0%94%83%0D%A9%A4%15%2C%B2%CC%98i%DA%2B%3C%AB%23%018%F6%F33%E1%EF%FEp%ECF%E6%F7o%A7%AEu%99rN%E0%99%0D%80%D5%A53%9BA%92%AE%DCL55%7C%00%88j1%95J%2B%AA%BE%24%9B%E5%CB%07%D5%BB%1F%F7%BEy%F6%DC%D4%CD%E1%E1%BE%C9%A1%88nR%A1%AE%C1i%B5p%16%81%A3%84S%E7%AC%BCi%DA%BC.%0BW%D4%09-%88l%F8%86l%04%B7uv%F5%AC%B4%23%EE%D5%AE%D6%A3%00%06%3B%DF%BD%F4%BB_%5D%ED%8C%025%7B%5B%AA%04%1B%84%F50U%B3%98%CC%DB%D7%04e%E2%8A%8Ed%13%F1%FC%07b%20%3C%99%5E2%8Fu%85SxW%EBQ13%7B%EE%B5%97%AEv~%2C%F8%CCmM%B6%E1Q%3D%11%CF%EF%0D%85%B4%D4lLtM%CF%ECp%EC%3E%B4%7D%EABwww2%3E%B6%F8S%C9%BA%F2%91%EF%0D%04%C5%CC%EC%9B'%0E%5C%BB8%F5%07w%AE%BC%A8K%F2%E4%CD%60%D6%16%DC%DF%D2r%E8%E0s%C9Tjh%24z%E1%2F%97%EE%DF%D3%5DXG%C7%3Bo%BD%FA%EA%F6%AD%8Fl%DA%BC%15%40%CA%E9%0AVy%B7U%7BUU%B95z%7BC%DD%06%00%FD%03%03%AB%EB%BD%25%F5l%CB%13%A1u%EBs%85%85%A1%A0*r%3E%2F%26S%A9d*%95H%24%3C%1E%CF%7F%7Bp%D5%24o%20%D8%D8%B0113%0D%C0%E7%F7%F9%FC%BE%60%CD%D7%BC%1E%AF%208%E2%F1xo_%3F%80%A6%A6%87%1F%00%09%C0%FE%96%16%00%BD%9F%F4%CFg%E7%E7%B3%F3%B1X%2C%16%8B%01p%3A%1D%9F%5D%EF%07%D0%FAt%EB%83!%B5%1D9%14%0E%87%133%D3s%D9%AC%CF%EF%AB%09%AE%AD%AF%AF'D%7D%EFO%17%86F%A2mG%8E%EC%DC%F9%8D%AF%F4%AFq%AF%E6%B2%D9%17%8F%BF04%12%05%10Z%B7%BE%5CL%00%E1p%F8%F4%1B%A7*%5C%AE%07F*%AB%A3%E3%9DK%97%2F%8F%8DO%00hl%D8%F8%7C%5B%DB%81%03%CF%E2%FFH%FF%06%DB%01b%5BR%10nj%00%00%00%00IEND%AEB%60%82\&quot;&quot;;

	var info_icon = &quot;\&quot;data:image/gif,GIF89a%10%00%10%00%E6%7F%00%B7%8A%2BrV%1A666%9B%9B%9B%B1%86)%F5%BCB%D6%A33%CE%9D1qqq7)%0C%FF%C6%3F)%1E%09%FD%C0%3C%F5%BA%3A%DC%B2V%03%03%02%1C%1C%1C%1C%15%07%09%09%09III%0E%0E%0D%11%11%11%12%0E%032%26%0B%FF%C2%3C%FC%BF%3C%FF%C3%3D%FF%C4%3D%F9%BD%3A%FF%C2%3D%FB%BE%3B%FC%BF%3BWWW%E5%E5%E5%F1%B79%86%86%86%FA%FA%FA%95%95%95%FF%CDR%FB%BF%3C*'%20%FF%C1%3BG%3E(%FF%C6A%E4%E4%E4%9Dw%24OOO%E2%AB4%FF%D2c%F8%C2O%CF%AAY%E9%B17%FB%BF%3B%F2%B89%17%17%17%60%60%60%B8%97O%FF%C8%40%FF%C9C%F8%BC%3AK%3D%1E%F3%C1X%84n%3F%FB%BE%3A%B7%B7%B7%C7%A1MJJJ%AB%8FRhhhbJ%16%E9%B6F%A5%A5%A5%FA%C8%5B%CC%9B%2F%93w8%E1%E1%E1%B3%8B4%B1%B1%B1%7B%5D%1C%80f-%A8%A8%A8%FA%C3E%8Dk!%2C!%0A6*%10%06%07%0A%0A%08%02%FE%C2%3C%AE%AE%AE%BC%8E%2C%D5%A6C%FF%C6%3D%FF%C3%3F%C6%96%2F%3B%3B%3B%EF%B58%DF%DF%DFggg%BE%99J%E7%AE6yb4%FF%CBA%98%98%98%C1%93-%7B%7B%7B%FF%C3961(%AA%83%2F%AE%85%2C%82k%3A5%2F%24%FA%BE%3B%FB%BE9%B5%B5%B5%FD%BF9222%DC%ABA%FE%C1%3C%CF%9E1%FF%C4BC%3A%24%22%22%22%96%96%96%17%16%11%A3%7C'%F9%BD%3B%00%00%00%FF%FF%FF!%F9%04%01%00%00%7F%00%2C%00%00%00%00%10%00%10%00%00%07%DE%80%7F%82%83s%14%15%5E%83%89%83%23~U*%3C%0F~%8A%89~n81%05%04%09~%03%93~j%0E90%26%5B%07%9B%8A%126AiHCk%0D%18g%16%10%83D%0F%3E%2BW%0E%0F%0F%5D%1A%0CR~%08%82%14(Fr%5C2~~%00%1A'%22%09%15%82~m%0A%1C%1D%BB%0F%07%1Do%18-%0F%7Fy%7BZ)%7D4%05T%0B_%19%7D%193%0B%02%12xQ%3F%7D%1CwbL%0C%7D%FC%0A%01%12%12%C8%E8%E0%D0%07N%0F%25ljx%E0%A7%81%00%05%09O%CA%2C%C4%40%C7O%02%11%EC%18%7C%00%B0G%C2%02%03%1F6l%D8%C1'K%86%3A%1D%1A%18%08%F0%00%81%1F%0BE%F8%24y%81a%C3%18%3B%04%9C%5Cx%00BP%BC%97%11%A6%5CX%10%C1%8A%1FZ%8A%D0%FCq1a%C2%1F%10a%12%05%02%00%3B\&quot;&quot;;

	var install_bg_image = &quot;\&quot;data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%01%08%00%00%01%05%08%03%00%00%00(%B6%89%13%00%00%00%01sRGB%00%AE%CE%1C%E9%00%00%00%C0PLTE%CF%EF%A5%AD%DAc%F5%FB%FE%7F%C3*%B2%E0x%86%C66%C8%EB%9A%F1%F9%FD%A0%D5S%AC%E2Y%C2%E8%91%8F%CB0%FD%FE%FF%96%CEF%EE%F9%FD%F9%FD%FF%E0%F6%C1%D5%F4%B0%DD%F5%BB%D8%DC%DF%E8%F8%D1%B0%DDm%B7%E2%84%2CB%20%A5%D8%5B%9C%D2%5C%96%CFS%AB%DBr%8E%CAC%F4%F4%F4%D5%F0%AF%A4%D7h%B8%C4%AA%BD%E5%8A%DA%F2%B6%ED%ED%ED%E7%F3%D9%F5%F8%F4%A0%A9%96%C8%DC%B0%ED%F8%FDe%7B%86%DC%EF%C6%C8%CB%CB%F8%F8%F8%F0%FA%E6%F9%FE%F3%BA%E3%7F%8E%B7W%FC%FC%FC%FD%FD%FC%E5%E8%E9%A9%C2%CC%F9%FC%F2%D2%40%1E%B7%E7n%B1%CE%88%E4%F7%CA%EB%CF%BB%9D%C0i%EA%F2%F5%81%B0E%E4%E4%E4%FF%FF%FFp%DA1%B2%00%00%00%01bKGD%00%88%05%1DH%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%07tIME%07%D9%04%04%1181%D8%A2%A3V%00%00%05%D5IDATx%DA%ED%91%EDj%E3%3A%10%86%C7%10L%E8R(%E1h%D9_%82%E8%06%FC%BB%F7%7Fc'%965%D2H%B2%1D%A7%C9na%F7y%95%DA%D2%7C%BC%1A%3F%95%0B%8A%12%10%24%10%E1%A6KZ%FA%AA%B7f5%D96%9FSk%05%C6T%C3%7D%B26%EF%9CKg%E5%12%FA%0Br%BE%F5j%AE%CE%B1%08bC%97%F0%0FI%82o%22%FE%ABV%FE%C1~%7F%A4%DC%7Fq%2C%FFh%F8%06%A2%D1-%1A%9FU%C8%A6%DA%B2%A0%E1%DC%17%9A%AE*%AC%B1%D0%DD%5B%E2%DDP%F3%259%1C%F4%CA%10V%3A%C2%FA%D7%84v%AC%E4%A9g%F1%CF%E8%B9%EEWJ%5Ee%20qw%7B%CE%9Aw11%3F%F3I%C44%89m%AD*%B4Lrs2%F7%D9QRR%EA%F1%AB%DB%7C%E3%95w%C9%D3L%9DG%90%7C%81%2C%97.%8E%E2%CD%24%3A%BE%E4~%BDNj%25%97dd7%A2%B5%B6I%BD%D2g%EB%18%B6(gu'u%A2z%B6%03ys%AB%3E%7D%1D%DA%9E%DE%DAZ%7F%D3%EEm%00%CD%1A%C7Qn%2B%FE%E6%C3%18%03c%3C%DD%96%2C%AFX%B4%FC%96t%8A%8E%A92%7Bh%26-mVw%D1%F6%14%C9%96%22%A6z%CC%C6%92%1A%D2%24y%90%D1%D8%D8%EE%25%249%A2S%A6%B3%994%7D%7B%BE%A6%D8%17%89%19e%1C%CD%17VU%99E%DD%3A%B6'sCU-%05%FCX%FE%0F%E6%12%0Bn%5C%BF%C3%20%C93V%26b%7Dd%7D%CE%FE%2B6%EF%5B%3D%7FM%BF%D7%E5%89%99_3%D8_%20y%DB%D2%F8%F6%A0%1Enx%DCc%FCJ%F6%D8%5C%19%C4%F5%E9%8F%B8%BE%00%C4%1D%93%EBn%E2%FA%CC%5CrEQ%BB%20~~%C3%40%3F%BF%0B%C4%84%A2%00%A1%20N%A7%D3%14%7FY%93%BE%A6*0%9D%EA%B2%FAPNux-%F0%88%3A%DB%A9NM%07%1C%A6%23%A3%C8%91i%DC%5E%C6U5%CE%94%BB%B4k%DA%9D%B3%BE%D6!%EF%DD%EA%08n%7D%AA%BE%C5%ADM%EE%F6%3FE%1C%8A%02%84%82%18%A2%5C%FA%BB%3D%97%97%06%87r%AC%F7%A6%CB%99Di_%92m%CB%A6%99%BB%9Fvnm%A8%E1%E8%0D%C3n%A7%0Ch%01%F1%AB%D5%10%FF%86%F8%5E%1E%25~%7B%0Em%F5%60BC%E7%D4%05%AB%C0%D0%DD%B0%EE%D5Y%FCZ%2F%1D%EA%7D%DF2l%5E%25%BFP%14%20%14%C4%19E%01BA%BC%BF%9F%DF%DF%E3%A3%BC%CF%D5Y%F7e%7Bn%EB%B4%DA%D6%9A%0A%8DU7%95%E7%D9%B4u%96%E7%EE%D7%C4%FB%CAz%16%EB%DB%B4%9B)%DF%E5%1DE%01%02%10%80%D8%00%F1%C3%AC%EA%F0o-%F9%81%A2%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%08%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%81%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%88o%07%F1%F9%1Fk%5E%F2%89%A2%00%01%08%40l%81%F8%88K%DF%F5%DE%04V%E3%E6g%83%1FU%BE_%9B%C9~%FBi%2F%5E%B9%B9%19%AC%9Bf%C5%3D7%D8%94%7C%A0(%40(%88%0B%8AZ%03%11%9E1%0C%7F%A8%E7%E5%20%82%D1%A5y%DF%D1e%F7%A8%C1%CBC%26wK.%87%8B.%0F%5D%25%AB%05GH%F8%F0%15%5D%EEe%0F%FD%13%FC%8B%A6%BAX%10%3Ex%EFCz%CDk%D9x%B5%8D%81e%E7u%9F%96%CF'%D3%1DB%F0uU%A9%0B%C9%25_%94%7C%B5%B0%B2N%1D%3E%DF%5Br%3A%956%87%3C%AD%B6%E4%A1%F2%5Bg%F4%EA%91~%C9%40%CA%0D%CBuY%CD%3E%CD%96%8E%A62%D8%CAP%22%C1%EC%82%19%A7%B9%A6%EE%2F%16%F5%00MM%5B%1D%B6%EA4%1D%F6%BE*J%3C%CA%20D%2C%92%DBI%D23%26%7D%CAJ%8C%89%E6%E7%12%F3NU%8BUt%94%AA%DB8%E4J%C9W%F9%25%97%B6%E2%CD%2B%5D.y%0A_%FD%E5%D9%CA%F7%E4%9F%D7i%AC%85~%A4%247%C9%D7!%84%D64%CA8%DE%9EQR%9E%A2%A7%25%2BUZR%87V%A4*)%FD%BA%1352%B9%3AQ%EA%25%DB%89u%5D%AE%93bY%0Dkk%CD%CEN6v%AD6(%5D%B7%FD%02%13%912x%9D3%C8%AAo%EF'%E8%03%2B%5E%9B%92q%F5%DF%D3%BBK%CF%A6%9DJ%B6%AF%3E%3E%D0_.%19%DF%BAU%BF%B6%B2%1B%E9%DD%DE%03%25%87%9B%C7%83%A5%3B7%DA%CF%907%14%F5%7BA%5C_%DFr%7D%E9m%06%C4%15E%01%22%83%98z%5D%CDs%239%ED%26%AF%9B%E1%EB%A6%D7%F5%80%FD%D6%2Ce%E0%BB%FE6h%D32!%40l%818%BD%D4%F9t%3Cw%DA%AE%3B%FD%11%0A%B7%5B%E4%B4%A6%E9%B4%AF%E9%40Mk%B6_%3FM%0F%8E%F0%95%91%F7%A6%93%13%8A%12W%1D%EBSut%F6%ECZ%9F%18p%EE%E4%EA%BA%0Dc%B7%3FT%B2p%E5%E8%1E%E8ng%BD%F3%05%C9%5D%1C%8A%02%04%20%1A%10%C3%E0%E6%9F%8B%AF%F8%9C%F7%26V-%1B%2B%E16%97%3C%A3%CDF%8B%1E%3B%D7l9%D4%05z%CB%B6I%BA%CA%99%8Afj%F3nKf%10h%16%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%01%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%10%20%00%01%08%40%00%02%10%80%00%04%20%00%01%08%40%00%02%10%80%00%04%20%00%F1%DD%FA%1F5L%D8%F4.%80%00u%00%00%00%00IEND%AEB%60%82\&quot;&quot;;

	var hidden = &quot;display:none;&quot;;

	var hidden_important = &quot;display:none !important;&quot;;

	var hover = &quot;&quot;;

	

	if (options.get('alternate_read_display')) {

		var hidden = hidden_important = 'max-height:18px;min-height:18px !important;overflow:hidden;opacity:.25;';

		var hover = 'max-height:none;overflow:visible;opacity:1;';

	}

	

	var css= ''+

	'	.better_fb_cp { padding:5px 10px; border:1px solid #ccc; margin:3px 3px 8px 3px; }		\n'+

	'	.better_fb_cp legend { font-size:10px; color:#999; font-style:italic; }		\n'+

	

	/* This css rule hides last read and all siblings after the latest read */

	'	.last_read, .last_read~*{ '+hidden_important+' }		\n'+

	'	.last_read:hover, .last_read~*:hover { '+hover+' }		\n'+

	'	.last_read~.UIStory_new_comments , .last_read.UIStory_new_comments { background-color:white; display:block !important;'+hover+' }		\n'+



	/* Hide the new comments notification unless they are _after_ the last read */

	'	.'+streamContainerClass+' &gt; * .better_fb_new_comment_notif { display:none; }		\n'+

	'	.last_read~* .better_fb_new_comment_notif, .last_read.UIStory_new_comments .better_fb_new_comment_notif { display:block;'+hover+' }		\n'+



	/* When &quot;Mark All Read&quot; is clicked, everything should go away */

	'	#contentArea .all_read &gt; * { '+hidden_important+' }		\n'+

	'	#contentArea .all_read &gt; *:hover { '+hover+' }		\n'+

	

	/* For when &quot;show all&quot; is clicked&quot; */

	'	#contentArea .show_all &gt; * { display:block !important; }		\n'+

	

	'	.UIStory_hidden_by_type { display:none; }		\n'+

	'	.UIStory_hidden_by_fbid { display:none; }		\n'+

	

	'	.UIStory_minimized img { display:none !important; }		\n'+

	'	.UIStory_minimized &gt; *, .UIStory_minimized { min-height:0px !important; padding-bottom:0px; padding-left:0px !important; }		\n';

	for (var c in messageContentClasses) { css += '	.UIStory_minimized .'+c+' { padding-left:0px !important; } \n'; }

	css += '	.UIStory_minimized .UIStoryAttachment { margin:0px !important; } \n'+

	'	.duplicate,.duplicate *,.debug_hidden,.debug_hidden * { background-color:yellow !important; }		\n'+

	'	.hidden_by_regex,.hidden_by_regex * { background-color:cyan !important; }		\n'+

	

	'	.notifications_pushpin {position:absolute;top:-20px;left:0px;z-index:99999;}		\n'+

	'	.UIButton_better_fb { margin:0px 3px; }		\n'+

	

	'	.better_fb_new_comment_notif {	width:350px; background-color:'+options.get('new_comment_notif_bg_color')+' !important; -moz-border-radius: 5px; -webkit-border-radius: 5px; font-size:11px; line-height:16px; padding:1px 0px 1px 5px !important; color:black; font-weight:bold; border:1px solid #aaa !important; border-right-color:#666 !important; border-bottom-color:#666 !important; border-right-width:2px !important; border-bottom-width:2px !important; }		\n'+

	'	.better_fb_stop_comments { margin-left:10px; text-decoration:underline; padding-left: 18px; background-image: url('+stop_comments_icon+'); background-repeat:no-repeat; }		\n'+

	

	'	.bf_message_popup { display:none; position:absolute; width:500px; top:50px; left:200px; background-color:white; border:8px solid #3B5998; -moz-border-radius: 15px; -webkit-border-radius: 15px; padding:10px; z-index:5000; }		\n'+

	'	.bf_message_popup a { text-decoration:underline; }\n'+

	'	.bf_message_popup p { font-size:14px; }\n'+

	'	.bf_message_popup .better_fb_close { font-size:20px;width:100px; }\n'+

	

	/* Options Display */

	'	.GM_options_wrapper { display:none; position:absolute; top:50px; left:50%; background-color:white; z-index:5000;} '+

	'	.GM_options_wrapper_inner { margin-left:-400px; width:800px; background-color:white; border:8px solid #3B5998; -moz-border-radius: 15px; -webkit-border-radius: 15px; padding:10px; z-index:5001; font-size:110%; -moz-box-shadow:10px 10px 10px #999; -webkit-box-shadow:10px 10px 10px #999; }		\n'+

	'	.GM_options_wrapper h2 { font-size:14px; background-color:#3B5998; color:white; font-weight:bold; font-style:italic; padding:1px 10px; margin:0px; }		\n'+

	'	.GM_options_header { background-color:white; color:#3B5998; min-height:90px; border-bottom:5px solid #3B5998; }		\n'+

	'	.GM_options_header a { color:#3B5998; }		\n'+

	'	.GM_options_message { clear:both; background-color:yellow; padding:10px; border:1px solid black; -moz-border-radius: 10px; -webkit-border-radius: 10px; margin:10px; font-weight:bold; font-size:larger; }		\n'+

	'	.GM_options_body { }		\n'+

	'	.GM_options_wrapper table.GM_options { border:1px solid #999; border-collapse:collapse; width:100%; }		\n'+

	'	.GM_options_wrapper td.label, .GM_options_wrapper td.input, .GM_options_wrapper td.html  { border:1px solid #999; margin:0px; padding:0px; }		\n'+

	'	.GM_options_wrapper td.label { padding:0px 5px; }		\n'+

	'	.GM_options_buttons { float:right; width:200px; height:50px; vertical-align:middle; text-align:center; }		\n'+

	'	.GM_options_buttons input { background-color:#3B5998; color:white; font-size:24px; font-weight:bold; }		\n'+



	'.bf_tabs { padding-left:4px; }'+

	'.bf_tabs &gt; * {line-height:24px;float:left;font-family:arial;background-color:#3B5998;color:#ddd;border:1px solid #EDEFF4;border-bottom-color:#3B5998;-moz-border-radius-topleft:8px;-moz-border-radius-topright:8px;-webkit-border-radius-topleft:8px;-webkit-border-radius-topright:8px;padding:0px 14px 0px 10px;margin-left:-4px;z-index:1;cursor:pointer;}'+

	'.bf_tabs &gt; .selected + * {margin-left:0px;}	'+

	'.bf_tabs &gt; .selected {position:relative;top:1px;background-color:#f3f3f3;color:#3B5998;border-color:#3B5998;border-bottom:none;border-top:2px solid #3B5998;z-index:999;padding-right:5px;font-weight:bold;}	'+

	'#bf_options_body { clear:both; border:1px solid #3B5998;padding:5px;max-height:500px;min-height:500px;overflow:auto;background-color:#f3f3f3;}'+

	'.bf_option_body {display:none;}'+

	'.bf_option_body &gt; div { padding:2px; font-size:14px; border-top:1px solid #ddd; }'+

	'.bf_option_body &gt; div:nth-child(even) { background-color:#ececec; }'+

	'.bf_option_body &gt; div &gt; div { margin-left:30px; }'+

	'.bf_option_body input[type=checkbox] { width:12px; height:12px; } '+

	'#bf_tracelog { font-family:courier new; font-size:12px; height:300px;overflow:auto;border:1px solid #ccc;background-color:white; } '+



	/* Messages, Tips */

	'	.better_fb_mini_message { background-image:url('+mini_message_icon+'); background-repeat:no-repeat; background-position:center right; cursor:pointer; padding:1px 10px 1px 1px; background-color:#FFFDEA; font-family:arial; font-size:10px;font-weight:bold; margin:1px; border:2px solid #F4D307; -moz-border-radius:3px; -webkit-border-radius: 3px; }		\n'+

	'	.better_fb_mini_message:hover { background-image:url('+mini_message_hover_icon+'); }		\n'+

	'	.better_fb_message { clear:both; background-image:url('+message_icon+'); min-height:40px; background-repeat:no-repeat; background-position:-4px 0px; background-color:#FFFDEA; padding:2px; font-family:arial; font-size:12px; margin:2px; border:2px solid #F4D307; -moz-border-radius:8px; -webkit-border-radius: 8px; }		\n'+

	'	.better_fb_message a { text-decoration:underline; } '+

	'	.better_fb_bulb_spacer { float:left; width:32px; height:30px; }		\n'+

	'	.better_fb_close { width:50px; background-color:#8B8C8D; color:white; border:1px solid #999; border-color:#ddd #999 #999 #ddd; text-align:center; cursor:pointer; margin:5px 0px; }		\n'+

	

	'	.bf_update { background:none repeat scroll 0 0 #FFF8CC; border-bottom:1px solid #FFE222; color:#000000; padding:0 0 1px; font-size:11px; margin:1px 0px 10px 5px; }		\n'+

	'	.bf_h4 { margin-top:7px;}		\n'+

	

	/* Pagelet styles */

	'	.pagelet_title { float:left; margin-right:5px; } \n'+



	'	.uiSideNav .item.noimg { padding-left: 0px !important; } \n'+

	'	.uiHeaderNav { margin-top:2px !important; padding-top:2px !important;} \n'+

	'	.uiHeaderNav h4 { padding-bottom:2px !important; } \n'+

	'	ul.bf_uiSideNav { border:1px solid #ccc; margin:6px 0px; padding:1px 0px; clear:both; } \n'+

	'	ul.bf_uiSideNav li { width:auto; white-space:nowrap; } \n'+

	'	.bf_network { padding: 1px 0px 1px 2px !important; left:0px !important; cursor:pointer; } \n'+

	'	.bf_network .bf_network_users a { font-weight:bold; padding-left:10px; } \n'+

	'	.bf_network .bf_network_users { background-color:#F7F7F7; } \n'+

	

	'	.bf_friend_activity_img { float:left; margin-right:5px; clear:both; } \n'+

	'	.bf_clear { clear:both; } \n'+

	'	.bf_alt { background-color:#eee; } \n'+

	

	'	.bf_sidebar_header_link { margin-left:6px; } \n'+	

	'	.bf_notif_viewer { position:absolute;display:none;z-index:99999;min-height:30px;min-width:50px;border:1px solid black;padding:3px;background-color:white; } \n'+	



	'	.debug{ display:none; border:1px solid #ccc; background-color:#eee;color:#999; text-align:left; padding:3px 0px 3px 20px; clear:both; background-image: url('+info_icon+'); background-repeat:no-repeat; background-position:left top; } \n'+

	'	.debug_small { display:none; border:1px solid #ccc; clear:both; background-color:#eee !important; } \n'+

	'	.debug_small, .debug_small * { color:#ccc !important; text-align:left; padding:0px; } \n'+

	'	.debug_window { position:absolute; top:45px; left:1px; border:1px solid black; width:350px; max-height:800px; overflow:auto; padding:3px; } \n'+



	'	#better_fb_debug_console { max-height:500px; overflow:auto; } \n'+	



	// Install button

	'	#install_button { float:right; '+

	'		background:url('+install_bg_image+') no-repeat scroll right -130px #BAE37F; '+

	'		-moz-border-radius:5px;-webkit-border-radius:5px;border:1px solid #888888;color:#000044;display:block;font-size:1.5em;font-weight:bold;padding:2px 16px;text-align:center;text-decoration:none; '+

	'	} '+

	'	#install_button:hover { background-position:right 0;background-color:transparent;color:#0088FF; }	'+

	

	'__hide_connect_box:\n'+

	'	#pagelet_connectbox { display:none; }		\n'+

	'__hide_suggestions_box:\n'+

	'	#pagelet_pymkbox,#ego,#friend_guesser { display:none; }		\n'+

	'__hide_events_box:\n'+

	'	#pagelet_eventbox { display:none; }		\n'+

//	'__hide_sponsored_box:\n'+

//	'	#pagelet_adbox { display:none; }		\n'+

	'__expand_nav_messages:\n'+

	'	#navigation_item_messages ul { display:block !important; }		\n'+ // old

	'	#navItem_messages ul { display:block !important; }		\n'+ // new

	'__expand_nav_events:\n'+

	'	#navigation_item_events ul { display:block !important; }		\n'+ // old

	'	#navItem_events ul { display:block !important; }		\n'+ // new

	'__expand_nav_photos:\n'+

	'	#navigation_item_media ul { display:block !important; }		\n'+ // old

	'	#navItem_media ul { display:block !important; }		\n'+ // new

	'__expand_nav_friends:\n'+

	'	#navigation_item_ff ul, #navigation_item_ff a.navMore  { display:block !important; }		\n'+ // old

	'	#navItem_ff ul, #navItem_ff a.navMore  { display:block !important; }		\n'+ // new

	'__expand_nav_friends_full:\n'+

	'	#navigation_item_ff ul li.hiddenSubitem  { display:block !important; }		\n'+

	'	#navigation_item_ff a.navMore  { display:none !important; }		\n'+

	'	#navItem_ff ul li.hiddenSubitem  { display:block !important; }		\n'+

	'	#navItem_ff a.navMore  { display:none !important; }		\n'+

	'__expand_nav_apps:\n'+

	'	#navigation_item_apps~li{ display:block !important; }		\n'+

	'	#navigation_item_apps~li.divider { display:none !important; }		\n'+

	'	form div.expandable a.navMoreLess { display:none !important; }		\n'+

	'	#navItem_apps~li{ display:block !important; }		\n'+

	'	#navItem_apps~li.divider { display:none !important; }		\n'+

	'	form div.actionLinks a.navMoreLess { display:none !important; }		\n'+

	'__highlight_cp:\n'+

	'	.better_fb_cp legend { color:red !important; font-weight:bold !important; }		\n'+

	'__left_align:\n'+

	'	#globalContainer { margin:0px !important; }		\n'+

	'__hide_update_email:\n'+

	'	#megaphone_story_44 { display:none !important; }		\n'+

	'__hide_options_icon:\n'+

	'	#bf_options_button_icon { display:none !important; }		\n'+

	'__hide_old_comments:\n'+

	'	.better_fb_new_comment_unhighlight { display:none; } \n'+

	'__hide_status_updater:\n'+

	'	#pagelet_status_updater { display:none !important; } #leftCol { padding-top:3px !important; }		\n';

	

	addGlobalStyle( css );

	

	css = options.get('css');

	if (css &amp;&amp; css.length&gt;0) {

		addGlobalStyle(css);

	}

	var css_url = options.get('css_url');

	if (css_url &amp;&amp; css_url.length&gt;0) {

		insertStylesheet(css_url);

	}

})();



function hideStory(o) {

	while (o &amp;&amp; o.parentNode) {

		if (hasClass(o.parentNode, streamContainerClassRegex )) {

			removeClass(o,&quot;UIStory_new_comments&quot;);

			return;

		}

		o = o.parentNode;

	}

}

var storyTypes = {

 '8': 'New friend notifications',

 '10': 'Relationship changes',

 '21': 'Friends joining groups',

 '38': 'Events friends are attending',

 '46': 'Status updates',

 '56': 'Friends writing on other friends\' walls',

 '65': 'Friends tagged in pictures',

 '80': 'Links',

 '94': 'New events',

 '128': 'Fan page wall posts',

 '161': 'Friends &quot;liking&quot; pages',

 '236': 'Notes posted by fan pages',

 '237': 'Posts from apps like Farmville, Tweedeck, iPhone',

 '247': 'Photo albums',

 '259': 'New profile pictures',

 '263': 'Video links'

}

function getData(o,container) {

	var data = o.getAttribute(container);

	if (data) {

		var attrs = parse(data,&quot;getDataProperty&quot;);

		return attrs;

	}

	return {};

}

function getDataProperty(o,prop,container) {

	return getData(o,container)[prop];

}

function getStoryProperty(o,prop) { return getDataProperty(o,prop,'data-ft'); }

function getFirstElementByClassName(container,cn) {

	var list = container.getElementsByClassName(cn);

	if (list &amp;&amp; list.length&gt;0) {

		return list[0];

	}

	return null;

}

function isStoryTypeHidden(id) { return &quot;hide&quot;==options.get('story_types.'+id+'.display'); }

function isStoryTypeMinimized(id) { return &quot;minimize&quot;==options.get('story_types.'+id+'.display'); }

function hideNewComments(fbid) {

	options.set('story_data.'+fbid+'.no_comments',true);

	options.save();

}

function time() { return +new Date; }



var uniqueStories = {}; // To avoid showing duplicate stories





function fixStory(o,inserted) {



	// Figure out what class the story body contains

	if (messageContentClass==null) {

		for (var c in messageContentClasses) {

			var els = o.getElementsByClassName(c);

			if (els &amp;&amp; els.length) {

				messageContentClass = c;

				break;

			}

		}

	}



	// Check to see if the story has a timestamp attribute. 

	// If it does, that means it's already been processed and is probably just being moved around, so we'll exit

	var post_time = o.getAttribute('timestamp') || 0;

	if (post_time) { return; }

	

	// Get the story properties from the data-ft attribute

	var props = getData(o,&quot;data-ft&quot;);



	var debuginfo = &quot;&quot;;

	var type = props.sty || -1;

	// MINIMIZE STORIES BY TYPE

	if (isStoryTypeMinimized(type)) {

		if (DEBUG) { addClass(o,&quot;debug_hidden&quot;); }

		else { addClass(o,&quot;UIStory_minimized&quot;); }

		var minimized_by_type = true;

	}

	// HIDE STORIES BY TYPE

	if (isStoryTypeHidden(type)) {

		if (DEBUG) { addClass(o,&quot;debug_hidden&quot;); }

		else { addClass(o,&quot;UIStory_hidden_by_type&quot;); }

		var hidden_by_type = true;

	}

	// HIDE STORIES BY CONTENT

	if (content_filter_regex &amp;&amp; o.getElementsByClassName) {

		var msg = o.getElementsByClassName(messageContentClass);

		if (msg &amp;&amp; msg.length) {

			if (content_filter_regex.test(msg[0].innerHTML)) {

				if (DEBUG) { addClass(o,&quot;hidden_by_regex&quot;); }

				else { o.style.display=&quot;none&quot;; }

			}

		}

	}

	// HIDE OLD STORIES

	// ----------------

	// Facebook removed pub_time from the source, so we need to use fbid instead, and just hide stories once we've seen the latest fbid.

	// We have to make the assumption that stories will get inserted in order with the most recent at the top.

	var fbid = props.fbid || getFbid(o);



	// Avoid showing duplicates

	if (uniqueStories[fbid]) {

		if (DEBUG) { addClass(o,&quot;duplicate&quot;); }

		else { o.style.display=&quot;none&quot;; }

	}

	uniqueStories[fbid] = true;

	

	// Record the timestamp of the post as an attribute, based on the timestamp's title attribute

	var timestamp = o.getElementsByClassName('timestamp');

	if (timestamp &amp;&amp; timestamp.length) {

		timestamp = timestamp[0];

		if (timestamp.title) {

			try { 

				var d = new Date(timestamp.title);

				post_time = d.getTime();

				o.setAttribute('timestamp',post_time);

				first_insertion = true;

			} catch (e) { }

		}

	}

	

	// If there is a grouping of similar posts, click it!

	if (options.get('expand_similar_posts') &amp;&amp;(document.querySelectorAll)) {

		var similar = o.getElementsByClassName(streamCollapsedClass);

		if (similar.length) {

			similar = similar[0].getElementsByTagName('a')[0];

			if (similar) {

				similar.style.backgroundColor = &quot;yellow&quot;;

				similar.innerHTML = &quot;&lt;strong&gt;AUTO-EXPANDING...&lt;/strong&gt;&quot;+similar.innerHTML;

				clickLinkQueued(similar);

				return;

			}

		}

	}



	if (o &amp;&amp; o.getElementsByClassName) {

		var comments = o.getElementsByClassName(feedCommentClass);

	}

	var c = null;

	var count = 0;

	if (comments &amp;&amp; comments.length&gt;0) {

		c = comments[0];

		if ( /view all ([,.\d]+) comments/i.test(c.innerHTML) ) {

			var m = RegExp.$1;

			m = m.replace(/[,.]/g,&quot;&quot;);

			count = +m;

		}

		else {

			count = c.childNodes.length || 0;

		}

	}

	// Adding this class will automatically hide next siblings

	// Sometimes posts get inserted without data-ft metadata, so we need to inspect the actual content. That sucks.

	var msg = o.getElementsByClassName(messageContentClass);

	if (msg &amp;&amp; msg.length&gt;0) { var content = msg[0].innerHTML; }

	

	if (fbid == last_seen_fbid || fbid==second_last_seen_fbid || (content &amp;&amp; (content==last_seen_content || content==second_last_seen_content)) ) {

		addClass(o,&quot;last_read&quot;);

		

		// The last read may be in the delayed stream, so mark the whole stream as last_read also so CSS still works

		var pp = o.parentNode.parentNode;

		if (pp &amp;&amp; pp.id==&quot;pagelet_delayed_stream&quot;) {

			addClass(pp,&quot;last_read&quot;);

		}

	}



	var auto_mute_count = options.get('auto_mute_count');

	// Check to see if it has new comments

	// But not if the user has disabled following of comments

	if (options.get('auto_mute_all') || (fbid &amp;&amp; options.get('story_data.'+fbid+'.no_comments'))) {

		// do nothing

		var muted = true;

	}

	// If new comment notification has already been added, don't do it again

	else if (o &amp;&amp; o.getElementsByClassName &amp;&amp; o.getElementsByClassName('better_fb_new_comment_notif').length&gt;0) {

		// don't add comments again

		debuginfo+=&quot;Stopped duplicate comment notifications from being added. &quot;;

	}

	else if (auto_mute_count&gt;0 &amp;&amp; count&gt;auto_mute_count) {

		// Don't alert if count is over threashhold

		debuginfo+=&quot;Comment count of &quot;+count+&quot; is greather than max of &quot;+auto_mute_count+&quot; - automatically muted.&quot;;

	}

	else {

		var stored_count_obj = options.get('story_data.'+fbid+'.cc');

		var t = time();

		

		var stored_count = 0;

		if (stored_count_obj &amp;&amp; typeof(stored_count_obj.c)!=&quot;undefined&quot;) {

			stored_count = stored_count_obj.c

		}

		else {

			stored_count_obj = {'c':0, 't':t};

		}



		if (count &gt; stored_count) {

			addClass(o,&quot;UIStory_new_comments&quot;);

			// Add a new box into the comment area

			if (c!=null) {

				var new_count = count-stored_count;

				var text = new_count+&quot; new comment&quot;+((new_count&gt;1)?&quot;s&quot;:&quot;&quot;);

				var section = el('div','ufi_section better_fb_new_comment_notif',{'innerHTML':text});

				var a = el('a','better_fb_stop_comments',{'innerHTML':'mute new comments'},{'click':function() { hideNewComments(fbid); if (options.get('hide_when_muted')){hideStory(this);} return false; } } );

				section.appendChild(a);

				

				// Highlight the new comments

				if (c.childNodes &amp;&amp; c.childNodes.length&gt;0) {

					var start = c.childNodes.length - new_count;

					if (start &lt; 0) { start = 0; }

					for (var i=0; i&lt;start &amp;&amp; i&lt;c.childNodes.length; i++) {

						var n = c.childNodes[i];

						if (n.id) {

							addClass(n,&quot;better_fb_new_comment_unhighlight&quot;);

						}

					}

				}

				// Append the notification

				if (!c.childNodes || c.childNodes.length==0) {

					c.appendChild(section);

				}

				else {

					c.insertBefore(section, c.childNodes[0]);

				}

			}

			stored_count_obj.nt = t;

			stored_count_obj.nc = count;

		}

		options.set('story_data.'+fbid+'.cc',stored_count_obj);

	}

	

	// Reorder the post to be in correct chronological order if it was inserted from expanding similar posts

	var filter = props.filter || '';

	if (post_time &amp;&amp; filter.indexOf('app_')==0) {

		var stream = o.parentNode;

		var posts = stream.childNodes;

		var L = posts.length;

		for (var i=0; i&lt;L; i++) {

			var p = posts[i];

			var ts = p.getAttribute('timestamp');

			if (ts &amp;&amp; ts&lt;post_time) {

				stream.insertBefore(o,p);

				break;

			}

		}

	}

	

	// Add debug info to the screen

	if (DEBUG) {

		var dd = el('div','debug');

		var by_type = (minimized_by_type?&quot;Minimized by type. &quot;:(hidden_by_type?&quot;Hidden by type. &quot;:&quot;&quot;));

		var c = _template(&quot;&lt;b&gt;fbid&lt;/b&gt;=%1%, &lt;b&gt;type&lt;/b&gt;=%2%, &lt;b&gt;comment count&lt;/b&gt;=%3%, &lt;b&gt;stored comment count&lt;/b&gt;=%4%, &lt;b&gt;id&lt;/b&gt;=%7%&lt;br&gt;&lt;b&gt;className&lt;/b&gt;='%8%'&lt;br&gt;%5% %6%&quot;,fbid,type,count,stored_count, (muted?&quot;Muted&quot;:&quot;&quot;), by_type, o.id, o.className);

		if (fbid == last_seen_fbid) {

			c+= &quot; Marked as LAST SEEN. &quot;;

		}

		var dataft = o.getAttribute('data-ft');

		if (dataft) {

			c+=&quot;&lt;br&gt;&lt;b&gt;data-ft&lt;/b&gt;:&quot;+ dataft.replace(/,/g,&quot;, &quot;);

		}

		if (debuginfo) { c+=&quot;&lt;br&gt;&quot;+debuginfo; }

		dd.innerHTML = c;

		o.appendChild(dd);

	}

}

function fixStories(o,inserted) {

	if (o &amp;&amp; o.length) {

		for (var i=0; i&lt;o.length; i++) {

			fixStory(o[i],inserted);

		}

	}

}

function isStreamContainer(o) {

	return hasClass(o,streamContainerClassRegex);

}

function handleDomInsertion(e) {

	var o = e.target;

	if (o.id &amp;&amp; o.id==&quot;mainContainer&quot;) {

		init();

	}

	// Sometimes the full contentArea gets replaced. Just init the whole thing over in that case!

	if (o.id &amp;&amp; o.id==&quot;pagelet_intentional_stream&quot;) {

		init();

	}

	else if (isLiveFeed()) {

		if (isStreamContainer(o)) {

			fixStories(o.childNodes,true);

		}

		else if (o.parentNode &amp;&amp; isStreamContainer(o.parentNode)) {

			fixStory(o,true);

		}

	} 

}



// FORCE the &quot;Most Recent&quot; feed rather than &quot;Top News&quot;

if (options &amp;&amp; options.get('force_most_recent_feed')) {

	onIdLoad('pagelet_stream_header',function() {

		var href = getNewsFeedLink();

		if (/sk=lf/i.test( href ) ) {

			// Link to Most Recent feed is active, so take it

			window.location.href = href;

		}

	});

}



// Add an Options button in the header

onIdLoad('pageNav',function(nav) {

	if ($('bf_options_button')==null) {

		var src = &quot;data:image/gif,GIF89a%17%00%16%00%D5%00%00%00%00%00%FF%FF%FFbz%AD%D7%0C%10%E2pr%D648%D1LP%CB%16%1F%BB%1C(%BA%2B9%A4%234%9C-E%AB%40Y%BA%5Er%875R%88%40%60g0P%96o%93vMufBf%B1%A5%B8qX%84I%3FfUQ%7Cok%94%87%8A%ABWe%8F%3CMv(%3Bg%3ER~CV%7F0CkLi%A6BY%896Iph%84%B7%A5%BC%E4%3CZ%8Dq%92%C8%82%A1%D3%86%A6%D9%8F%B0%E5%8D%AB%DD%91%AE%DF%B0%C0%D9%3Cf%A6%C8%D5%E91T%83y%A3%DB%83%AB%DF%8F%B2%DE%D4%DA%E0%E7%EA%ED%F8%FA%FB%FD%FF%FF%FB%FD%FD%F9%FC%F9%FC%DC%DA%E2%1F%1F%E5BB%EC%95%95%F3%C2%C1%F9%ED%ED%FD%FD%FD%2C%00%00%00%00%17%00%16%00%00%06%FF%40%81pH%2C%1A%87%1A%8E%F2%C3l29%22M%26%83Iz%84%1B%CEG%C4%DDx%BD%D1Y%60%1C%C0y8%D8m%D7%DBiw%C4%E4%00M%F4I%8B%D8%1D%8F%BE%A3%B1%8D%7D%3D%04%3B%0Au%02%1Ewmz!!%25%25%18%3D%3C%04%06%0A%10%16%10%0AB%87y%8C%25!%17%0F%0B%09%04%3C9%14%2F%13%0E%2F%98%86%2F%9D%17%13%A0%0E%0F%15%19%80%3C%05%08%0A%07%2F%10%3C%02%AF%B2%0A%0F%12%1A%1A%18%04%04%05%3B%3C%3A%3A%3C%07%17%10%06%02%0A%0B%12!%C5%12%0A%08%09%3A%C8%05%CC%A2%04%13%1D%05%0D%16%2F%9F%12%07%09%0C%03%19%82%3D%03%3D%3B%06%05%04%10%2F%09%06%1E%16%03%07%0B%B6U8%20%A1%82%8E%1C%3Av%10pp%A1%04%2F%03%06%2C%9480%20%C1%82%01%1A%16%2Ch%81%A0%87G%16!P)%C0%C4%03B%8B%05%07%00%0E%B0%F6%A0%C5%08%5B%93%AC5%14%D0%C3%A4%84%01%08%24H%C0%00%02%83%04%7F%06%C8xP%00%D1%A2h%09!%09%8AV%00%01%A2%C2%83%04%09%1ED%F01%86E%0B%A6-%8E%0Ax%E0%20%C2%03%06%06%1AD%C8%00%03%86%0C%3F%01%5C%98X%3B%02%84%90%11%11%1A4%C8%A0%22%85%DD%15*H%FC%18%E3%E2%04%8A%13'%86%8C(%9BB%85%E1%15%88%F3%EEM%0B%18%F0%88%B7~Q%1C%5Ea7%85%5E%BE(%FE%A2x%2C%60%84%89%CC%86%2B%DB%25Q%E3%C6%0D%17%99Q%98%E0%7C%A4%F5%91%20%00%3B&quot;;

		var a = el('a',null,{href:'#',title:'Better Facebook! Options',id:'bf_options_button'},{click:function() { better_fb_options(); return false; }},'&lt;img id=&quot;bf_options_button_icon&quot; src=&quot;'+src+'&quot; style=&quot;float:left;margin-right:5px;&quot;&gt; Options');

		if (options.get('highlight_cp')) {

			a.style.backgroundColor = &quot;yellow&quot;;

			a.style.color = &quot;black&quot;;

		}

		var li = el('li');

		li.appendChild(a);

		insertFirst(nav,li);

	}

});



// PIN NOTIFICATIONS

function pinNotifications() {

	if (options &amp;&amp; options.get('pin_notifications')) {

		onIdLoad('jewelBoxAlert',function(notifications) {

			notifications.style.position=&quot;relative&quot;;

			notifications.style.top=&quot;31px&quot;;

			notifications.style.left=&quot;832px&quot;;

			notifications.style.display=&quot;block&quot;;

			var w = options.get('pin_notifications_width');

			if (w &amp;&amp; w!=&quot;&quot;) {

				notifications.style.width=w;

			}

			onIdLoad('jewelAlert',function(o) {

				// Click to trigger notifications, then un-click

				clickLink(o);

				clickLink(o);

			});

		});

	}

}

pinNotifications();



// Last seen article ID

var last_seen_fbid = options.get('last_seen_fbid') || 0;

var second_last_seen_fbid = options.get('second_last_seen_fbid') || 0;

var last_seen_content = options.get('last_seen_content') || '';

var second_last_seen_content = options.get('second_last_seen_content') || '';



// RegExp for hiding

var content_filter_regex = options.get('hide_content_regex');

if (content_filter_regex.match(/^\s*$/)) {

	content_filter_regex = null;

}

else {

	try {

		content_filter_regex = new RegExp(content_filter_regex,&quot;i&quot;);

	}

	catch (e) {

		alert(&quot;The content filter regular expression specified in the options [&quot;+content_filter_regex+&quot;] is invalid and will be ignored.&quot;);

		content_filter_regex = null;

	}

}



function getStream() {

	var els = $('home_stream');

	if (els) { return els; }

	els = document.getElementsByClassName(streamContainerClass);

	if (els &amp;&amp; els.length) { return els[0]; }

	trace(&quot;Stream not found in getStream()&quot;);

}

var comment_expire_time = 1000 * 60 * 60 * 24 * 7; // ONE WEEK



function getFbid(o) {

	var fbid = getStoryProperty(o,'fbid');

	if (!fbid &amp;&amp; o.id) {

		var parts = o.id.split(&quot;_&quot;);

		if (parts) {

			fbid = parts[parts.length-1];

		}

	}

	return fbid;

}

function markRead() {

	trace(&quot;Mark All Read clicked&quot;);

	// Find the fbid of the top-most story currently displayed

	var el = getStream();

	if (el &amp;&amp; el.firstChild) {

		var first = el.firstChild;

		var fbid = getFbid(first);

		var msg = first.getElementsByClassName(messageContentClass);

		if (msg &amp;&amp; msg.length&gt;0) { var html = msg[0].innerHTML; }

		options.set('last_seen_fbid',fbid);

		options.set('last_seen_content', html?html:'' );



		var next = first.nextSibling;

		if (next) {

			var fbid = getFbid(next);

			var msg = next.getElementsByClassName(messageContentClass);

			if (msg &amp;&amp; msg.length&gt;0) { var html = msg[0].innerHTML; }

			options.set('second_last_seen_fbid',fbid);

			options.set('second_last_seen_content', html?html:'' );

		}

		else {

			options.set('second_last_seen_fbid',0);

			options.set('second_last_seen_content', '' );

		}

		addClass(first,&quot;last_read&quot;);

		

		// Mark the entire stream as read

		addClass(el,&quot;all_read&quot;);

	}

	

	// Prune the old comment counts so the prefs don't get huge

	var t = time();

	var pruned_count = 0;

	var story_data = options.get('story_data');

	if (story_data) {

		for (var s in story_data) {

			var story = story_data[s];

			var cc = story.cc;

			if (cc &amp;&amp; cc.t) {

				// First copy any new counts to the current counts

				if (cc.nt) {

					cc.t = cc.nt;

					delete cc['nt'];

				}

				if (cc.nc) {

					cc.c = cc.nc;

					delete cc['nc'];

				}

				// This is the new format

				if (t-cc.t &gt; comment_expire_time) {

					delete story_data[s];

					pruned_count++;

				}

			}

			else if (!cc &amp;&amp; !story.no_comments) {

				// Old format, get rid of it

				delete story_data[s];

			}

		}

		options.set('story_data',story_data);

		if (pruned_count) { trace(&quot;Pruned &quot;+pruned_count+&quot; old story comment counts&quot;); }

	}

	options.save();

}

function showAll() {

	var el = getStream();

	if (el) {

		addClass(el,&quot;show_all&quot;);

		$('better_fb_hide_read').style.display='';

		$('better_fb_show_read').style.display='none';

	}

}

function hideRead() {

	var el = getStream();

	if (el) {

		removeClass(el,&quot;show_all&quot;);

		$('better_fb_hide_read').style.display='none';

		$('better_fb_show_read').style.display='';

	}

}

function button(value,onclick,id) {

	var button = el( 'input','',{type:'button','value':value},{click:onclick} );

	var span = el('label','uiButton UIButton UIButton_Blue UIFormButton UIButton_better_fb',{'id':id});

	span.appendChild(button);

	return span;

}

function minimessage(str,okFunc) {

	okFunc = okFunc || (function(){});

	return el('div','better_fb_mini_message',{innerHTML:str,title:'Click to close message'},{click:function() { okFunc(); this.style.display='none'; }} );

}

function message(str,okFunc,obj) {

	var msg = el('div','better_fb_message');

	msg.innerHTML = '&lt;div class=&quot;better_fb_bulb_spacer&quot;&gt;&lt;/div&gt;'+str;

	if (obj) { msg.appendChild(obj); }

	okFunc = okFunc || (function(){});

	var ok = el('div','better_fb_close',{innerHTML:'OK'},{click:function() { okFunc(); this.parentNode.style.display='none'; } } );

	msg.appendChild(ok);

	return msg;

}

function show_message_popup(id,content) {

	var doc = document;

	var self = this;

	var msgDiv = el('div','bf_message_popup',null,null,content);

	var ok = el('div','better_fb_close',{innerHTML:'OK'},{click:function() { options.set('last_msg',id); options.save(); this.parentNode.style.display='none'; } } );

	msgDiv.appendChild(ok);

	doc.body.appendChild(msgDiv);

	msgDiv.style.display=&quot;block&quot;;

};



function createSidebarSection(o) {

	var d = el('div','better_facebook_sidebar_section');



	var html = ''+

	'&lt;div&gt;'+

	'	&lt;div&gt;'+

	'		&lt;div class=&quot;mbl&quot;&gt;'+

	'			&lt;div class=&quot;uiHeader uiHeaderBottomBorder mbm pbs&quot;&gt;'+

	'				&lt;div class=&quot;clearfix uiHeaderTop&quot;&gt;'+

	'					&lt;div&gt;'+

	'						&lt;h4 class=&quot;uiHeaderTitle pagelet_title&quot;&gt;%title%&lt;/h4&gt;&lt;span id=&quot;%id%_title_after&quot;&gt;&lt;/span&gt;'+

	'					&lt;/div&gt;'+

	'				&lt;/div&gt;'+

	'			&lt;/div&gt;'+

	'			&lt;div class=&quot;UIRequestBox&quot;&gt;'+

	'				&lt;div id=&quot;%id%&quot; class=&quot;UIImageBlock clearfix UIRequestBox_Request UIRequestBox_RequestFirst UIRequestBox_RequestOdd&quot;&gt;'+

	'					%content%'+

	'				&lt;/div&gt;'+

	'			&lt;/div&gt;'+

	'		&lt;/div&gt;'+

	'	&lt;/div&gt;'+

	'&lt;/div&gt;';

	d.innerHTML = _template( html, o );

	

	if (o.links) {

		o.links.forEach( function(link,i) {

			var dd = d.getElementsByClassName('uiHeaderTop')[0];

			if (dd) {

				var a = el('a','bf_sidebar_header_link',{href:'#',innerHTML:link.linktext},{click:link.linkonclick});

				var nd = el('div','uiTextSubtitle uiHeaderActions rfloat');

				nd.appendChild(a);

				insertFirst(dd,nd);

			}

		} );

	}



	return d;

}

function ago(when,now) {

	var diff = Math.floor((now-when)/1000/60);

	if (diff&lt;60) { return diff+&quot; minutes ago&quot;; }

	diff = Math.floor(diff/60);

	if (diff&lt;24) { return diff+&quot; hours ago&quot;; }

	diff = Math.floor(diff/24);

	return diff+&quot; days ago&quot;;

}



// INIT - Load Stuff!

// ==================

onIdLoad('contentArea',init);

function init(contentArea) {

	trace(&quot;init()&quot;);

	was_live = null;

	setTimeout( function() { 

		isLiveFeed();

		attachLeftColumnContent();

		attachRightColumnContent();

		checkForUpdate(contentArea);

		uniqueStories = {};

		// Do an initial fix in case there is static content

		onIdLoad('home_stream',function(hs) {

			if (isLiveFeed()) {

				fixStories(hs.childNodes);

			}

		});

	},0);

}



// RIGHT COLUMN CONTENT

// ====================

function attachRightColumnContent() {

	trace(&quot;attachRightColumnContent()&quot;);

	onIdLoad('rightCol',function(o) {

		// Friend Tracker

		// --------------

		(function() {

			if (options &amp;&amp; options.get('show_friend_tracker')) {

				trace(&quot;Adding Friend Tracker&quot;);

				var clear = function() {

					options.set('friend_tracker.unfriended',{});

					options.save();

					loadContent();

				}

				var loadContent = function() {

					var t = time();

					$('better_fb_friend_tracker_pagelet').innerHTML = &quot;Loading...&quot;;

					GM_xmlhttpRequest({

						method: 'get',

						headers: { 'Content-type': 'application/x-www-form-urlencoded' },

						url: &quot;http://www.facebook.com/ajax/typeahead_search.php?__a=1&amp;time=&quot;+t,

						onload: function(result) {

							var friends = options.get('friend_tracker') || {'friends':{},'unfriended':{}};

							// First version was messed up, so need to fix it via a hack

							if (!friends.fixed) {

								friends = {'friends':{},'unfriended':{}};

								friends.fixed = true;

							}

							var old_friends = friends.friends;

							var unfriended = friends.unfriended;

							var count = 0;

							var friend_list = parse(result.responseText.substring(9),&quot;Friend Tracker&quot;);

							if (!friend_list.payload &amp;&amp; !friend_list.payload.entries) { tracelog(&quot;Friend tracker returned invalid data&quot;); return; }

							friend_list = friend_list.payload.entries;

							trace(&quot;Friend list length=&quot;+friend_list.length);

							if (friend_list &amp;&amp; friend_list.length&gt;1) {

								var current_friends = {};

								for (i=0;i&lt;friend_list.length;i++) {

									if (friend_list[i].ty==&quot;u&quot;) { // only users

										count++;

										var id = friend_list[i].i;

										var name = friend_list[i].t;

										var f = {'name':name,'added':t};

										// User wasn't my friend before

										if (typeof old_friends[id]==&quot;undefined&quot;) {

											// Add them into the list of my friends!

											old_friends[id] = f;

										}

										// Maintain a list of all current friends

										current_friends[id] = f;

										// Forcefully delete any unfriends who are now friends

										delete unfriended[id];

									}

								}



								// Now loop through all my old_friends, to see if they no longer exist in current_friends

								var html = &quot;&quot;;

								for (var id in old_friends) {

									if (typeof current_friends[id]==&quot;undefined&quot;) {

										// They unfriended you! Bastards!

										unfriended[id] = old_friends[id];

										unfriended[id].deleted = t;

										delete old_friends[id];

									}

								}

								var days = options.get('friend_tracker_duration') || 3;

								var duration = 1000*60*60*24*days;

								for (var id in unfriended) {

									var f = unfriended[id];

									if (t-f.deleted &gt; duration ) {

										delete unfriended[id];

									}

									else {

										html += '&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;a href=&quot;/profile.php?id='+id+'&quot;&gt;'+f.name+'&lt;/a&gt; &lt;span class=&quot;'+timestampClass+'&quot;&gt;'+ago(f.deleted,t)+'&lt;/span&gt;&lt;br&gt;';

									}

								}

								if (html) {

									html = &quot;You are no longer friends with:&lt;br&gt;&quot;+html;

								}

								else {

									html = &quot;No activity&quot;;

								}

								$('better_fb_friend_tracker_pagelet').innerHTML = html;

								

								// Update total friend count

								$('better_fb_friend_tracker_pagelet_title_after').innerHTML = &quot; (&quot;+count+&quot; friends)&quot;;

								

								// Finally, save the details!

								options.set('friend_tracker',friends);

								options.save();

							}

						}

					});

				}

				

				// Only insert if it doesn't already exist!

				if ($('better_fb_friend_tracker_pagelet')==null) {

					// A &quot;Friend Tracker&quot; sidebar will notify if anyone unfriended you

					// Some ideas taken from http://userscripts.org/scripts/review/40027

					insertAtPosition( o, createSidebarSection({ title:'Friend Tracker',content:'Loading...',id:'better_fb_friend_tracker_pagelet',links:[ {linktext:'Clear',linkonclick:clear } ] } ), 2 );

					onIdLoad('better_fb_friend_tracker_pagelet',loadContent);

				}

			}

		})();



		// My Group Activity

		// -----------------

		if (options &amp;&amp; options.get('show_group_activity') &amp;&amp; document.querySelectorAll) {	

			trace(&quot;Adding My Group Activity&quot;);

			var loadContent = function() {

				var contentArea = $('better_fb_groups_pagelet');

				contentArea.innerHTML = &quot;Loading...&quot;;

				var iframe = document.createElement(&quot;iframe&quot;);

				iframe.src = &quot;http://www.facebook.com/groups.php&quot;;

				iframe.style.display=&quot;none&quot;;

				iframe.addEventListener('load',function(e) {

					var d = e.target.contentDocument;

					var html = &quot;&quot;;

					var divs = d.querySelectorAll(&quot;#contentArea .uiList .objectListItem .UIImageBlock_Content&quot;);

					if (divs &amp;&amp; divs.length&gt;0) {

						for (var j=0; j&lt;divs.length; j++) {

							var div = divs[j];

							var updates = div.getElementsByClassName('uiTextHighlight');

							if (updates &amp;&amp; updates.length&gt;0) {

								var update = updates[0];

								var title = update.parentNode.firstChild;

								html += '&lt;h4 class=&quot;bf_h4&quot;&gt;'+title.innerHTML+'&lt;/h4&gt;&lt;span class=&quot;bf_update&quot;&gt;'+update.innerHTML+'&lt;/span&gt;';

							}

						}

					}

					if (!html) {

						html = &quot;No activity&quot;;

					}

					options.set('group_activity_content',html);

					options.set('group_activity_last_update',time());

					options.save();

					

					// Remove the iframe

					if (iframe &amp;&amp; iframe.parentNode) { iframe.parentNode.removeChild(iframe); }



					if (contentArea) { contentArea.innerHTML = html; }

				},false);

				var pagelet = $('better_fb_groups_pagelet');

				if (pagelet) {

					pagelet.appendChild(iframe);

				}

			}



			// Only insert if it doesn't already exist!

			if ($('better_fb_groups_pagelet')==null) {



				// A &quot;Groups Activity&quot; sidebar will alert you to groups activity

				insertAtPosition( o, createSidebarSection({ title:'My Group Activity',content:'Loading...',id:'better_fb_groups_pagelet',links:[ {linktext:'Refresh',linkonclick:loadContent} ]} ), 2 );

				// check to see if we need to load new content

				var interval = options.get('group_activity_interval');

				var last = options.get('group_activity_last_update');

				if (last==null || (time()-last &gt; (interval*60*60*1000))) {

					loadContent();

				}

				else {

					// Just show previous content!

					$('better_fb_groups_pagelet').innerHTML = options.get('group_activity_content');

				}

			}

		}

		

		// Friend Activity

		// -----------------

		(function() {

			if (options &amp;&amp; options.get('show_friend_activity') &amp;&amp; document.querySelectorAll) {	

				trace(&quot;Adding Friend Activity&quot;);

				var last_seen = options.get('friend_activity_last_seen');

				var new_last_seen = last_seen;

				var debuginfo = debugmsg(&quot;Last Seen: &quot;+last_seen);

				

				// Define the function that does the loading

				var loadContent = function() {

					var contentArea = $('better_fb_friends_pagelet');

					contentArea.innerHTML = &quot;Loading...&quot;;

					var iframe = document.createElement(&quot;iframe&quot;);

					iframe.src = &quot;http://www.facebook.com/friends/?filter=fpru&quot;;

					iframe.style.display=&quot;none&quot;;

					iframe.addEventListener('load',function(e) {

						var d = e.target.contentDocument;

						var process = function(container) {

							var html = &quot;&quot;;

							

							// For each friend, get their name and what was updated

							var names = d.querySelectorAll(&quot;#FriendsPage_Container .UIObjectListing .UIObjectListing_MetaData a.UIObjectListing_Title&quot;);

							var updates = d.querySelectorAll(&quot;#FriendsPage_Container span.updates&quot;);

							var times = d.querySelectorAll(&quot;#FriendsPage_Container .FriendsPage_RecentlyUpdatedTime&quot;);

							var pics = d.querySelectorAll(&quot;#FriendsPage_Container .UIProfileImage&quot;);

							var show_pics = options.get('friend_activity_show_pics');

							var show = true;

							var hide_text = options.get('friend_activity_hide_text');

							for (var j=0; j&lt;names.length; j++) {

								var unique = trim(names[j].innerHTML)+&quot;/&quot;+trim(updates[j].innerHTML);

								if (j==0) {

									// Record the most recent one in case of &quot;clear&quot;

									new_last_seen = unique;

									debuginfo += debugmsg(&quot;New Last Seen:&quot;+new_last_seen);

								}

								if (last_seen &amp;&amp; last_seen==unique) {

									show = false;

								}

								var update = updates[j].innerHTML;

								var show_this = show;

								var debug_class = &quot;&quot;;

								if ( hide_text &amp;&amp; (new RegExp(hide_text,&quot;i&quot;).test(update))) {

									show_this = false;

								}

								if (!show_this &amp;&amp; DEBUG) {

									debug_class=&quot;debug_small&quot;;

									show_this = true;

								}

								if (show_this) {

									var pic = (show_pics)?'&lt;img src=&quot;'+pics[j].src+'&quot; class=&quot;bf_friend_activity_img&quot;&gt;':'';

									html += _template('&lt;div class=&quot;bf_clear %6%&quot;&gt;%5%&lt;h4 class=&quot;bf_h4&quot;&gt;&lt;a href=&quot;%1%&quot;&gt;%2%&lt;/a&gt;&lt;/h4&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;span class=&quot;bf_update&quot;&gt;%3%&lt;/span&gt; - &lt;span class=&quot;'+timestampClass+'&quot;&gt;%4%&lt;/span&gt;&lt;/div&gt;', names[j].href, names[j].innerHTML, update, times[j].innerHTML, pic, debug_class);

								}

							}

							if (!html) {

								html = &quot;No activity&quot;;

							}

							options.set('friend_activity_content',html);

							options.set('friend_activity_last_update',time());

							options.save();



							// Remove the iframe

							if (iframe &amp;&amp; iframe.parentNode) { iframe.parentNode.removeChild(iframe); }



							contentArea.innerHTML = ((DEBUG)?debuginfo:&quot;&quot;)+html;

						}

						onElementContent('FriendsPage_Container',process,d);

					},false);

					var pagelet = $('better_fb_friends_pagelet');

					if (pagelet) {

						pagelet.appendChild(iframe);

					}

				}

				var clear = function() {

					last_seen = new_last_seen;

					options.set('friend_activity_last_seen',new_last_seen);

					options.set('friend_activity_last_update',0);

					if (DEBUG) { debuginfo=&quot;&quot;; }

					options.save();

					setTimeout(loadContent,500);

				}

				

				// Only insert if it doesn't already exist!

				if ($('better_fb_friends_pagelet')==null) {

				

					insertAtPosition( o, createSidebarSection({ title:'Friends Activity',content:'Loading...',id:'better_fb_friends_pagelet',links:[ {linktext:'Clear',linkonclick:clear },{linktext:'Refresh',linkonclick:loadContent} ] } ), 3 );

					// check to see if we need to load new content

					var interval = options.get('friend_activity_interval');

					var last = options.get('friend_activity_last_update');

					if (DEBUG) { debuginfo += debugmsg(&quot;Last update &quot;+Math.ceil((time()-last)/60000)+&quot; minutes ago&quot;); }

					if (last==null || (time()-last &gt; (interval*60*60*1000))) {

						loadContent();

					}

					else {

						// Just show previous content!

						var c = options.get('friend_activity_content');

						if (DEBUG) { debuginfo += debugmsg('Showing cached content'); }

						$('better_fb_friends_pagelet').innerHTML = ((DEBUG)?debuginfo:&quot;&quot;)+c;

					}

				}

			}

		})();

	});

}



// LEFT COLUMN CONTENT

// ===================

// This content is dependent on the &quot;type-ahead&quot; content being loaded, so do that right away

function attachLeftColumnContent() {

	trace(&quot;attachLeftColumnContent()&quot;);

	var connections, connection_templates;

	

	var createNavSection = function(nav,id,title,type,allowedit,sortprop,processfunc,imgclass) {

		if ($('bf_nav_'+id)==null) {

			var open = options.get(id+'_default_open');

			var position = +options.get(id+'_position') || 0;

			var max_height = options.get(id+'_max_height') || 5000;

			var h4 = el('h4',null,null,null,title);

			h4.id = &quot;bf_nav_title_&quot;+id;

			bind(h4,'click',function() { toggle('bf_nav_content_'+id,id+'_default_open'); });

			h4.style.cursor = &quot;pointer&quot;;

			var d = el('div','clearfix uiHeader uiHeaderNav uiHeaderTopBorder',{innerHTML: _template('&lt;div id=&quot;bf_nav_%1%&quot; class=&quot;lfloat&quot;&gt;&lt;/div&gt;&lt;div class=&quot;rfloat&quot; id=&quot;bf_nav_rfloat_%1%&quot;&gt;&lt;/div&gt;&lt;ul class=&quot;uiSideNav bf_uiSideNav&quot; id=&quot;bf_nav_content_%1%&quot; style=&quot;max-height:%4%px;overflow-y:auto;overflow-x:hidden !important;%3%&quot;&gt;&lt;/ul&gt;',id,title,(open?&quot;&quot;:&quot;display:none;&quot;),max_height ) });

			d.firstChild.appendChild(h4);

			insertAtPosition(nav,d,position);

			if (allowedit) {

				var rfloat = $('bf_nav_rfloat_'+id);

				if (rfloat) {

					var a_id = 'bf_nav_edit_'+id;

					var a = el('a',null,{id:a_id,innerHTML:'edit'},{click:function(e){editNavSection(e,id,type,sortprop,processfunc,imgclass);}});

					rfloat.appendChild(a);

				}

			}

			return $('bf_nav_content_'+id);

		}

	};

	

	var getConnectionsByType = function(type,sorted,sortprop) {

		var list = [];

		sortprop = sortprop || &quot;t&quot;;

		for (var i=0; i&lt;connections.length; i++) {

			var c = connections[i];

			if (c &amp;&amp; c.ty &amp;&amp; c.ty==type) { list.push(c); }

		}

		if (sorted) {

			list = list.sort( function(a,b) { return a[sortprop].toLowerCase()&gt;b[sortprop].toLowerCase(); } );

		}

		return list;

	};

	

	var imgClassCache = {};

	var createNavLink = function(title,url,imgsrc,imgclass,target) {

		var img='', hasimg=false;

		if (imgclass) {

			if (typeof imgClassCache[imgclass]!=&quot;undefined&quot;) {

				imgclass = imgClassCache[imgclass];

			}

			else {

				// imgclass will now be the id of an element ont he page whose icon we will steal by matching class names

				var i = document.querySelectorAll('#'+imgclass+' span.imgWrap i');

				if (i &amp;&amp; i.length) {

					imgClassCache[imgclass] = i[0].className;

					imgclass = i[0].className;

				}

			}

			img = '&lt;span class=&quot;imgWrap&quot;&gt;&lt;i class=&quot;'+imgclass+'&quot;&gt;&lt;/i&gt;&lt;/span&gt;';

			hasimg = true;

		}

		else if (imgsrc) {

			img = '&lt;span class=&quot;imgWrap&quot;&gt;&lt;img src=&quot;'+imgsrc+'&quot; height=16 width=16&gt;&lt;/span&gt;';

			hasimg = true;

		}

		return _template('&lt;a class=&quot;item %5%&quot; href=&quot;%2%&quot; target=&quot;%4%&quot;&gt;%1%&lt;span&gt;%3%&lt;/span&gt;&lt;/a&gt;',img,url,title,target,hasimg?&quot;&quot;:&quot;noimg&quot; );

	};

	

	var createNavListItem = function(title,url,imgsrc,imgclass,target) {

		return &quot;&lt;li&gt;&quot;+createNavLink(title,url,imgsrc,imgclass,target)+&quot;&lt;/li&gt;&quot;;

	};

	

	var createConnectionSection = function(nav,type,id,title,allowedit,sortprop,processfunc,imgclass) {

		trace(&quot;Creating &quot;+title);

		var html = &quot;&quot;;

		var target = options.get(id+'_new_window')?&quot;_blank&quot;:&quot;&quot;;

		var template = connection_templates[type].default_url;

		var content = createNavSection(nav,id,title,type,allowedit,sortprop,processfunc,imgclass);

		if (content) {

			var count = populateConnectionSection(content,id,type,sortprop,processfunc,imgclass);

			var h4 = $('bf_nav_title_'+id);

			if (h4) { h4.innerHTML += ' &lt;span id=&quot;bf_nav_count_'+id+'&quot; class=&quot;countValue&quot;&gt;('+count+')&lt;/span&gt;'; }

		}

	};

	

	var populateConnectionSection = function(container,id,type,sortprop,processfunc,imgclass) {

		var html = &quot;&quot;;

		var target = options.get(id+'_new_window')?&quot;_blank&quot;:&quot;&quot;;

		var template = connection_templates[type].default_url;

		var items = getConnectionsByType(type,true,sortprop);

		var hidden_connections = options.get('hidden_connections') || {};

		var count = 0;

		if (processfunc) {

			ret = processfunc(items);

			html += ret.html;

			count = ret.count;

		}

		else {

			for (var j=0; j&lt;items.length; j++) {

				var item = items[j], url = template.replace(/%#?/,item.i);

				if (!hidden_connections || !hidden_connections[type] || !hidden_connections[type][item.i]) {

					if (item.t) {

						count++;

						html += createNavListItem(item.t,url,item.it,imgclass,target);

					}

				}

			}

		}

		container.innerHTML = html;	

		return count;

	};

	

	var editNavSection = function(e,id,type,sortprop,processfunc,imgclass) {

		var edit_link = $('bf_nav_edit_'+id);

		var content = $('bf_nav_content_'+id);

		var hidden_connections = options.get('hidden_connections') || {};

		if (typeof hidden_connections[type]==&quot;undefined&quot;) {

			hidden_connections[type] = {};

		}

		

		if (edit_link.innerHTML == 'edit') {

			edit_link.innerHTML = 'save';

			edit_link.style.backgroundColor = 'yellow';

			

			content.innerHTML = &quot;&quot;;

			var items = getConnectionsByType(type,true,sortprop);

			for (var j=0; j&lt;items.length; j++) {

				var item = items[j];

				if (item.t) {

					var hidden = !!hidden_connections[type][item.i];

					var input = el('input',null,{type:'checkbox',value:item.i,'checked':!hidden},{click:function(){

						hidden_connections[type][this.value] = !this.checked;

						options.set('hidden_connections',hidden_connections);

					}});

					var div = el('div',null,{innerHTML:item.t});

					insertFirst(div,input);

					content.appendChild(div);

				}

			}

		}

		else if (edit_link.innerHTML == 'save') {

			edit_link.innerHTML = 'edit';

			edit_link.style.backgroundColor = '';

			options.save();

			var count = populateConnectionSection(content,id,type,sortprop,processfunc,imgclass);

			var count_span = $('bf_nav_count_'+id);

			if (count_span) {

				count_span.innerHTML = &quot;(&quot;+count+&quot;)&quot;;

			}

		}

		

	};

	

	// Insert some new navigation links

	onIdLoad('leftCol',function(nav) {

		var container = nav.getElementsByClassName('uiSideNav');

		if (container &amp;&amp; container.length) {

			container = container[0];

			if (options.get('show_nav_all_connections')) {

				container.appendChild( el('li',null,null,null,createNavLink('All Connections','http://www.facebook.com/friends/?filter=ac',null,'navItem_ff','')) );

			}

			if (options.get('show_nav_edit_friends')) {

				container.appendChild( el('li',null,null,null,createNavLink('Edit Friends','http://www.facebook.com/friends/?filter=afp',null,'navItem_ff','')) );

			}

			if (options.get('show_nav_write_a_note')) {

				container.appendChild( el('li',null,null,null,createNavLink('Write A Note','http://www.facebook.com/editnote.php?new',null,'navItem_2347471856','_blank')) );

			}

			if (options.get('show_nav_pages_i_admin')) {

				container.appendChild( el('li',null,null,null,createNavLink('Pages I Admin','http://www.facebook.com/pages/manage/',null,'navItem_app_2309869772','')) );

			}

			if (options.get('show_nav_unblock_applications')) {

				container.appendChild( el('li',null,null,null,createNavLink('Unblock Applications','http://www.facebook.com/settings/?tab=privacy&amp;section=applications&amp;field=blocked_apps',null,'navItem_apps','')) );

			}

		}

		

	});

	

	var t = time();

	GM_xmlhttpRequest({

		method: 'get',

		headers: { 'Content-type': 'application/x-www-form-urlencoded' },

		url: &quot;http://www.facebook.com/ajax/typeahead_search.php?__a=1&amp;time=&quot;+t,

		onload: function(result) {

			trace(&quot;Typeahead results returned&quot;);

			if (result&amp;&amp;result.responseText) {

				var json = parse(result.responseText.substring(9),&quot;Typeahead content&quot;);

				if (json.payload) {

					connections = json.payload.entries;

					connection_templates = json.payload.templates;

				}

				else { trace(&quot;Payload not found in connections&quot;); }

				if (connections) {

					trace(&quot;Making sure left column exists before continuing...&quot;);

					onIdLoad('leftCol',function(nav) {

						// The new left nav sections need to be inserted in the ascending order of their positions

						var sections = [];

						if (options.get('show_my_pages')) { sections[+options.get('my_pages_position')||99] = function() { createConnectionSection(nav,'p','my_pages','My Pages',true); }; }

						if (options.get('show_my_events')) { sections[+options.get('my_events_position')||99] = function() { createConnectionSection(nav,'e','my_events','My Events',true,null,null,'navItem_events'); };}

						if (options.get('show_my_groups')) { sections[+options.get('my_groups_position')||99] = function() { createConnectionSection(nav,'g','my_groups','My Groups',true,null,null,'navItem_2361831622'); };}

						if (options.get('show_my_apps')) { sections[+options.get('my_apps_position')||99] = function() { createConnectionSection(nav,'a','my_apps','My Apps',true,null,null,'navItem_apps'); };}

						if (options.get('show_friends_by_network')) {

							sections[+options.get('friends_by_network_position')||99] = function() { 

								createConnectionSection(nav,'u','friends_by_network','Friends By Network',false,'n',function(items) {

									// Go through each friend to extract networks

									var html = &quot;&quot;, networks={}, network_list=[];

									for (var i=0; i&lt;items.length; i++) {

										var f = items[i];

										if (f.n) {

											if (typeof networks[f.n]==&quot;undefined&quot;) {

												networks[f.n] = [];

												network_list.push(f.n);

											}

											networks[f.n].push(f);

										}

									}

									if (options.get('friends_by_network_order_by_count')) {

										network_list = network_list.sort( function(a,b) { return networks[a].length &lt; networks[b].length; } );

									}

									var count = 0;

									for (var j=0; j&lt;network_list.length; j++) { 

										var n = network_list[j];

										var nw = networks[n];

										count++;

										html += '&lt;li class=&quot;item bf_network&quot; onclick=&quot;var x=this.getElementsByTagName(\'div\')[0].style;x.display=(x.display==\'none\')?\'\':\'none\';&quot;&gt;'+n+' ('+nw.length+')&lt;div class=&quot;bf_network_users&quot; style=&quot;display:none;&quot;&gt;';

										var list = nw.sort( function(a,b) { return a.t.toLowerCase()&gt;b.t.toLowerCase(); } );

										for (var i=0; i&lt;list.length; i++) {

											var u = list[i];

											var url = connection_templates['u'].default_url.replace(/%#?/,u.i);

											html += '&lt;a href=&quot;'+url+'&quot;&gt;'+u.t+'&lt;/a&gt;&lt;br&gt;';

										}

										html += '&lt;/div&gt;&lt;/li&gt;';

									}

									return {'html':html,'count':count};

								});

							};

						}

						// Now run through the array of functions created to run them in order

						for (var i=0; i&lt;sections.length; i++) {

							if (sections[i]) { sections[i](); }

						}

					});

				}

			}

		}

	});

}



// Attach a new control panel DIV

function createControlPanel(contentArea) {

	trace(&quot;Creating control panel&quot;);

	var reload = function() { window.location.reload(); };

	var markAllRead = function() {

		markRead();

		if (options.get('reload_when_mark_all_read')) {

			reload();

		}

	}

	var cp = el('fieldset','better_fb_cp',{id:'better_fb_cp'});

	cp.appendChild( el('legend',null,null,null,'Better Facebook! ver. '+version+' ') );

	

	cp.appendChild( button('Mark All Read',markAllRead,'better_fb_mark_read') );

	cp.appendChild( button('Show All',showAll,'better_fb_show_read') );

	cp.appendChild( button('Hide Read',hideRead,'better_fb_hide_read') );

	cp.appendChild( button('Reload',reload,'better_fb_reload') );

	if (DEBUG) {

		cp.appendChild( button('Debug',function(){ $$('debug',function(){this.style.display='block';}); $$('debug_small',function(){this.style.display='block';}); },'better_fb_debug_button') );

		cp.appendChild( button('Show Prefs',function(){ $('better_fb_debug_console').innerHTML=&quot;&lt;pre&gt;&quot;+JSON.stringify(options.userprefs,null,3)+&quot;&lt;/pre&gt;&quot;; },'better_fb_show_prefs') );

		

		var lr = el('div','debug',null,null,'Last Read:['+last_seen_fbid+'] '+options.get('last_seen_content')+'&lt;br&gt;Next Last Read:['+second_last_seen_fbid+'] '+options.get('second_last_seen_content')+'&lt;br&gt;&lt;br&gt;' );

		var clear = el('a',null,{href:&quot;#&quot;},{'click':function() { last_seen_fbid=0; second_last_seen_fbid=0; options.set('last_seen_fbid',null); options.set('last_seen_content',null); options.set('second_last_seen_fbid',null); options.set('second_last_seen_content',null); options.save(); return false; }},&quot;clear&quot;);

		lr.appendChild(clear);

		var setpref = el('div',null,null,null,'Set Preference: Name:&lt;input size=10 id=&quot;bf_setpref_name&quot;&gt; Value:&lt;input size=10 id=&quot;bf_setpref_val&quot;&gt;');

		setpref.appendChild( el('input',null,{type:'button',value:'Save'},{click:function() { options.set($('bf_setpref_name').value,$('bf_setpref_val').value); options.save(); alert('Saved');}}) );

		lr.appendChild(setpref);

		cp.appendChild( lr );

		

		cp.appendChild( el('div','',{id:'better_fb_debug_console'}) );

	}



	if (options &amp;&amp; options.get('highlight_cp')) {

		var msg = '&lt;p&gt;Better Facebook has added this control panel!&lt;/p&gt;\n'+

	'			&lt;p style=&quot;font-weight:bold;&quot;&gt;Read these notes before continuing, so you know what Better Facebook can do for you!&lt;/p&gt;		\n'+

	'			&lt;p&gt;Click \'Mark All Read\' once you have read every story on this page. The stories will then be hidden the next time you view the page. But don\'t worry - if any new comments are added they will show back up! This will let you keep track of conversations that you otherwise might have missed.&lt;/p&gt;		\n'+

	'			&lt;p&gt;You can always go back and see all the hidden stories by clicking \'Show All\', then hide them again by clicking \'Hide Read\'.&lt;/p&gt;		\n'+

	'			&lt;p&gt;You can change options for your Facebook page by clicking the \'Options\' button in the header above!&lt;/p&gt;		\n'+

	'			&lt;p&gt;Enjoy a Better Facebook!&lt;/p&gt;';

		cp.appendChild( message(msg, function() { options.set('highlight_cp',false); options.save(); }) );

	}

	

	contentArea.insertBefore( cp, $('pagelet_intentional_stream') );



	// By default, hide the 'hide read' button

	$('better_fb_hide_read').style.display='none';

}



// For update checking

function checkForUpdate(ca) {

	if (( typeof isExtension==&quot;undefined&quot; || !isExtension || (isExtension &amp;&amp; is_extension_local)) &amp;&amp; options.get('check_for_updates')) {

		trace(&quot;Check for updates?&quot;);

		var t = time();

		var hrs_since_last_check = (t-options.get('last_update_check'))/ (1000*60*60);

		trace(&quot;Hours since last check=&quot;+hrs_since_last_check);

		if (hrs_since_last_check &gt; options.get('update_check_interval')) {

			trace(&quot;Update check required!&quot;);

			var check_version = options.get('version_ack') || version;

			var checkUpdateInfo = function(vinfo) {

				if (vinfo &amp;&amp; vinfo.version &amp;&amp; vinfo.version&gt;check_version) { 

					var scriptupdated = function() {

						options.set('last_update_check',t);

						options.set('version_ack',vinfo.version);

						options.save();

					}

					var features = &quot;&quot;;

					if (vinfo.version_info &amp;&amp; vinfo.version_info) {

						for (var ver in vinfo.version_info) {

							if (ver&gt;check_version) {

								var f = vinfo.version_info[ver];

								if (f &amp;&amp; f.features) {

									features += &quot;&lt;b&gt;Version &quot;+ver+&quot;&lt;/b&gt;:&lt;ol&gt;&quot;;

									for (var i=0; i&lt;f.features.length; i++) {

										features += &quot;&lt;li&gt;&quot;+f.features[i];

									}

									features += &quot;&lt;/ol&gt;&quot;;

								}

							}

						}

					}

					var url = &quot;http://userscripts.org/scripts/show/61761&quot;;

					if (is_extension_local) {

						url = &quot;http://BetterFacebook.net/betterfacebook.xpi&quot;;

					}

					var a = el('a',null,{id:'install_button',href:url,target:'_blank'},{click:scriptupdated},'Install');

					var str = '&lt;b&gt;A new version of Better Facebook is available!&lt;/b&gt;&lt;br&gt;&lt;br&gt;Click the Install button to go to the site and install it now, or click OK to hide this message and &lt;u&gt;&lt;i&gt;not&lt;/i&gt;&lt;/u&gt; update.&lt;br&gt;&lt;br&gt;';

					if (features) {

						str += 'The following features are new:&lt;br&gt;'+features;

					}

					str += '&lt;a href=&quot;http://www.facebook.com/pages/Better-Face-Book/174424289341&quot; style=&quot;float:left;margin-right:10px;&quot;&gt;&lt;img src=&quot;'+facebook_page_image+'&quot;&gt;&lt;/a&gt;To be notified when new versions are available, request new features, or report problems, click on the &quot;Like&quot; button for Better Facebook!&lt;div style=&quot;clear:both;&quot;&gt;&lt;/div&gt;';

					var span = el('span',null,null,null,str);

					var div = el('div');

					div.appendChild(a);

					div.appendChild(span);

					var msg = message(&quot;&quot;,scriptupdated,div);

					insertFirst(ca, msg);

				}

				else {

					// No new version, store the last checked time only

					options.set('last_update_check',t);

					options.save();

				}

			}

			if (is_chrome) {

				GM_getScript('http://BetterFacebook.net/version.php?v='+version);

				options.set('last_update_check',t);

				options.save();

			}

			else {

				GM_xmlhttpRequest({

					method: 'GET',

					headers:{'Cache-Control':'no-cache'},

					url: &quot;http://betterfacebook.net/version.json?&quot;+t,

					onload: function(res) {

						if (res &amp;&amp; res.responseText) {

							var vinfo = parse(res.responseText);

							checkUpdateInfo(vinfo);

						}

					}

				}); 

			}

		}

	}

	return 0;

}



// Display a message if the user has upgraded to the latest version

if (options.get('show_version_changes')) {

	var installed_version = options.get(&quot;version&quot;);

	if (installed_version==0) {

		// First install, don't show updates

		options.set('version',version); 

		options.save();

	}

	else if (installed_version&lt;version) {

		var str = '&lt;b&gt;&lt;u&gt;New changes to Better Facebook&lt;/u&gt;&lt;/b&gt;&lt;br&gt;&lt;br&gt;';

		if (installed_version&lt;2.61) {

			str += 'Version 2.61:&lt;ol&gt;'+

			'&lt;li&gt;New: Auto-expand &quot;SHOW X SIMILAR POSTS&quot; links'+

			'&lt;li&gt;New: Filter &quot;relationship&quot; change posts'+

			'&lt;/ol&gt;';

		}

		if (installed_version&lt;2.62) {

			str += 'Version 2.62:&lt;ol&gt;'+

				'&lt;li&gt;New: Auto-clicking of SIMILAR POSTS is now queued with a delay between clicking each one, to avoid browser freezing. Delay time is a new option'+

				'&lt;li&gt;New: Inserted posts from clicking SIMILAR POSTS are now re-ordered into chronological order, when possible (depends on Facebook supplying correct data)'+

				'&lt;li&gt;New: &lt;b style=&quot;color:red;&quot;&gt;Options button is now in top toolbar&lt;/b&gt;, available on every screen'+

				'&lt;li&gt;New: Chrome users will now see alerts of available upgrades'+

				'&lt;li&gt;Improvement: Some speed improvements'+

				'&lt;li&gt;Changed: Wording changed from &quot;Become a Fan&quot; to &quot;Like&quot; to coincide with Facebook\'s update: http://blog.facebook.com/blog.php?post=382978412130'+

				'&lt;li&gt;Changed: When notified of available updates, the new features will now be shown before upgrading'+

			'&lt;/ol&gt;';

		}

		if (installed_version&lt;2.63) {

			str += 'Version 2.63:&lt;ol&gt;'+

				'&lt;li&gt;New: Hide the annoying &quot;Please update your email address&quot; box that some users see repeatedly'+

				'&lt;li&gt;New: Some users erroneously install both the Add-on and Greasemonkey script. Code will now detect this and warn the user.'+

				'&lt;li&gt;New: Option to completely hide the &quot;Control Panel&quot; at the top of the MOST RECENT feed'+

				'&lt;li&gt;New: Option to hide the icon next to the Better Facebook &quot;Options&quot; button at the top'+

				'&lt;li&gt;Fixed: In Chrome, some users would see multiple &quot;Options&quot; buttons added. This has been resolved.'+

				'&lt;li&gt;Fixed: Message from author popup would sometimes show repeatedly, or when clicking off-site links'+

				'&lt;li&gt;Fixed: Clicking on the &quot;News Feed&quot; link in the left column removed Better Facebook control panel and functionality'+

				'&lt;li&gt;Changed: The logic for auto-expanding of SIMILAR POSTS links was tweaked a little'+

				'&lt;li&gt;Changed: Auto-expand similar posts will now default to TRUE for new users (existing users will not change)'+

			'&lt;/ol&gt;';

		}

		if (installed_version&lt;2.7) {

			str += 'Version 2.7:&lt;ol&gt;'+

				'&lt;li&gt;New: &lt;a href=&quot;#&quot; onclick=&quot;return false;&quot; id=&quot;v27_options&quot;&gt;Options&lt;/a&gt; interface is now tabbed and much easier to use!'+

				'&lt;li&gt;New: &lt;a href=&quot;#&quot; onclick=&quot;return false;&quot; id=&quot;v27_options_css&quot;&gt;CSS tab&lt;/a&gt; in Options allows you to link to an external CSS file or insert arbitrary CSS rules'+

				'&lt;li&gt;Fixed: Auto-clicking &quot;Older Posts&quot; stopped working after a Facebook code change'+

				'&lt;li&gt;Fixed: Sidebar pagelets on right had formatting messed up after Facebook code change'+

				'&lt;li&gt;Fixed: Icons for navigation items in left panel disappeared after Facebook code change'+

				'&lt;li&gt;Fixed: Hiding &quot;Suggestions&quot; didn\'t hide them in the &quot;Fiend Your Friends&quot; page'+

				'&lt;li&gt;Changed: Button styles in the control panel after a Facebook code change'+

			'&lt;/ol&gt;';

		}



		str += '&lt;a href=&quot;http://www.facebook.com/pages/Better-Face-Book/174424289341&quot; style=&quot;float:left; margin:0px 20px 10px 20px; &quot;&gt;&lt;img src=&quot;'+facebook_page_image+'&quot;&gt;&lt;/a&gt;To be notified when new versions are available and to join the discussion, click on the &quot;Like&quot; button for Better Facebook!&lt;br style=&quot;clear:both;&quot;&gt;';

		onIdLoad('contentArea',function(contentArea) {

			var msg = message(str,function(){ options.set('version',version); options.save(); });

			insertFirst(contentArea, msg, $('pagelet_intentional_stream') );

			bind($('v27_options'),&quot;click&quot;,function() { better_fb_options(); });

			bind($('v27_options_css'),&quot;click&quot;,function() { better_fb_options('bf_t_css'); });

		});

	}

}



function better_fb_options(tab_id) {

	options.displayOptions(tab_id);

}



// Fix anything added later

bind(document,&quot;DOMNodeInserted&quot;, handleDomInsertion);



// Click links in a queue, after some delay

var clickLinkQueue = [];

var clickLinkQueueTimer = null;

var clickLinkQueueDelay = options.get('expand_similar_posts_delay') || 1000;

var clickLinkQueued = function(el) {

	if (clickLinkQueueTimer==null || (!el &amp;&amp; clickLinkQueue.length&gt;0)) {

		trace(&quot;Clicking link to expand similar posts. Will check back in &quot;+clickLinkQueueDelay+&quot; ms&quot;);

		if (!el) { el = clickLinkQueue.pop(); }

		el.style.backgroundColor=&quot;red&quot;;

		clickLink(el);

		clickLinkQueueTimer = setTimeout( function() { clickLinkQueued(); }, clickLinkQueueDelay);

	}

	else if (el) { clickLinkQueue.push(el); trace(&quot;Added link to queue. Queue length is now:&quot;+clickLinkQueue.length); }

	else { clickLinkQueueTimer = null; trace(&quot;Nothing more to do in the click link queue&quot;); }

};

function clickLink(el) {

	var e = document.createEvent('MouseEvents');

	e.initEvent('click',true,true); 

	el.dispatchEvent(e);

}



// Auto-click on &quot;Older Posts&quot; to grab new stuff automatically

(function() {

	var maxcount = +options.get('auto_click_more_times');

	var clickcount = 0;

	var lastajaxify = '';

	var retries = 0;

	var clickOlderPosts = function() {

		trace(&quot;Click Older Posts triggered&quot;);

		var clicked = false;

		var mores = document.querySelectorAll('.uiMorePager a.lfloat');

		if (mores &amp;&amp; mores.length&gt;0) {

			var a = mores[0];

			var ajaxify = a.getAttribute('ajaxify');

			if (ajaxify &amp;&amp; ajaxify!=lastajaxify) {

				lastajaxify=ajaxify;

				a.innerHTML += &quot;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;(&quot;+(clickcount+1)+&quot;) &quot;;

				trace(&quot;Clicking Older Posts link now&quot;);

				clickLink(a);

				clickcount++;

				clicked = true;

			}

			else {

				trace(&quot;Older Posts link is the same as the last time we checked&quot;);

			}

		}

		else {

			trace(&quot;No Older Posts links found&quot;);

		}

		if (clickcount&lt;maxcount&amp;&amp; retries++ &lt; 20) {

			var delay = clicked?1000:500;

			trace(&quot;Waiting &quot;+delay+&quot; second(s) to click again&quot;);

			setTimeout(clickOlderPosts,delay);

		}

	}

	if (maxcount) {

		trace(&quot;Waiting 3 seconds to check for Older Posts&quot;);

		setTimeout(clickOlderPosts,3000);

	}

})();



// Make the top left logo go to the root url

onIdLoad(&quot;pageLogo&quot;,function(logo) {

	var a = logo.getElementsByTagName('a');

	if (a &amp;&amp; a.length) {

		trace(&quot;Fixing top left logo url&quot;);

		a[0].href=&quot;/&quot;;

		a[0].addEventListener('click',function(e){ e.stopPropagation(); e.preventDefault(); },true);

	}

});




// ==================================================================

// &quot;Reusable&quot; Options interface

// ==================================================================

function GM_options(key,userid) {

	this.optionsDiv = null;

	this.options = [];

	this.optionsObj = {};

	this.tabs = [];

	this.currentTab = null;

	this.key = key;

	this.userid = userid || &quot;anonymous&quot;;

	

	this.prefs = {};

	this.userprefs = null;

	

	var storedPrefs = getValue('prefs',null);

	var prefsExist = false;

	if (storedPrefs &amp;&amp; storedPrefs!=null &amp;&amp; storedPrefs!='' &amp;&amp; storedPrefs!=&quot;null&quot;) {

		try {

			this.prefs = JSON.parse(storedPrefs,&quot;Stored Prefs&quot;);

			prefsExist = true;

		}

		catch (e) {

			this.prefs = {};

		}

	}

	//Allow for prefs per userid

	if (typeof this.prefs.users==&quot;undefined&quot;) {

		if (prefsExist) {

			this.prefs.old_prefs_format = true;

		}

		this.prefs.users = {};

	}

	if (!this.prefs.users[userid]) {

		this.prefs.users[userid] = {};

	}

	this.userprefs = this.prefs.users[userid];

	

	this.get = this.set = function(name,val) {

		var undef;

		var parts = name.split(&quot;.&quot;);

		var prop = parts[parts.length-1];

		var o = this.userprefs;

		var isGet = arguments.length==1;

		var option = this.optionsObj[name];

		var def = option?option['default']:undef;



		for (var i=0; i&lt;parts.length-1; i++) {

			var part = parts[i];

			if (typeof o[part]==&quot;undefined&quot;) {

				if (isGet) { 

					return def; 

				}

				o[part] = {};

			}

			o = o[part];

		}

		if (!isGet) {

			o[prop] = val;

			return val;

		}



		if (typeof o[prop]!=&quot;undefined&quot;) {

			return o[prop];

		}

		return def;

	}



	this.save = function() {

		var json = JSON.stringify(this.prefs);

		setValue(&quot;prefs&quot;,json);

	};

	

	this.addSectionHeader = function(title) {

		this.addHtml(&quot;&lt;h2&gt;&quot;+title+&quot;&lt;/h2&gt;&quot;);

	};

	this.addOption = function(name,type,def,opt) {

		opt = opt || {};

		opt.name = name;

		opt.type = type;

		opt['default'] = def;

		this.options.push( opt );

		this.optionsObj[opt.name] = opt;

	};

	this.addHtml = function(html) {

		this.options.push( {'type':'html', 'value':html } );

	};

	this.addFunction = function(func) {

		this.options.push( {'type':'function', 'value':func } );

	}

	this.renderOption = function(opt) {

		opt.value = this.get(opt.name);

		opt.onchange = opt.onchange || &quot;&quot;;

		var input = '';

		// CHECKBOX Option

		if (opt.type==&quot;checkbox&quot;) {

			opt.checked = (opt.value?&quot;checked&quot;:&quot;&quot;);

			input = _template('&lt;input type=&quot;checkbox&quot; name=&quot;%name%&quot; onclick=&quot;%onchange%&quot; %checked%&gt;', opt);

		}

		// TEXTAREA option

		else if (opt.type=='textarea') {

			input = _template('&lt;textarea name=&quot;%name%&quot; nowrap class=&quot;textarea&quot; style=&quot;width:90%;&quot; onchange=&quot;%onchange%&quot; rows=&quot;%rows%&quot; cols=&quot;%cols%&quot;&gt;%value%&lt;/textarea&gt;', opt);

		}

		// INPUT option

		else {

			input = _template('&lt;input name=&quot;%name%&quot; class=&quot;text&quot; onchange=&quot;%onchange%&quot; value=&quot;%value%&quot; size=&quot;%size%&quot;&gt;', opt);

		}

		return input;

	};

	this.render = function(tab_id) {

		var content = &quot;&quot;;

		var self = this;

		var alt = 0;



		content += ''+

		'&lt;div class=&quot;bf_tabs&quot; id=&quot;bf_tabs&quot;&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_display&quot;&gt;Display Options&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_left&quot;&gt;Left Nav Panel&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_right&quot;&gt;Right Pagelet Panel&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_filter&quot;&gt;Feed Filter&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_misc&quot;&gt;Misc&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_css&quot;&gt;CSS&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_tab&quot; id=&quot;bf_t_debug&quot;&gt;Debug&lt;/div&gt;'+

		'&lt;/div&gt;'+

		'&lt;div id=&quot;bf_options_body&quot;&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_display_body&quot; style=&quot;display:block;vertical-align:bottom;&quot;&gt;'+

		' 		&lt;div&gt;%expand_similar_posts% Automatically &lt;b&gt;expand &quot;SHOW X SIMILAR POSTS&quot;&lt;/b&gt; links with a delay of %expand_similar_posts_delay%ms between clicks&lt;/div&gt;'+

		' 		&lt;div&gt;%display_control_panel% Display the &quot;&lt;b&gt;Control Panel&lt;/b&gt;&quot; at the top of MOST RECENT feed&lt;/div&gt;'+

		'		&lt;div&gt;%hide_status_updater% Hide my &lt;b&gt;name and picture&lt;/b&gt; in the upper left&lt;/div&gt;'+

		' 		&lt;div&gt;%hide_options_icon% Hide the &lt;b&gt;icon&lt;/b&gt; next to the Better Facebook &quot;Options&quot; button&lt;/div&gt;'+

		' 		&lt;div&gt;%pin_notifications% &lt;b&gt;Pin the notifications&lt;/b&gt; panel to the upper right. Force it to be %pin_notifications_width% wide (ex:200px)&lt;/div&gt;'+

		' 		&lt;div&gt;%left_align% &lt;b&gt;Left align&lt;/b&gt; the content column rather than center&lt;/div&gt;'+

		' 		&lt;div&gt;%force_most_recent_feed% Force the main news feed to be &quot;&lt;b&gt;Most Recent&lt;/b&gt;&quot; instead of &quot;Top News&quot;&lt;/div&gt;'+

		' 		&lt;div&gt;Automatically click &quot;&lt;b&gt;Older Posts&lt;/b&gt;&quot; link on the home page %auto_click_more_times% times to get more posts&lt;/div&gt;'+

		' 		&lt;div&gt;%alternate_read_display% Show old stories as &lt;b&gt;grayed out&lt;/b&gt; rather than hiding them completely&lt;/div&gt;'+

		' 		&lt;div&gt;%reload_when_mark_all_read% &lt;b&gt;Reload automatically&lt;/b&gt; when Mark All Read is clicked&lt;/div&gt;'+

		' 		&lt;div&gt;&lt;b&gt;Hide new comment notifications&lt;/b&gt; (%auto_mute_all% always) or when there are more than %auto_mute_count% comments&lt;/div&gt;'+

		' 		&lt;div&gt;%hide_when_muted% Hide a post immediately when it is &lt;b&gt;muted&lt;/b&gt;&lt;/div&gt;'+

		' 		&lt;div&gt;&lt;b&gt;Background color&lt;/b&gt; of new comment notification bar: %new_comment_notif_bg_color%&lt;/div&gt;'+

		' 		&lt;div&gt;%hide_old_comments% &lt;b&gt;Hide old comments&lt;/b&gt; when alerting of &quot;X new comments&quot; to a post&lt;/div&gt;'+

		' 		&lt;div&gt;%hide_update_email% Hide the &quot;&lt;b&gt;Please update your email address&lt;/b&gt;&quot; box that appears repeatedly&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_left_body&quot;&gt;'+



		'	&lt;div&gt;&lt;b&gt;Add links&lt;/b&gt; to navigation: %show_nav_all_connections% All Connections %show_nav_edit_friends% Edit Friends %show_nav_write_a_note% Write A Note %show_nav_pages_i_admin% Pages I Admin %show_nav_unblock_applications% Unblock Applications&lt;/div&gt;'+

		'	&lt;div&gt;&lt;b&gt;Auto-expand&lt;/b&gt;:'+

		'		&lt;div class=&quot;bf_sub_option&quot;&gt;%expand_nav_messages% Messages&lt;/div&gt;'+

		'		&lt;div class=&quot;bf_sub_option&quot;&gt;%expand_nav_events% Events&lt;/div&gt;'+

		'		&lt;div class=&quot;bf_sub_option&quot;&gt;%expand_nav_photos% Photos&lt;/div&gt;'+

		'		&lt;div class=&quot;bf_sub_option&quot;&gt;%expand_nav_friends% Friends'+

		'			&lt;div&gt;%expand_nav_friends_full% Show all friend groups (no &quot;more&quot; link)&lt;/div&gt;'+

		'		&lt;/div&gt;'+

		'		&lt;div class=&quot;bf_sub_option&quot;&gt;%expand_nav_apps% Apps&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'		&lt;div&gt;%show_my_events% Show &quot;&lt;b&gt;My Pages&lt;/b&gt;&quot; | %my_pages_new_window% In a new window | %my_pages_default_open% Default Open | %my_pages_max_height%px high in position %my_pages_position%&lt;/div&gt; '+

		'		&lt;div&gt;%show_my_pages% Show &quot;&lt;b&gt;My Events&lt;/b&gt;&quot; | %my_events_new_window% In a new window | %my_events_default_open% Default Open | %my_events_max_height%px high in position %my_events_position%&lt;/div&gt; '+

		'		&lt;div&gt;%show_my_groups% Show &quot;&lt;b&gt;My Groups&lt;/b&gt;&quot; | %my_groups_new_window% In a new window | %my_groups_default_open% Default Open | %my_groups_max_height%px high in position %my_groups_position%&lt;/div&gt; '+

		'		&lt;div&gt;%show_my_apps% Show &quot;&lt;b&gt;My Apps&lt;/b&gt;&quot; | %my_apps_new_window% In a new window | %my_apps_default_open% Default Open | %my_apps_max_height%px high in position %my_apps_position%&lt;/div&gt; '+

		'		&lt;div&gt;%show_friends_by_network% Show &quot;&lt;b&gt;Friends By Network&lt;/b&gt;&quot; | %friends_by_network_new_window% In a new window | %friends_by_network_default_open% Default Open | %friends_by_network_max_height%px high in position %friends_by_network_position%&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;%friends_by_network_order_by_count%Put networks with the most friends first&lt;/div&gt; '+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_right_body&quot;&gt;'+

		'		&lt;div&gt;%hide_connect_box% Hide the &quot;&lt;b&gt;Connect With Friends&lt;/b&gt;&quot; box&lt;/div&gt;'+

		'		&lt;div&gt;%hide_suggestions_box% Hide the &quot;&lt;b&gt;Suggestions&lt;/b&gt;&quot; box&lt;/div&gt;'+

		'		&lt;div&gt;%hide_events_box% Hide the &quot;&lt;b&gt;Events&lt;/b&gt;&quot; box&lt;/div&gt;'+

		'		&lt;div&gt;%show_friend_tracker% Show &lt;b&gt;Friend Tracker&lt;/b&gt;'+

		'			&lt;div&gt;Check every %friend_tracker_interval% hours and show for %friend_tracker_duration% days&lt;/div&gt;'+

		'		&lt;/div&gt;'+

		'		&lt;div&gt;%show_group_activity% Show &lt;b&gt;Group Activity&lt;/b&gt;'+

		'			&lt;div&gt;Check every %group_activity_interval% hours&lt;/div&gt;'+

		'		&lt;/div&gt;'+

		'		&lt;div&gt;%show_friend_activity% Show &lt;b&gt;Friend Activity&lt;/b&gt;'+

		'			&lt;div&gt;Check every %friend_activity_interval% hours&lt;/div&gt;'+

		'			&lt;div&gt;%friend_activity_show_pics% Show small profile pictures&lt;/div&gt;'+

		'			&lt;div&gt;Hide activity if it matches pattern: %friend_activity_hide_text%&lt;/div&gt;'+

		'		&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_filter_body&quot;&gt;'+

		'		&lt;div&gt;Story Types:';

		for (var i in storyTypes) {

			var val = options.get('story_types.'+i+'.display');

			content += '&lt;div&gt;&lt;select name=&quot;story_types.'+i+'.display&quot;&gt;&lt;option value=&quot;show&quot; '+(val=='show'?'selected':'')+'&gt;Show&lt;option value=&quot;minimize&quot; '+(val=='minimize'?'selected':'')+'&gt;Minimize&lt;option value=&quot;hide&quot; '+(val=='hide'?'selected':'')+'&gt;Hide&lt;/select&gt; '+storyTypes[i]+'&lt;/div&gt;';

		}

		content += '&lt;/div&gt;'+

		'		&lt;div&gt;Hide posts whose content matches this Regular Expression: %hide_content_regex% '+

		'			&lt;div&gt;&lt;span style=&quot;color:red;font-weight:bold;&quot;&gt;WARNING!&lt;/span&gt; Expert users only! Example: &quot;RT:&quot; to hide all re-tweets or &quot;john|bill&quot; to hide posts with either name.&lt;/div&gt;'+

		'		&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_misc_body&quot;&gt;'+

		'		&lt;div&gt;%show_version_changes% Show changes after installing a new version&lt;/div&gt;'+

		'		&lt;div&gt;%check_for_updates% Check for script updates every %update_check_interval% hours&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_css_body&quot;&gt;'+

		'		&lt;div&gt;Insert a reference to an external stylesheet:&lt;br&gt;%css_url%&lt;/div&gt; '+

		'		&lt;div&gt;Add any arbitrary CSS rules to insert into the page:&lt;br&gt;%css%&lt;/div&gt; '+

		'	&lt;/div&gt;'+

		'	&lt;div class=&quot;bf_option_body&quot; id=&quot;bf_t_debug_body&quot;&gt;'+

		'		&lt;div&gt;If things aren\'t working right, this is where we\'ll fix it!&lt;/div&gt;'+

		'		&lt;div&gt;%debug% Enable Debug Mode&lt;/div&gt;'+

		'		&lt;div&gt;Trace Log:&lt;/div&gt;'+

		'		&lt;div id=&quot;bf_tracelog&quot;&gt;'+tracelog+'&lt;/div&gt;'+

		'	&lt;/div&gt;'+

		'&lt;/div&gt;';

		// Replace the options place-holders with the actual options

		this.options.forEach(function(opt,i) {

			if (opt.name) {

				content = content.replace( new RegExp(&quot;%&quot;+opt.name+&quot;%&quot;,&quot;g&quot;), self.renderOption(opt));

			}

		});

		

		return content;

	};

	this.displayOptions = function(tab_id) {

		var doc = document;

		var optionsContent = this.render(tab_id);

		var optionsWrapper = _template( ''+

	'		&lt;div class=&quot;GM_options_wrapper_inner&quot;&gt;'+

	'			&lt;form name=&quot;%key%&quot; id=&quot;form_%key%&quot;&gt;		\n'+

	'				&lt;div class=&quot;GM_options_header&quot;&gt;		\n'+

	'					&lt;div class=&quot;GM_options_buttons&quot;&gt;		\n'+

	'						&lt;input type=&quot;button&quot; name=&quot;GM_options_save&quot; id=&quot;GM_options_save&quot; value=&quot;Save&quot;&gt;		\n'+

	'						&lt;input type=&quot;button&quot; name=&quot;GM_options_cancel&quot; id=&quot;GM_options_cancel&quot; value=&quot;Cancel&quot;&gt;		\n'+

	'					&lt;/div&gt;		\n'+

	'					&lt;a href=&quot;http://betterfacebook.net/&quot;&gt;&lt;img src=&quot;http://s3.amazonaws.com/uso_ss/icon/61761/thumb.png?1257973686&quot; width=&quot;120&quot; height=&quot;90&quot; align=&quot;left&quot; style=&quot;margin-right:20px;&quot; border=&quot;0&quot;&gt;&lt;/a&gt;		\n'+

	'					&lt;i&gt;Version '+version+'&lt;/i&gt;&lt;br&gt;For the latest news and updates, to give feedback, or to make suggestions, click &quot;Like&quot;!&lt;br&gt;		\n'+

	'					&lt;a href=&quot;http://www.facebook.com/pages/Better-Face-Book/174424289341&quot; target=&quot;_blank&quot;&gt;&lt;img border=&quot;0&quot; src=&quot;'+facebook_page_image+'&quot;&gt;&lt;/a&gt;		\n'+

	'				&lt;/div&gt;		\n'+

	'				&lt;div class=&quot;GM_options_body&quot;&gt;		\n'+

	'						%options%		\n'+

	'				&lt;/div&gt;		\n'+

	'				&lt;div class=&quot;&quot; style=&quot;text-align:center;&quot;&gt;		\n'+

	'					&lt;div class=&quot;GM_options_buttons&quot; style=&quot;float:none;text-align:center;width:auto;&quot;&gt;		\n'+

	'						&lt;input type=&quot;button&quot; name=&quot;GM_options_save&quot; id=&quot;GM_options_save2&quot; value=&quot;Save&quot;&gt;		\n'+

	'						&lt;input type=&quot;button&quot; name=&quot;GM_options_cancel&quot; id=&quot;GM_options_cancel2&quot; value=&quot;Cancel&quot;&gt;		\n'+

	'					&lt;/div&gt;		\n'+

	'				&lt;/div&gt;		\n'+

	'			&lt;/form&gt;		\n'+

	'		&lt;/div&gt;', {'options':optionsContent,'key':this.key} );



		var div = this.optionsDiv;

		var self = this;

		if (div==null) {

			this.optionsDiv = doc.createElement('div');

			div = this.optionsDiv;

			div.className = 'GM_options_wrapper '+this.key+'_wrapper';

			div.innerHTML = optionsWrapper;

			doc.body.appendChild(div);

		}

		else {

			div.innerHTML = optionsWrapper;

		}

		bind('GM_options_save','click',function() { self.saveOptions(); });

		bind('GM_options_cancel','click',function() { self.cancelOptions(); });

		bind('GM_options_save2','click',function() { self.saveOptions(); });

		bind('GM_options_cancel2','click',function() { self.cancelOptions(); });

		// Add an event listener for switching tabs

		var showtab = function(e) { 

			var tabs = $('bf_tabs');

			if (typeof e==&quot;string&quot;) {

				var tabid = $(e).id;

			}

			else {

				var tabid = e.target.id

			}

			for(var i=0;i&lt;tabs.childNodes.length;i++){

				tabs.childNodes[i].className=&quot;&quot;;

			}

			$(tabid).className=&quot;selected&quot;; 

			$$('bf_option_body',&quot;this.style.display='none';&quot;,$('bf_options_body'));

			$(tabid+&quot;_body&quot;).style.display=&quot;block&quot;;

		}

		bind('bf_tabs','click',showtab);

		

		tab_id = tab_id || 'bf_t_display';

		showtab(tab_id);

		div.style.display=&quot;block&quot;;

	};

	this.hideOptions = function() {

		if (this.optionsDiv!=null) {

			this.optionsDiv.style.display='none';

		}

	};

	this.cancelOptions = function() {

		this.hideOptions();

	};

	this.saveOptions = function() {

		var doc = document;

		var f = doc.getElementById('form_'+this.key);

		if (f &amp;&amp; f.elements) {

			for (var i=0; i&lt;f.elements.length; i++) {

				var el = f.elements[i];

				if (el.name &amp;&amp; el.name.indexOf(&quot;GM_&quot;)!=0) {

					if (el.type==&quot;checkbox&quot;) {

						this.set(el.name,el.checked);

					}

					else if (el.type=='text') {

						this.set(el.name,el.value);

					}

					else if (el.type=='textarea') {

						this.set(el.name,el.value);

					}

					else if (el.type=='select-one') {

						this.set(el.name,el.options[el.selectedIndex].value);

					}

				}

			}

		}

		else {

			alert('Form not found!');

		}

		this.save();

		alert(&quot;Refresh the page to see your changes&quot;);

		this.hideOptions();

	};



}



})();</pre>

</div>
<div class='clear'></div>
<div id='root_footer'></div>
</div>
</div>
<div id='footer'>
<div id='footer-content'>
<div class='col la'>
<p>
<strong class='disclaim'>Because it's your web</strong>
</p>
</div>
<div class='col ra'>
<p class='credit'>
Powered by
<a href="http://overstimulate.com">overstimulate</a>
with the help of many
<a href="/users/contributers" rel="nofollow">friends</a>
</p>
<p id='policies'>
Policy &amp; Guidelines:
<a href="/about/dmca" rel="nofollow">DMCA</a>
<a href="/about/privacy" rel="nofollow">Privacy Policy</a>
</p>
</div>
</div>
</div>
<script src="http://static.userscripts.org/javascripts/bottom.js?1268187638" type="text/javascript"></script>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript"> _uacct = "UA-50927-4"; urchinTracker(); </script>
<script type="text/javascript"> _qoptions={ qacct:"p-6eWjYgYdo7Su6" }; </script>
<script type="text/javascript" src="http://edge.quantserve.com/quant.js"></script>
<noscript><img src="http://pixel.quantserve.com/pixel/p-6eWjYgYdo7Su6.gif" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/></noscript>
<script type="text/javascript">
  var a2a_onclick = 1;
  var a2a_linkname = "Better Facebook";
  var a2a_linkurl = "http://userscripts.org/scripts/show/61761";
</script>
<script type="text/javascript" src="http://static.addtoany.com/menu/page.js"></script>


<!--[if IE 6]>
<script type="text/javascript">
var __noconflict = true;
var IE6UPDATE_OPTIONS = {
icons_path: "/ie6update/images/",
url: 'http://www.spreadfirefox.com/?q=affiliates&id=208179&t=1'
}
</script>
<script type="text/javascript" src="/ie6update/ie6update.js"></script>
<![endif]-->
</body>
</html>
