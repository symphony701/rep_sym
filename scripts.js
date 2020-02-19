
var reproductor= document.querySelector('#reproductor');
var a_rep=document.querySelector('#A_reproductor');
var t_rep=document.querySelector('#T_reproductor');
const referencia_1= document.querySelector('#reference');
const referencia_2= document.querySelector('#referencia_mini');

//PARA LA CANCION FLAMINGO
var flamingo ={
    identify : document.querySelector("#flamingo"),
    title : document.querySelector('#T_flamingo').innerHTML,
    artist : document.querySelector('#A_flamingo').innerHTML
};    


flamingo.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/flamingo.jpeg");
    referencia_2.setAttribute("src", "./portadas/flamingo.jpeg");
    reproductor.setAttribute("src" , "./musicauu/flamingo.mp3");
    t_rep.innerHTML=flamingo.title;
    a_rep.innerHTML=flamingo.artist;
        
} )

//PARA LA CANCION ADAMAS
var adamas ={
    identify : document.querySelector("#adamas"),
    title : document.querySelector('#T_adamas').innerHTML,
    artist : document.querySelector('#A_adamas').innerHTML
};    


adamas.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/adamas.jpeg");
    referencia_2.setAttribute("src", "./portadas/adamas.jpeg");
    reproductor.setAttribute("src" , "./musicauu/adamas.mp3");
    t_rep.innerHTML=adamas.title;
    a_rep.innerHTML=adamas.artist;
        
} )

//PARA LA CANCION CHILDREN

var children ={
    identify : document.querySelector("#children"),
    title : document.querySelector('#T_children').innerHTML,
    artist : document.querySelector('#A_children').innerHTML
};    


children.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/children-bin.jpg");
    referencia_2.setAttribute("src", "./portadas/children-bin.jpg");
    reproductor.setAttribute("src" , "./musicauu/bin.mp3");
    t_rep.innerHTML=children.title;
    a_rep.innerHTML=children.artist;
        
} )
//PARA LA CANCION DAOKO

var daoko ={
    identify : document.querySelector("#daoko"),
    title : document.querySelector('#T_daoko').innerHTML,
    artist : document.querySelector('#A_daoko').innerHTML
};    


daoko.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/daoko.jpg");
    referencia_2.setAttribute("src", "./portadas/daoko.jpg");
    reproductor.setAttribute("src" , "./musicauu/DAOKO.mp3");
    t_rep.innerHTML=daoko.title;
    a_rep.innerHTML=daoko.artist;
        
} )


//PARA LA CANCION IGNITE
var ignite ={
    identify : document.querySelector("#ignite"),
    title : document.querySelector('#T_ignite').innerHTML,
    artist : document.querySelector('#A_ignite').innerHTML
};    


ignite.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/ignite.jpg");
    referencia_2.setAttribute("src", "./portadas/ignite.jpg");
    reproductor.setAttribute("src" , "./musicauu/sao-ii-op-ignite-full.mp3");
    t_rep.innerHTML=ignite.title;
    a_rep.innerHTML=ignite.artist;
    
} )

//PARA LA CANCION SENPAI HENTAI DUDE

var senpai ={
    identify : document.querySelector("#senpai"),
    title : document.querySelector('#T_senpai').innerHTML,
    artist : document.querySelector('#A_senpai').innerHTML
};    


senpai.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/senpai.jpg");
    referencia_2.setAttribute("src", "./portadas/senpai.jpg");
    reproductor.setAttribute("src" , "./musicauu/Senpai (feat. Hentai Dude).mp3");
    t_rep.innerHTML=senpai.title;
    a_rep.innerHTML=Senpai.artist;
    
} )

//PARA LA CANCION SLEEPING TOWN

var sleeping ={
    identify : document.querySelector("#sleeping_town"),
    title : document.querySelector('#T_sleeping').innerHTML,
    artist : document.querySelector('#A_sleeping').innerHTML
};    


sleeping.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/sleeping.jpeg");
    referencia_2.setAttribute("src", "./portadas/sleeping.jpeg");
    reproductor.setAttribute("src" , "./musicauu/featyama-official-video.mp3");
    t_rep.innerHTML=sleeping.title;
    a_rep.innerHTML=sleeping.artist;
    
} )

//PARA LA CANCION FIRE-BTS

var fire ={
    identify : document.querySelector("#fire"),
    title : document.querySelector('#T_fire').innerHTML,
    artist : document.querySelector('#A_fire').innerHTML
};    


fire.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/fire.jpg");
    referencia_2.setAttribute("src", "./portadas/fire.jpg");
    reproductor.setAttribute("src" , "./musicauu/bts-fire-color-coded-lyrics-hanromeng.mp3");
    t_rep.innerHTML=fire.title;
    a_rep.innerHTML=fire.artist;
    
} )

// PARA LA CANCION CRYING FOR RAIN
var crying_for_rain ={
    identify : document.querySelector("#crying_for_rain"),
    title : document.querySelector('#T_crying_for_rain').innerHTML,
    artist : document.querySelector('#A_crying_for_rain').innerHTML
};    


crying_for_rain.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/crying_for_rain.jpg");
    referencia_2.setAttribute("src", "./portadas/crying_for_rain.jpg");
    reproductor.setAttribute("src" , "./musicauu/crying_for_rain.mp3");
    t_rep.innerHTML=crying_for_rain.title;
    a_rep.innerHTML=crying_for_rain.artist;
    
} )

//PARA LA CANCION DOPPELGANGER


var doppelganger ={
    identify : document.querySelector("#doppelganger"),
    title : document.querySelector('#T_doppelganger').innerHTML,
    artist : document.querySelector('#A_doppelganger').innerHTML
};    


doppelganger.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/doppelganger.jpg");
    referencia_2.setAttribute("src", "./portadas/doppelganger.jpg");
    reproductor.setAttribute("src" , "./musicauu/eng-sub-hollowness-minami-music-video.mp3");
    t_rep.innerHTML=doppelganger.title;
    a_rep.innerHTML=doppelganger.artist;
    
} )


//PARA LA CANCION RISING HOPE


var rising_hope ={
    identify : document.querySelector("#rising_hope"),
    title : document.querySelector('#T_rising_hope').innerHTML,
    artist : document.querySelector('#A_rising_hope').innerHTML
};    


rising_hope.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/rising_hope.webp");
    referencia_2.setAttribute("src", "./portadas/rising_hope.webp");
    reproductor.setAttribute("src" , "./musicauu/LiSA - Rising Hope.mp3");
    t_rep.innerHTML=rising_hope.title;
    a_rep.innerHTML=rising_hope.artist;
    
} )

//PARA LA CANCION ASPHYXIA

var asphyxia ={
    identify : document.querySelector("#asphyxia"),
    title : document.querySelector('#T_asphyxia').innerHTML,
    artist : document.querySelector('#A_asphyxia').innerHTML
};    


asphyxia.identify.addEventListener('click',()=>{
    referencia_1.setAttribute("src", "./portadas/asphyxia.jpg");
    referencia_2.setAttribute("src", "./portadas/asphyxia.jpg");
    reproductor.setAttribute("src" , "./musicauu/Cö Shu Nie - Asphyxia.mp3");
    t_rep.innerHTML=asphyxia.title;
    a_rep.innerHTML=asphyxia.artist;
    
} )



