window.onload=function(){
    const  mobileBtn = document.getElementById('menuCta');
     const navBtn = document.querySelector('nav');
     const  mobileBtnExit = document.getElementById('exitCta');
   
      mobileBtn.addEventListener('click', menuBar);
      mobileBtnExit.addEventListener('click', menuExit );

      
   function menuBar(){
       navBtn.classList.add('open-nav')
   }
   function menuExit(){
       navBtn.classList.remove('open-nav')
   }
}