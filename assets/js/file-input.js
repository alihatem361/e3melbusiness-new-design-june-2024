(function () {
  $(".e3melbusiness-file-card input[type='file']").each(function (index, el) {
    const jq_el = $(el);
    if (jq_el?.attr('data-remote-src')) {
      $(this)?.parent()?.addClass('file-exist');
    }
  });

  $(".e3melbusiness-file-card input[type='file']").on('change', function (e) {
    if (e?.target?.files?.length) {
      $(this)?.parent()?.addClass('file-exist');
    }
  });

  $('.e3melbusiness-file-card .clear-input-btn').on('click', function (e) {
    e.preventDefault();
    $(this)?.parent()?.find("input[type='file']")?.first()?.val(null);
    $(this)?.parent()?.removeClass('file-exist');
  });
})();
