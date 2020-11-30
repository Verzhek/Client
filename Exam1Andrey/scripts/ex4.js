function megaGression(pe,fact,cant){
    let preresult=[];
    let result="";
    let count=0;
    for(let i=0;i<cant;i++){
       
        if(i==0){
            preresult.push(pe);
            result +=pe+";";
        }else{
            let num=preresult[i-1]*fact;
            preresult.push(num);
            result+= num+";";
        }
        if(count==4){
            result+="</br>";
            count=0;
        }
        count++;
    }
    return result;
}
let n1=parseFloat(prompt("dame el primer numero de la sucesion"));
let n2=parseFloat(prompt("dame el numero factor"));
let n3=parseFloat(prompt("dame la cantida de numeros de la sucesion qu quire ver"));
document.getElementById("ans").insertAdjacentHTML("beforeend","<h3>"+megaGression(n1,n2,n3)+"</h3>");
