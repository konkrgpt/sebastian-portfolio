(function(){
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
  var btn=document.querySelector('.menu-toggle'), nav=document.getElementById('site-nav');
  if(!btn||!nav){return;}
  function close(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){close();}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();}});
})();

(function(){
  var root=document.querySelector('[data-workflow-carousel]'); if(!root){return;}
  var slides=Array.prototype.slice.call(root.querySelectorAll('[data-workflow-slide]'));
  var dots=Array.prototype.slice.call(root.querySelectorAll('[data-carousel-dot]'));
  var counter=root.querySelector('[data-carousel-counter]'),play=root.querySelector('[data-carousel-play]');
  var controls=root.querySelector('[data-carousel-controls]'),announce=root.querySelector('[data-carousel-announcement]');
  if(!slides.length||!play||!controls){return;}
  var current=0,timer=null,hovered=false,focused=false,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function stop(){if(timer){window.clearInterval(timer);timer=null;}}
  function schedule(){stop();play.textContent=paused?'Play slideshow':'Pause slideshow';if(!paused&&!hovered&&!focused&&!document.hidden){timer=window.setInterval(function(){show(current+1,false);},6000);}}
  function show(index,manual){current=(index+slides.length)%slides.length;slides.forEach(function(slide,i){slide.hidden=i!==current;});dots.forEach(function(dot,i){dot.setAttribute('aria-pressed',i===current?'true':'false');});counter.textContent=(current+1)+' / '+slides.length;if(manual){paused=true;announce.textContent=slides[current].getAttribute('aria-label');schedule();}}
  root.querySelector('[data-carousel-prev]').addEventListener('click',function(){show(current-1,true);});
  root.querySelector('[data-carousel-next]').addEventListener('click',function(){show(current+1,true);});
  dots.forEach(function(dot,i){dot.addEventListener('click',function(){show(i,true);});});
  play.addEventListener('click',function(){paused=!paused;schedule();});
  root.addEventListener('mouseenter',function(){hovered=true;stop();});root.addEventListener('mouseleave',function(){hovered=false;schedule();});
  root.addEventListener('focusin',function(){focused=true;stop();});root.addEventListener('focusout',function(e){if(!root.contains(e.relatedTarget)){focused=false;schedule();}});
  root.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();show(current+1,true);}else if(e.key==='ArrowLeft'){e.preventDefault();show(current-1,true);}});
  var touchX=null;root.addEventListener('touchstart',function(e){touchX=e.changedTouches[0].clientX;},{passive:true});root.addEventListener('touchend',function(e){if(touchX===null){return;}var dx=e.changedTouches[0].clientX-touchX;touchX=null;if(Math.abs(dx)>50){show(current+(dx<0?1:-1),true);}},{passive:true});
  document.addEventListener('visibilitychange',schedule);
  controls.hidden=false;show(0,false);schedule();
})();
