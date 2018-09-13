$(function() {
    $(".devour").on("click", function(event){
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });

    $(".addBurger").on("click", function(event){
        var newBurger = {
            name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });
});