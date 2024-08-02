// script.js
var textInput;
var sucessos = "";
var erros = "";
var flag;

var suc;
var not;
var err

var secret = "Computador";

window.onload = function(ev) {
    console.log("[+] Status: OK")
    var textInput = document.getElementById('v1'); 
    textInput.addEventListener('keydown', (event) => {
        var c = event.key
        c = c.toUpperCase();
        if (c>='A' && c<='Z')
            inputChar(c)
    })
    suc = document.getElementById("suc");
    err = document.getElementById("err");
    not = document.getElementById("not");
}

function inputChar(c) {
    console.log('Tecla escolhida:',event.key);
    if(testChar(c)){
        flag=0;
        if(sucessos.length==0){
            sucessos+=c;
            suc.innerText="Sucessos:"+sucessos;
            not.innerText="Letra correta";
        }
        else{
            for(i=0;i<sucessos.length;i++){
                if(sucessos[i]==c){
                    flag=1;
                }
            }
            if(flag==0){
                sucessos+=c;
                suc.innerText = "Sucessos:"+sucessos;
                not.innerText="Letra correta";
            }
            else{
                not.innerText="Já usaste a letra "+c+" antes";
            }
        }
    }
    else{
        flag=0;
        if(erros.length==0){
            erros += c+" ";
            err.innerText = "Erros:"+erros;
            not.innerText="Letra errada";
        }
        else{
            for(i=0;i<erros.length;i++){
                if(erros[i]==c){
                    flag=1;
                }
            }
            if(flag==0){
                erros+=c+" ";
                err.innerText = "Erros:"+erros;
                not.innerText="Letra errada";
            }
            else{
                not.innerText="Já usaste a letra "+c+" antes";
            }
        }
    }    
}

function testChar(c) {
    for (var i=0; i<secret.length; i++) {
        if (secret[i].toUpperCase() == c) {
            return true;
        }
    }
    return false;
}