$(function () {
  const header_start_part = $("#header_start_part");
  const header_search_dismiss_btn = $("#header_search_dismiss_btn");
  const search_form_input_lg = $("#search_form_input_lg");
  const header_search_typeahead_container = $(
    "#header_search_typeahead_container"
  );

  $("#search_form_input_lg").on("focus", function () {
    $(this).addClass("collapsed");
    header_start_part?.addClass("collapsed");
  });

  $("#header_search_dismiss_btn")?.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    search_form_input_lg?.val("");
    search_form_input_lg?.blur();
    handleTypeahead();
  });

  $("#search_form_input_lg").on("blur", function () {
    $(this).removeClass("collapsed");
    header_start_part?.removeClass("collapsed");
  });

  $("#search_form_input_lg").on("keyup", function () {
    handleTypeahead();
  });

  $("#search_form_input_lg").on("change", function () {
    handleTypeahead();
  });

  function handleTypeahead() {
    if (search_form_input_lg?.val()) {
      header_search_typeahead_container?.addClass("shown");
    } else {
      header_search_typeahead_container?.removeClass("shown");
    }
  }
});
