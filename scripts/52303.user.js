// ==UserScript==
// @name           WPmodsFTL!
// @namespace      WPmodsFTL
// @version       0.4
// @description    This script notifies you when there are no moderators online. :)
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js
// @include        http://forums.whirlpool.net.au/
// @include        http://forums.whirlpool.net.au/user/?action=online
// @include        http://forums.whirlpool.net.au/*
// ==/UserScript==

var pic1="data:image/png;base64,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"	
var pic2="data:image/png;base64,R0lGODlhIQAjAPIAAP///zNmAP8AAMzMAP//AJmZAAAAAAAAACH/C05FVFNDQVBFMi4wAwHoAwAh+QQJCgAAACwAAAAAIQAjAAIDnAi63P4wykmrvTjrzZsxXfR94WMUBVh6BUGui0HMLyzPQ13exJCvow9OpwGpADLfcRNUJH8dY6wHjQZp1ejM9clyggKBwfsNi5U28XP5FeLIlNF0qzQSISqS+213xmNIW1R6gBN5RnRoSHkVcm4+OSoBchcBgVSRlgGWGptdkSCbnBmiQQaim0x3CpOrEkeUi7AYbLMMbHGmMboQCQAh+QQJCgAAACwGAAQAGQAfAEIDjwi6DGYtSkeVIWPAKd8lmMYxwZN5Y/oRT9qBrLk1W2vBoe3UFqPrFZelUJgJabDTkTK7KJcOgdTwpFmMq1yNRyp9MhpIYDwKTMwuD3CHgqqhtEIMvliF3WrQXfh25JZqH1RGaR5TIm4CD38da1mMbEFNWVVNbGQlSSeYXoR1eieeHGOBAGSFa1epdVY9PhEJACH5BAkKAAAALAEAAAAgACMAAgOtCLrcZi3KuUwpkOpp8f7OgGXg9hDEQJaUgaYPq7mvCj4rgxN4XsWZmKPyiwiFAB9kmUwqi04jUYGELh8ByQ5nawRw3kBW90KNGOLxJP3rCYRsENsgqNcNNrFMIX7YXSp6exU8JzCDDmUpXYhUigOMjTQ1VYiTKJGSZZA+g5cqnXuTnI2Ji5WSD6ClRjhqrHwLr6yCALW0XrCxaKw9JL6iK786oVrEUFQswK1gEgkAIfkECQoAAAAsAQACABsAIQACA50IurxmLcpoSoEzt3q1B08xYN9kDATxlNKDpiTrvLC8PYa62iDp8yuIEJTZMYw/R1BhBI0eutgOeaykrlIlU2oQ4HBVZs8QOI4EaHQsAGYEykxUV016Z+xOGBSDv79PNDBvcCUuVzU8eYcxMoCLiT2BjI0DNJMsLi+XmCdtkGw4hImiojZ9AKcypahATQqgm2FbWrNFGw63RV+MuyQJACH5BAkKAAAALAQABgAVAB0AQgOGCLpsxhCaMchT70ZMiXfatgQkCTqlCDiepTYD2IbL5XDdt9rSqfk0SaEQFE0quhfOhVm9jgaBtOjcrXKfDG8UAAQcFOSjG/ndMOfq5qTsEYhtNJKpBGdB9Y4Nr5oY7mlGMVN8T3pRVDtaWHR4PzuMGTWKZGA5N4VcXSAUKGRlKEaBak2lNQkAIfkECQoAAAAsAgAEABkAHwACA4wIuqxmLUr23ry0FIjvI1s3fQTBiZQxlCbaqGt5uk9cWfSwntCMwS3ALbdb9HIG2RBJCiIFgiXRAI26jDoT1ScCKrkpXpbldFg4uFpMljIbsWvt2y3kedn03iMQAPBhawZ9fzgMfH1qNoJ9NIB4V3Uwe5B8kXuMKJgNmiMVElIRM4WFQiMvc6ihoJYnCQAh+QQJCgAAACwAAAAAIAAjAAIDrAi63GYtyrlMKZDqafH+zFMMGfgZA0E85vakatlKqBqbjxzmK0uzGd+uQnQESzoAUMlMIo8RITIaVD4CUdKjlwQEco2AeFew3RhiLCWteAhyYAUbNEYZBHg8ZN4S1+56BmMzITA8XTMoMDaILYpmK4RUi2eShZCNjgOUmTg1jJZZi52em5WhFXZCqHJwrGELaq9esoOvsnKzXrCocE9xjjJTqY5DbcLBwDvKCwkAIfkEAQoAAAAsBQACABsAIQBCA5wIuqxmLcoFHa2TheDIMwQxVFvWfCNmOt9zturKhuOKqWAYFi7lTzlaTdbgFIkZQ4GHBOpEsciHcbu8Kh+jQ8DlGoaKwDT5hEZlwQG4GdY0ewC4/Gxb0t8D3h2tS7EvIC1/cYQQhndYOA8eD2s9j4otAnBxWBpaD10gYCUZG2Jlagafb6F7ZH2UpSJ+gwBiWa6vWrNssVdoJz+7DAkAIf7vVGhpcyBHSUYgZmlsZSB3YXMgYXNzZW1ibGVkIHdpdGggR0lGIENvbnN0cnVjdGlvbiBTZXQgZnJvbToNCg0KQWxjaGVteSBNaW5kd29ya3MgSW5jLg0KUC5PLiBCb3ggNTAwDQpCZWV0b24sIE9udGFyaW8NCkwwRyAxQTANCkNBTkFEQS4NCg0KVGhpcyBjb21tZW50IGJsb2NrIHdpbGwgbm90IGFwcGVhciBpbiBmaWxlcyBjcmVhdGVkIHdpdGggYSByZWdpc3RlcmVkIHZlcnNpb24gb2YgR0lGIENvbnN0cnVjdGlvbiBTZXQAOw=="	
var pic3="data:image/png;base64,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"	
var pic4="data:image/png;base64,R0lGODlhLQAeAPIAAAAAAP8AAAAz/wBm/zP/AP//AP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJEgAEACwAAAAALQAeAAAD8Ei63P4wykmrvTjrzbv/YCiOZBkG5hQEhiAUxIsKAWDbohvQq+wKgIJQiHOgLquCq7DrEYbQHSCgfLoIK0vz2hNiqUTAj8rbClS7b5XGNhiCADeMR1PKjpIls7kKDHhvBllCPDFseBFnTDpYdzVwBTaHZ3cxWRI9KEJkLwM3kT0DfXyEZ5h2Oy5/pFCbSTSNdTETOi9KOwatrQN2TF58FIuLPUG6RJkCf7UyKkuWC8WRN9FxbISpFWepiNG6AAp0ZFRaKIgKNq1FC2moINPvDduzHnFu3+dubwzl5hr1+d/+2SshEGC+g/dGvMOxMCGFBAAh+QQJEgAEACwAAAAALQAeAAAD/0i63P4wykmrvVDgq2VQ3TZ9j0CaImVqQaG5LJmqgukG+BrOUUGYAVutgOMtAEgkoVi4fWpBWWTnQDavylXwR3wWfyUpA3AtdwUDXA7XrC2pqJ+YQC5Ym3f17W0DQ3JDXAEAJgYGZACGZAMwRE1vRXM/WjlENQKJioaHZ0EDl0EClg9sQ1FbeIh2dXYEBittoW8MJFFulT44Vkl1SUBCLWFbpXKwZmasozBzKEOdap9syHhloU9TBJYoQV0tx6y8AJDXf1HZjkOMq0lYpCwRLVCX0UDH7dh/oKI3AgZHyauMZON2akc4XgJD+YgzRlxDgWCsUVHyEGKkiRT/OeSxRR7OmE0bMx2CyKCDSEV0NqEkeUQlSJcrWdI5ODPchQQAIfkECRIABAAsAAAAAC0AHgAAA/9Iutz+cIVIawuChJJ5DpMlPkK5CSCGZWOrFASqegXojnbB2SZ6u6hgrDaR/RSAZJIBEgxSqo3nmNRZl8jUTmOCsVoAq1gHQA5oUq7NFS5Uye2yRuUsBQU1tttgCAP4fkg6BkE6d3p7gHx9ZARxMig7MGBXfm5tbo6NXAQeIRFKSnBVoaObK0UPn5pXY65kYnIacxdFeEMnAZivcbEVPSl4KwJvvJVKFiBokJ2Co8WyLXQfGDq0u2PRIk1zHDF0DMVwRyU6TVADRo6hoT8dqFxEq1gL9C7nnTU0A/X2f303TtypEwUJMiSLAAIptEOAgXAJy/yL6KKGMGb1EgJa1+4cXrlvDSZq1EaOi4+MGikeYTJhlUF2B1fKnKkgAQAh+QQJFAAEACwAAAAALQAeAAAD/0i63P4wykmrvVDgq2VQ3TZ9j0CaImVqQaG5LJmqgukG+BrOUUGYAVutgOMtAEgkoVi4fWpBWWTnQDavylXwR3wWfyUpA3AtdwUDXA7XrC2pqJ+YQC5Ym3f17W0DQ3JDXAEAJgYGZACGZAMwRE1vRXM/WjlENQKJioaHZ0EDl0EClg9sQ1FbeIh2dXYEBittoW8MJFFulT44Vkl1SUBCLWFbpXKwZmasozBzKEOdap9syHhloU9TBJYoQV0tx6y8AJDXf1HZjkOMq0lYpCwRLVCX0UDH7dh/oKI3AgZHyauMZON2akc4XgJD+YgzRlxDgWCsUVHyEGKkiRT/OeSxRR7OmE0bMx2CyKCDSEV0NqEkeUQlSJcrWdI5ODPchQQAIfkECRQABAAsAAAAAC0AHgAAA/BIutz+MMpJq7046827/2AojmQZBuYUBIYgFMSLCgFg26Ib0KvsCoCCUIhzoC6rgquw6xGG0B0goHy6CCtL89oTYqlEwI/K2wpUu2+VxjYYggA3jEdTyo6SJbO5Cgx4bwZZQjwxbHgRZ0w6WHc1cAU2h2d3MVkSPShCZC8DN5E9A318hGeYdjsuf6RQm0k0jXUxEzovSjsGra0DdkxefBSLiz1BukSZAn+1MipLlgvFkTfRcWyEqRVnqYjRugAKdGRUWiiICjatRQtpqCDT7w3bsx5xbt/nbm8M5eYa9fnf/tkrIRBgvoP3RrzDsTAhhQQAIfkECRIABAAsAAAAAC0AHgAAA/9Iutz+MMpJaxM2V0zC5NoUcCPkhVXgCUJBtGuJfsKojsXIzmlQsLlaycWj2HaqlktFADidPFJJ9Xsdm4CCVguNgC4rZfIWGAi36ALA9HVggrUOjKrOcu3rhkzG8IwJWj5AA2oGBlkAhiMAgoAsQhA1PzWPZjY+iYaZh4+CN5RtVi+UWpQGTVtOanVaVjaTOScPQUFJT3eqTkylTCw2CrJ9QFZodmlolCVzrqEKGDo+qVzHSQNkZ5Nybh2/T6rT1FRx0C7NwKIOxt52hEDRckwS5grG4ZRmvu5FWGldBAakfuiIw2OdNwZCJEnah6WBvwVDfDF82BAhtBcTKT4Bw20hoqFDCzblAcaB4IxNmpp8TImRIb2VH1HGdOnQIJZ1GRIAACH5BAkUAAQALAAAAAAtAB4AAAP/SKqx/jBKGZoQhWDbpv9XIFRiIV5fOlXFZY4ikan0I55EhWVVTeu5QEtzE/h8LtONNIA5AFDocWF8jXKbCmABLXi90qmu4RW6BlsC4MsGH82ji6C5VKwLXfA9XQvt4gZuangGBmsAhYdHLy86e4OEiYWGgj8uRHZud3iHnF98NEYnHXt5UYdReqcqPR2QYG2xsJ8OrimbeLOyeCVmMig9t6efu5xyZiRxRj6bp80KGTAjLVlTuG1bPV5OfrbM12EKcTHVTkfOq0FzJEvby+egaqAkLQ2j0eeJT+ED1CZeWILVQDSJT7oxc4658OaB4CRDah6CMhBnG45vqxwWdCANHdmMKVweSrRRJQTIkCJHLhil4eQ+dOFWBnFJ80ECACH5BAkSAAQALAAAAAAtAB4AAAP/SLrc/jDKSWsTNldMwuTaFHAj5IVV4AlCQbRriX7CqI7FyM5pULC5WsnFo9h2qpZLRQA4nTxSSfV7HZuAglYLjYAuK2XyFhgIt+gCwPR1YIK1DoyqznLt64ZMxvCMCVo+QANqBgZZAIYjAIKALEIQNT81j2Y2PomGmYePgjeUbVYvlFqUBk1bTmp1WlY2kzknD0FBSU93qk5MpUwsNgqyfUBWaHZpaJQlc66hChg6Pqlcx0kDZGeTcm4dv0+q09RUcdAuzcCiDsbedoRA0XJMEuYKxuGUZr7uRVhpXQQGpH7oiMNjnTcGQiRJ2oelgb8FQ3wxfNgQIbQXEyk+AcNtIaKhQws25QHGgeCMTZqafEyJkSG9lR9RxnTp0CCWdRkSAAA7"	

var lastTimeCheck = GM_getValue('lastTimeCheck');
var dNow = Date.now();
if(!lastTimeCheck){
	lastTimeCheck = dNow;
	GM_setValue('lastTimeCheck', dNow.toString());
}
if((Number(lastTimeCheck)+900000) < dNow){ 	//checks every 15 minutes
	GM_setValue('lastTimeCheck', dNow.toString());
	GM_xmlhttpRequest({
		method: 'GET',
		url: 'http://forums.whirlpool.net.au/user/?action=online',
		headers: {'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey','Accept': 'text/html'},
		onload: function(rd){
			if(rd.responseText.split('<tr bgcolor="#F0BE84">')[1].split('<tr bgcolor="#F0BE84">')[0].indexOf('<b>')<0){ 	//for some reason the closing <b> tag isn't showing up in the responseText, so have to use indexOf() instead of $().find('b')[0]

				var popBox = $('<div id="popBox" style="display:none;position:absolute;heigt:150px;width:350px;padding:20px;top:'+
								(window.scrollY+120)+'px;left:'+((document.width/2)-175)+'px;background-color:#666;z-index:10;">'+
								'<img src="'+pic2+'" /><img src="'+pic1+'" style="margin-left:200px;" />'+
								'<p style="color:white;margin-left:68px;">There are currently no mods online.</p>'+
								'<img src="'+pic3+'" /><img src="'+pic4+'" style="margin-left:200px;" /></div>');
				popBox.appendTo("body");  

				popBox.fadeIn(2000);
				window.setTimeout(function(){
					popBox.fadeOut(1000,function(){
						popBox.remove();
					});
				},4500);
			
			}		
		
		}
	});
	

}
