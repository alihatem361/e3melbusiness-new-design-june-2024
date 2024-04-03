$(function () {
  const header_start_part = $("#header_start_part");
  const header_start_part_js = document.getElementById("header_start_part");
  const search_form_input_lg = $("#search_form_input_lg");
  const search_form_input_sm = $("#search_form_input_sm");
  const header_search_typeahead_container = $(
    "#header_search_typeahead_container"
  );
  const mobile_header_search_typeahead_container = $(
    "#mobile_header_search_typeahead_container"
  );
  const search_input_sm_clear_btn = $("#search_input_sm_clear_btn");
  const mobile_header_menu = $("#mobile_header_menu");
  const mobile_header_toggler = $("#mobile_header_toggler");
  const top_header = $("#top_header");

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

  $("#search_form_input_lg, #search_form_input_sm").on("keyup", function () {
    handleTypeahead();
  });

  $("#search_form_input_lg, #search_form_input_sm").on("change", function () {
    handleTypeahead();
  });

  function handleTypeahead() {
    if (search_form_input_lg?.val() || search_form_input_sm?.val()) {
      // Get data from backend
      search_form_input_lg?.addClass("hasValue");
      search_form_input_sm?.addClass("hasValue");
      header_search_typeahead_container?.addClass("shown");
      mobile_header_search_typeahead_container?.addClass("shown");
    } else {
      header_search_typeahead_container?.removeClass("shown");
      mobile_header_search_typeahead_container?.removeClass("shown");
      search_form_input_lg?.removeClass("hasValue");
      search_form_input_sm?.removeClass("hasValue");
    }
  }

  if (search_input_sm_clear_btn?.length) {
    search_input_sm_clear_btn.on("click", function (e) {
      e.preventDefault();
      search_form_input_sm?.val("");
      header_search_typeahead_container?.removeClass("shown");
      mobile_header_search_typeahead_container?.removeClass("shown");
      search_form_input_lg?.removeClass("hasValue");
      search_form_input_sm?.removeClass("hasValue");
    });
  }

  $("#header_start_part .nav-item").mouseenter(function (e) {
    const link = $(this)?.find(".nav-link")?.first();
    if (link?.length && link?.hasClass("has-submenu")) {
      const menu = link?.next();
      header_start_part_js?.classList.add("extended");
      menu.css({
        top: header_start_part_js?.getBoundingClientRect().bottom,
        left: header_start_part_js?.getBoundingClientRect().left,
      });
      menu?.addClass("shown");
    }
  });
  $("#header_start_part .nav-item").mouseleave(function (e) {
    const link = $(this)?.find(".nav-link")?.first();
    if (link?.length && link?.hasClass("has-submenu")) {
      const menu = link?.next();
      header_start_part_js?.classList.remove("extended");
      menu?.removeClass("shown");
    }
  });

  // Mobile Scripts

  if (mobile_header_toggler?.length && mobile_header_menu) {
    mobile_header_toggler.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      mobile_header_menu.toggleClass("shown");
    });
  }

  $(".mobile_header_link.has-submenu").on("click", function (e) {
    e.preventDefault();
    const menu = $(this).next();
    if (menu?.length) {
      menu.addClass("shown");
    }
  });

  $(".mobile-header-submenu .back-icon").on("click", function (e) {
    e.preventDefault();
    $(".mobile-header-submenu").removeClass("shown");
  });

  $("#top_header_dismiss_btn").on("click", function (e) {
    e.preventDefault();
    if (top_header?.length) {
      top_header?.removeClass("shown");
    }
  });
});
