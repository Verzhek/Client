function esQuasiPerfectum(num){
    let divesores=[];
    for (let i=0;i<num;i++){
        if(num%i==0){
            divesores.push(i);
        }
    }
    let suma=0;
    divesores.forEach(n =>{
        suma+=n;
    });
    if(suma==num){
        return true;
    }
    return false;
}
let n1=parseInt(prompt("dame un numero"));
function printres(num){
    if(esQuasiPerfectum(num)){
        return "El numero: "+num+" es perfecto";
    }
    return "El numero: "+num+" no es perfecto";
}
document.getElementById("ans").insertAdjacentHTML("beforeend","<h3>"+printres(n1)+"</h3>");