$(function () {
    var _window = $(window),
        _header = $(".site__header"),
        heroBottom;

    _window.on("scroll", function () {
        heroBottom = $(".overview").height();
        if (_window.scrollTop()) {
            _header.addClass("transform");
        } else {
            _header.removeClass("transform");
        }
    });

    _window.trigger("scroll");
});

$(function () {
    var height = $("header").height();
    $(".overview").css("padding-top", height + 20);
});
