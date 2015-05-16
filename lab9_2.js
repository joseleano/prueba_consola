

function operaciones(suma, resta, multiplicacion){
	var a=4;
	var b=2;
suma(a,b);
resta(a,b);
multiplicacion(a,b);
}

operaciones(
	function(a,b){
		alert(a+b);
	},
	function(a,b){
		alert(a-b);
	},
	function(a,b){
		alert(a*b);
	}
	);
