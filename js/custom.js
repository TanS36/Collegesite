<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event triggered");

  console.log(document.querySelector('#animated-svg path'));  
  
  anime({
      targets: '#animated-svg path',  
      strokeDashoffset: [anime.setDashoffset, 0], 
      easing: 'easeInOutSine', 
      duration: 2500,  
      loop: true, 
      direction: 'alternate'  
  });

  console.log("SVG animation should be running");
});


console.log(typeof anime);  


gsap.from("#designerImage", {
  duration: 2, 
  scale: 0, 
  ease: "bounce.out"
});

gsap.from(".work img", {
  duration: 1.5,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out",
  y: 50
});

  