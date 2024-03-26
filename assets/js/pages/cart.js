(function () {
  $("#addressForm").validate({
    rules: {
      country: {
        required: true,
      },
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      address: {
        required: true,
      },
      postalCode: {
        required: true,
      },
      city: {
        required: true,
      },
    },
    submitHandler: function () {
      // Call Backend
    },
  });
})();

(function () {
  $("#checkoutForm").validate({
    rules: {
      address: {
        required: true,
      },
      shipping: {
        required: true,
      },
      payment: {
        required: true,
      },
      agreement: {
        required: true,
      },
    },
    messages: {
      address: {
        required: "You should have select an address.",
      },
      agreement: {
        required: "You should have accept out terms and conditions.",
      },
    },
    submitHandler: function () {
      // Your Action
    },
    errorPlacement: (err, element) => {
      if ($(element)?.parent()?.hasClass("option-item")) {
        err?.insertAfter($(element)?.parent()?.parent());
      } else if ($(element)?.parent()?.hasClass("form-check")) {
        err?.insertAfter($(element)?.parent());
      } else {
        err?.insertAfter($(element));
      }
    },
  });
})();
