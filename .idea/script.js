
var add = $("#add");
var cars = $(".cars");
var chosen = $(".chosen");
var deleteBtn = $("#delete")


function addDelete (button, from, to){
    button.click(function(){
       from.find("option:selected").hide();
        var selectedcar = from.find("option:selected").val();
        to.append($('<option>', {
            value: selectedcar,
            text: selectedcar
        }));


    });
}

addDelete(add, cars,chosen);
addDelete(deleteBtn, chosen,cars);









