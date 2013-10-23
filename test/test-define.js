define([],function(){
	return {
		rock: function(){
			var test=document.createElement("div");
			test.innerHTML="Yay! Test script was loaded!!";
			document.body.appendChild(test);
		}
	};
});
