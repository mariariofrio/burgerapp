// console.log ("css is a file")
$(document).ready(function(){
  console.log("ready1");
  // Make sure we wait to attach our handlers until the DOM is fully loaded.
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("yummy");
    console.log("newBurgers", newBurgers)
    
    var newBurgers = {
      name: $("#ca").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers,
     // url: "/burger_name/"
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
    $(".devourBtn").on("click", function(event) {
      event.preventDefault()
      console.log("HERE I AM")
      var id = $(this).data("id");
      let devoured = true;
      console.log("ready");
      let devourState = {
        devoured: devoured
      };
  
    $(function() {
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function(response) {
          console.log("it was yummy", response);
          // Reload the page to get the updated list
          debugger
          location.reload();
        }
      );
    });
    
      
        
        // Send the PUT request.
      
  });
  });
