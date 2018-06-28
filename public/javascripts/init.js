
$(document).ready(function(){
    var owl = $(".owl-carousel.owl2");
    owl.owlCarousel({
        items: 3,
        center: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        stagePadding: 0,
        startPosition: 1
    });
    $(".dotsContainer .active").prev("button").addClass("prev");

    owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        if(
            event.item.index !== undefined &&
            event.item.index !== false &&
            (event.item.index >=0 && event.item.index <=5)
        ){
            var i = event.item.index;
            $('.dotsContainer .prev').removeClass("prev");
            $('.dotsContainer .active').removeClass("active");
            $('.dotsContainer .owl-dot')[(i-1) >= 0 ? (i-1) : 0].classList.add("prev");
            $('.dotsContainer .owl-dot')[i].classList.add("active");

            if (i != 0){
                $('.dotsContainer .owl-dot')[(i+1) <= 5 ? (i+1) : 5].classList.add("prev")
            }
        }
    });

    $('.dotsContainer .owl-dot').on('click', function (e) {

        $('.dotsContainer .prev').removeClass("prev");
        $('.dotsContainer .active').removeClass("active");
        var goto;
        if(e.target.nodeName == "IMG"){
            e.currentTarget.classList.add('active');
            goto = parseInt(e.target.parentElement.dataset.to);
            console.log(goto)
        }else if (e.target.nodeName == "BUTTON"){
            e.currentTarget.classList.add('active');
            goto = parseInt(e.target.children[0].dataset.to);
            console.log(e)
        }else{
            e.currentTarget.classList.add('active');
            goto = parseInt(e.target.dataset.to);
            console.log(e)
        }
        $(".dotsContainer .active").prev("button").addClass("prev");

        if (goto == 1){
            console.log($('.dotsContainer .owl-dot')[2].classList.add("prev") );
        }
        if (goto == 4){
            console.log($('.dotsContainer .owl-dot')[3].classList.add("prev") );
        }
        owl.trigger('to.owl.carousel', [goto,300]);
    });

    $(".owl-carousel.talantCarousel").owlCarousel({
        items: 1,
        center: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        stagePadding: 0,

    });

    window.popCarousel = $('.owl-carousel.popCarousel');
    popCarousel.owlCarousel({
        items: 1,
        center: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        stagePadding: 0,

    });

    $('.popNext').click(function() {
        popCarousel.trigger('next.owl.carousel');
    });
    $('.popPrev').click(function() {
        popCarousel.trigger('prev.owl.carousel', [300]);
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        margin: 30,
        autoWidth: false,
        nav: true,
        dots: false,
        stagePadding: 30,
        responsive: {
            1200:{
                items: 2,
                center: false,
                loop: true
            }
        }
    });

    bannerSet();
    window.onresize = tabBtn;
    $('#fullpage').fullpage();
    menu: 'navigation'
});

var width,step;
window.onresize = function () {
    bannerSet();
}
function bannerSet() {
    let width = window.innerWidth;
        if (width >= 1200)
            {
                if($('.person-block').length > 10){
                    $( ".banner" ).insertAfter( $('.person-block')[9] );
                } else{
                    $( ".banner" ).insertAfter( $('.person-block')[4] )
                }
            }
        if (width<1200 && width>=415)
            {
                if($('.person-block').length > 6){
                    $( ".banner" ).insertAfter( $('.person-block')[5] );
                } else{
                    $( ".banner" ).insertAfter( $('.person-block')[2] )
                }
            }
        if (width<414){}
    $( ".banner" ).css({
        "display": "block"
    })
}

$('.filter-btn').on('click',function () {
    setWidth()
});
function setWidth() {
    setTimeout(function () {
        width = parseInt($('.line-main').width());
        width = parseInt(width/parseInt($('#labl2').text())) * parseInt($('#labl2').text());
        $('.line-main').width(width);
        widget()
    },100)
}
function widget(){
    const lb1 = $('#labl1');
    const lb2 = $('#labl2');
    const ageDpz = $('#ageDiapazone');
    var startPos = 0;
    var pos = lb1[0].offsetLeft;
    var startPos2 = 0;
    var pos2 = width - lb2[0].offsetLeft;
    var line = $(".line-active");
    var min = parseInt($('#labl1').text());
    var minC = parseInt($('#labl1').text());
    var max = parseInt($('#labl2').text());
    var maxC = parseInt($('#labl2').text());
    step= width/maxC;
    ageDpz.text(`(${min}-${max})`);
    function move(e) {
        startPos = e.pageX;
        $('body').on('mousemove', function (e) {
            var left = e.pageX - startPos + pos;
            if (left >0 && left < max*step){
                min = parseInt(left/width*maxC);
                $('#labl1 > span').text(min);
                ageDpz.text(`(${min}-${max})`);
                lb1.css({
                    "left": left + 'px'
                })
                line.css({
                    "left": left + 'px'
                })
            }else if(left <=0 && min<max){
                min = 0;
                $('#labl1 > span').text(0);
                ageDpz.text(`(${0}-${max})`);
                lb1.css({
                    "left": '0'
                })
                line.css({
                    "left": '0'
                })
            }

        })
    }
    $('body').on('mouseup', function () {
        $('body').off('mousemove')
    });
    lb1.on('mousedown', function (e) {
        pos = lb1[0].offsetLeft;
        move(e)
    })

    function move2(e) {
        startPos2 = e.pageX;
        $('body').on('mousemove', function (e) {
            var right = startPos2 - e.pageX + pos2;
            if (right >0 && right < width-step*(min+1)){
                max = parseInt(maxC - right/width*maxC);
                $('#labl2 > span').text(max);
                ageDpz.text(`(${min}-${max})`);
                lb2.css({
                    "right": right + 'px'
                })
                line.css({
                    "right": right + 'px'
                })
            }else if(right <=0  && min<max){
                max = maxC;
                $('#labl2 > span').text(max);
                ageDpz.text(`(${min}-${max})`);
                lb2.css({
                    "right": '0'
                })
                line.css({
                    "right": '0'
                })
            }
        })
    }
    $('body').on('mouseup', function () {
        $('body').off('mousemove')
    });
    lb2.on('mousedown', function (e) {
        pos2 = width - lb2[0].offsetLeft - 11;
        move2(e)
    });
}

