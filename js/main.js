let myh = document.getElementById("myh");
let myh1 = document.getElementById("myh1");
let myh2 = document.getElementById("myh2");
let myh3 = document.getElementById("myh3");
let number1 = 3700;
let number2 = 50;
let number3 = 600;
let number4 = 5700;
const multipleItemCarousel = document.querySelector('#carouselExampleControls')
if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
        
    })
    let carouselWidth = $(".carousel-inner")[0].scrollWidth;
    let cardWidth = $(".carousel-item").width();
    let scrollPosition = 0;
    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
            scrollPosition = scrollPosition + cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    })
    $(".carousel-control-prev").on("click", function () {
        if (scrollPosition >= 0) {
            scrollPosition = scrollPosition - cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    })
}
else{
    $(multipleItemCarousel).addClass("slide")
}
function increseNumber(){
    number1 += 1;
    myh.innerHTML = number1;
    if(number1== 3923){
        clearInterval(x)
    } 
}
function increaseNumber2(){
    number2 += 1;
    myh1.innerHTML = number2;
    if(number2==131){
        clearInterval(y);
    }
}
function increaseNumber3(){
    number3 += 1;
    myh2.innerHTML = number3;
    if(number3==962){
        clearInterval(z);
    }
}
function increaseNumber4(){
    number4 += 1;
    myh3.innerHTML = number4;
    console.log(number4)
    if(number4==5949){
        clearInterval(n);
    }
}
let x=setInterval(increseNumber,0.2);
let y=setInterval(increaseNumber2,0.2);
let z=setInterval(increaseNumber3,0.2);
let n=setInterval(increaseNumber4,0.2);
$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
})