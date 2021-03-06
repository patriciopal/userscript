// Last.fm Reply Tracker - All Users
// version 0.1
// 2006-07-14
// Copyright (c) 2006, staticsage
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Last.fm Reply Tracker - All Users", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Last.fm Reply Tracker - All Users
// @description   Adds reply tracker link to all users page
// @include       http*://*.last.fm/*
// ==/UserScript==

var aboutme, insert, x, y;
aboutme = document.getElementById('c_aboutMe');
if (aboutme) {
    insert = document.getElementById('c_aboutMe').innerHTML;
    y = insert.replace("\(\<a href\=\"\/user\/","\<br\>\(\<a href\=\"\/user\/")
    x = y.replace("\/grapevine\/\"\>view history\<\/a\>\)","\/grapevine\/\"\>view history\<\/a\>\) \| \(\<a href\=\"http\:\/\/beta\.last\.fm\/dashboard\/replytracker\/\"\>view tracker\<\/a\>\)");
    document.getElementById('c_aboutMe').innerHTML = x;
}
