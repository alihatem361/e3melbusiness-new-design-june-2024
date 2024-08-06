(function () {
  const course_filter_card = document.getElementById("course_filter_card");
  const course_filter_offcanvas_body = document.getElementById(
    "course_filter_offcanvas_body"
  );
  const course_filter_form = document.getElementById("course_filter_form");
  const filter_ad_container = document.getElementById("filter_ad_container");
  const filter_form_outer_action = document.getElementById(
    "filter_form_outer_action"
  );
  const mobile_filter_toggler = document.getElementById(
    "mobile_filter_toggler"
  );
  const course_filter_offcanvas_dismiss = document.getElementById(
    "course_filter_offcanvas_dismiss"
  );

  if (mobile_filter_toggler) {
    mobile_filter_toggler.addEventListener("click", handleFilterTogglerClick);
  }

  if (course_filter_offcanvas_dismiss) {
    course_filter_offcanvas_dismiss.addEventListener(
      "click",
      destroyMobileFilterOverlayContent
    );
  }

  function handleFilterTogglerClick() {
    if (course_filter_offcanvas_body) {
      if (course_filter_form) {
        course_filter_offcanvas_body.appendChild(course_filter_form);
      }
      if (filter_ad_container) {
        course_filter_offcanvas_body.appendChild(filter_ad_container);
      }
      if (filter_form_outer_action) {
        course_filter_offcanvas_body.appendChild(filter_form_outer_action);
      }
    }
    course_filter_card.innerHTML = "";
  }

  function destroyMobileFilterOverlayContent() {
    Array.from(course_filter_offcanvas_body.children).forEach(function (child) {
      course_filter_card.appendChild(child);
    });
    course_filter_offcanvas_body.innerHTML = "";
  }
})();
