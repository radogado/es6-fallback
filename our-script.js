var our_script = !("fetch"in window) || function(){ 
	
window.onerror = function(){
	
	console.log('error');
   return true;

}

	let f = () => {
		
		console.log('ES6 script');
		
	}
	
	f();
	
	let g = () => {
		
		console.log('ES6 script');
		
	}
	
	g();
	
	return 'our script'; 

}();

if (typeof our_script === 'boolean') {
	
	var script = document.createElement('script');
	script.src = document.querySelector('script.our-script').src.replace('.js', '.fallback.js');
	document.head.appendChild(script);
	
}
