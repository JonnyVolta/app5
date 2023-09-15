var a, b, c, z, w, d,  msnfalse, contador, x, y, signos, aN, aD, bN, bD, cN, cD, dN, dD, simpli, fy, fc, yf, c, res, flag, s1, sig, notaN,rec;
var valor_N, valor_D, valor_signo;
var d = false;
var msnfalse = "";	
var contador = 0;
var focusRan = 400;
var r1 ='';

$(document).ready(function(){ 

	var validar = $('#resultado').offset().top;
	$('#validar').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: validar	 
		}, 1000);
	});

	setTimeout(function() {
			$("#aviso").html( "<span class='green' style='font-size:1.3em'><?php echo $post['aviso'];?></span>");
	}, 10000);

	setTimeout(function() {
			$("#aviso").hide("slow","swing");
	}, 20000);
});


/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function compro(){
		var comprobar = $('#comprobacion').offset().top;
		$('#Bcomprobacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comprobar -90
		}, 900);
	});
}


function compro2(){
		var comprobar = $('#comprobacion2').offset().top;
		$('#Bcomprobacion2').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comprobar -90
		}, 900);
	});
}
/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function comproN(){
		var comprobar = $('#comprobacion').offset().top;
		$('#Bcomprobacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comprobar 
		}, 1200);
	});
}


/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function ini(){
		var intro = $('#intro').offset().top;
		$('#Binicio').on('click', function(e){
		if (screen.width>focusRan){document.getElementById("a").focus();}
		document.getElementById("a").style.border = "2px solid #1DB954";	
		e.preventDefault();
		$('html, body').animate({
			scrollTop: intro -100
		}, 500);
	});
}

function inif(){
		var intro = $('#intro').offset().top;
		$('#Biniciof').on('click', function(e){
		if (screen.width>focusRan){document.getElementById("an").focus();}
		document.getElementById("an").style.border = "2px solid #1DB954";	
		e.preventDefault();
		$('html, body').animate({
			scrollTop: intro -100
		}, 500);
	});
}

/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function text_fail(){
	$("#leyenda").html( "<span class='leyenda'>" + msnfalse +"</span>");
	$("#comprobacion").html( " " );	
}

/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function invalid(){	$("#aviso").hide("slow","swing");}

/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function gene(){
		var general = $('#general').offset().top;
		$('#Bgeneral').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: general 
		}, 1200);
	});
}


/*------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------*/

function sigOpen(){
	$(".signos").css({"visibility" : "visible", "opacy" : "1"});	
	 setTimeout(function(){$(".signos").css({"visibility" : "hidden", "opacy" : "0"}); }, 6000);
}

function notaN(){
	$(".NOTA").css({"visibility" : "visible", "opacy" : "1"});	
	 setTimeout(function(){$(".NOTA").css({"visibility" : "hidden", "opacy" : "0"}); }, 6000);
}

function sig(){
	$(".sigley").css({"visibility" : "visible", "opacy" : "1"});	
	 setTimeout(function(){$(".sigley").css({"visibility" : "hidden", "opacy" : "0"}); }, 6000);
}

/*----------------------------signos-----------------------------*/
function signoN(n){
    if(solucion1 < 0 && solucion2 > 0){
    n = n * (-1);
    }else{
    n = n 
    }
    return n;
}

function signoD(d){
    if(solucion1 > 0 && solucion2 < 0){
    d = d * (-1);
    }else{
    d = d;	
    }
    return d;
}
 
function signoN1(n1){
    if(solucion3 < 0 && solucion4 > 0){
    n1 = n1 * (-1);
    }else{
    n1 = n1 
    }
    return n1;
}

function signoD1(d1){
    if(solucion3 > 0 && solucion4 < 0){
    d1 = d1 * (-1);
    }else{
    d1 = d1
    }
    return d1;
}

function signoN2(n2){
    if(solucion5 < 0 && solucion6 > 0){
    n1 = n1 * (-1);
    }else{
    n1 = n1 
    }
    return n1;
}

function signoD2(d2){
    if(solucion5 > 0 && solucion6 < 0){
    d1 = d1 * (-1);
    }else{
    d1 = d1
    }
    return d1;
}


function factor_comun(m){

    var m;

    if(m == 1){
        
        return m;

    }else if (m % 2 == 0){
  	    
  	    var ii;
            for(ii = -999; ii < 999; ii++){
                x1 = m / ii
    
                if( (x1 > 0 && x1 != m)  && (x1 % 1 == 0) ){
      	            return x1;
      	        }
            }

    }else{

        var ii;
            for(ii = -999; ii < 999; ii++){
                x1 = m / ii
    
                if( (x1 > 0 && x1 != m)  && (x1 % 1 == 0) ){
      	            return x1;
                }
            }

    }


}

function factor_comun2(n){
	
	var n;
    var i;
            for(i = 2; i < 999; i++){
                
                x = factor_comun(n) * i 

                if(x == n){

                	return i;

                }else{
                	
                	if(c % 2 == 0 && factor_comun(n) != 1){
        
                            return factor_comun(n);
        
                    }else if(c % 2 != 0 && factor_comun(n) != 1){
                            // return factor_comun(n); 
                            if(x === n){
                            return x;
                            }

                    }else if(factor_comun(n) == 1){
        
                            return n;
                    }

                
                }

            }
   
}


function pili(y){

    for(var ii = -999; ii < 999; ii++){
               
                xr = c1 / ii
    
                    if(xr != c1 && xr % 1 == 0){
                    
                      
                        for(var i = 999; i > -999; i--){
                
                            xs = c1 / i
                        
                                sD = parseInt(xr) + parseInt(xs)
                                mD  = parseInt(xr) * parseInt(xs)
                        
                                        if(sD == b && sD % 1 == 0 && mD == c){
                                            // alert(xr)
                                            // alert(xs)

                                            sD = parseInt(sD)
                                            mD = parseInt(mD)
                                            return(sD,mD)
                             
                                        }
                    
                        }
               
                    }         
          
    }
    
}