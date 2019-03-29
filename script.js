//create a click handler for the Post button.
$ ("button").click (function(){
    var odieText = $(".iptOdie").val();
    console.log(odieText); 
    $(".target").append("<div class='row'><div class='avatar odie'></div><div class='comment'>" +odieText+"</div></div>");
});      







// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
});