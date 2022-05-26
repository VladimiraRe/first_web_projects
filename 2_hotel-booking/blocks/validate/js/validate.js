$(".search").validate({
    errorClass: "validate",
    messages: {
        searchLocation: "Please enter some location",
    }
});

$(".modal__form").validate({
    errorClass: "validate",
    messages: {
        name: 'Please enter your name',
        tel: 'Please enter your phone number',
        email: {
            required: "Please enter your email",
            email: "Your email address must be in the format of name@domain.com",
        },
    }
});

$(".footer__form").validate({
    errorClass: "validate",
    messages: {
        name: 'Please enter your full name',
        tel: 'Please enter your phone number',
        email: {
            required: "Please enter your email",
            email: "Your email address must be in the format of name@domain.com",
        },
    }
});

$(".subscribe__form").validate({
    errorClass: "validate",
    messages: {
        subscribe: {
            required: "Please enter your email",
            email: "Your email address must be in the format of name@domain.com",
        }
    }
});
