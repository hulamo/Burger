// Este archivo es público y es el que está escuchando.
$(function() {

    // Add a new burger.
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
            
        };
        console.log("Nueva Hamburguesa");

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
        console.log("eat");
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        console.log("borrar");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})