(function () {
  $("#loginModal").modal("show");

  jQuery.validator.addMethod(
    "emailInput",
    function (value, element, param) {
      return value.match(
        /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/
      );
    },
    "Your E-mail is wrong"
  );

  $("#signup_email_form").validate({
    rules: {
      email: {
        required: true,
        emailInput: true,
      },
      firstName: {
        required: true,
        minlength: 2,
      },
      lastName: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      email: {
        required: "Email Address is required.",
        emailInput: "Enter a valid email address.",
      },
      firstName: {
        required: "First name is required.",
        minlength: "Enter a valid name.",
      },
      lastName: {
        required: "Last name is required.",
        minlength: "Enter a valid name.",
      },
    },
  });

  $("#signup_mobile_form").validate({
    rules: {
      phone: {
        required: true,
        minlength: 7,
        digits: true,
      },
      firstName: {
        required: true,
        minlength: 2,
      },
      lastName: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      phone: {
        required: "Phone number is required.",
        minlength: "Enter a valid phone number.",
        digits: "Enter a valid phone number.",
      },
      firstName: {
        required: "First name is required.",
        minlength: "Enter a valid name.",
      },
      lastName: {
        required: "Last name is required.",
        minlength: "Enter a valid name.",
      },
    },
  });
})();
