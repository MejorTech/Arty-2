const hambuger = document.querySelector('.humbuger');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav_list');

hambuger.addEventListener('click', () => { 
    navList.classList.toggle("active")
})

close.addEventListener('click', () => { 
    navList.classList.remove("active")
})

const swiper = new Swiper('.swiper', {
     autoplay : { 
         delay : 3000,
         disableOninteraction: false,
     },

    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },
   
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
  });


  // for Sliding Icons

  


   
