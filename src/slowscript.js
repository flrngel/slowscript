(function(window){
	// document
	var document=window.document;

	// Singleton Design Pattern
	var def=function(){
		if( _h === null ){
			_h=new slowscript();
		}
		return _h;
	};

	var _h=null;

	// MutationListener START
	// MutationListener code is orginally come from http://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
	var MutationListener=function(){
		var last = +new Date();
		var delay = 100;
		var stack = [];

		function callback(){
			var now = +new Date();
			if(now - last > delay){
				for (var i = 0; i < stack.length; i++){
					stack[i]();
				}
				last = now;
			}
		}

		this.addEventListener=function(fn, newdelay){
			if(newdelay) delay = newdelay;
			stack.push(fn);
		};

		function naive(){
			var last = document.getElementsByTagName('*');
			var lastlen = last.length;
			var timer = setTimeout(function check(){
				var current = document.getElementsByTagName('*');
				var len = current.length;

				if(len != lastlen){
					last = [];
				}

				for (var i = 0; i < len; i++){
					if(current[i] !== last[i]){
						callback();
						last = current;
						lastlen = len;
						break;
					}
				}

				setTimeout(check, delay);
			}, delay);
		}

		var support ={};

		var el = document.documentElement;
		var remain = 3;

		function decide(){
			if(support.DOMNodeInserted){
				if(support.DOMSubtreeModified){
					// for FF 3+, Chrome
					el.addEventListener('DOMSubtreeModified', callback, false);
				}else{
					// for FF 2, Safari, Opera 9.6+
					el.addEventListener('DOMNodeInserted', callback, false);
					el.addEventListener('DOMNodeRemoved', callback, false);
				}
			} else if(document.onpropertychange){
				// for IE 5.5+
				document.onpropertychange = callback;
			} else{
				// fallback
				naive();
			}
		}

		// checks a particular event
		function test(event){
			el.addEventListener(event, function fn(){
				support[event] = true;
				el.removeEventListener(event, fn, false);
				if(--remain === 0) decide();
			}, false);
		}

		// attach test events
		if(window.addEventListener){
			test('DOMSubtreeModified');
			test('DOMNodeInserted');
			test('DOMNodeRemoved');
		} else{
			decide();
		}

		// do the dummy test
		var dummy = document.createElement("div");
		el.appendChild(dummy);
		el.removeChild(dummy);
	};
	// MutationListener END


	// Slowscript Definition
	var slowscript=function(){
		var ML=new MutationListener();
		ML.addEventListener(function(){
			slowscript.prototype.execute();
		});
	};

	// Slowscript Global Variable
	slowscript.prototype.$global={};

	// Slowscript execution
	slowscript.prototype.execute=function(){
		var tags=[];
		var tagtypes=["text/slowscript","text/javascript-slow","txet/javascript-slowscript"];
		var tmp,i,j;

		// <slowscript></slowscript>
		tmp=document.getElementsByTagName("slowscript");
		for(i=0;i<tmp.length;i++){
			tags.push(tmp[i]);
		}

		// <script src="[tagtypes]"></script>
		tmp=document.getElementsByTagName("script");
		for(i=0;i<tmp.length;i++){
			for(j=0;j<tagtypes.length;j++){
				if( tmp[i].getAttribute("type") === tagtypes[j] ){
					tags.push(tmp[i]);
					break;
				}
			}
		}

		// <noscript src="[tagtypes]"></noscript> -- recommend
		tmp=document.getElementsByTagName("noscript");
		for(i=0;i<tmp.length;i++){
			for(j=0;j<tagtypes.length;j++){
				if( tmp[i].getAttribute("type") === tagtypes[j] ){
					tags.push(tmp[i]);
					break;
				}
			}
		}

		// lazyload
		for(i=0;i<tags.length;i++){
			var el=document.createElement("script");
			var src=tags[i].getAttribute("src");
			
			// check if tag was loaded before
			var before=tags[i].getAttribute("data-comment");
			if( before === "slowscript-executed" ){
				continue;
			}

			// load only ".js" file extension
			if( src.split('.').pop() !== "js" ){
				src=src+".js";
			}

			// finally!
			if( src !== null ){
				el.setAttribute("src",src);
				el.setAttribute("data-comment","slowscript-executed");
				tags[i].setAttribute("data-comment","slowscript-executed");
				if( document.body ){
					document.body.appendChild(el);
				}
			}
		}
	};

	// Init script
	//
	// if AMD load
	if( typeof define === "function" && define.amd ){
		define("slowscript",[],def);
	}else{
		// if not AMD load
		var obj,objevent;
		if( window.addEventListener ){
			obj=window.addEventListener;
			objevent="DOMContentLoaded";
		}else{
			// for old browsers
			obj=window.attachEvent;
			objevent="onload";
		}

		obj(objevent,function(){
			window.slowscript=new def();
			window.slowscript.execute();
		});
	}
})(window);
