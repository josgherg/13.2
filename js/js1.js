const MenuP = document.getElementById('menuprincipal');
const areaSalida = document.getElementById('salida');
const ImgC= document.getElementById('ppt');
const cont = document.getElementById('contenedor');
let tituloPrincipal = document.getElementById('titulo1');
let Iniciar = document.getElementById('iniciar');
let Reiniciar = document.getElementById('reiniciar');
let Finalizar = document.getElementById('finalizar');
let areaLetras = document.getElementById('letras');
let entrada;


let palavras = ['curso',
                'comida',
                'HTML',
                'ahorcado',
                'matematicas',
                'Linux',
                'LEXPIN',
                'programar'];


let max_int=6, j=0, letras = 0;
let palavra = [];
let letra = '', pos_letra, jugar= false, seguir = true, terminado=false, selec;

function ahorcado(e){
    let letra= e.value;
    pos_letra = selec.indexOf(letra.toLowerCase());
    if (pos_letra == -1){
        cont.classList.remove(`contenedor${j}`);
        cont.classList.add(`contenedor${++j}`);
        ImgC.src=`images/${j+1}.png`;
        cont.classList.add('enfatizada');
        setTimeout(()=>{
            cont.classList.remove('enfatizada');
        },1000);
        areaSalida.textContent=`La Letra ${letra} no esta en la palabra.\nRestan ${selec.length-letras} letras.\n ${palavra.join('')}`;
        areaLetras.removeChild(e);
    } 
    else {
        selec=selec.replace(letra,"*"); 
        palavra[pos_letra]=letra;
        letras++;
        if (letras==selec.length) seguir= false;
        areaSalida.textContent=`La Letra ${letra} esta en la palabra.\nRestan ${selec.length-letras} letras.\n ${palavra.join('')}`;
        areaLetras.removeChild(e);
    }
    
    if (j==max_int) seguir= false;    
    if((!seguir)) {
        if((letras==selec.length)){
            cont.classList.remove(`contenedor${j}`);
            cont.classList.add('contenedor0');
            ImgC.src=`images/1.png`;
            areaSalida.textContent+="\n\nEL JUEGO HA TERMINADO. Ganaste!!"
        }
        else{
            areaSalida.textContent+="\n\nEL JUEGO HA TERMINADO. Perdiste!!"
        }
    }   
}

Iniciar.addEventListener('click',()=>{
    if(!jugar){
        selec=palavras[Math.floor(Math.random()*palavras.length)].toLowerCase();
        let word=[];
        for (let i=0;i<selec.length+7; i++){
            word.push('');
        }
        for (let i=0; i<selec.length; i++){
            palavra.push('*');
            let cambiado=false;
            do{
                let comparar=Math.floor(Math.random()*word.length);
                if (word[comparar]==''){
                    word[comparar]=selec[i];
                    cambiado=true;       
                }
            }while(!cambiado);
        }
        for (let i=0; i<word.length; i++){
                if (word[i]==''){
                    word[i]= String.fromCharCode(97 + Math.floor(Math.random()*(123-97)));
                }
        }
        areaSalida.textContent="Comienza el juego\nPalabra de "+selec.length+" letras.\n"+palavra.join('')+"\nSuerte!!";
        let temporal=[];
        for ( let i=0; i<word.length; i++){
            let nuevoE=document.createElement('input');
            nuevoE.id = `letra${i}`;
            nuevoE.type = 'button';
            nuevoE.value = word[i];
            nuevoE.classList.add('boton2');
            temporal.push(nuevoE);
            areaLetras.appendChild(nuevoE);
        }
        entrada=Array.from(document.getElementsByClassName('boton2'));
        areaLetras.style.display='flex';
        jugar= true; 

        for (let i=0;  i <entrada.length; i++) {
            entrada[i].addEventListener('click',(e)=>{
                if(jugar){
                    if (seguir){
                        let regex=/^[A-Za-z]{1}$/;
                        if(e.target.value.match(regex)){
                            
                            ahorcado(entrada[i]);
                        }
                    }
                    else{
                        terminado=true;
                    }
                }
            })
        }
    }
});

Reiniciar.addEventListener('click',()=>{
    if(jugar){
        entrada=Array.from(document.getElementsByClassName('boton2'));
        palavra=[];
        for (let i=0;i<entrada.length; i++){
            areaLetras.removeChild(entrada[i]);
        }
        selec=palavras[Math.floor(Math.random()*palavras.length)].toLowerCase();
        let word=[];
        for (let i=0;i<selec.length+7; i++){
            word.push('');
        }
        for (let i=0; i<selec.length; i++){
            palavra.push('*');
            let cambiado=false;
            do{
                let comparar=Math.floor(Math.random()*word.length);
                if (word[comparar]==''){
                    word[comparar]=selec[i];
                    cambiado=true;       
                }
            }while(!cambiado);
        }
        for (let i=0; i<word.length; i++){
                if (word[i]==''){
                    word[i]= String.fromCharCode(97 + Math.floor(Math.random()*(123-97)));
                }
        }
        areaSalida.textContent="Comienza el juego\nPalabra de "+selec.length+" letras.\n"+palavra.join('')+"\nSuerte!!";
        let temporal=[];
        for ( let i=0; i<word.length; i++){
            let nuevoE=document.createElement('input');
            nuevoE.id = `letra${i}`;
            nuevoE.type = 'button';
            nuevoE.value = word[i];
            nuevoE.classList.add('boton2');
            temporal.push(nuevoE);
            areaLetras.appendChild(nuevoE);
        }
        entrada=Array.from(document.getElementsByClassName('boton2'));
        areaLetras.style.display='flex';
        jugar= true; 

        for (let i=0;  i <entrada.length; i++) {
            entrada[i].addEventListener('click',(e)=>{
                if(jugar){
                    if (seguir){
                        let regex=/^[A-Za-z]{1}$/;
                        if(e.target.value.match(regex)){
                            
                            ahorcado(entrada[i]);
                        }
                    }
                    else{
                        terminado=true;
                    }
                }
            })
        }
    
        jugar= true;
        cont.classList.remove(`contenedor${j}`);
        cont.classList.add('contenedor0');
        ImgC.src=`images/1.png`;
        jugar= true;
        letras=0;
        j=0;
        seguir=true;
        terminado=false;
    }
});

Finalizar.addEventListener('click',()=>{
    areaSalida.textContent+="\n\nTerminando el juego, hasta la próxima...";
    setTimeout(()=>{
        window.close();
    },3000);
})