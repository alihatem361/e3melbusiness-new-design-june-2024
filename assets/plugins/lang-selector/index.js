const backdrop = document.getElementById("lang_overlay_backdrop");
const overlay = document.getElementById("lang_overlay");
const inner_content = document.getElementById("lang_content_inner");
const lang = document?.getElementsByTagName("html")[0]?.getAttribute("lang");
const lang_overlay_selected_label = document.getElementsByClassName(
  "lang_overlay_selected_label"
);

const countries = [
  {
    id: 1,
    name: "العربية",
    native: "Arabic",
    locale: "ar",
    direction: "rtl",
    is_default: true,
  },
  {
    id: 2,
    name: "الإنجليزية",
    native: "English",
    locale: "en",
    direction: "ltr",
    is_default: false,
  },
  {
    id: 3,
    name: "العبرية",
    native: "Hebrew",
    locale: "hr",
    direction: "rtl",
    is_default: false,
  },
];

if (backdrop && overlay) {
  let allCountries = [...countries];
  let currentLangInfo = allCountries?.filter((c) => c.locale === lang)[0];
  if (currentLangInfo) {
    setSelectedCountryInfo(
      currentLangInfo.locale,
      currentLangInfo.direction,
      currentLangInfo.native,
      currentLangInfo.name
    );
  } else {
    currentLangInfo = allCountries?.filter((c) => c.locale === "ar")[0];
    setSelectedCountryInfo(
      currentLangInfo.locale,
      currentLangInfo.direction,
      currentLangInfo.native,
      currentLangInfo.name
    );
  }
  backdrop.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    backdrop.classList.remove("shown");
    overlay.classList.remove("shown");
  });
  overlay.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
  });
  overlay
    ?.querySelector(".country-search-input")
    ?.addEventListener("keyup", searchCountries);

  document
    .getElementById("lang_overlay_dismiss_btn")
    ?.addEventListener("click", hideCountryOverlay);

  function searchCountries() {
    inner_content.innerHTML = null;
    allCountries = [...countries];
    if (this.value) {
      allCountries = allCountries?.filter(
        (c) =>
          c.native?.includes(this.value) ||
          c.name?.includes(this.value) ||
          c.locale?.includes(this.value) ||
          c.native?.toLowerCase()?.includes(this.value) ||
          c.name?.toLowerCase()?.includes(this.value) ||
          c.locale?.toLowerCase()?.includes(this.value)
      );
    } else allCountries = [...countries];
    setHTML();
  }

  function setHTML() {
    inner_content.innerHTML = "";
    allCountries?.forEach((ctry) => {
      const el = document.createElement("div");
      el.classList.add("col-lg-4");
      el.classList.add("col-sm-6");
      el.innerHTML = `
      <div class="country-item" data-dir="${ctry?.direction}" data-lang="${
        ctry?.lang
      }" data-name="${ctry?.native}" data-ar-name="${ctry?.name}">
        <span>${lang === "ar" ? ctry?.name : ctry?.native}</span>
      </div>
      `;
      inner_content?.appendChild(el);
    });
    const elements = inner_content?.querySelectorAll(".country-item");
    for (let i = 0; i < elements?.length; i++) {
      elements[i].removeEventListener("click", handleCountryClick);
    }
    for (let i = 0; i < elements?.length; i++) {
      elements[i].addEventListener("click", handleCountryClick);
    }
  }

  const chng_ctry_btns = document.getElementsByClassName("change_lang_btn");
  for (let i = 0; i < chng_ctry_btns.length; i++) {
    chng_ctry_btns[i].addEventListener("click", showCountryOverlay);
  }

  function showCountryOverlay() {
    backdrop.classList.add("shown");
    overlay.classList.add("shown");
    allCountries = [...countries];
    setHTML();
  }

  function hideCountryOverlay() {
    backdrop.classList.remove("shown");
    overlay.classList.remove("shown");
    inner_content.innerHTML = "";
  }

  // ****************************************************************************************************
  // ****************************************************************************************************
  // ****************************************************************************************************
  // Work Here

  function handleCountryClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const lang = this.getAttribute("data-lang");
    const dir = this.getAttribute("data-dir");
    const langName = this.getAttribute("data-name");
    const langARName = this.getAttribute("data-ar-name");
    setSelectedCountryInfo(lang, dir, langName, langARName);
    hideCountryOverlay();
  }

  function setSelectedCountryInfo(locale, direction, langName, langARName) {
    for (let i = 0; i < lang_overlay_selected_label.length; i++) {
      lang_overlay_selected_label[i].getElementsByTagName(
        "small"
      )[0].innerText = lang === "ar" ? langARName : langName;
    }
  }
}
