$(".add_to_cart_viewer_js").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const overlay = $(this).parent()?.find(".cart_overlay_js")?.first();
  if (overlay?.length) overlay.addClass("shown");
});

$(".add_to_cart_overlay_dismiss_js").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const overlay = $(this).parent();
  if (overlay?.length) overlay.removeClass("shown");
});
