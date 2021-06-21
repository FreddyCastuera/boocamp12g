function whatIs(str){
    str=str.toLowerCase();
    let vocal= 'aeiou';
    let consonante = 'bcdfghijklmnpqrstvwxyz';
    let numero = '0123456789';
    if(vocal.includes(str[0])) return 'vocal';
    else if(consonante.includes(str[0])) return 'consonante';
    else if(numero.includes(str[0])) return 'numero'
    else return 'especial'
}
function weirdShit(string){
    return string[0] == string[string.length-1];
}

(function(){
let string = prompt("ingresa el string");
alert(whatIs(string));

let string2 = prompt("ingresa el string");
alert(weirdShit(string2));
})()


/*tarea*/
/*1 hacer una funcion que cuente las vocales en un string*/
const vocalsCount = str => str.toLowerCase().split("").filter(item => "aeiouüéáíóú".includes(item)).length
/*2 hacer una funcion que cuenta las palabras en un string*/
const wordCount = str => str.trim().split(" ").length
/*3 verificar si un string es un palindromo*/
const invert = str => str.length==1?str:invert(str.slice(1))+str[0];
const isPalindrome = str => str.split(" ").join("") === invert(str.split(" ").join(""))
/*4 Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula */
const containsUpperCase = str => str.split("").map(item=>item.charCodeAt(0)).filter(item=> item>=65 && item<=90 ).length >0;
const containsNumbers = str =>  str.split("").filter(item => "0123456789".includes(item)).length>0
const test = str => str.length<8? false: !containsNumbers(str)? false: !containsUpperCase(str)?false:true;

/*crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx*/
const random = (n,offset) => Math.floor((Math.random()*(n-offset))+offset);
function randomString(n){
    let string="";
    let current =  String.fromCharCode(random(255,32));
    while(string.length<n){
        if(string.includes(current)){
            current =  String.fromCharCode(random(255,32));
        }
        else{
            string+=current;
        }
    }
    return string;
}


const random = (n,offset) => Math.floor((Math.random()*(n-offset))+offset);
function randomStringRec(n,str=""){
    let current = String.fromCharCode(random(122,65));
    if(n==0){
        return str;
    }
    while(str.includes(current)){
        current = String.fromCharCode(random(122,65));
    }
    return randomStringRec(n-1,str+=current);
}



function User(name,password){
    var _name;
    var _password;
    function setName(name){_name=name}
    function getName(){return _name} 
    function setPassword(password){_password=password}
    function getPassword(){return _password}
    setName(name);
    setPassword(password);
    let userAPI={
        setName:setName,
        getName:getName,
        setPassword:setPassword,
        getPassword:getPassword
    }

    return userApi;
}
