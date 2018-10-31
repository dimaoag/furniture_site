new WOW().init();

// $('.parallax-window').parallax({imageSrc: 'images/sec1_bg-min.png'});


jQuery(".first-line").fitText(1.2, { minFontSize: '40px', maxFontSize: '72px' });
jQuery(".second-line").fitText(1.2, { minFontSize: '40px', maxFontSize: '72px' });



$('.sec-2-carousel-item a').magnificPopup({
    type: 'image'
    // other options
});


//mask
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});


((function ($) {
    $(function(){

        $(document).ready(function() {
            $("[data-mask='callback-catalog-phone']").mask("+3 80 9 9 - 9 9 9 - 9 9 - 9 9");
        });
    })
})(jQuery));


// ----------tab 1--------------//

$('.sec-2-carousel-tab-1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel1 = e.relatedTarget;
    $('.slide-count-wrap-tab-1').html(carousel1.relative(carousel1.current()) + 1 + '/' + '<span>'+ carousel1.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl1 = $('.sec-2-carousel-tab-1').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-1").click(function () {
    owl1.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-1").click(function () {
    owl1.trigger('prev.owl.carousel');
});



// ----------tab 2--------------//

$('.sec-2-carousel-tab-2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel2 = e.relatedTarget;
    $('.slide-count-wrap-tab-2').html(carousel2.relative(carousel2.current()) + 1 + '/' + '<span>'+ carousel2.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl2 = $('.sec-2-carousel-tab-2').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-2").click(function () {
    owl2.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-2").click(function () {
    owl2.trigger('prev.owl.carousel');
});

// ----------tab 3--------------//

$('.sec-2-carousel-tab-3').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel3 = e.relatedTarget;
    $('.slide-count-wrap-tab-3').html(carousel3.relative(carousel3.current()) + 1 + '/' + '<span>'+ carousel3.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl3 = $('.sec-2-carousel-tab-3').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-3").click(function () {
    owl3.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-3").click(function () {
    owl3.trigger('prev.owl.carousel');
});

// ----------tab 4--------------//

$('.sec-2-carousel-tab-4').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel4 = e.relatedTarget;
    $('.slide-count-wrap-tab-4').html(carousel4.relative(carousel4.current()) + 1 + '/' + '<span>'+ carousel4.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl4 = $('.sec-2-carousel-tab-4').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-4").click(function () {
    owl4.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-4").click(function () {
    owl4.trigger('prev.owl.carousel');
});


// ----------tab 5--------------//

$('.sec-2-carousel-tab-5').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel5 = e.relatedTarget;
    $('.slide-count-wrap-tab-5').html(carousel5.relative(carousel5.current()) + 1 + '/' + '<span>'+ carousel5.items().length) + '</span>';
}).owlCarousel({
    center: true,
    items:1,
    dots: false,
    loop:true,
});

owl5 = $('.sec-2-carousel-tab-5').owlCarousel();
$(".sec-2-carousel-arrow-right-tab-5").click(function () {
    owl5.trigger('next.owl.carousel');
});
$(".sec-2-carousel-arrow-left-tab-5").click(function () {
    owl5.trigger('prev.owl.carousel');
});


// ----------sec-3-slider--------------//

$('.sec-3-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var sec_3_carousel = e.relatedTarget;
}).owlCarousel({
    items:1,
    dots: false,
    loop:true,
});

sec_3_owl = $('.sec-3-slider').owlCarousel();
$(".sec-3-arrow-right").click(function () {
    sec_3_owl.trigger('next.owl.carousel');
});
$(".sec-3-arrow-left").click(function () {
    sec_3_owl.trigger('prev.owl.carousel');
});


// ----------sec-5-slider--------------//

$('.sec-5-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var sec_5_carousel = e.relatedTarget;
}).owlCarousel({
    items:1,
    dots: false,
    loop:true,
});

sec_5_owl = $('.sec-5-slider').owlCarousel();
$(".sec-5-arrow-right").click(function () {
    sec_5_owl.trigger('next.owl.carousel');
});
$(".sec-5-arrow-left").click(function () {
    sec_5_owl.trigger('prev.owl.carousel');
});

// ----------sec-5-slider--------------//

$('.sec-6-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var sec_6_carousel = e.relatedTarget;
}).owlCarousel({
    items:3,
    dots: false,
    loop:true,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 1,
        },
        768: {
            items: 2,

        },
        992: {
            items: 3,
        }
    },
});

sec_6_owl = $('.sec-6-slider').owlCarousel();
$(".sec-6-arrow-right").click(function () {
    sec_6_owl.trigger('next.owl.carousel');
});
$(".sec-6-arrow-left").click(function () {
    sec_6_owl.trigger('prev.owl.carousel');
});


// $('.sec-6-slider .owl-stage div').equalHeights();
//
// $("#my_nanogallery2").nanogallery2({
//     <!-- ### gallery settings ### -->
//     thumbnailHeight: '200',
//     thumbnailWidth: '200',
//     itemsBaseURL: 'http://iceberg.vn.ua/furniture/images/',
//     galleryDisplayMode: 'rows',
//     thumbnailSliderDelay: 2000,
//     galleryMaxRows: 1,
//     thumbnailStacks: 2,
//     thumbnailBorderHorizontal: 0,
//     thumbnailBorderVertical: 0,
//     thumbnailGutterWidth: 2,
//     thumbnailGutterHeight: 2,
//     thumbnailHoverEffect2:  'thumbnail_scale_1.00_0.95',
//     galleryMosaic : [
//
//         { r: 1, c: 1, w: 3, h: 2 },
//         { r: 1, c: 4, w: 1, h: 1 },
//         { r: 1, c: 5, w: 2, h: 1 },
//         { r: 2, c: 4, w: 2, h: 2 },
//         { r: 2, c: 6, w: 1, h: 1 },
//         { r: 3, c: 1, w: 1, h: 1 },
//         { r: 3, c: 2, w: 2, h: 1 },
//         { r: 3, c: 6, w: 1, h: 1 },
//
//     ],
//
//
//
//     items: [
//         { src: 'кр 1.jpg', srct: 'кр 1.jpg',},
//         { src: 'кр 2.jpg', srct: 'кр 2.jpg',},
//         { src: 'кр 3.jpg', srct: 'кр 3.jpg',},
//         { src: 'кр 4.jpg', srct: 'кр 4.jpg',},
//         { src: 'кр 5.jpg', srct: 'кр 5.jpg',},
//         { src: 'кр 6.jpg', srct: 'кр 6.jpg',},
//         { src: 'каф 1.jpg', srct: 'каф 1.jpg',},
//         { src: 'каф 2.jpg', srct: 'каф 2.jpg',},
//         { src: 'каф 3.jpg', srct: 'каф 3.jpg',},
//         { src: 'каф 4.jpg', srct: 'каф 4.jpg',},
//         { src: 'каф 5.jpg', srct: 'каф 5.jpg',},
//         { src: 'каф 6.jpg', srct: 'каф 6.jpg',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//         // { src: 'sec1_bg-min.png', srct: 'sec1_bg-min.png',},
//     ]
// });





// ----------tab 1--------------//
//
// var $gallery_tab_1 = $('.sec-2-carousel-tab-1');
// var slideCount_tab_1 = null;
//
// $( document ).ready(function() {
//     $gallery_tab_1.slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: $('.sec-2-carousel-arrow-left-tab-1'),
//         nextArrow: $('.sec-2-carousel-arrow-right-tab-1'),
//     });
// });
// $gallery_tab_1.on('init', function(event, slick){
//     slideCount_tab_1 = slick.slideCount;
//     setSlideCount();
//     setCurrentSlideNumber(slick.currentSlide);
// });
// $gallery_tab_1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     setCurrentSlideNumber(nextSlide);
// });
// function setSlideCount() {
//     var $el = $('.slide-count-wrap-tab-1').find('.total-tab-1');
//     $el.text(slideCount_tab_1);
// }
// function setCurrentSlideNumber(currentSlide) {
//     var $el = $('.slide-count-wrap-tab-1').find('.current-tab-1');
//     $el.text(currentSlide + 1);
// }




