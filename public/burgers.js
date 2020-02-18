$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured")

        var newlyDevoured = {
            devoured: devoured
        };
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(function () {
            console.log("devoured", id);
            location.reload();
        });
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#brgr").val().trim(),
        };
        console.log(newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created new burger");
            location.reload();
        });
    });
});