var cars = $("#test");



$(document).ready(function(){
    $("#add").click(function(){
        $(".cars").find("option:selected").hide();
       var selectedcar = $(".cars").find("option:selected").val();
        $('.chosen').append($('<option>', {
            value: selectedcar,
            text: selectedcar
        }));


    });
});



$(document).ready(function(){
    $("#delete").click(function(){
        $(".chosen").find("option:selected").hide();
        var selectedcar = $(".chosen").find("option:selected").val();
        $('.cars').append($('<option>', {
            value: selectedcar,
            text: selectedcar
        }));


    });
});



