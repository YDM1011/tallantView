$( function() {
    $( "#language" ).selectmenu();
    $( "#languageFooter" ).selectmenu();
    $( "#typeSearch" ).selectmenu();

    $(".viewOption").html($(".option.active").html());

    $(".snglTalant-tabs").on("click",".option>a", function (event) {
        event.preventDefault();
        var speed  = 500;
        var id  = $(this).attr('href');
        console.log(document.getElementById(id))
        var top = $(window[id]).offset().top - 80;
        $('body,html').animate({scrollTop: top}, speed);
    });
} );

$('#btnSearch').on('click', function () {
    var table = window.innerWidth<1200?true:false;
    if ($('.closeSearch').length > 0){
        $('.nosearch').each(function(i){
            $('.nosearch')[i].classList.add("issearch");
        });
        if (table){
            $('.nosearchT').each(function(i){
                $('.nosearchT')[i].classList.add("issearchT");
                $('.nosearchT')[i].classList.remove("nosearchT");
            });
        }
        $(".head-search")[0].classList.add("active");
        $("#btnSearch")[0].classList.add("activeSearch");
        $('.issearch').each(function(i){
            console.log($('.nosearch')[i]);
            $('.issearch')[i].classList.remove("nosearch");
        });
        $('.closeSearch')[0].classList.add("openSearch");
        $('.openSearch')[0].classList.remove("closeSearch")
    }else{
        $('.issearch').each(i=>{
            $('.issearch')[i].classList.add("nosearch")
        });
        if (table){
            $('.issearchT').each(function(i){
                $('.issearchT')[i].classList.add("nosearchT");
                $('.issearchT')[i].classList.remove("issearchT")
            });
        }
        $(".head-search")[0].classList.remove("active");
        $("#btnSearch")[0].classList.remove("activeSearch");
        $('.nosearch').each(i=>{
            $('.nosearch')[i].classList.remove("issearch")
        });
        $('.openSearch')[0].classList.add("closeSearch");
        $('.closeSearch')[0].classList.remove("openSearch")
    }

});

$(".head-button-menu").click(function () {

    if ($(".head-open")[0]){
        $(".head-button-menu")[0].classList.remove("active")
        $(".head-open")[0].classList.add("head-close")
        $(".head-open")[0].classList.remove("head-open")
    } else {
        $(".head-button-menu")[0].classList.add("active")
        $(".head-close")[0].classList.add("head-open")
        $(".head-close")[0].classList.remove("head-close")
    }
    $('.head-logo')[0].classList.remove('issearchT')
    $('.head-logo')[0].classList.add('nosearchT')
    $( ".head-line" ).toggleClass( "open" )
});

/*************************/

$(".option").on("click", function (e) {
    $('.option').each(function(i){
        $('.option')[i].classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    $(".viewOption").html($(".option.active").html());
    if (window.innerWidth<=767){
        $(".select-open")[0].classList.add("select-close");
        $(".select-open")[0].classList.remove("select-open");
        $(".viewOption")[0].classList.add("viewOption-close");
        $(".viewOption")[0].classList.remove("viewOption-open")
    }
});

$(".viewOption").click(function (e) {
    e.preventDefault();
    if($(".viewOption-close")[0]){
        $(".select-close")[0].classList.add("select-open");
        $(".select-close")[0].classList.remove("select-close");
        $(".viewOption")[0].classList.add("viewOption-open");
        $(".viewOption")[0].classList.remove("viewOption-close")
    }else{
        $(".select-open")[0].classList.add("select-close");
        $(".select-open")[0].classList.remove("select-open");
        $(".viewOption")[0].classList.add("viewOption-close");
        $(".viewOption")[0].classList.remove("viewOption-open")
    }

});

$('.popupData-info .close').on('click', function (e) {
    $( ".popupData" ).toggleClass( "popupData popupData-close" )
    $('body').css({
        'overflow': 'auto'
    })
    $('.popupData-items-wrap.video')[0].classList.remove('active');
    $('.popupData-items-wrap.pics')[0].classList.remove('active');
    $('.popupData-items-wrap.text')[0].classList.remove('active');
    $('.galerySlider.video')[0].classList.remove('active');
    $('.galerySlider.pics')[0].classList.remove('active');
    $('.galerySlider.text')[0].classList.remove('active');
});

$('.snglTalant-info-btn-open').on('click', function () {
    $( ".snglTalant .show" ).toggleClass( "show show-hidden" );
    var open = $( ".snglTalant-info-btn-open" );
    var close = $( ".snglTalant-info-btn-close" );
    open.toggleClass( "snglTalant-info-btn-open snglTalant-info-btn-close");
    close.toggleClass( "snglTalant-info-btn-close snglTalant-info-btn-open");
    $('.snglTalant-info-share').fadeIn(600);
    $('.snglTalant-info-share').css({
        "display": "flex"
    })
    $('.snglTalant-info-main').fadeIn(600)
});
$('.snglTalant-info-btn-close').on('click', function () {
    $( ".snglTalant .show-hidden" ).toggleClass( "show-hidden show" );
    var open = $( ".snglTalant-info-btn-open" );
    var close = $( ".snglTalant-info-btn-close" );
    open.toggleClass( "snglTalant-info-btn-open snglTalant-info-btn-close");
    close.toggleClass( "snglTalant-info-btn-close snglTalant-info-btn-open");
    $('.snglTalant-info-share').fadeOut(600);
    $('.snglTalant-info-main').fadeOut(600)
});

$('.popupData-info-btn-open').on('click', function () {
    $( ".popupData .show" ).toggleClass( "show show-hidden" );
    var open = $( ".popupData-info-btn-open" );
    var close = $( ".popupData-info-btn-close" );
    open.toggleClass( "popupData-info-btn-open popupData-info-btn-close");
    close.toggleClass( "popupData-info-btn-close popupData-info-btn-open");
    $('.popupData-info-share').fadeIn(600);
    $('.popupData .btn.s2').fadeIn(600)
});
$('.popupData-info-btn-close').on('click', function () {
    $( ".popupData .show-hidden" ).toggleClass( "show-hidden show" );
    var open = $( ".popupData-info-btn-open" );
    var close = $( ".popupData-info-btn-close" );
    open.toggleClass( "popupData-info-btn-open popupData-info-btn-close");
    close.toggleClass( "popupData-info-btn-close popupData-info-btn-open");
    $('.popupData-info-share').fadeOut(600);
    $('.popupData .btn.s2').fadeOut(600)
});

$(".snglTalant-about-doc-data").on('click', function (e) {
    $( ".text.popupData-close" ).toggleClass( "popupData-close popupData" );
    $('.popupData-items-wrap.text').toggleClass('active');
    $('.galerySlider.text').toggleClass('active');
});

$(".snglTalant-about-video-block-item").on('click', function (e) {
    $( ".video.popupData-close" ).toggleClass( "popupData-close popupData" );
    $('.popupData-items-wrap.video').toggleClass('active');
    $('.galerySlider.video').toggleClass('active');
    var a = this;
    popCarousel.on('refreshed.owl.carousel',function () {
        let src = a.getElementsByTagName('img')[0].src;
        $(".owl-item.active.center img").attr('src', src);
    });
});

$(".snglTalant-about-photo-galery-pics").on('click', function (e) {
    $( ".pics.popupData-close" ).toggleClass( "popupData-close popupData" );
    $('.popupData-items-wrap.pics').toggleClass('active');
    $('.galerySlider.pics').toggleClass('active');
    var a = this;
    popCarousel.on('refreshed.owl.carousel',function () {
        let src = a.getElementsByTagName('img')[0].src;
        $(".owl-item.active.center img").attr('src', src);
    });
});
// $document.on('resize', tabBtn)

tabBtn();
function tabBtn() {
    if($('.snglTalant-about-hashtagWrap').width() < $('.snglTalant-about-hashtag').width()-50){
        $('.snglTalant-about-dots').css({
            'display': 'flex'
        });
        $( ".snglTalant-about-hashtagWrap" ).
            toggleClass( "snglTalant-about-hashtagWrap snglTalant-about-hashtagWrap-close" );

    } else {
        $('.snglTalant-about-dots').css({
            'display': 'none'
        })
        $( ".snglTalant-about-hashtagWrap-close" ).
            toggleClass( "snglTalant-about-hashtagWrap-close snglTalant-about-hashtagWrap" )
    }
    console.log("ok")
}
$('.snglTalant-about-dots').on('click', function () {
    if ($( ".snglTalant-about-hashtagWrap-close" )[0]){
        $( ".snglTalant-about-hashtagWrap-close" ).
            toggleClass( "snglTalant-about-hashtagWrap-close snglTalant-about-hashtagWrap-open" );
    }else {
        $( ".snglTalant-about-hashtagWrap-open" ).
            toggleClass( "snglTalant-about-hashtagWrap-open snglTalant-about-hashtagWrap-close" );
    }
});


$('.popupData-items-next').on('click', function () {
    var wrap = $('.popupData-items-wrap.active');
    var wrapW = wrap.width();
    var wrapL = wrap[0].scrollLeft;
    var lineW = $('.galerySlider.active').width();
    var left=0;
    console.log(lineW)
    if((lineW-wrapL) > wrapW){
        left = wrapW + Math.abs(wrapL)
    }else{
        left = lineW - wrapW;
        console.log(left)
    }
    wrap.animate({scrollLeft: left}, 500);
});
$('.popupData-items-prev').on('click', function () {
    var wrap = $('.popupData-items-wrap.active');
    var wrapW = wrap.width();
    var wrapR = wrap[0].scrollLeft;
    var right=0;
    if(wrapR >= wrapW){
        right = wrapR-wrapW;
    }else{
        right = 0;
        console.log(right)
    }
    wrap.animate({scrollLeft: right}, 500);
});

$('.inselect').on('click', function () {
    $('.inselect').toggleClass('active');
})
$('.inselectPics').on('click', function () {
    $('.inselectPics').toggleClass('active');
})
$('.inselectVide').on('click', function () {
    $('.inselectVide').toggleClass('active');
})
$('.inselectText').on('click', function () {
    $('.inselectText').toggleClass('drk yel');
})