class Section {
    constructor(obj){
        this.item = $(obj.section);
        this.initem = $(obj.section+ '> .container');
        this.elem = $(obj.navigation);
        this.cont = $(obj.container);
        this.elemSelect = obj.navigation;
        this.padTop = parseInt(this.item.css("padding-top"));
        this.padBot = parseInt(this.item.css("padding-bottom"));
        this.height = window.innerHeight - this.padTop - this.padBot;
        this.moveToNext = obj.moveToNext;
        this.moveToFocus = obj.moveToFocus;
        this.floatFocus = obj.floatFocus;
        this.floatMove = obj.floatMove;
        this.maxMove = obj.maxMove
    }
    init(){
        let tag = "<span></span>";
        this.tag = "";
        this.item.each(i=>this.tag+=tag);
        this.elem.html(this.tag);
        this.numItem = parseInt(window.scrollY/window.innerHeight);
        this.elem.children()[this.numItem].classList.add("active");
        this.elemActive = $(`${this.elemSelect} .active`);
        this.height = window.innerHeight - this.padTop - this.padBot;
        this.item.height(this.height);
        this.initem.height(this.height - 60);
        this.focus(300);
        this.bild()
    }
    bild(){
        this.elem.children().click(e=>{
            // this.cont.css({
            //     '-webkit-transition' : `0s`,
            //     '-moz-transition'    : `0s`,
            //     '-ms-transition'     : `0s`,
            //     '-o-transition'      : `0s`,
            //     'transition'         : `0s`
            // })
            this.elemActive[0].classList.remove("active");
            e.target.classList.add("active");
            this.wichActive();
            this.setActive();
            this.go(this.moveToNext);
            this.bild()
        });
        document.ontouchmove = window.onresize = window.onscroll = e =>{
            // e.preventDefault()
            this.render();
            if (e.type == "touchmove") {

                console.log('touch')
                // this.cont.css({
                //     '-webkit-transform' : 'translateY(' + (-this.firstPos + e.touches[0].clientY) + 'px)',
                //     '-moz-transform'    : 'translateY(' + (-this.firstPos + e.touches[0].clientY) + 'px)',
                //     '-ms-transform'     : 'translateY(' + (-this.firstPos + e.touches[0].clientY) + 'px)',
                //     '-o-transform'      : 'translateY(' + (-this.firstPos + e.touches[0].clientY) + 'px)',
                //     'transform'         : 'translateY(' + (-this.firstPos + e.touches[0].clientY) + 'px)'
                // });
                this.scrollNow(e.touches[0].clientY);
            }
            if (e.type == "resize") {
                // this.init()
                this.wichActive();
                this.setActive();
                this.focus(10)
            }
            if ((e.type == "scroll") && !this.scrolling && (0 > navigator.userAgent.indexOf("Mobile"))) {
                console.log('scroll');
                this.wichActive();
                this.setActive();
                // this.up(500);
                this.scrolling = false;
                const scrolled = window.pageYOffset || document.documentElement.scrollTop;
                console.log(scrolled + 'px  '+ (this.numItem)*window.innerHeight);
                clearTimeout(this.timer);
                if (
                    (this.numItem*window.innerHeight < scrolled-10)&&
                    ((this.numItem+1)*window.innerHeight > scrolled+10)
                ){
                    this.up()

                }else if (
                    (this.numItem*window.innerHeight > scrolled+10)&&
                    ((this.numItem-1)*window.innerHeight < scrolled-10)
                ){
                    this.down();
                    console.log("down")
                }else{
                    this.focus(100);
                }
                this.setActive()
            }
            // this.setActive()
        };
        document.ontouchstart = e => this.start(e.touches[0].clientY, e.touches[0].pageY, e);
        document.ontouchend = e => this.end(e);
    }
    cssDefoult(){
        this.cont.css({
            '-webkit-transition' : `${this.floatMove}s`,
            '-moz-transition'    : `${this.floatMove}s`,
            '-ms-transition'     : `${this.floatMove}s`,
            '-o-transition'      : `${this.floatMove}s`,
            'transition'        : `${this.floatMove}s`,
            '-webkit-transform' : 'translateY(0px)',
            '-moz-transform'    : 'translateY(0px)',
            '-ms-transform'     : 'translateY(0px)',
            '-o-transform'      : 'translateY(0px)',
            'transform'         : 'translateY(0px)'
        })
    }
    wichActive(){
        // this.numItem = parseInt(window.scrollY/window.innerHeight)
        this.elem.children().each(i=>{if(this.elem.children()[i].classList[0] == "active") this.numItem = i})
    }
    render(){
        this.height = window.innerHeight - this.padTop - this.padBot;
        this.item.height(this.height)
    }
    setActive(){
        if (this.numItem !== false){
            this.elemActive[0].classList.remove("active");
            this.elem.children()[this.numItem].classList.add("active");
            this.elemActive = $(`${this.elemSelect} .active`)
        }
    }
    up(){

        this.scrolling = true;
        this.wichActive();
        let top = (this.numItem + 1)*window.innerHeight,
            speed = this.moveToNext;
        let i = this.elem.children().length-1;
        this.numItem = this.numItem+1 <= i ? this.numItem+1 : i;
        $('body,html').animate({scrollTop: top}, speed);
        // if ((0 > navigator.userAgent.indexOf("Mobile"))){
            setTimeout(()=>{
                this.scrolling = false;
                this.focus(300);
            }, speed);
        // }

    }
    down(){

        this.scrolling = true;
        this.wichActive();
        let top = (this.numItem - 1)*window.innerHeight,
            speed = this.moveToNext;
        this.numItem = this.numItem-1 >= 0 ? this.numItem-1 : 0;
        $('body,html').animate({scrollTop: top}, speed);
        // if (0 > navigator.userAgent.indexOf("Mobile")){
            setTimeout(()=>{
                this.scrolling = false;
                this.focus(300);
            }, speed);
        // }
    }
    go(s){
        this.wichActive();
        var top = this.numItem*window.innerHeight,
            speed = s;
        this.numItem = false;
        $('body,html').animate({scrollTop: top}, speed);
    }
    focus(s){
        if ((0 > navigator.userAgent.indexOf("Mobile"))){
            this.timer = setTimeout(()=>{
                this.scrolling = true;
                this.wichActive();
                let top = this.numItem*window.innerHeight,
                    speed = s;
                this.numItem = false;
                $('body,html').animate({scrollTop: top}, speed);


                setTimeout(()=>{
                    this.scrolling = false;
                }, speed);
            },1000)
        }else{
            this.go(s)
        }
    }
    scrollNow(val){
        this.scrlY = val;
        this.secondPos = val
    }
    start(val, val2, e ){
        // e.preventDefault();
        if (!this.scrolling){
            // this.cont.css({
            //     '-webkit-transition' : `${this.floatFocus}s`,
            //     '-moz-transition'    : `${this.floatFocus}s`,
            //     '-ms-transition'     : `${this.floatFocus}s`,
            //     '-o-transition'      : `${this.floatFocus}s`,
            //     'transition'         : `${this.floatFocus}s`
            // })
            this.firstPos = val;
            this.pos = val2
        }
        this.setActive()
    }
    end(e){
        this.scrolling = true;
        // this.cssDefoult();
        this.pesentScrol = parseInt((this.firstPos-this.secondPos)/this.height*100);
        this.secondPos = undefined;
        if (this.pesentScrol){
            if (this.pesentScrol > this.maxMove && this.pesentScrol < 100){
                this.up()
            }else if (this.pesentScrol > -100 && this.pesentScrol < -this.maxMove){
                this.down()
            } else {
                this.go(this.moveToFocus)
            }
            this.setActive()
        }
        this.go(this.moveToFocus);
    }
}
const sectObj = {
    section: ".section",
    navigation: "#navigation",
    container: ".wrap",
    moveToNext: 500,
    moveToFocus: 100,
    floatFocus: 0.1,
    floatMove: 1,
    maxMove: 10
};
$(document).ready(()=>{
    const section = new Section(sectObj);
    section.init();
});