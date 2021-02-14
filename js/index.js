let aboutTitle = document.querySelector('.about__title')
let last_known_scroll_position = 0;
let ticking = false;

function titleTrackingIn() {
  aboutTitle.classList.add('tracking-in-expand')
}

window.addEventListener('scroll', function() {
  last_known_scroll_position = window.scrollY;

      if(last_known_scroll_position>250){
        titleTrackingIn()
      }
    })

