"use strict";

$("#success-alert").hide();

var contactForm = $("form#contact-form");
contactForm.submit(function (event) {
    event.preventDefault();

    var service_id = "default_service";
    var template_id = "ask_us_anything";
    var templateParams = {
        from_name: contactForm.find('input[id="from_name"]').val(),
        user_email: contactForm.find('input[id="user_email"]').val(),
        user_phone: contactForm.find('input[id="user_phone"]').val(),
        user_comment: contactForm.find('textarea[id="user_comment"]').val()
    }
    contactForm.find("button").text("Sending...");
    emailjs.send(service_id, template_id, templateParams)
        .then(function () {
            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            });
            contactForm.find('input[id="from_name"]').val('');
            contactForm.find('input[id="user_email"]').val('');
            contactForm.find('input[id="user_phone"]').val('');
            contactForm.find('textarea[id="user_comment"]').val('');
            contactForm.find("button").text("Send Email");
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            contactForm.find("button").text("Send Email");
        });
    return false;
});