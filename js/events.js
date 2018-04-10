//define functions here

//getIt
function getIt() {
  $("p").on("click", function() {
    window.alert("Hey!")
  })
  
}

//frameIt
function frameIt() {
  $("img").on('load', function() {
    $("img").addClass("tasty")
  })
}

//pressIt
function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
    }
  })
}

//submitIt
function submitIt() {
  
  const form = window.$('form')[0];
  
  $(form).on('submit', function() {
    window.alert('Your form is going to be submitted now.')
  })
  
  //$("#typing").on('submit', function() {
  //  window.alert('Your form is going to be submitted now')
  //  return;
  //})
}

$(document).ready(function(){

// call functions here
getIt()

frameIt()

pressIt()

submitIt()


});
