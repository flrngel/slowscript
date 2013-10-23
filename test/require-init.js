require.config({
	baseUrl: '../src'
});

require(
	['slowscript'],
	function(slowscript){
		slowscript();
	}
);
