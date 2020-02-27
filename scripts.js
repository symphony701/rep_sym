
var reproductor= document.querySelector('#reproductor');
reproductor.volume=0.5;
reproductor.play();
const adelante= document.querySelector('#adelante');
const atras= document.querySelector('#atras');
var a_rep=document.querySelector('#A_reproductor');
var t_rep=document.querySelector('#T_reproductor');
//referencia en desktop
const referencia_1= document.querySelector('#reference');
//referencia en movile
const referencia_2= document.querySelector('#referencia_mini');

//Tomo el contenedor del los items
const carousel = document.getElementById("carrusel");

//Funcion para agregar templates
function musicItemTemplate(image,name,artist,id){
    return (`
    <div class="carousel__item h-shakeFix" id="${id}">
        <div class="image">
            <img src="${image}" alt="${name}">
        </div>
        <div class="description">
          <p class="title">${name}</p>
          <p class="artist">${artist}</p>
        </div>
    </div>`)
    
}




//funcion asincronica que primero pedira el json de la api 
async function load(){
    const response = await fetch('https://raw.githubusercontent.com/symphony701/rep_sym/master/base.json')
    const data = await response.json()
///////////////////////////////////////////////////////////////
    function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  const music = await data.sings;
  const lista=[];
  function addEventClick($element,name,artist,image,audio,posicion) {
    $element.addEventListener('click', () => {
      
      
      
      lista.push(posicion)
       
      referencia_1.setAttribute("src", image);
      referencia_2.setAttribute("src", image);
      reproductor.setAttribute("src" , audio);
      t_rep.innerHTML=name;
      a_rep.innerHTML=artist;
    })
  }
  
    //aqui guardo todo el json en una constante llamada music

    

    //largo es la longitud del array json music

    var largo= (music.length)-1;

    //ale son numeros aleatorios 

    var ale=[];
    

    //llenaremos el array de numeros aleatorios con un for

    for(var j=0; j<=largo;j++){
        ale.push(j);
    }
    
    
 
    //Mezclamos el arreglo para conseguir numeros aleatorios de todo el json
    //la verdad de que no se como funciona esa wea para obtener numeros random ordenados pero sirve alv xd

    ale = ale.sort(function() {return Math.random() - 0.5});
  
    


    carousel.innerHTML+=`<h2>Recomended</h2>`;
    //Aqui uso un for para dibujar toda las canciones en cada elemento del array de los numeros aleatorios

    
    
    for(var i=0; i<=largo;i++){
        //numxd es un numero que ira cambiando conforme avance el for con cada elemento del array de ale(numeros aleatorios)
        var numxd = ale[i]
        var comparacion= ale[i-1]
      
        
        if(numxd !=comparacion){
        
        
          
          //el numero que salga en numxd se utilizara para elegir del json array de music
          const HTMLString =musicItemTemplate(music[numxd].image,music[numxd].name,music[numxd].artist,music[numxd].id);
          const movieElement = createTemplate(HTMLString);
          const best =`<h2>Best Songs</h2>`;
          const bestsongs= createTemplate(best);
  
          carousel.append(movieElement);
          addEventClick(movieElement,music[numxd].name,music[numxd].artist,music[numxd].image,music[numxd].audio,numxd);
          if(i==3){
             carousel.append(bestsongs);
          }
        }else{
          alert("Something is wrong!!!")
        }
    }

    reproductor.addEventListener('ended',function() {
      
       aleatorio = Math.random() * (largo - 0) + 0;
       aleatorio=Math.ceil(aleatorio);
      siguiente= music[aleatorio]
      lista.push(aleatorio)
      referencia_1.setAttribute("src", siguiente.image);
      referencia_2.setAttribute("src", siguiente.image);
      reproductor.setAttribute("src" , siguiente.audio);
      t_rep.innerHTML=siguiente.name;
      a_rep.innerHTML=siguiente.artist;
      
      
      

    });
    adelante.addEventListener("click",()=>{
      aleatorio = Math.random() * (largo - 0) + 0;
      aleatorio=Math.ceil(aleatorio);
      siguiente= music[aleatorio];
     lista.push(aleatorio)
         referencia_1.setAttribute("src", siguiente.image);
         referencia_2.setAttribute("src", siguiente.image);
         reproductor.setAttribute("src" , siguiente.audio);
         t_rep.innerHTML=siguiente.name;
         a_rep.innerHTML=siguiente.artist;
        
    });
    
    atras.addEventListener("click",()=>{
      lista.pop();
      var largo_lista=(lista.length);
      
      
      var reproducir = lista[(largo_lista)-1]
      var areproducir= music[reproducir];
      
      
     
      referencia_1.setAttribute("src", areproducir.image);
      referencia_2.setAttribute("src", areproducir.image);
      reproductor.setAttribute("src" , areproducir.audio);
      t_rep.innerHTML=areproducir.name;
      a_rep.innerHTML=areproducir.artist;
      
      
      
    });


    
    ;
    



  
   

    
}
load()

























