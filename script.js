window.onload = function() {

  /*------------menu---------*/
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event)=>{ 
    MENU.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active'));
    event.target.classList.add('active');
    });


  
/*---------form-------------*/
function isEmpty(str) {
  if (str.trim() == '') 
    return true;
    
  return false;
}

const BUTTON=document.getElementById('form');
const CLOSE_BUTTON=document.getElementById('close-btn');
const form=document.getElementById('form');
form.addEventListener('submit', (e)=> e.preventDefault());
BUTTON.addEventListener('submit', ()=>{ 
 
   var subject =document.getElementById('subject').value.toString();
   var describe =document.getElementById('describe').value.toString();
   if(isEmpty(subject)) subject="Без темы"; else subject="Тема :"+subject;
   if(isEmpty(describe)) describe="Без описания"; else describe="Описание :"+describe;
    document.getElementById('result').innerText=subject;
   document.getElementById('result1').innerText=describe;
   document.getElementById('message-block').classList.remove('hidden');

    });
    

CLOSE_BUTTON.addEventListener('click', ()=>{ 
    document.getElementById('result').innerText='';
    document.getElementById('message-block').classList.add('hidden');
    });
/*------------------slider------------------*/
const next=document.getElementById("next");
const prev=document.getElementById("prev");

var slideIndex=1;
showSlides(slideIndex);

next.addEventListener('click',()=>{
  showSlides(slideIndex+=1);
  
});
prev.addEventListener('click',()=>{
  showSlides(slideIndex-=1);
 
});

function showSlides(n){
var i;
document.getElementById("con").classList.remove("blue_bg");
var slides=document.getElementsByClassName("item");
if(n>slides.length){
  slideIndex=1;
  
}
if(n<1){
  slideIndex=slides.length;
  
}
for(i=0;i<slides.length;i++){
  slides[i].style.display="none";
  
}
slides[slideIndex-1].style.display="block";

if (slideIndex==2) document.getElementById("con").classList.add("blue_bg");
}
const vertic=document.getElementById('vertic');
const horiz=document.getElementById('horiz');
const shadow_phone=document.getElementById('shadow_phone');
const shadow_phone2=document.getElementById('shadow_phone2');
horiz.addEventListener('click',()=>{
  if(shadow_phone2.style.display=="none") shadow_phone2.style.display="block";
  else shadow_phone2.style.display="none";
  
});
vertic.addEventListener('click',()=>{
  if(shadow_phone.style.display=="none") shadow_phone.style.display="block";
  else shadow_phone.style.display="none";
  
});

/*-------------portfolio---------*/

const images = document.querySelectorAll('#portfolio_img img');
const all = document.getElementById('all');
const webBtn = document.getElementById('web');
const design = document.getElementById('design');
const artwork = document.getElementById('artwork');
const portfolio_nav=document.getElementById("portf");

const changePositions = btnId => {
  let positioningArr = [];
  switch (btnId) {
    case 'all':
      positioningArr = [1,2,3,4,5,6,7,8,9,10,11,12];
      break;

    case 'web':
      positioningArr = [5, 1, 3, 9, 7, 6, 2, 12, 10, 11, 4, 8];
      break;

    case 'design':
      positioningArr = [6, 4, 9, 1, 3, 8, 2, 10, 12, 11, 5, 7];
      break;

    case 'artwork':
      positioningArr = [12,1,5,9,7,3,4,6,8,2,10,11];
      break; 

      throw new Error('Incorrect button id')
      break;
  }
  images.forEach((img, i) => {
    img.setAttribute('style', `order: ${positioningArr[i]}`);
  });
}

[webBtn, design,artwork,all].forEach((el) => {
  el.addEventListener('click', (e) => {
    changePositions(e.target.getAttribute('id'));
  });

 
});

portfolio_nav.addEventListener('click', (event)=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  event.target.classList.add('active_a');
});


const img_border = document.getElementById('portfolio_img');
img_border.addEventListener('click', (event)=>{ 
  if(event.target.classList=="img_border")  
  img_border.querySelectorAll('img').forEach(el =>el.classList.remove('img_border')); 
  else {img_border.querySelectorAll('img').forEach(el =>el.classList.remove('img_border'));
  event.target.classList.add('img_border');
  }

 
  console.log(event.target.classList);
  });






  /*---------------- конец ----------------*/
};
