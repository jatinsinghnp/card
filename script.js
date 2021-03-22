const pannel=document.querySelectorAll('.pannel')

pannel.forEach((pannel)=>{
    pannel.addEventListener('click',()=>{

    removeActiveClasses()
         pannel.classList.add('active') 
    })
})

function closer (){

       if(pannel>=ActiveXObject){
           console.log(ActivateXobject);

       }
}


function removeActiveClasses(){
         pannel.forEach(pannel=>{
             pannel.classList.remove('active');
         })
}

