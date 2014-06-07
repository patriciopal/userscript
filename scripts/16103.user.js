// ==UserScript==
// @name          Salesforce - LinkedIn Mashup
// @namespace     http://www.japaninyourpalm.com
// @description   Adds a LinkedIn icon & link next to each Lead, Account, Contact and Opportunity in Salesforce.com
// @include       https://*.salesforce.com/00Q*
// @include       https://*.salesforce.com/001*
// @include       https://*.salesforce.com/003*
// @include       https://*.salesforce.com/006*

// Written by: Al N
// December 2007
// Dec 31, 2007 - updated the includes - removed the trailing /

// LinkedIn logo Data URI
var imageLinkedInElem = document.createElement('img');
imageLinkedInElem.setAttribute('src', "data:image/jpeg,%FF%D8%FF%E0%00%10JFIF%00%01%01%00%00%01%00%01%00%00%FF%DB%00C%00%06%04%05%06%05%04%06%06%05%06%07%07%06%08%0A%10%0A%0A%09%09%0A%14%0E%0F%0C%10%17%14%18%18%17%14%16%16%1A%1D%25%1F%1A%1B%23%1C%16%16%20%2C%20%23%26')*)%19%1F-0-(0%25()(%FF%DB%00C%01%07%07%07%0A%08%0A%13%0A%0A%13(%1A%16%1A((((((((((((((((((((((((((((((((((((((((((((((((((%FF%C0%00%11%08%00%10%00%10%03%01%22%00%02%11%01%03%11%01%FF%C4%00%1F%00%00%01%05%01%01%01%01%01%01%00%00%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%FF%C4%00%B5%10%00%02%01%03%03%02%04%03%05%05%04%04%00%00%01%7D%01%02%03%00%04%11%05%12!1A%06%13Qa%07%22q%142%81%91%A1%08%23B%B1%C1%15R%D1%F0%243br%82%09%0A%16%17%18%19%1A%25%26'()*456789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%83%84%85%86%87%88%89%8A%92%93%94%95%96%97%98%99%9A%A2%A3%A4%A5%A6%A7%A8%A9%AA%B2%B3%B4%B5%B6%B7%B8%B9%BA%C2%C3%C4%C5%C6%C7%C8%C9%CA%D2%D3%D4%D5%D6%D7%D8%D9%DA%E1%E2%E3%E4%E5%E6%E7%E8%E9%EA%F1%F2%F3%F4%F5%F6%F7%F8%F9%FA%FF%C4%00%1F%01%00%03%01%01%01%01%01%01%01%01%01%00%00%00%00%00%00%01%02%03%04%05%06%07%08%09%0A%0B%FF%C4%00%B5%11%00%02%01%02%04%04%03%04%07%05%04%04%00%01%02w%00%01%02%03%11%04%05!1%06%12AQ%07aq%13%222%81%08%14B%91%A1%B1%C1%09%233R%F0%15br%D1%0A%16%244%E1%25%F1%17%18%19%1A%26'()*56789%3ACDEFGHIJSTUVWXYZcdefghijstuvwxyz%82%83%84%85%86%87%88%89%8A%92%93%94%95%96%97%98%99%9A%A2%A3%A4%A5%A6%A7%A8%A9%AA%B2%B3%B4%B5%B6%B7%B8%B9%BA%C2%C3%C4%C5%C6%C7%C8%C9%CA%D2%D3%D4%D5%D6%D7%D8%D9%DA%E2%E3%E4%E5%E6%E7%E8%E9%EA%F2%F3%F4%F5%F6%F7%F8%F9%FA%FF%DA%00%0C%03%01%00%02%11%03%11%00%3F%00%EE%7C9%A0Xj%1E%15%B3%B9%1A%5Cw%17%92%EDS!%8D%0E%E2T%13%92y%CEsX%BE4%D0%A3%D2%7C%3Fyz%FADV%A5co.e%89T%A4%80%1C%10G%20%E4T~%0E%F8%91%A4%F8s%C3%F6%96%3A%98%BA%17%16%F7%3B%DDV1%C2%85%DB%8EH%E75%CA%EB%3F%10%AC%F5O%09%F8%8FG%89n%E5%BE%D4%B5%0F6%D4l%04l%2C8%3C%E78%ED%CD%7D%24i%D7%85Gu%A5%CF%9C%A3%0A.%09%F5%B1%FF%D9");

imageLinkedInElem.setAttribute('style', 'vertical-align: top;');

var spanNarrowElem = document.createElement('span');
spanNarrowElem.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

//common xpath to list of object in Leads, Accounts, Contacts and Opportunities tab
var xpath = "/html/body/div[2]/table[@id='bodyTable']/tbody/tr/td[@id='bodyCell']/div[3]/div[1]/div/div[2]/table/tbody/tr";

var rowElems = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// loop thru each object skip the heading and construct name and add logo and link
                   
for (var i = 1; i < rowElems.snapshotLength; i++) { // iterate thru each node
    rowElem = rowElems.snapshotItem(i);
    nameElem = rowElem.getElementsByTagName('th')[0];
    nameText = nameElem.textContent;
    nameSplit = nameText.split(', ');
    if (nameSplit[1] == null) {nameSplit[1] = ''; }
    nameForURL = '%22' + nameSplit[1] + ' ' + nameSplit[0] + '%22';
    nameForURL = nameForURL.replace(/\s/g, "+");
    var linkLinkedInElem = document.createElement('a');
    linkLinkedInElem.setAttribute('href', 'http://www.linkedin.com/search?search=&sortCriteria=4&keywords=' + nameForURL);
    linkLinkedInElem.setAttribute('target', '_blank');
    linkLinkedInElem.setAttribute('title', 'Search LinkedIn');
    
    nameElem.appendChild(spanNarrowElem.cloneNode(true)); 
    linkLinkedInElem.appendChild(imageLinkedInElem.cloneNode(true));
    nameElem.appendChild(linkLinkedInElem);   
}    


/*

Spock

http://www.spock.com/q/%22Jane-Smith%22



http://www.zoominfo.com/search/PersonQuery.aspx?searchSource=basic_ssb&singleSearchBox=%22Jane+Smith%22&x=0&y=0

(Your browser should have redirected you automatically. If you see this it probably has a bug.)

*/
