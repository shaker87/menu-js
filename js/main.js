const close = document.getElementsByClassName('close-icon')
const menuToggle = document.getElementById('main_nav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
close[0].addEventListener('click', () => { bsCollapse.toggle() })



$(function(){
  // mobile menu slide from the left
  $('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 280);
  });
})




var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
