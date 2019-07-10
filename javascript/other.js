
window.onscroll = function(){
    stickyNav();
}

var navigation =  document.getElementById("main-nav");
var sticky = navigation.offsetTop;

// console.log(sticky);
function stickyNav(){
   
    if(window.pageYOffset >= sticky){
        navigation.classList.add("sticky");
    }else{
        navigation.classList.remove("sticky");
    }
}
 
window.sr = ScrollReveal();
// sr.reveal('.main-navigation', {
//   duration: 2000,
//   origin: 'bottom'
// });
sr.reveal('.clipper', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});
sr.reveal('.boxClipperLeft', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.boxClipperRight', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });
  sr.reveal('#projectgrid2 div', {
    duration: 2000,
    origin: 'right',
    distance: '-500px',
  });
sr.reveal('#projectgrid1 div', {
  duration: 2000,
  origin: 'left',
  distance: '-500px',
});
sr.reveal('.info-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});

