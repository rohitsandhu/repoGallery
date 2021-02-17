$(".img200").hover(
    function() {
        $(this).addClass("thumb-rollover");
    },
    function() {
        $(this).removeClass("thumb-rollover");
    }
);


$(".img200").click(function() {

    $(".img200").removeClass("selected")
    $(this).addClass("selected")

});


$(".img200").click(function() {
    var nom_img = $(this).attr("src").split("/");
    console.log(nom_img[1]);
    nom_img = nom_img[1].split(".");
    $("#image-title").text(nom_img[0]);

    $("#main-image").attr("src", "imatges/" + nom_img[0] + "." + nom_img[1])
    $('#main-image').css('display', 'block');

    $("#detail").addClass("modal");
    $("#modal-controller").removeClass("amagar");

})

$(".close").click(function() {
    $("#modal-controller").addClass("amagar");
    $("#detail").removeClass("modal");
    $("#main-image").css("display", "none");
})

$(".prev").click(function() {

    if ($(".selected").prev().index() == -1) {
        console.log("xd entra en el if");
        let srcImg = $(".img200").last().attr("src").split("/");
        $(".img200").first().removeClass("selected");
        $(".img200").last().addClass("selected");

        console.log(srcImg)
        $("#main-image").attr("src", "img1000" + "/" + srcImg[1]);
    } else {
        let srcImg = $(".selected").prev().attr("src").split("/");

        console.log("ha entrat en el segon if");

        $(".selected").prev().addClass("tempClass");
        $(".selected").removeClass("selected");
        $("#main-image").attr("src", "img1000" + "/" + srcImg[1]);
        $(".tempClass").addClass("selected");
        $(".selected").removeClass("tempClass")
        console.log(srcImg);
    }
})


$(".next").click(function() {


    console.log($(".selected").next().index());


    if ($(".selected").next().index() == -1) {

        console.log("xd entra en el if dspfojdslñfksdñlfkdslñk");

        let srcImg = $(".img200").first().attr("src").split("/");

        $(".img200").last().removeClass("selected");

        $(".img200").first().addClass("selected");

        console.log(srcImg)
        $("#main-image").attr("src", "img1000" + "/" + srcImg[1]);
    } else {
        let srcImg = $(".selected").next().attr("src").split("/");

        console.log("ha entrat en el segon if");

        $(".selected").next().addClass("tempClass");
        $(".selected").removeClass("selected");
        $("#main-image").attr("src", "img1000" + "/" + srcImg[1]);
        $(".tempClass").addClass("selected");
        $(".selected").removeClass("tempClass")
        console.log(srcImg);
    }
})