(function () {
  $("#codeModal").modal("show");
  setTimeout(() => {
    $(".otp-input")?.first()?.focus();
  }, 500);
  $(".otp_form").validate({
    rules: {
      otp1: {
        required: true,
        maxlength: 1,
      },
      otp2: {
        required: true,
        maxlength: 1,
      },
      otp3: {
        required: true,
        maxlength: 1,
      },
      otp4: {
        required: true,
        maxlength: 1,
      },
    },
    errorPlacement: function () {},
  });

  // OTP Input Change

  $(".otp-input").on("keyup", function () {
    const thisInput = $(this);
    if (thisInput?.val()) {
      if (thisInput?.next()?.hasClass("otp-input")) {
        const nextInput = thisInput.next();
        if (nextInput?.length) {
          nextInput.focus();
        }
      } else {
        const submit = thisInput
          .closest("form")
          ?.find("button[type=submit]")
          ?.first();
        const fieldset = thisInput.closest("fieldset");
        const valueInput = $(this)
          ?.closest("form")
          ?.find(".otp_value")
          ?.first();
        thisInput.blur();
        fieldset?.prop("disabled", true);
        if (valueInput.length) {
          const otpInputList = valueInput?.parent()?.find(".otp-input");
          let value = "";
          for (let i = 0; i < otpInputList.length; i++) {
            if ($(otpInputList[i]).val()) {
              value += $(otpInputList[i]).val();
            }
          }
          valueInput.val(value);
        }
        thisInput?.closest(".otp-group")?.addClass("success");
        submit?.addClass("loading");
      }
    }
  });

  // Reset Code

  resetCode();

  function resetCode() {
    let countDown = 30;
    const remainingTime = $("#remainingTime");
    if (remainingTime.length) {
      const interval = setInterval(() => {
        if (countDown === 0) {
          clearInterval(interval);
          $("#resendCode").show();
          $("#remainingTimeHint")?.hide();
          $("#remainingTime")?.hide();
        }
        remainingTime.text(`${countDown--}s`);
      }, 1000);
    }
  }

  $("#resendCode").on("click", function (e) {
    e.preventDefault();
    $(this).hide();
    $("#remainingTimeHint")?.show();
    $("#remainingTime")?.show();
    resetCode();
  });
})();
