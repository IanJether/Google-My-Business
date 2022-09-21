



const y = document.querySelector('iconarrow');

y.addEventListener('click', ()=>{

    let x = document.getElementById("tohidetext");
   
   
    if( x.style.display === 'none' ){
        x.style.display = 'block' 
     } else {
         x.style.display = 'none'
     }
})