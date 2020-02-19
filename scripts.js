
var flamingo ={
    identify : document.querySelector("#flamingo"),
    title : document.querySelector('#T_flamingo').innerHTML,
    artist : document.querySelector('#A_flamingo').innerHTML
};



var reproductor= document.querySelector('#reproductor');
var t_rep=document.querySelector('#A_reproductor');
var t_art=document.querySelector('#T_reproductor');
const referencia_1= document.querySelector('#reference');
const referencia_2= document.querySelector('#referencia_mini');



flamingo.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/flamingo.jpeg");
    referencia_2.setAttribute("src", "./portadas/flamingo.jpeg");
    reproductor.setAttribute("src" , "./musicauu/flamingo.mp3");
    t_rep.innerHTML=flamingo.title;
    t_art.innerHTML=flamingo.artist;
    
    
} )





