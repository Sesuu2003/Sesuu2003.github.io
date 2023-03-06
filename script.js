const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const botones = document.querySelector(".botones");
const btnsuma = document.querySelector("#btnsuma");
const btnresta = document.querySelector("#btnresta");
const btnmult = document.querySelector("#btnmult");
const btndiv = document.querySelector("#btndiv");
const btnparen1 = document.querySelector("#btnparen1");
const btnparen2 = document.querySelector("#btnparen2");
const btnigual = document.querySelector("#btnigual");
const textbox = document.querySelector("#textbox");
const btnC = document.querySelector("#btnC");
let operacion = "";


btn1.onclick = () => escribirnumero(btn1);
btn2.onclick = () => escribirnumero(btn2);
btn3.onclick = () => escribirnumero(btn3);
btn4.onclick = () => escribirnumero(btn4);
btn5.onclick = () => escribirnumero(btn5);
btn6.onclick = () => escribirnumero(btn6);
btn7.onclick = () => escribirnumero(btn7);
btn8.onclick = () => escribirnumero(btn8);
btn9.onclick = () => escribirnumero(btn9);
btn0.onclick = () => escribirnumero(btn0);
btnparen1.onclick = () => escribirnumero(btnparen1);
btnparen2.onclick = () => escribirnumero(btnparen2);
btnsuma.onclick = () => escribirnumero(btnsuma);
btnresta.onclick = () => escribirnumero(btnresta);
btnmult.onclick = () => escribirnumero(btnmult);
btndiv.onclick = () => escribirnumero(btndiv);
btnC.onclick = borraroperacion;
btnigual.onclick = operar;

// function escribirnumero(btn){
//     operacion += btn.innerText;
//     textbox.value = operacion;
// }
// function operar(){
//     textbox.value = eval(operacion);
//     operacion = textbox.value;
// }
function escribirnumero(btn){
    textbox.value += btn.innerText;
}
// function operar(){
//     operacion = eval(textbox.value);
//     textbox.value = operacion;
// }
function operar(){
    if(eval(textbox.value) == null){
        textbox.value = operacion;
    }
    else{
        operacion = eval(textbox.value);
        textbox.value = operacion;
    }
    
}
function borraroperacion(){
    if(textbox.value == ""){
        operacion = "";
    }
    else{
        textbox.value = "";
    }
}
// function borraroperacion(){
//         textbox.value = "0";

// }



