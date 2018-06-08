const marginTop = (window.innerHeight - 640)*($('.section').length/2);
const scale = (window.innerHeight/640);
const scaleW = (window.innerWidth/1280);
const marginTopHead = (60*scale - 60)/2;
const marginTopW = ($('body').height()*scaleW - $('body').height())/2;
const marginTopHeadW = (60*scaleW - 60)/2;
const sc = (window.innerWidth>window.innerHeight && window.innerWidth>=1280);
if (window.innerWidth/window.innerHeight >= 1200/640 && sc){
    $('header').css({
        "transform": 'scale('+scale+')',
        "-webkit-transform": 'scale('+scale+')',
        "margin-top": marginTopHead+'px'
    });
    $('.wrap').css({
        "transform": 'scale('+scale+')',
        "-webkit-transform": 'scale('+scale+')',
        "margin-top": marginTop+'px'
    });
}
if (window.innerWidth/window.innerHeight < 1200/640 && sc){
    $('header').css({
        "transform": 'scale('+scaleW+')',
        "-webkit-transform": 'scale('+scaleW+')',
        "margin-top": marginTopHeadW+'px'
    });
    $('.wrap').css({
        "transform": 'scale('+scaleW+')',
        "-webkit-transform": 'scale('+scaleW+')',
        "margin-top": marginTopW+'px'
    });
}
