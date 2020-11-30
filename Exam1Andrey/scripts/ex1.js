function espar(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
function esprimo(num) {
    for (var i = 2; i < num; i++) {
        if(i!=2){
            if (num % i == 0) {
              return false;
            }
        }
    }
    return true;
}
function operations(num1, num2, num3, num4, num5) {
    let result = "";
    let checker = [num1, num2, num3, num4, num5];
    let max = 0;
    let min = num5;
    let med = 0;
    let pars = 0;
    let primos = 0;
    checker.forEach(num => {
        med += num;
        if(max<num){
            max=num;
        }
        if(num<min){
            min=num;
        }
        if (espar(num)) {
            pars++;
        }
        if(esprimo(num)){
            primos++;
        }
    });
    med = Math.round (med/ checker.length);
    result +="El mayor de los numeros recibidos es: "+max+"</br>";
    result +="El menor de los numeros recibidos es: "+min+"</br>";
    result +="La media de la sucesion es: "+ med+"</br>";
    result +="La cantidad de numeros pares es: "+pars+"</br>"
    result +="La cantidad de numeros primos es: "+primos+"</br>"
    return result;
}
let n1=parseInt(prompt("dame un numero"));
let n2=parseInt(prompt("dame otro numero"));
let n3=parseInt(prompt("dame otro numero"));
let n4=parseInt(prompt("dame otro numero"));
let n5=parseInt(prompt("dame otro numero"));
document.getElementById("ans").insertAdjacentHTML("beforeend","<h3>"+operations(n1,n2,n3,n4,n5)+"</h3>");
