import { countries } from "./country.js";

const backdrop = document.getElementById("country_overlay_backdrop");
const overlay = document.getElementById("country_overlay");
const inner_content = document.getElementById("country_content_inner");
const lang = document?.getElementsByTagName("html")[0]?.getAttribute("lang");
const country_overlay_selected_label = document.getElementsByClassName(
  "country_overlay_selected_label"
);

if (backdrop && overlay) {
  let allCountries = [...countries];
  let currentLangInfo = allCountries?.filter((c) => c.lang === lang)[0];
  if (currentLangInfo) {
    setSelectedCountryInfo(
      currentLangInfo.lang,
      currentLangInfo.dir,
      currentLangInfo.name,
      currentLangInfo.name_ar,
      currentLangInfo.flag,
      currentLangInfo?.arabic
    );
  } else {
    currentLangInfo = allCountries?.filter((c) => c.lang === "gb")[0];
    setSelectedCountryInfo(
      currentLangInfo.lang,
      currentLangInfo.dir,
      currentLangInfo.name,
      currentLangInfo.name_ar,
      currentLangInfo.flag,
      currentLangInfo?.arabic
    );
  }
  setHTML();
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
    .getElementById("country_overlay_dismiss_btn")
    ?.addEventListener("click", hideCountryOverlay);

  function searchCountries() {
    inner_content.innerHTML = null;
    allCountries = [...countries];
    if (this.value) {
      allCountries = allCountries?.filter(
        (c) =>
          c.name?.includes(this.value) ||
          c.name_ar?.includes(this.value) ||
          c.lang?.includes(this.value) ||
          c.name?.toLowerCase()?.includes(this.value) ||
          c.name_ar?.toLowerCase()?.includes(this.value) ||
          c.lang?.toLowerCase()?.includes(this.value)
      );
    } else allCountries = [...countries];
    setHTML();
  }

  function setHTML() {
    allCountries?.forEach((ctry) => {
      const el = document.createElement("div");
      el.classList.add("col-lg-4");
      el.classList.add("col-sm-6");
      el.innerHTML = `
      <div class="country-item" data-dir="${ctry?.dir}" data-lang="${
        ctry?.lang
      }" data-arabic="${ctry?.arabic}" data-name="${
        ctry?.name
      }" data-ar-name="${ctry?.name_ar}" data-img="${ctry?.flag}">
        <img
          src="${ctry?.flag}"
          alt="${ctry?.name}"
        />
        <span>${lang === "ar" ? ctry?.name_ar : ctry?.name}</span>
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

  const chng_ctry_btns = document.getElementsByClassName("change_ctry_btn");
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
    const img = this.getAttribute("data-img");
    const arabic = this.getAttribute("data-arabic");
    setSelectedCountryInfo(lang, dir, langName, langARName, img, eval(arabic));
    hideCountryOverlay();
  }

  function setSelectedCountryInfo(
    lang,
    dir,
    langName,
    langARName,
    img,
    arabic
  ) {
    for (let i = 0; i < country_overlay_selected_label.length; i++) {
      country_overlay_selected_label[i].getElementsByTagName("img")[0].src =
        img;
      country_overlay_selected_label[i].getElementsByTagName(
        "small"
      )[0].innerText = arabic ? langARName : langName;
    }
  }
}
