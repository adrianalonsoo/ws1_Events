//Ej1
/*
window.onload=()=>{
    const btn = document.getElementById("btn");

    btn.addEventListener("click", ()=>{
        alert("alerta");
    });
}


*/



//Ej2
/*
window.onload=()=>{
    document.body.addEventListener("mousemove",pintar);
}

function pintar(e){
    console.log(e.clientX);
    console.log(e.clientY);
}

*/
//Ej4


/*
window.onload=()=>{
    tabla;
    document.body.addEventListener("mouseover",pinta);
}

function tabla(e){
    e.getElementById("tabla");
}

function pinta(e){
    if(e.shiftKey==true){
        e.target.style.backgroundColor("red");
    }
    else{
        if(e.ctrlKey==true){
            e.target.style.backgroundColor("blue");
        }
    }
}
*/    
    

//Ej5

/* 
window.onload=()=>{
    tabla;
    document.body.addEventListener("mouseover",pinta);
}

function tabla(e){
    e.getElementById("tabla");
}

function pinta(e){
    if(e.shiftKey==true){
        e.target.style.backgroundColor("red");
    }
    else{
        if(e.ctrlKey==true){
            e.target.style.backgroundColor("blue");
        }
        else{
            if(e.altKey==true){
                e.target.style.backgroundColor("white");
            }
        }
        
    }
}

*/





//Ej9
/*
window.onload = () =>{
    
    const imagen = document.querySelector('img');
    moverImg=false;
    imagen.addEventListener("click",(e)=>{
        console.log("click");
        moverImg=!moverImg;
    })

    document.addEventListener("mousemove",(e)=>{
        if(moverImg){
            imagen.style.left = e.clientX + "px";
            imagen.style.top = e.clientY + "px";

        }
        console.log(e.clientX);
    })
}


*/




//Ej10
/*
window.onload = () =>{
    imagenSeleccionada=null;
    const imagenes = document.querySelectorAll('img');
    moverImg=false;
    foreach(imagenes){
        imagenes.addEventListener("click",(event)=>{
            moverImg=!moverImg;
            imagenseleccionada=event.target
            offsetLeft=event.clientX-event.target.offsetLeft
        })
        
    }
    

    document.addEventListener("mousemove",(e)=>{
        if(moverImg){
            imagenes.style.left = e.clientX + "px";
            imagenes.style.top = e.clientY + "px";
            
        }
        console.log(e.clientX);
    })
}
*/