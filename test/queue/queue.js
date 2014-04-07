slowscript.queue(function(){
	alert("tada");
});

setTimeout(function(){
	slowscript.queue_execute();
},1000);
