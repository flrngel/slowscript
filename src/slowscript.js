(function(window){
	// slowscript Definition
	function ssDefinition(){
		var document=window.document;
		var slowscript=function(){
			return new slowscript.prototype.process();
		};

		slowscript.prototype.process=function(){
			var tags=document.getElementsByTagName("slowscript");
			if( tags.length == 0 ) tags=[];
			
			// for W3C Validation
			var script_tags=document.getElementsByTagName("script");

			for(var i=0;i<script_tags.length;i++){
				var tag=script_tags[i];

				if( tag.getAttribute("type") == "text/slowscript"
				 || tag.getAttribute("type") == "text/javascript-slow"
				 || tag.getAttribute("type") == "text/javascript-slowscript"	){
					 tags.push(tag);
				}
			}

			for(var i=0;i<tags.length;i++){
				var tag=tags[i];

				var src=tag.getAttribute("src");
				var element=document.createElement("script");
				if( src ){
					element.setAttribute("src",src);
					element.setAttribute("data-comment","slowscript-excuted");
					if( document.body ){
						document.body.appendChild(element);
					}
				}

				tag.remove();
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
