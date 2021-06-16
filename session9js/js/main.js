(function(){
let x = +prompt("ingresa un numero")
let y = +prompt("ingresa el otro numero")
window.alert(`la suma es: ${x+y}`)
window.alert(`la resta es: ${x-y}`)
window.alert(`la multiplicacion es: ${x*y}`)
if(y!=0){
    window.alert(`la division es: ${x/y}`)
}
let a = +prompt("ingresa el primer numero")
let b = +prompt("ingresa el segundo numero")
if(a>b) window.alert(`${a} es mayor que ${b}`)
else if(a<b) window.alert(`${a} es menor que ${b}`)
else window.alert(`${a} es igual ${b}`)

a = prompt("ingresa el primer caracter")
b = prompt("ingresa el segundo caracter")
if(a>b) window.alert(`${a} es mayor que ${b}`)
else if(a<b) window.alert(`${a} es menor que ${b}`)
else window.alert(`${a} es igual ${b}`)
})()