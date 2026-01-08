(function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', ()=>{
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    // close on link click (mobile)
    links.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        if(links.classList.contains('open')){
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', '메뉴 열기');
        }
      });
    });
  }

  // Reveal on scroll
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if('IntersectionObserver' in window && els.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, {threshold: .12});
    els.forEach(el=>io.observe(el));
  } else {
    els.forEach(el=>el.classList.add('revealed'));
  }
})();