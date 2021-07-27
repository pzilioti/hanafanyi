var set_locale_to = function (locale) {
    if (locale) {
        $.i18n().locale = locale;
    }
    $('html').i18n();
};

jQuery(function ($) {
    $.i18n().load({
        'en': 'i18n/en.json',
        'pt': 'i18n/pt.json',
        'cn': 'i18n/cn.json'
    }).done(function () {
        var locale = sessionStorage.getItem('locale');
        if (locale) {
            $.i18n().locale = locale;
        }
        $('html').i18n();

        $('.switch-locale').on('click', 'a', function (e) {
            e.preventDefault();
            set_locale_to($(this).data('locale'));
            sessionStorage.setItem('locale', $(this).data('locale'));
        });

    });
});
