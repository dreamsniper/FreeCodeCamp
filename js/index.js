/*This is the code to slide the main navigation up and down.*/
$('#menu_button').click(function (evt) {
    console.log('evt', evt);
    evt.preventDefault();
    $('#main_nav').slideToggle();
}); //end menu_button

// this code taken from Sebastien on Stackoverflow:http:stackoverflow.com/questions/6461300/triggering-jquery-with-css-media-queries, it's been rearranged slightly
doneResizing();
var id;
$(window).resize(function () {
  clearTimeout(id);
  id = setTimeout(doneResizing, 0);
});

function doneResizing() {
  //this requires that you have Modernizr included BEFORE this file. Here is modernizr: http://modernizr.com/
  if (Modernizr.mq('screen and (min-width:45em)')) {
    $('#main_nav').show(); //make sure it is showing at larger sizes
  } else {
    //for screens below 45em in this example.
    $('#main_nav').hide(); //make sure hiding at smaller sizes
  }
} //end doneResizing

//This code was taken from https://jqueryui.com/accordion/#collapsible to createa collapsable accordion button
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
});
