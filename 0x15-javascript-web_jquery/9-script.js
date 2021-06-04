#!/usr/bin/node
$(document).ready(function () {
    $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (frenchgreet) {
        $('#hello').text(frenchgreet.hello);
    });
});
