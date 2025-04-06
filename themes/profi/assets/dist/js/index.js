document.addEventListener("DOMContentLoaded", function (event) {

    $(document).on('mouseenter mouseleave', '.steps-slider-item', function () {
        var index = $(this).data('index');
        var path = '/themes/profi/assets/dist/images/steps/';
        if ($(this).hasClass('is-active')) {
            var jpg = path + 's' + index + '.jpg';
            $('#steps-slider-item-img-' + index).attr('src', jpg);

            var jpgx = path + 's' + index + '-2x.jpg 2x';
            jpgx += ', ' + path + 's' + index + '-3x.jpg 3x';

            $('#steps-slider-item-img-' + index).attr('srcset', jpgx);

        } else {
            var gif = path + 's-active-' + index + '.gif';
            $('#steps-slider-item-img-' + index).attr('src', gif);

            var gifx = path + 's-active-' + index + '-2x.gif 2x';
            gifx += ', ' + path + 's-active-' + index + '-3x.gif 3x';

            $('#steps-slider-item-img-' + index).attr('srcset', gifx);
        }
        $(this).toggleClass('is-active');
    });

});
