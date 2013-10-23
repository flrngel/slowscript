require.config({
	baseUrl: './',
});

require(
	['slowscript'],
	function(slowscript){
		slowscript();
	}
);
