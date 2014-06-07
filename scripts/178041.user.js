// ==UserScript==
// @name        iCloud Mod
// @namespace   https://www.icloud.com
// @description This is a icloud mod. 
// @include     data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAQACAIAAAAP+8yGAAACoklEQVR4Xu3dwQ0CMQxEUTtKvbRCC3RqjtwR3g3WSwP/MDOObaIlH89XdJ4VzQcAACBiZzcgMvs1AAAAAFCu3WiR3YCYcKMBACh2AKopgFJBA7Xoo4Fip1TQAEAtkmQASXZlalsAJLk/aC59AICdSQNJ7ge4DwRN0ORAbypociAHgsamliHWmlwkB7oKnZ0caH7lQA40v3LApmqRHPiBAsBCSvsOYCHFpuZkfZEcsCmbsqn2/XSbchGAHLApm3q9D6Cz07YAaB19oZWLaCAHbHoiwBf52BRADtiUTb1KAJAD384B8Gkbzx4APOyWAwAjlKCx6eQky4GgyYGgCZocAAiapSCAoLkPJBnA03QASZZkGgAoFVpHczKAWmQIVIsAAOxNARQ7AAB9kUEcQLn+/gCopgAAbjQ3Gg1cOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANV8aAAAAADwi7Pr/5+DVt2tAQAAgGK3I6oZUANEBgDQtigVACFoYQBhUwBBEzQAORA0NmVTOWBTADYlMptyEQCbEhnAOzsALjpPA88e6rJ3FUTmIi7Sm3IRF3ERkS1miaxUEFmpILJSURN6UyIT2QhlALHxIjKRiUxk+yKTPpGJbNInMpEN4sMARAawDBG06SIL2goi21UIGpFpcJlNjbFENuEQmQY0MGUaQEyZRBY0QRM0U6YpkwZEFjTrHFMmDTS/RCayKdOUacoUNH+4I2hENmX2AIhMZGMskWlgjCUyke2LNF5EJjINiExkGy8bL8uQCSIbxIlspcZFJn0iE1mpsEogsjGWi7iIi4jMRVzERfamAJaC52sAwEUANl5sCsCmXGRG89e6bEoDOWBTADmQAwBBk4MRAABJFjQAAIBqPvdrAPAGv7GBbaSCtb0AAAAASUVORK5CYII=*
// @version     1.0
// ==/UserScript==
// Initiate custom CSS function


function GM_addStyle(css) {
    var parent, style, textNode;
    parent = document.getElementsByTagName("head")[0];
    if (!parent) {
        parent = document.documentElement;
    }
    style = document.createElement("style");
    style.type = "text/css";
    textNode = document.createTextNode(css);
    style.appendChild(textNode);
    parent.appendChild(style);
    }

// Custom CSS interface styling
GM_addStyle("\
.overlayBg { background:#000000 url('pic.twitter.com/gqOUrdtVS7') repeat center top ; }"
);