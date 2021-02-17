// $("div").hover(function() {
//     $(this).css("background-color", "black");
// });


$("img").hover(
    function() {

        $(this).addClass("thumb-rollover");
    },
    function() {
        $(this).removeClass("thumb-rollover");
    }
);


$("img").click(function() {

    $("img").css("border", "2px solid black")
    $(this).css("border", "2px solid red")

});

$("img").click(function() {
    var nom_img = $(this).attr("src").split("/");
    console.log(nom_img[1]);
    nom_img = nom_img[1].split(".");
    $("#image-title").text(nom_img[0]);

    $("#main-image").css('display', 'block');

    console.log($('#detail').width())

    console.log("img1000" + "/" + nom_img[0] + "." + nom_img[1])
    if ($('#detail').width() >= 1000) {
        $("#main-image").attr("src", "img1000" + "/" + nom_img[0] + "." + nom_img[1]);

    } else if ($('#detail').width() >= 800) {
        $("#main-image").attr("src", "img800" + "/" + nom_img[0] + "." + nom_img[1]);
    } else {
        $("#main-image").attr("src", "img500" + "/" + nom_img[0] + "." + nom_img[1])
    }

    $("#detail").addClass("modal");
})