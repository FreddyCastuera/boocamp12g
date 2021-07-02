const nRandom = (arr) => Math.floor((Math.random()*arr.length))+1;
const elementAtIndex = (arr,index) => index +":"+arr[index]


/* */
let dataArray=[
    ["israel","Salinas Martinez"],
    ["David","Carmeno Morchelo"],
    ["Charles","Silva"],
    ["Michael","Villalba Sotelo"]
]

const objectify = arr => arr.map( ([firstName,lastName]) => ({firstName,lastName}))

const objectify2 = arr => {
    let newArr=[]
    arr.forEach( (item) =>{
        newArr.push({name:item[0],lastName:item[1]})
    })
    return newArr;
} 
function objectify3(arr){
    let newArr=[];
    let current;
    for(let i=0;i<arr.length;i++){
        newArr.push({name:arr[i][0],lastName:arr[i][1]})
    }
    return newArr;
}