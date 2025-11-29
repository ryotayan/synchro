$(document).ready(function(){
$(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        centerPadding: "50px",
        slidesToShow: 1,
        },
    },
    ],
});
});

$(function () {
$(".hamburger").on("click", function () {
    $("header").toggleClass("open"); 
});

  // #maskのエリアをクリックした時にメニューを閉じる
$(".mask").on("click", function () {
    $("header").removeClass("open");
});

  // リンクをクリックした時にメニューを閉じる
$("nav a").on("click", function () {
    $("header").removeClass("open");
});
});
