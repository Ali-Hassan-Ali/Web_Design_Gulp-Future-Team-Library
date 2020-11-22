$('document').ready(function () {

    $('.owl-movie').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        center: true,
        stagePadding: 25,
        // autoWidth:true,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            900: {
                items: 3
            },
            1000: {
                items: 5
            }
        }//end section responsive

    });/*end of owlCarousel listing*/

    $('html').niceScroll({interval: 9000});/*end of niceScroll*/

});//end of Document ready

// // image preview
$(".image").change(function () {

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(this.files[0]);
    }

})/*end function preview Images*/

/*loading pages*/
$(window).on('load', function () {
    $('.ff').fadeOut(5000, function () {
        $(this).remove('.ff');
    });
});/*end of Loading */