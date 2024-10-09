(function () {
  const card_number_regex = /^\d+$/;
  const expiration_date_regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  const cvv_regex = /^\d{3,4}$/;
  $("#card_number, #cvv, #expiration").on("paste", (e) => {
    e.preventDefault();
    return;
  });

  $("#card_number").on("keypress", function (e) {
    const code = e.charCode || e.keyCode;
    const valid = code <= 57;
    if (!valid || $(this).val()?.length >= 16) {
      e.preventDefault();
      return;
    }
  });

  $("#expiration").on("keypress", function (e) {
    const code = e.charCode || e.keyCode;
    const valid = code <= 57 || code === 47; // number or forward slash
    if (!valid || $(this).val()?.length >= 5) {
      e.preventDefault();
      return;
    }
  });

  $("#cvv").on("keypress", function (e) {
    const code = e.charCode || e.keyCode;
    const valid = code <= 57;
    if (!valid || $(this).val()?.length >= 4) {
      e.preventDefault();
      return;
    }
  });

  $("#card_number").on("blur", function (e) {
    if ($(this).val()?.length === 16) {
      $(this).val(formatCardNumber($(this).val()));
    }
  });

  function formatCardNumber(input) {
    return input.replace(/(.{4})/g, "$1 ");
  }
})();
