(function () {
  const profile_img = $("#profile_img");
  const change_profile_btn = $("#change_profile_btn");
  const profile_img_input = $("#profile_img_input");

  change_profile_btn.on("click", function (event) {
    event.preventDefault();
    if (profile_img_input?.length) {
      profile_img_input.trigger("click");
    }
  });

  profile_img_input.on("change", function (event) {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        profile_img.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
})();
