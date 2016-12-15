/* Keep app in full screen mode and not jump to Mobile Safari */

(function(document,navigator,standalone) {
	// prevents links from apps from oppening in mobile safari
	// this javascript must be the first script in your <head>
	if ((standalone in navigator) && navigator[standalone]) {
		var curnode, location=document.location, stop=/^(a|html)$/i;
		document.addEventListener('click', function(e) {
			curnode=e.target;
			while (!(stop).test(curnode.nodeName)) {
				curnode=curnode.parentNode;
			}
			// Condidions to do this only on links to your own app
			// if you want all links, use if('href' in curnode) instead.
			if('href' in curnode && ( curnode.href.indexOf('http') || ~curnode.href.indexOf(location.host) ) ) {
				e.preventDefault();
				location.href = curnode.href;
			}
		},false);
	}
})(document,window.navigator,'standalone');

/*

if(("standalone" in window.navigator) && window.navigator.standalone){
 
	// If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
	var noddy, remotes = true;
	
	document.addEventListener('click', function(event) {
		
		noddy = event.target;
		
		// Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
		while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
			noddy = noddy.parentNode;
		}
		
		if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
			event.preventDefault();
			document.location.href = noddy.href;
		}
	
	},false);
}



if (window.navigator.standalone) {

$(document).on(
    "click",
    "a",
    function (event) {

        event.preventDefault();

        var aurl = $(event.target).attr("href");
        if (aurl) {
            location.href = $(event.target).attr("href");
        }
        else {
            location.href = this;
        }
    }
);

*/
