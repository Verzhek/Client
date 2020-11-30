
        function pyramid(size,filler){
            let result="";
            for(var i=size;i>0;i--){
            result+="<tr>"
                for(var k=size;k>0;k--){
                    result+="<td>"+filler+"</td>";
                }
            result+="</tr>";
            size--;
            console.log(result.length)
            }
            return result;
        }
        let n1=parseInt(prompt("dame el tamaño de piramide"));
        let letter=prompt("dame el contenido");
        document.getElementById("ans").insertAdjacentHTML("beforeend","<table>"+pyramid(n1,letter)+"</table>");
    