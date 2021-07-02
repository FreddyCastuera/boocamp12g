let  killers = ["jason","freddy","chuky"];
let $body = document.querySelector('body');
let $parrafo;
let $texto;
killers.forEach(item=>{
    $parrafo = document.createElement('p');
    $texto = document.createTextNode(item);
    $parrafo.appendChild($texto);
    $body.appendChild($parrafo)
    }
)

let $img = document.createElement('img');
$img.src= "https://picsum.photos/id/237/200/300";
let $a = document.createElement('a');
$a.appendChild($img);
let $li = document.createElement('li');
$li.appendChild($a);
let $ul = document.createElement('ul');
$ul.appendChild($li);
$body.appendChild($ul);