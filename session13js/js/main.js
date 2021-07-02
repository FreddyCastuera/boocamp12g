/*usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-crear un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

/*crear un nuevo array con las iniciales de cada mentor*/
/*crear un nuevo array con los mentores cuyo nombre comience con vocal*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

/*crear un nuevo array con las iniciales de cada mentor*/
const iniciales = arr => arr.map(item =>item.name.split(" ")).map(item =>item.map(item=>item[0]) )
/*crear un nuevo array con los mentores cuyo nombre comience con vocal*/
const inicianConVocal = arr => arr.map(item => item.name).filter(item=>'aeiou'.includes(item[0].toLowerCase()))



/*1*/
function averagePerTopic(arr){
    let promedios ={HTML:0,CSS:0,JS:0,ReactJS:0}
    let topics = ["HTML","CSS","JS","ReactJS"]
    for(let k=0;k<arr.length;k++){
        for(let i=0;i<arr.length;i++){
            promedios[topics[k]]+= mentorsArray[i].scores[k].score*(1/mentorsArray.length)
        }
    }
    return promedios;
}

/*2*/
const averagePerPerson =arr => arr.map( ({name,scores}) => ({name,average:scores.map(item=>item.score).reduce((a,b)=>a+b)/scores.length}) )
/*3*/
const arrayOfStrings = arr => {  
    let averages =  averagePerPerson(arr)
    return averages.map(person => `ni monbre es: ${person.name} y mi promedio es: ${person.average}`)
}
/*4*/
const bestAverages = arr => {
    let averages =  averagePerPerson(arr)
    return averages.filter(person => person.averages>9.5);
}


/*1 segunda version*/
function averagePerTopic2(arr){
    let calificaciones=[]
    for(let persona of arr){
        calificaciones.push(...persona.scores)
    }
    let html = calificaciones.filter(item=>item.signature=="HTML")
    let css = calificaciones.filter(item=>item.signature=="CSS")
    let js = calificaciones.filter(item=>item.signature=="JS")
    let react = calificaciones.filter(item=>item.signature=="ReactJS")
    let htmlProm=0;
    html.forEach(item=>htmlProm+=(item.score/html.length));
    let cssProm=0;
    css.forEach(item=>cssProm+=(item.score/css.length));
    let jsProm=0;
    js.forEach(item=>jsProm+=(item.score/js.length));
    let reactProm=0;
    react.forEach(item=>reactProm+=(item.score/react.length));
    

    return [htmlProm,cssProm,jsProm,reactProm];
    
}


let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]

/*1 agrupar los nombres unicamente nombre de bandas sin repeticiones*/
/*2 agrupar las canciones de cada banda */
/*3 saber cual es la cancion (cancion y banda) con mas likes*/
/*4 saber cual es la cancion (cancion y banda) con mas reproducciones*/

/*1*/
function getBands(arr){
    let nombres = new Set();
    arr.forEach(item=> nombres.add(item.band.toLowerCase()));
    return [...nombres];
}
/*2*/
function songsByBand(arr,nombre){
    let canciones = new Set();
    let band = arr.filter(item=>item.band.toLowerCase()==nombre.toLowerCase());
    band.forEach(item => {
        canciones.add(item.name)
    })
    return [...canciones];
}
/*3*/
function mostLiked(arr){
    let maximo=0;
    let indexMaximo=0;
    arr.forEach((item,index)=>{
        if(item.statistics.likes>maximo){
            maximo=item.statistics.likes;
            indexMaximo=index;
        }
    })
    return `la cancion con mas reproducciones es ${arr[indexMaximo].name} de ${arr[indexMaximo].band}`
}
/*4*/
function mostReproductions(arr){
    let maximo=0;
    let indexMaximo=0;
    arr.forEach((item,index)=>{
        if(item.statistics.reproducciones>maximo){
            maximo=item.statistics.reproducciones;
            indexMaximo=index;
        }
    })
    return `la cancion con mas reproducciones es ${arr[indexMaximo].name} de ${arr[indexMaximo].band}`
}

/*2*/
function songsByBand(arr,nombre){
    let canciones = [];
    arr.forEach(item=>{
        if(item.band.toLowerCase()===nombre.toLowerCase()){
            canciones.push(item.name);
        }
    })
    return canciones;
}




function sumar(arr){
    let acumulator=0;
    arr.forEach(item=>{
        acumulator+=item;
    })
    return acumulator
}



