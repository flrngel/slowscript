(function(window){
	// slowscript Definition
	function ssDefinition(){
		var document=window.document;
		var slowscript=function(){
			return new slowscript.prototype.process();
		};

		slowscript.prototype.process=function(){
			var tags=document.getElementsByTagName("slowscript");
			for(var i=0;i<tags.length;i++){
				var tag=tags[i];
				var src=tag.getAttribute("src");
				var element=document.createElement("script");
				element.setAttribute("src",src);
				if( document.body ){
					document.body.appendChild(element);
				}
			}
		};

		return slowscript;
	}

	// transport
	// for AMD
	if( typeof define === "function" && define.amd ){
		define( "slowscript", [], ssDefinition);
	}else{
		// browser global
		window.addEventListener('load',function(){
			window.slowscript=ssDefinition();
			window.slowscript();
		});
	}
})(this);
