$(function () {


    $('body').append('<button class="btn_up"></button>');
    $('.btn_up').click(function () {
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });

    $('body').append('<button class="contact-us__pop-up">Contact Us</button>');
});