# slowscript

javascript lazyloader with Mutation Detection

### Usage

	<script type="text/slowscript" src="test.js"></script>
	<script type="text/slowscript" src="test"></script>

	** recommend **
	<noscript type="text/slowscript" src="test.js"></noscript>

### On AMD ( Example with RequireJS )

See more [RequireJS-example](./test/index.html)
	
	require(['slowscript'],function(slowscript){
		slowscript.execute();
	});

### Development

	npm install
	grunt
