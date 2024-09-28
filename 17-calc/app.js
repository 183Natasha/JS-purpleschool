'use strict'

let input_1;
let input_2;

function numClean() {
    document.querySelector(".input-1").value = "";
    document.querySelector(".input-2").value = "";
    document.querySelector(".result").innerText = "result";
}

function controlForm(el, el2){
    if (el=='' || el2==''){
        let isError = confirm('Удалить элемент? Ошибка ввода: передано пустое значение.')   
        if (isError) {
            numClean();
        }  else  {
            document.querySelector(".result").innerText = ('Ошибка ввода: передано пустое значение.') 
        } 
    }     else{
            if (isNaN(el) || isNaN(el2)){
            let isError = confirm('Удалить элемент? Ошибка ввода: вы ввели не число')   
            if (isError) {
                numClean()
            }  else  {
                document.querySelector(".result").innerText = ("Ошибка ввода: вы ввели не число") 
            } 
        }   
    }
    
}


document.querySelector(".plus").addEventListener('click', function () { 
    input_1 = (document.querySelector(".input-1").value);
    input_2 = (document.querySelector(".input-2").value);    
    document.querySelector(".result").innerText = ("=" + (+input_1 + +input_2));
    controlForm(input_1, input_2);
})

document.querySelector(".minus").addEventListener('click', function () {
    input_1 = (document.querySelector(".input-1").value);
    input_2 = (document.querySelector(".input-2").value);    
    document.querySelector(".result").innerText = ("=" + (+input_1 - +input_2));
    controlForm(input_1, input_2)
})

document.querySelector(".multiply").addEventListener('click', function () {
    input_1 = (document.querySelector(".input-1").value);
    input_2 = (document.querySelector(".input-2").value);    
    document.querySelector(".result").innerText = ("=" + (+input_1 * +input_2));
    controlForm(input_1, input_2)
})

document.querySelector(".split").addEventListener('click', function () {
    input_1 = (document.querySelector(".input-1").value);
    input_2 = (document.querySelector(".input-2").value);    
    document.querySelector(".result").innerText = ("=" + (+input_1 / +input_2));
    controlForm(input_1, input_2)
})

document.querySelector(".clean").addEventListener('click', function () {
    numClean()
})