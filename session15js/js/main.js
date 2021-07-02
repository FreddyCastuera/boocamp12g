//1.-
//Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejempo:
//input:ajaicoiashdfoqwemoc
//output:13
//2.-
// dado el siguiente array = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// usar reduce para obtener la siguiente información:
// -Un array con aquellas personas que votaron
// -la edad promedio de todos los votantes
// -un array con aquellos votantes que votaron y queson menores a 30 años
// -la edad promedio de los no votantes
// -el porcentaje de votantes vs no votantes
/*1*/
function contarCaracteres(string){
    let arreglo = [...string];
    let contador={}
    arreglo.reduce((accumulator,item)=>{
        contador[item] = contador[item]==undefined?1:contador[item]+1;
    },contador);
    let matrix = Object.entries(contador);
    let unicos = matrix.filter(item=>item[1]==1);
    return unicos.length;
}
const contarCaracteres2 = (string) => [...string].reduce((accum,item)=>{ return accum.includes(item)?accum:accum+item},"").length;


/*2*/
let array = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
/* -Un array con aquellas personas que votaron */
const losQueVotaron = arr => arr.reduce((accumulator,item)=>{
    return (item.voted)?[...accumulator,item]:accumulator
},[])
const losQueNoVotaron = arr => arr.reduce((accumulator,item)=>{
    return (!item.voted)?[...accumulator,item]:accumulator
},[])

// -la edad promedio de todos los votantes//
const edadPromedio = arr => arr.reduce((accumulator,item)=>{
    return accumulator+item.age
},0)/arr.length
// -un array con aquellos votantes que votaron y queson menores a 30 años//
const losQueVotaronYSonMayores = arr => arr.reduce((accumulator,item)=>{
    return (item.age<30 && item.voted==true)?[...accumulator,item]:accumulator
},[])
// -la edad promedio de los no votantes
const edadPromedioNoVotantes = arr => arr.reduce((accumulator,item)=>{
    return (item.voted)?accumulator+item.age:accumulator;
},0)/arr.length
// -el porcentaje de votantes vs no votantes//
function porcentajes(arr){
    let votaron = losQueVotaron(arr).length/arr.length;
    let noVotaron = losQueNoVotaron(arr).length/arr.length;
    return{
        votaron:`${(votaron*100).toFixed(2)}%`,
        no_votaron:`${(noVotaron*100).toFixed(2)}%`
    }
}