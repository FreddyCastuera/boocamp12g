function construir(muro){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            muro.construido = true;
            if(muro.construido){
                resolve(muro);
            }
            else{
                const error = new Error('no se pudo construir');
                reject(error)
            }
        },3000)
    })
}
function aplanar(muro){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            muro.aplando = true;
            if(muro.aplando){
                resolve(muro);
            }
            else{
                const error = new Error('no se pudo aplanar');
                reject(error)
            }
        },3000)
    })
}
function pintar(muro){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            muro.pintar = true;
            if(muro.pintar){
                resolve(muro);
            }
            else{
                const error = new Error('no se pudo pintar');
                reject(error)
            }
        },3000)
    })
}


/*const promesaDeConstruir = construir({})
promesaDeConstruir
    .then(muro =>{
        console.log('muro construido: ',muro)
        return aplanar(muro)
    })
    .then(muro => {
        console.log('muro aplanado: ',muro)
        return pintar(muro)
    })
    .then(muro=>{
        console.log('muro pintado: ',muro)
    })
    .catch((error)=>{
        console.log('ocurrio el error: ',error)
    })
*/
(async function procesar(){
    const promesaDeConstruir = await construir({});
    console.log(promesaDeConstruir);
    const promesaDeAplanar = await aplanar(promesaDeConstruir)
    console.log(promesaDeAplanar);
    const promesaDePintar = await pintar(promesaDeAplanar)
    console.log(promesaDePintar);
})()