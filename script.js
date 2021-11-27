// Side NAvication Function
function closeNav(){
    document.getElementById('side-nav').style.marginRight = "-200px";
  }
  
  function openNav(){
    document.getElementById('side-nav').style.marginRight = "0";
  }
  
  // Scholl to top function
  var mybutton = document.getElementById("myBtn");
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
  }
  function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onload = preventDefault();