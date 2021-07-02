const longest = (str1,str2)  => str1.length > str2.length? `\'${str1}\' es mayor`: str1.length < str2.length ? `\'${str2}\' es mayor`: "ambos string son iguales"
const moxitoTransform = str => str.split("").map((value,index)=>index%2==0? value.toUpperCase(): value.toLowerCase()).join("")
const invert = str => str.length==1?str:invert(str.slice(1))+str[0];




(function(){
    let string1 = prompt("ingresa el primer string");
    let string2 = prompt("ingresa el segundo string");
    window.alert(longest(string1,string2));
    let toTrasform = prompt("ingresa el estring que quieres transformar");
    window.alert(moxitoTransform(toTrasform));
    let toInvert = prompt("ingresa el string que deseas invertir");
    window.alert(invert(toInvert));
})()