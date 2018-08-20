$(document).ready(function(){
//Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

  // Fade Out About container when Home is clicked
//   $("#flip, .navbar-brand").on("click", function(e) {
//       e.preventDefault();
//       var targetOne = $(this).attr("href");
//       $(targetOne).fadeIn("slow");
//       $("#about").fadeOut("fast");
//       // $("#flip").addClass("active");
//
//   });
//
//   // Fade Out Home container when About is clicked
//
//   $("#flop").on("click", function(g) {
//       g.preventDefault();
//       var targetTwo = $(this).attr("href");
//       $(targetTwo).fadeIn("slow");
//       $("#home").fadeOut("fast");
//
//   });
//
//   // Activate the correct Navbar Icon
//   $( '.navbar-nav a, .navbar-brand' ).on( 'click', function () {
// 	   $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	    $( this ).parent( 'li' ).addClass( 'active' );
// });
})
