//start toggle navbar
let bar=document.getElementById('bar');
let sidebar=document.querySelector('.sidebar');
let close=document.getElementById('close');

bar.onclick=function(){
    sidebar.classList.add('side');  
  }
  close.onclick=function(){
    sidebar.classList.remove('side'); 
  }
  //end toggle navbar

  //remove sidebar when scroll to bottom
  let firstSection=document.getElementById('firstSection');
let mysidebar=document.getElementById('mysidebar');
window.addEventListener('scroll',()=>{
  if(window.scrollY >= (firstSection.offsetTop - 100)){
    console.log(';;;');
    mysidebar.classList.remove('side');
}
})
  //remove sidebar when click on body
document.onclick=function(e){
  if(e.target.id !== 'bar-icon'){
    mysidebar.classList.remove('side');
  }
}
 