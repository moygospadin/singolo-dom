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

BUTTON.addEventListener('submit', ()=>{ 
  form.addEventListener('submit', (e)=> e.preventDefault());
   var subject =document.getElementById('subject').value.toString();
   var describe =document.getElementById('describe').value.toString();
   if(isEmpty(subject)) subject="Без темы" ;
   if(isEmpty(describe)) describe="Без описания" ;
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


}
/*-------------portfolio---------*/
/*const all=get.getElementById("all");
const web=get.getElementById("web");
const design=get.getElementById("design");
const artwork=get.getElementById("artwork");*/
const portfolio_nav=document.getElementById("portf");

portfolio_nav.addEventListener('click', (event)=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  event.target.classList.add('active_a');
  document.getElementById('portfolio_img').classList.add('revers');
  });
/*all.addEventListener('click', ()=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  document.getElementById('all').classList.add('active');
  });
web.addEventListener('click', ()=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  document.getElementById('web').classList.add('active_a');
  });

design.addEventListener('click', ()=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  document.getElementById('design').classList.add('active_a');
  });

portfolio.addEventListener('click', ()=>{ 
  portfolio_nav.querySelectorAll('nav>a').forEach(el =>el.classList.remove('active_a'));
  document.getElementById('portfolio').classList.add('active_a');
  });*/

















  /*---------------- конец ----------------*/
};
