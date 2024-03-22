$(document).ready(function () {
  initializeSmartSelect();
  function initializeSmartSelect() {
    const selectors = $(".smart-select");
    for (let i = 0; i < selectors.length; i++) {
      const selectedLabel = $(selectors[i])?.find("option[selected]")?.text();
      const selectedValue = $(selectors[i])
        ?.find("option[selected]")
        ?.attr("value");
      const placeholder = $(selectors[i])?.attr("placeholder");
      const disabledHint = $(selectors[i])?.attr("data-disabled-hint");
      const name = $(selectors[i])?.attr("name");
      const spacingTop = $(selectors[i])?.attr("data-spacing-top");
      const spacingBottom = $(selectors[i])?.attr("data-spacing-bottom");
      const options = selectors?.find("option");
      const container = $("<div></div>");
      container.addClass("smart-select-container");
      container.addClass("smart_select_container_js");
      if (spacingTop) {
        container.css("margin-top", spacingTop + "px");
      }
      if (spacingBottom) {
        container.css("margin-bottom", spacingBottom + "px");
      }
      const containerHeader = $("<div></div>");
      containerHeader.addClass("smart-select-header");
      containerHeader.addClass("smart_select_header_js");
      containerHeader?.text(selectedLabel ? selectedLabel : placeholder);
      container?.append(containerHeader);
      const containerList = $("<ul></ul>");
      containerList.addClass("smart-select-list");
      containerList.addClass("smart_select_list_js");
      container?.append(containerList);
      const containerInput = $("<input>");
      containerInput.addClass("value_input");
      containerInput.attr("name", name);
      containerInput.attr("type", "hidden");
      selectedValue ? containerInput.val(selectedValue) : null;
      container?.append(containerInput);
      for (let j = 0; j < options.length; j++) {
        const option = options[j];
        const optionLabel = $(options[j])?.text();
        const optionValue = $(options[j])?.attr("value");
        if (optionValue) {
          const li = $("<li>");
          li.addClass("smart_select_item_js");
          li.attr("data-label", optionLabel);
          li.attr("data-value", optionValue);
          if ($(option)?.is(":disabled")) {
            li.addClass("disabled");
            li.html(
              `<span class="value">${optionLabel}</span><span class="hint">${disabledHint}</span>`
            );
            containerList.append(li);
          } else {
            li.html(`<span class="value">${optionLabel}</span>`);
            containerList.append(li);
          }
        }
      }
      container?.insertBefore($(selectors[i]));
      $(selectors[i])?.css("display", "none");
    }
  }

  $(".smart_select_header_js").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const menu = $(this).parent().find(".smart_select_list_js")?.first();
    if (menu.length) {
      menu.toggleClass("shown");
    }
  });

  $(".smart_select_item_js").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const header = $(this).parent().parent()?.find(".smart_select_header_js");
    const menu = $(this).parent();
    const input = $(this).parent().parent()?.find(".value_input")?.first();
    if (menu.length && !$(this).hasClass("disabled")) {
      if (header.length) {
        header.text(
          $(this).attr("data-label") ? $(this).attr("data-label") : ""
        );
      }
      if (input.length) {
        input.val($(this).attr("data-value") ? $(this).attr("data-value") : "");
      }
      menu.toggleClass("shown");
    }
  });
});
