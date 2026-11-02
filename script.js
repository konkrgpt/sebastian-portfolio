(function(){
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
  var btn=document.querySelector('.menu-toggle'), nav=document.getElementById('site-nav');
  if(!btn||!nav){return;}
  function close(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){close();}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();}});
})();
