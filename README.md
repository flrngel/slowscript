# slowscript

javascript lazyloader with Mutation Detection

### Usage

	<script type="text/slowscript" src="test.js"></script>
	<script type="text/slowscript" src="test"></script>

#### recommend

	<noscript type="text/slowscript" src="test.js"></noscript>

### On AMD ( Example with RequireJS )

See more [RequireJS-example](https://github.com/flrngel/slowscript/tree/master/test/requirejs/require.html)
	
	require(['slowscript'],function(slowscript){
		slowscript.execute();
	});

### Development

	npm install
	grunt

### Examples

[Basic examples](https://github.com/flrngel/slowscript/tree/master/test)

[AngularJS examples](https://github.com/flrngel/slowscript-angular-require-lazyload)

---

## Basics

`slowscript` is using singleton design pattern.

### Variables

#### [`$global`](https://github.com/flrngel/slowscript/blob/master/src/slowscript.js#L120)

Advantage of singleton design pattern, you can use this variable as global variable.

### Method

#### [`execute()`](https://github.com/flrngel/slowscript/blob/master/src/slowscript.js#L155)

This method is for execute slowscript as hand-operated

on mutation event, this method will run automatically. (plan to choose optional on future version)

#### [`queue(<function>)`](https://github.com/flrngel/slowscript/blob/master/src/slowscript.js#L123)

This method is for queuing predefined functions, wait for queue to execute.

#### [`queue_execute()`](https://github.com/flrngel/slowscript/blob/master/src/slowscript.js#L142)

This method executes functions in `queue` which is defined. Probably uses on lazy-loaded script.

## LICENSE

MIT
