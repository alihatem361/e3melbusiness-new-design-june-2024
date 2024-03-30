(function () {
  jQuery.validator.addMethod(
    "emailInput",
    function (value, element, param) {
      return value.match(
        /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/
      );
    },
    "Your E-mail is wrong"
  );

  $("#profile_settings_form").validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        emailInput: true,
      },
      phone: {
        required: true,
        digits: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: {
        required: "First name is required.",
      },
      lastName: {
        required: "Last name is required.",
      },
      email: {
        required: "Email address is required.",
        emailInput: "Enter a valid email address.",
      },
      phone: {
        required: "Enter a valid phone number.",
        digits: "Enter a valid phone number.",
        minlength: "Enter a valid phone number.",
      },
    },
    submitHandler: function () {
      // Call Backend
    },
  });
})();
