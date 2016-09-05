// Twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

// facebook
$(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var map;

function initMap() {
    var myLatLng = {
        lat: 52.9511461,
        lng: -0.9897041,
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 9
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My Home City'
    });
};

$(document).ready(function() {
    // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });

    // Stellar
    $.stellar();

    // Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // button
    $("#sub").on("click", function() {
        var comment = $("#message-box").val();
        if (comment == "") {
            $("textarea").css("border", "2px solid #f44336");
        } else {
            $('#visible-comment').html("Thank you for the message, I will get back to you soon.");
            $(".form-control, label, #sub, #char-count").hide();
            console.log(comment);
            return false
        };
    });

    // word count
    $("#message-box").on("keyup", function() {
        var charCount = $("#message-box").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);

        if (charCount > 50) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "white");
        };
    });

    // form border]
    $(".form-control").css("border", "3px solid #009688");

    // work section
    for (var i = 0; i < works.length; ++i) {
        $("#work").append("\
      <div class='col-sm-6 col-md-3'>\
        <a href='" + works[i].href + "' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
           <span class='info-work'><p class='proj-title' >Title:</p>" + works[i].title + "</span>\
        </a>\
      </div>\
    ");
        var images = $("#work img");
        if (i % 2 === 0) {
            $(images[i]).css("border", "3px solid #009688");
        } else {
            $(images[i]).css("border", "3px solid #ad33c1");
        };
        $(".work-img").mouseenter(function() {
            $(".info-work", this).show();
        }).mouseleave(function() {
            $(".info-work", this).hide();
        });
    };

}); //end doc ready
