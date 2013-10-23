(function(window,document){
	window.addEventListener('load',function(){
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
	},false);
})(window,document);
