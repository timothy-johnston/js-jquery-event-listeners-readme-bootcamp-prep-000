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
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now')
  })
}

$(document).ready(function(){

// call functions here
getIt()

frameIt()

pressIt()

submitIt()


});
