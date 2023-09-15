function filtro_entero(a,b){

	if(a === ""){
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textVacio['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(b === ""){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("b").focus();}
		document.getElementById("b").style.border = "2px solid red";
		msnfalse = "" + textVacio['B'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	
	}else if(a %1 != 0){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textEntero['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(b %1 != 0){
		if (screen.width>focusRan){document.getElementById("b").focus();}
		document.getElementById("b").style.border = "2px solid red";
		msnfalse = "" + textEntero['B'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("b").style.border = "1px solid #ccc";
		$("#leyenda").html("");	
		msnfalse = "";
		return true;
	}
}

function rango_entero(a,b){

	if(a <= -1000 || a >= 1000 || a == 0){
		if(a == 0 ){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['A'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>a</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(b <= -1000 || b >= 1000 || b == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(b == 0 ){
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['B'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>b</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("b").style.border = "1px solid #ccc";
		
		$("#leyenda").html("");
		msnfalse = " ";
		return true;
	}
}






function filtro_entero_c(a,c){

	if(a === ""){
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textVacio['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(c === ""){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("c").focus();}
		document.getElementById("c").style.border = "2px solid red";
		msnfalse = "" + textVacio['C'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	
	}else if(a %1 != 0){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textEntero['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(c %1 != 0){
		if (screen.width>focusRan){document.getElementById("c").focus();}
		document.getElementById("c").style.border = "2px solid red";
		msnfalse = "" + textEntero['C'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		$("#leyenda").html("");	
		msnfalse = "";
		return true;
	}
}

function rango_entero_c(a,c){

	if(a <= -1000 || a >= 1000 || a == 0){
		if(a == 0 ){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['A'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>a</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(c <= -1000 || c >= 1000 || c == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(c == 0 ){
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['C'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>c</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		
		$("#leyenda").html("");
		msnfalse = " ";
		return true;
	}
}


/***********************************************diferencia de cuadrados************************************************/

function rango_entero_c_DC(a,c){

	if(a <= -1000 || a >= 1000 || a == 0){
		if(a == 0 ){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['A'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>a</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(c <= -1000 || c >= 1000 || c == 0|| c > 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(c == 0 || c > 0){
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['DC'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		// }else if(c < 0){
		// 	if (screen.width>focusRan){document.getElementById("c").focus();}
		// 	document.getElementById("c").style.border = "2px solid red";
		// 	msnfalse = "" + textoRangoMR['DC'] + "<br>";
		// 	$("#resultado").html("");		
		// 	contador++;
		// 	return false;
		}else{
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>c</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		
		$("#leyenda").html("");
		msnfalse = " ";
		return true;
	}
}


/**************************************************FORMULA GENERAL*****************************************************/

function filtro_entero_general(a,b,c){

	if(a === ""){
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textVacio['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(b === ""){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("b").focus();}
		document.getElementById("b").style.border = "2px solid red";
		msnfalse = "" + textVacio['B'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	
	}else if(c === ""){
		document.getElementById("b").style.border = "1px solid #ccc";
		if(screen.width>focusRan){document.getElementById("b").focus();}
		document.getElementById("c").style.border = "2px solid red";
		msnfalse = "" + textVacio['C'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	
	}else if(a %1 != 0){
		document.getElementById("a").style.border = "1px solid #ccc";
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid red";
		msnfalse = "" + textEntero['A'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(b %1 != 0){
		if (screen.width>focusRan){document.getElementById("b").focus();}
		document.getElementById("b").style.border = "2px solid red";
		msnfalse = "" + textEntero['B'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else if(c %1 != 0){
		if (screen.width>focusRan){document.getElementById("c").focus();}
		document.getElementById("c").style.border = "2px solid red";
		msnfalse = "" + textEntero['C'] + "<br>";
		$("#resultado").html("");		
		contador++;
		return false;
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("b").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		$("#leyenda").html("");	
		msnfalse = "";
		return true;
	}
}

function rango_entero_general(a,b,c){

	if(a <= -1000 || a >= 1000 || a == 0){
		if(a == 0 ){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['A'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>a</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(b <= -1000 || b >= 1000 || b == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(b == 0 ){
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['B'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>b</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(c <= -1000 || c >= 1000 || c == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(c == 0 ){
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['C'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>c</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("b").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		$("#leyenda").html("");
		msnfalse = " ";
		return true;
	}
}





function rango_entero_generalN5(a,b,c){

	if(a <= -1000 || a >= 1000 || a == 0 || a != 1){
		if(a == 0){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['A'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else if(a != 0){
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['AN5'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("a").focus();}
			document.getElementById("a").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>a</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(b <= -1000 || b >= 1000 || b == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(b == 0 ){
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['B'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("b").focus();}
			document.getElementById("b").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>b</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else if(c <= -1000 || c >= 1000 || c == 0){
		document.getElementById("a").style.border = "1px solid #ccc";		
		if(c == 0 ){
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "" + textoRangoMR['C'] + "<br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}else{
			if (screen.width>focusRan){document.getElementById("c").focus();}
			document.getElementById("c").style.border = "2px solid red";
			msnfalse = "Para <span class='cursiva'>c</span> se admiten máximo 3 cifras <br>";
			$("#resultado").html("");		
			contador++;
			return false;
		}
	}else{
		document.getElementById("a").style.border = "1px solid #ccc";
		document.getElementById("b").style.border = "1px solid #ccc";
		document.getElementById("c").style.border = "1px solid #ccc";
		$("#leyenda").html("");
		msnfalse = " ";
		return true;
	}
}
