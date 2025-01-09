(function () {
  // Count Down
  // Exam Form

  $('.exam__form').validate({
    rules: {
      radio_1: {
        required: true,
      },
      radio_3: {
        required: true,
      },
      'check_1[]': {
        required: true,
      },
      'check_2[]': {
        required: true,
      },
      'check_3[]': {
        required: true,
      },
    },
    errorPlacement: function (error, el) {
      console.log(error);
      console.log(el);
    },
    submitHandler: function (form) {
      console.log(form);
    },
  });
})();
