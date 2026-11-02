document.addEventListener('DOMContentLoaded', () => {
  const btn_mobile = document.getElementById('btn_mobile');
  const mobile_menu = document.getElementById('mobile_menu');

  btn_mobile.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
    
    const icon = btn_mobile.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-x');
  });
  
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav_item');
  
  window.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 0 ){
      header.classList.add('ativo');
    } else {
      header.classList.remove('ativo');
    }
    
    let activeSectionIndex = 0;

    sections.forEach((section, i) => {
  
    const sectionTop = section.offsetTop - 96;
    const sectionBottom = sectionTop + section.offsetHeight;
  
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    activeSectionIndex = i;
    }
    });
  
    navItems.forEach(item => item.classList.remove('active'));

    if (navItems[activeSectionIndex]) {
      navItems[activeSectionIndex].classList.add('active');
    }
  
  }); 
  
  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
  });
  ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
  });
  
  ScrollReveal().reveal('#testimonials_chef', {
    origin: 'left',
    duration: 1000,
    distance: '20%',
  });
  ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
  });
  
}); 