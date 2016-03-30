window.addEventListener('load', calculadora, false);

function calculadora(){

  var cero = document.getElementById("cero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var igual = document.getElementById("igual");
  var sumar = document.getElementById("sumar");
  var restar = document.getElementById("restar");
  var multiplicar = document.getElementById("multiplicar");
  var dividir = document.getElementById("dividir");
  var igual = document.getElementById("igual");
  var punto = document.getElementById("punto");
  var borrar = document.getElementById("borrar");
  var save = document.getElementById("save");
  var release = document.getElementById("release");

  cero.addEventListener('click', pulsado, false);
  uno.addEventListener('click', pulsado, false);
	dos.addEventListener('click', pulsado, false);
	tres.addEventListener('click', pulsado, false);
	cuatro.addEventListener('click', pulsado, false);
	cinco.addEventListener('click', pulsado, false);
	seis.addEventListener('click', pulsado, false);
	siete.addEventListener('click', pulsado, false);
	ocho.addEventListener('click', pulsado, false);
	nueve.addEventListener('click', pulsado, false);
  igual.addEventListener('click', pulsado, false);
  sumar.addEventListener('click', pulsado, false);
	restar.addEventListener('click', pulsado, false);
	multiplicar.addEventListener('click', pulsado, false);
	dividir.addEventListener('click', pulsado, false);
	igual.addEventListener('click', pulsado, false);
	punto.addEventListener('click', pulsado, false);
	borrar.addEventListener('click', pulsado, false);
  save.addEventListener('click', pulsado, false);
  release.addEventListener('click', pulsado, false);

  var operando = 0;
  var aux = 0;
  var signo = "";
  var primerNum = document.getElementById("primerNum");
  var punto = false;
  var memoria = 0;
  var auxpunto = false;

  function reset() {
    operando = 0;
    aux = 0;
    punto = false;
    signo = "";
	}

  function resultado(){
    var element = document.getElementById("display");
    var numero = document.getElementById("numero");
    var operacion = document.getElementById("operacion");
    switch(signo){
      case ("+"):
        var result = parseFloat(operando) + parseFloat(aux);
        element.innerHTML = result;
        numero.innerHTML = "0";
        operacion.innerHTML = "";
        primerNum.innerHTML = "";
        reset();
        break;
      case ("-"):
        element.innerHTML = parseFloat(aux) - parseFloat(operando);
        numero.innerHTML = "0";
        operacion.innerHTML = "";
        primerNum.innerHTML = "";
        reset();
        break;
      case ("*"):
        element.innerHTML = parseFloat(aux) * parseFloat(operando);
        numero.innerHTML = "0";
        operacion.innerHTML = "";
        primerNum.innerHTML = "";
        reset();
        break;
      case ("/"):
        element.innerHTML = parseFloat(aux) / parseFloat(operando);
        numero.innerHTML = "0";
        operacion.innerHTML = "";
        primerNum.innerHTML = "";
        reset();
        break;
    }
  }

  function pulsado(e){
    var boton = e.target;
		var valor_boton = boton.getAttribute('value');
    var element = document.getElementById("display");
    var operacion = document.getElementById("operacion");
    var numero = document.getElementById("numero");
    switch(valor_boton){
      case("+"):
        signo = valor_boton;
        aux = operando;
        primerNum.innerHTML = operando;
        numero.innerHTML = "0";
        operacion.innerHTML = "+";
        operando = 0;
	punto = false;
        break;
      case("-"):
        signo = valor_boton;
        aux = operando;
        primerNum.innerHTML = operando;
        numero.innerHTML = "0";
        operacion.innerHTML = "-";
        operando = 0;
	punto = false;
        break;
      case("*"):
        signo = valor_boton;
        aux = operando;
        primerNum.innerHTML = operando;
        numero.innerHTML = "0";
        operacion.innerHTML = "*";
        operando = 0;
	punto = false;
        break;
      case("/"):
        signo = valor_boton;
        aux = operando;
        primerNum.innerHTML = operando;
        numero.innerHTML = "0";
        operacion.innerHTML = "/";
        operando = 0;
	punto = false;
        break;
      case("C"):
        numero.innerHTML = "0";
        element.innerHTML = "";
        operacion.innerHTML = "";
        primerNum.innerHTML = "0";
        operacion = false;
        reset();
        break;
      case("MS"):
	memoria = operando;
	break;
      case("MR"):
	operando = memoria;
	numero.innerHTML = memoria;
	if (auxpunto == true){
	  punto = true;
	}
	break;
      case("="):
        if (signo == ""){
          element.innerHTML = element.innerHTML;
        }else{
          resultado();
        }
        break;
      default:
        if (operando === 0){
          if (valor_boton == "."){
            if (punto == false){
              punto = true;
	      auxpunto = true;
              operando = operando + valor_boton;
              console.log (operando);
              numero.innerHTML = numero.innerHTML + valor_boton;
            }else{
              numero.innerHTML = numero.innerHTML;
            }
          }else{
            operando = valor_boton;
            numero.innerHTML = "";
            numero.innerHTML = numero.innerHTML + valor_boton;
          }
        }else{
          if (valor_boton == "."){
            if (punto == false){
              punto = true;
	      auxpunto = true;
              operando = operando + valor_boton;
              numero.innerHTML = numero.innerHTML + valor_boton;
            }else{
              numero.innerHTML = numero.innerHTML;
            }
          }else{
            operando = operando + valor_boton;
            numero.innerHTML = numero.innerHTML + valor_boton;
          }
        }
        break;
      }
  }

}
