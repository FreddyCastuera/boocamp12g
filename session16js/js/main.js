let dataArray = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]
function Mentor(name,lastName,html,css,js){
  this.name=name;
  this.lastName=lastName;
  this.html=sanitizar(html);
  this.css=sanitizar(css);
  this.js=sanitizar(js);
  this.abbr=createAbbr(this.name,this.lastName);
  function createAbbr(name,lastName){
    let fullName = name.trim()+" "+lastName.trim()
    return fullName.split(" ").reduce( (accum,item,index,arr) =>  (index!=arr.length-1)?accum+item[0].toUpperCase()+".":accum+item[0].toUpperCase(),"")
  };
  function sanitizar(string){
      let sanitizada = [...string].reduce((accum,item)=>{
        return (!isNaN(parseInt(item)))?accum+item:accum;},"")
    return parseInt(sanitizada);  
    }
}
Mentor.prototype = {
    saludar:function(){
    return `hola, soy ${this.name} ${this.lastName}`
    },
    getHTML:function(){
        return this.html
    },
    getCSS:function(){
        return this.css
    },
    getJS:function(){
        return this.js
    },
    promedio:function(){
        return parseInt(((this.html+this.css+this.js)/3).toFixed(2))
    }   
}
let mentosArray = dataArray.map(item=>new Mentor(...item))
mentosArray




