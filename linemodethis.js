// called by the bookmarklet to convert the current page into a linemode browser style version

var linemoder = {
	
	init: function() {
		//called on load to remove all style, add the linemode specific style sheet, and who knows what else!
		
		linemoder.removeStyle();
		linemoder.addLinemodeStyle();
		linemoder.addCommandLine();
		
	},
	
	removeStyle: function() {
		//remove the current style from the document
		
		var styleSheets = document.querySelectorAll("link[rel=stylesheet]");
		
		for (var i=0; i < styleSheets.length; i++) {
			styleSheets[i].parentNode.removeChild(styleSheets[i])
		};
		
		styleSheets = document.querySelectorAll("style");
		
		for (var i=0; i < styleSheets.length; i++) {
			styleSheets[i].parentNode.removeChild(styleSheets[i])
		};
		
		//now remove inline style
		
	},
	
	addLinemodeStyle: function() {
		//add style for our linemode browser
		
		alert()
		
		var ss = document.createElement("link");
		ss.type = "text/css";
		ss.rel = "stylesheet";
		ss.href = "https://raw.github.com/JohnAllsopp/linemoder/master/linemode.css";
		document.getElementsByTagName("head")[0].appendChild(ss);
		
		
	},
	
	addCommandLine: function(){
		//add the elements for the command line
	}
}

linemoder.removeStyle();