var reproductor= document.querySelector('#reproductor')
const flamingo= document.querySelector("#flamingo");

const referencia_1= document.querySelector('#reference');
const referencia_2= document.querySelector('#referencia_mini');

flamingo.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/flamingo.jpeg");
    referencia_2.setAttribute("src", "./portadas/flamingo.jpeg");
    reproductor.setAttribute("src" , "./musicauu/flamingo.mp3");
} )