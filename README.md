#slowscript

load javascript after page loaded

### Usage

	<slowscript src="test.js"></slowscript>
	<script src="slowscript.min.js"></script>

also you can use ( from ~ 0.5.0 )

	<script type="text/slowscript" src="test.js"></script>
	<script src="slowscript.min.js"></script>

### On AMD ( Example with RequireJS )

See more [RequireJS-example](./test/require.html)
	
	require(['slowscript'],function(){slowscript();});

### Development

	npm install
	grunt
