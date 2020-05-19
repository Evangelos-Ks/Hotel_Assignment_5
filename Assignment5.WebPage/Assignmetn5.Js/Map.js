function SwowMap() {
    var iframe = $("#iframe");
    iframe.attr("src", iframe.data("src"));
    $("#iframe").css({ "visibility": 'visible' });


    $("#map").click(function () {
        $("#iframe").css({ "visibility": 'hidden' });
        $("#map").off("click");
    });
}