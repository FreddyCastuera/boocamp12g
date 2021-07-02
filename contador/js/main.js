let contador = {
    valor:0,
    incrementar(){
        $span.textContent = ++this.valor;
        if($span.classList.contains("rojo")){
           $span.classList.remove("rojo");
        }
        else if($span.classList.contains("negro")){
            $span.classList.remove("negro");
         }
        $span.classList.add("verde");
    },
    decrementar(){
        $span.textContent = --this.valor;
        if($span.classList.contains("verde")){
            $span.classList.remove("verde");
         }  
         else if($span.classList.contains("negro")){
            $span.classList.remove("negro");
         }
         $span.classList.add("rojo");
    },
    reset(){
        this.valor=0;
        $span.textContent = this.valor;
        if($span.classList.contains("verde")){
            $span.classList.remove("verde");
         }
         else if($span.classList.contains("rojo")){
            $span.classList.remove("rojo");
         }
        $span.classList.add("negro");
        
    }
}
let $span = document.querySelector("#number");
let $numero = document.createTextNode(contador.valor);
$span.appendChild($numero);
let $botonInc = document.querySelector("#increment");
$botonInc.addEventListener("click",contador.incrementar.bind(contador));
let $botonDec = document.querySelector("#decrement");
$botonDec.addEventListener("click",contador.decrementar.bind(contador));
let $botonRes = document.querySelector("#reset");
$botonRes.addEventListener("click",contador.reset.bind(contador));