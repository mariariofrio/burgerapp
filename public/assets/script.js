// console.log ("css is a file")
$(document).ready(function(){
  console.log("ready1");
  // Make sure we wait to attach our handlers until the DOM is fully loaded.
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("yummy");
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "PUT",
      data: newBurgers,
      url: "/burger_name/"
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
    var newBurgers = {
      name: $("#ca").val().trim()
    };
  });

  $(".devourBtn").on("submit", function(event) {
    var id = $(this).data("id");
    let devoured = true;
    console.log("ready");
    let devourState = {
      devoured: devoured
    };

  $(function() {
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed sleep to", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
    
      
      // Send the PUT request.
    
});