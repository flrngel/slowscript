#slowscript

load javascript file after page loaded, able with AMD

### Usage

	<slowscript src="test.js"></slowscript>
	<script src="slowscript.min.js"></script>

### Development

	npm install
	grunt


#slowscript

load javascript after page loaded

### Usage

	<slowscript src="test.js"></slowscript>
	<script src="slowscript.min.js"></script>

### On AMD ( Example with RequireJS )

See more [RequireJS-example](./test/require.html)
	
	require(['slowscript'],function(){slowscript();});

### Development

	npm install
	grunt
