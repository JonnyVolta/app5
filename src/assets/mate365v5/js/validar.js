function validar(){
	var a, b, msntrue, msnfalse, contador, x;
	msntrue = "";
	msnfalse = "";	
	contador=0;
	
	

	a = document.getElementById("a").value;
	b = document.getElementById("b").value;

	if (a %1 != 0 || b %1 != 0) {
		msnfalse = "<i class='fa fa-minus'></i> Introduce un número entero positivo.<br>";
		$("#resultado").html("");	
		msntrue = "";
		contador++;
	}

	if(a === "" || b === ""){
		msnfalse = "<i class='fa fa-minus'></i> Introduce un número entero positivo.<br>";
		$("#resultado").html("");	
		msntrue = "";
		contador++;
	

		if(a <=0 ||  b <=0){
				msnfalse = msnfalse + " <i class='fa fa-minus'></i> En este nivel solo se permiten números  naturales  (1,2,3,4,5,6,…).<br>";
				$("#resultado").html("");				
			}

	}else{
		if(a <=0 ||  b <=0){
			msnfalse = msnfalse + "<i class='fa fa-minus'></i> En este nivel solo se permiten números  naturales  (1,2,3,4,5,6,…).<br>";
			$("#resultado").html("");	
			contador++;
			
		}
	}
	


	if (contador == 0) {
		msntrue = "C O R R E C T O";
		x = b - a;
		r1= "<br>La ecuación a resolver es: <br> <span class='ecuacion'> x <span class='rojo'> + </span>" + a + "<span class='rojo'> = </span> " + b + "</span>"
		r1= r1 +"<br><span class='ecuacion'> x <span class='rojo'> + </span>" + a + "<span class='blue'> - </span><span class='blue'>" + a +  "</span><span class='rojo'> = </span> " + b + "<span class='blue'> -  </span><span class='blue'>" + a +"</span></span>"
		r1= r1 + "<br> <span class='ecuacion'>x <span class='rojo'> = </span> <span class='green'>" + x + "</span><br> Sustituyendo x:<br>";
		r1= r1 + "<span class='green'>" + x + "</span> <span class='rojo'> + </span> " + a + " <span class='rojo'> = </span> " + b + "</span>";	
		$("#resultado").html( r1 );
	}

	$("#leyenda").html( "<span class='leyenda'>" + msnfalse +"</span>" + "<span class='leyendaTrue'>" + msntrue +"</span>");
	 
	
}

