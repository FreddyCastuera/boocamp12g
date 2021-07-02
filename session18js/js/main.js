let $boton = document.querySelector("#boton");
let $nombre =document.getElementById("nombre");
let $apellido = document.getElementById('apellidos');
let $tabla = document.querySelector('table');
let $tablaHeader = document.querySelector('#table-header');
let $tablaBody = document.querySelector("tbody");
let personas = [];
let contador = 0;
$boton.addEventListener('click',()=>{
    if($tablaHeader.classList.contains('d-none')){
        $tablaHeader.classList.remove('d-none');
    }
    if($nombre.value && $apellido.value){
    personas.push({index:contador++,nombre:$nombre.value,apellido:$apellido.value});
    createRow(personas[personas.length-1].index,personas[personas.length-1].nombre,personas[personas.length-1].apellido)
    }
    console.log(personas);

})

function createRow(index,name,lastName){
    let $row = document.createElement('tr');
    let $index = document.createElement('td');
    let $name = document.createElement('td');
    let $lastName = document.createElement('td');
    let $deleteButton = creatDeleteButton(index);
    let $deleteButtonCell = document.createElement('td');
    let $updateButton = creatUpdateButton(index);
    let $updateButtonCell = document.createElement('td');

    $deleteButtonCell.appendChild($deleteButton);
    $updateButtonCell.appendChild($updateButton);

    $index.textContent = index;
    $name.textContent = name;
    $lastName.textContent = lastName;
    $row.appendChild($index);
    $row.appendChild($name);
    $row.appendChild($lastName);
    $row.appendChild($deleteButtonCell);
    $row.appendChild($updateButtonCell);
    $row.setAttribute("id",index);
    $tablaBody.appendChild($row);
}
function creatDeleteButton(index){
    let $deleteButton = document.createElement('button');
    $deleteButton.textContent = "eliminar";
    $deleteButton.setAttribute("id",index);
    $deleteButton.classList.add("btn","btn-danger");
    $deleteButton.addEventListener("click",(event)=>{
        deleteByIndex(event.target.id);
    })
    return $deleteButton;
}
function deleteByIndex(index){
    let $row = document.getElementById(index.toString());
    personas.splice(index-contador,1);
    $tablaBody.removeChild($row);
    console.log(personas);
}
function creatUpdateButton(index){
    let $updateButton = document.createElement('button');
    $updateButton.textContent = "actualizar";
    $updateButton.setAttribute("id",index);
    $updateButton.classList.add("btn","btn-warning");
    $updateButton.addEventListener("click",(event)=>{
        
        updateByIndex(event.target.id,$nombre.value,$apellido.value);
    })
    return $updateButton;
}
function updateByIndex(index,name,lastName){
    let $row = document.getElementById(index.toString());
    $row.children[1].textContent = name;
    $row.children[2].textContent = lastName;
    personas[index].nombre=name;
    personas[index].apellido=lastName;
}


