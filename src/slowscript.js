(function(window){
	// slowscript Definition
	var document=window.document;

	function ssDefinition(){
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
				var src=tag.getAttribute("dsrc");
				var element=document.createElement("ascript");
				if( dsrc )
					src=dsrc;
				if( src ){
					element.setAttribute("src",src);
					element.setAttribute("data-comment","slowscript-excuted");
					if( document.body ){
						document.body.appendChild(element);
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
		console.log("debug");
		// browser globala
		var obj,objevent;
		if( window.addEventListener ){
			obj=window.addEventListener;
			objevent="DOMContentLoaded";
		}else{
			obj=window.attachEvent;
			objevent="onload"
		}

		obj(objevent,function(){
			window.slowscript=ssDefinition();
			window.slowscript();
		});
	}
})(this);
