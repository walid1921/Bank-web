// ! NAVBAR
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick= () => {
    menu.classList.toggle('bi-x-lg')
    navbar.classList.toggle('active')

}

window.onscroll = () =>{
    menu.classList.remove('bi-x-lg');
    navbar.classList.remove('active');
 
    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
    }else{
       document.querySelector('.header').classList.remove('active');
    }
 }


// ! Tabbed components Operations section

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container'); 
const tabContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause : 
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabContent.forEach(c => c.classList.remove('operations__content--active'));
  
    // Active tab
    clicked.classList.add('operations__tab--active');
  
    // Active content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  });

  
  //! Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
  
  