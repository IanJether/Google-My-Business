

    // the cookies floating window part 

    window.onload = function() {
        
        document.getElementById("cookies").style.display = 'block';

    }
    function jether() {
        document.getElementById("cookies").style.display = 'none';
    }
    
    
    

    // The questions answered part 

    function handleHiddenOne() {
        let x = document.getElementById("tohidepone");

        if(x.style.display === 'block'){
            x.style.display = 'none'
        }else{
            x.style.display = 'block'
        }
         console.log("hidden block one displayed");
    }
    
    function handlehiddentwo() {
         let y = document.getElementById("tohideptwo");
         
        if(y.style.display === 'block'){
            y.style.display = 'none'
        }else{
            y.style.display = 'block';
        }
         console.log("hidden block two displayed");
    }

    function handlehiddenthree() {
       let z =  document.getElementById("tohidepthree")
         
         if(z.style.display === 'block'){
            z.style.display = 'none'
         }else{
            z.style.display = 'block'
         }
         console.log("hidden block three displayed");
    }

    // the part where the button is pressed for the small screen container 

    function handleListButton(){

        let a = document.querySelector(".pbuttonicon").style.display = 'block';

    }

    function handleListButtonBack(){

        let b = document.querySelector(".pbuttonicon").style.display = 'none'

    }





