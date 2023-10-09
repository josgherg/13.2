const MenuP = document.getElementById('menuprincipal');
const areaSalida = document.getElementById('salida');
const ImgC= document.getElementById('ppt');
const cont = document.getElementById('contenedor');
let tituloPrincipal = document.getElementById('titulo1');
let Iniciar = document.getElementById('iniciar');
let Reiniciar = document.getElementById('reiniciar');
let Finalizar = document.getElementById('finalizar');
let areaLetras = document.getElementById('letras');

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

function ahorcado(letra){
    pos_letra = selec.indexOf(letra);
    if (pos_letra == -1){
        cont.classList.remove(`contenedor${j}`);
        cont.classList.add(`contenedor${++j}`);
        ImgC.src=`images/${j+1}.png`;
        cont.classList.add('enfatizada');
        setTimeout(()=>{
            cont.classList.remove('enfatizada');
        },1000);
        areaSalida.textContent=`La Letra ${letra} no esta en la palabra.\nRestan ${selec.length-letras} letras.\n\n ${palavra.join('')}`;
    } 
    else {
        selec=selec.replace(letra,"*"); 
        palavra[pos_letra]=letra;
        letras++;
        if (letras==selec.length) seguir= false;
        areaSalida.textContent=`La Letra ${letra} esta en la palabra.\nRestan ${selec.length-letras} letras.\n\n ${palavra.join('')}`;
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
        console.log(selec);
        let word=[];
        for (let i=0;i<selec.length*2; i++){
            word.push('');
        }
        for (let i=0; i<selec.length; i++){
            
            let cambiado=false;
            do{
                let comparar=Math.floor(Math.random()*word.length);
                if (word[comparar]==''){
                    word[comparar]=selec[i];
                    cambiado=true;
                    console.log('secambio')
                    console.log(word);
                }
            }while(!cambiado);
    
        }
        for (let i=0; i<word.length; i++){
                if (word[i]==''){
                    word[i]= String.fromCharCode(97 + Math.floor(Math.random()*(123-97)));
                    console.log(word);
                }
    
    
        }

        //palavra=word;
        //areaSalida.textContent="Comienza el juego\nPalabra de "+selec.length+" letras.\n\n"+palavra.join('')+"\n\nSuerte!!";
        jugar= true;
    }
    
});

Reiniciar.addEventListener('click',()=>{
    if(jugar){
        selec=palavras[Math.floor(Math.random()*palavras.length)].toLowerCase();
        console.log(selec);
        let word=[];
        for (let i=0;i<selec.length*2; i++){
            word.push('');
        }
        for (let i=0; i<selec.length; i++){
            
            let cambiado=false;
            do{
                let comparar=Math.floor(Math.random()*word.length);
                if (word[comparar]==''){
                    word[comparar]=selec[i];
                    cambiado=true;
                    console.log('secambio')
                    console.log(word);
                }
            }while(!cambiado);
    
        }
        for (let i=0; i<word.length; i++){
                if (word[i]==''){
                    word[i]= String.fromCharCode(97 + Math.floor(Math.random()*(123-97)));
                    console.log(word);
                }
    
    
        }
        console.log(word);
        //palavra=word;
        //areaSalida.textContent="Comienza el juego\nPalabra de "+selec.length+" letras.\n\n"+palavra.join('')+"\n\nSuerte!!";;
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

document.addEventListener('keydown',(letra)=>{
    if(jugar){
        if (seguir){
            let regex=/^[A-Za-z]{1}$/;
            if(letra.key.match(regex)){
                console.log(letra.key);
                ahorcado(letra.key.toLowerCase());
            }
        }
        else{
            terminado=true;
        }
    }
});

Finalizar.addEventListener('click',()=>{
    areaSalida.textContent+="\n\nTerminando el juego, hasta la próxima...";
    setTimeout(()=>{
        window.close();
    },3000);
})