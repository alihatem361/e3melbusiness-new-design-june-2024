$(document).ready(function () {
  $(".dropdown_filter_btn_js").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const menu = $(this).parent()?.find(".filter_btn_menu_js")?.first();
    if (menu?.length) {
      menu.toggleClass("shown");
      const otherMenues = $(".filter_btn_menu_js")?.not(menu);
      otherMenues?.removeClass("shown");
    }
  });

  $("*").on("click", function (e) {
    if (
      !$(this).is(".dropdown_filter_btn_js") &&
      !$(this)?.parents()?.find(".dropdown_filter_btn_js")?.length
    ) {
      $(".filter_btn_menu_js")?.removeClass("shown");
    }
  });

  $(".sort_menu_btn_js").on("click", function (e) {
    e.preventDefault();
    // write what to do here when sorting !!
  });

  $(".grid_menu_btn_js").on("click", function (e) {
    e.preventDefault();
    // write what to do here when changing grid !!
  });

  // Filter Overlay

  $("#filter_overlay_toggler").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const aside = $("#products_filter_overlay");
    const backdrop = $("#products_filter_overlay_backdrop");
    if (aside?.length) {
      aside.addClass("shown");
    }
    if (backdrop?.length) {
      backdrop.addClass("shown");
    }
    $("body")?.css("overflow", "hidden");
  });

  $("#products_filter_overlay_backdrop").on("click", function (e) {
    const aside = $("#products_filter_overlay");
    $("body")?.css("overflow", "auto");
    $(this)?.removeClass("shown");
    aside?.removeClass("shown");
  });

  $("#product_filter_overlay_dismiss_js").on("click", function (e) {
    e.preventDefault();
    const aside = $("#products_filter_overlay");
    const backdrop = $("#products_filter_overlay_backdrop");
    $("body")?.css("overflow", "auto");
    aside?.removeClass("shown");
    backdrop?.removeClass("shown");
  });
});
