(function ($) {
    $.extend($.fn, {
        placeholder: function () {
            return this.each(function () {
                if (!('placeholder' in document.createElement('input'))) {
                    var input = $(this),
                        label = $("<label class='ui-placeholder-label'>" + input.attr('placeholder') + "</label>");

                    $(['fontFamily', 'fontSize', 'fontWeight', 'padding']).each(function(idx, val) {label.css(val, input.css(val));});

                    if (input.is('input')) {
                        label.css('lineHeight', input.height() + 'px');
                    }

                    if (input.focus(function () {
                            label.hide()
                        })
                            .blur(function () {
                                if (!input.val()) {
                                    label.show()
                                } else {
                                    label.hide()
                                }
                            })
                            .removeAttr('placeholder')
                            .wrap("<span class='ui-placeholder-container' />")
                            .before(label.click(function () {
                                input.focus();
                            }))
                            .val()) {
                        label.hide();
                    }

                    if (input.hasClass('ui-placeholder-fill')) {
                        input.parent().addClass('ui-placeholder-fill')
                    }
                }
            })
        }
    });

    $().ready(function () {
        $('input,textarea').filter('[placeholder]').placeholder()
    })
})(jQuery);
