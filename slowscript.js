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
				if( src ){
					element.setAttribute("src",src);
					if( document.body ){
						document.body.appendChild(element);
					}
				}

				var stylesrc=tag.getAttribute("stylesrc");
				var style_element=document.createElement("link");
				if( stylesrc ){
					style_element.setAttribute("rel","stylesheet");
					style_element.setAttribute("href",stylesrc);
					if( document.head ){
						document.head.appendChild(style_element);
					}
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
