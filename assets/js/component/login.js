(function () {
  $("#loginModal").modal("show");

  $("#login_email_form").validate({
    rules: {
      email: {
        required: true,
        emailInput: true,
      },
      password: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      email: {
        required: "Email Address is required.",
        emailInput: "Enter a valid email address.",
      },
      password: {
        required: "Enter your password.",
        minlength: "Enter a valid password.",
      },
    },
  });

  $("#login_mobile_form").validate({
    rules: {
      phone: {
        required: true,
        minlength: 6,
        digits: true,
      },
      password: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      phone: {
        required: "Phone number is required.",
        minlength: "Enter a valid phone number.",
        digits: "Enter a valid phone number.",
      },
      password: {
        required: "Enter your password.",
        minlength: "Enter a valid password.",
      },
    },
  });
})();
