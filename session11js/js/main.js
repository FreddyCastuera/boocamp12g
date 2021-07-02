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

    return userAPI;
}

/*4 Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula */
function test2(str){
    if(str.length>=8){
        let bandera=false;
        for(let i=0;i<str.length;i++){
            if('0123456789'.includes(str[i])){
                bandera=true;
            }
        }
        if(bandera){
            for(let i=0;i<str.length;i++){
                if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
                    return true;
                }
            }
        }
    }
    return false;
}

function test3(n,str){


}
/*crear una funcion que permita indicar la cantidad de koders a guardar que pida tanto kodes como
se indique y al final imprima el nombre del koder y su numero*/

let koders=[];
function printKoders(n){
    let current;
    for(let i=0;i<n;i++){
        current=prompt("ingresa el nombre");
        koders.push(current);
    }
    for(let i=0;i<n;i++){
        console.log(`Koder ${i}:  ${koders[i]} `);
    }
}

let size=prompt("ingresa el numero de koders");
printKoders(size);

function getKoder(index){
    return koders[index];
}
function sortKoders(){
    return koders.sort().reverse();
}
function formatKoders(){
    let kodersAbr=[];
    let abr;
    for(let i=0;i<koders.length;i++){
        abr= koders[i].split(" ").map(item=>item[0].toUpperCase()).join(". ");
        abr=`${koders[i]} (${abr})`;
        kodersAbr.push(abr);
    }    
    return kodersAbr;
}



/*crear una funcion que me permita saber nombre de el koder basado en su numero asignado*/
/*imprimir lista de koders en orden alfabetico decendente */
/*crear una nueva lista que contenga los nombre de los koders con la siguiente
estructura: koder 1: Israel Salinas Martinez (I. S. M.) 
            koder 2: Oscar Rodiguez Hernandez (O. R. H.)*/