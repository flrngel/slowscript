requirejs.config({
	baseUrl: "/test"
});

require(['slowscript'],function(slowscript){
	slowscript.execute();
});
