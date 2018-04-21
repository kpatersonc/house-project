"use strict";


jQuery(document).ready(function ($) {
    $("#success-alert").hide();
    var homeEvaluationForm = $("form#evaluation-form");
    homeEvaluationForm.submit(function (event) {
        event.preventDefault();

        var service_id = "default_service";
        var template_id = "home_evaluation_request";
        var templateParams = {
            from_name: homeEvaluationForm.find('input[id="from_name"]').val(),
            user_email: homeEvaluationForm.find('input[id="user_email"]').val(),
            user_phone: homeEvaluationForm.find('input[id="user_phone"]').val(),
            user_address: homeEvaluationForm.find('input[id="user_address"]').val(),
            user_city: homeEvaluationForm.find('input[id="user_city"]').val(),
            user_comment: homeEvaluationForm.find('textarea[id="user_comment"]').val()
        }
        homeEvaluationForm.find("button").text("Sending...");
        emailjs.send(service_id, template_id, templateParams)
            .then(function () {
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                    $("#success-alert").slideUp(500);
                });
                homeEvaluationForm.find('input[id="from_name"]').val('');
                homeEvaluationForm.find('input[id="user_email"]').val('');
                homeEvaluationForm.find('input[id="user_phone"]').val('');
                homeEvaluationForm.find('input[id="user_address"]').val('');
                homeEvaluationForm.find('input[id="user_city"]').val('');
                homeEvaluationForm.find('textarea[id="user_comment"]').val('');
                homeEvaluationForm.find("button").text("Send Email");
            }, function (err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                homeEvaluationForm.find("button").text("Send Email");
            });
        return false;
    });
    //End
});