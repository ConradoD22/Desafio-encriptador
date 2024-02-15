
function encriptar(){
    var formato =  "[A-ZÑñÁáÉéÍíÓóÚúäÄëËïÏöÖüÜ0-9]"
    var texto = document.querySelector("#inputTexto").value;
   if(document.querySelector("#inputTexto").value==""){
    document.querySelector("#inputSalida").value = "NO INGRESASTE TEXTO!!";
    asignaTexto('p', 'Error intenta de nuevo')
        } else{if (texto.match(formato)==null){
        var textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#inputSalida").value = textoEncriptado;
    document.querySelector("#inputTexto").value;
    asignaTexto('p', 'Texto Encripato!!')        
   
      } else{
   alert('No puedes usar mayusculas, letras con caracteres especiales o números');
   inicial()
    }
    limpiarTexto()
    }
}


function desencriptar(){
    var formato =  "[A-ZÑñÁáÉéÍíÓóÚúäÄëËïÏöÖüÜ0-9]"
    var texto = document.querySelector("#inputTexto").value;
    if(document.querySelector("#inputTexto").value==""){
        document.querySelector("#inputSalida").value = "NO INGRESASTE TEXTO!!";
        asignaTexto('p', 'Error intenta de nuevo')
        }else{
    if (texto.match(formato)==null){
    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.querySelector("#inputSalida").value = textoEncriptado;
    document.querySelector("#inputTexto").value;
    asignaTexto('p', 'Texto Desencriptado!!') 
    }else{
        alert('No puedes usar mayusculas o letras con acentos o caracteres especiales');
        inicial()
    }
}
limpiarTexto()

}



function limpiarTexto(){
    document.querySelector("#inputTexto").value=""
}
function asignaTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function inicial(){
    asignaTexto('p', 'Ingresa el Texto a encriptar')
}



function copiarTexto(){
   
            var input = document.getElementById("inputSalida");
             copiarTexto = async str => {
                try {
                    await navigator.clipboard.writeText(input.value);
                    alert("Texto copiado correctamente");
                } catch (error) {
                    
                }
            };
                copiarTexto(input.textContent);
  limpiarSalida();
  inicial()
  }


  function limpiarSalida(){
  document.querySelector("#inputSalida").value=""
  }

  inicial()