$("a.readMore").click(function (event) {
    event.preventDefault();
    var $elem = $(this);
    var $more = $(this).prev().find(".openTestimonial");
    if ($more.is(":visible")) {
        $more.css("display", "none");
        $elem.text("Читать далее");
    } else {
        $more.css("display", "block");
        $elem.text("Скрыть");
    }
});

$(".fancybox").fancybox();
