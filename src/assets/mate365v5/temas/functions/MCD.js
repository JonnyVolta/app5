 	function MCD(D1,D2) {
    var data = D1 + ',' + D2;
	data=data.replace(' ','');
	var inputs=data.split(',');
	
	var resul=0;
	var flag=false;
	for(var j=0;j<inputs.length;j++){
		inputs[j]=parseInt(inputs[j]);
	}
	var m1=var_min(inputs);
	for(var i=m1;i>0;i--){
		var piv=0;
		for(var j=0;j<inputs.length;j++){
			if(inputs[j]%i!=0)
				piv=1;
		}
		if(piv==0){
			resul=i;
			break;
		}
	}
	return resul;
}

function var_min(var_input) {
var m2 = parseInt(var_input[0]);
var len = var_input.length;
for (var i = 1; i < len; i++){
	var_input[i]=parseInt(var_input[i]);
	 if (var_input[i] < m2) {
	 	m2 = var_input[i];
	}
}
return m2;
}


function hcf(D1,D2){
  var cd=1;
  if (D1>D2) {D1=D1+D2; D2=D1-D2; D1=D1-D2;}
  if ((D2==(Math.round(D2/D1))*D1)) {cd=D1}else {
   for (var i = Math.round(D1/2) ; i > 1; i=i-1) {
    if ((D1==(Math.round(D1/i))*i))
     if ((D2==(Math.round(D2/i))*i)) {cd=i; i=-1;}
   }
  }
  return cd;
}

function MCM(D1,D2){
  if(D1 < 0){ D1 = D1*(-1);}
  if(D2 < 0){ D2 = D2*(-1);}
  var cmr=1;
  var f=hcf(D1,D2);
  cmr=D1*D2/f;
  return cmr;
}

function MCM_D3(D1,D2,D3){
	return MCM(MCM(D1,D2),D3);
}
/*EJEMPLO PARA LLAMAR LA FUNCION 

	var D1 = document.getElementById("a").value; ------Obtener valor del input
	var D2 = document.getElementById("b").value; ------obtener valor del input
		D1 = 78; ------- Tambien se puede definir el valor de la variable igualandole a un numero u otra variable
		D2 = 58; ------- Tambien se puede definir el valor de la variable igualandole a un numero u otra variable 


	var resultado = MCD(D1,D2);---- Se iguala a una variable la funcion que se requiera 
	var resultado2 = MCM(D1,D2);---- Se iguala a una variable la funcion que se requiera 


	document.getElementById("valor").value = resultado; --- Por ultimo se imprime el valor o se utiliza para ejecutar operaciones 
	document.getElementById("valor2").value = resultado2; --- Por ultimo se imprime el valor o se utiliza para ejecutar operaciones */

