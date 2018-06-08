$( function() {
    $( "#language" ).selectmenu();
    $( "#languageFooter" ).selectmenu();
    $( "#typeSearch" ).selectmenu();
} );

$('#btnSearch').on('click', function () {
    var table = window.innerWidth<1200?true:false;
    if ($('.closeSearch').length > 0){
        $('.nosearch').each(function(i){
            console.log($('.nosearch')[i]);
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
});
