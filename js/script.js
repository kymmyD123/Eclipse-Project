$(function () {

    //up button scroll top
    // var options = {
    //     class: '',
    //     positionY: 'bottom',
    //     positionX: 'left',
    //     text: 'Up',
    //     displayAlways: false
    // };
    //
    // new Up(options);

    $('body').append('<button class="btn_up"></button>');

    $('.btn_up').click(function () {
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });
});