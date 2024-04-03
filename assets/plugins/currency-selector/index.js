const backdrop = document.getElementById("currency_overlay_backdrop");
const overlay = document.getElementById("currency_overlay");
const inner_content = document.getElementById("currency_content_inner");
const lang = document?.getElementsByTagName("html")[0]?.getAttribute("lang");
const currency = "USD";
const currency_overlay_selected_label = document.getElementsByClassName(
  "currency_overlay_selected_label"
);

const currencies = [
  {
    id: 1,
    name: "Egyptian Pound",
    symbol: "ج.م",
    code: "ُEGP",
    is_active: true,
    is_default: false,
  },
  {
    id: 96,
    name: "Sudanese Pound",
    symbol: "ج.س",
    code: "ُSDP",
    is_active: false,
    is_default: false,
  },
  {
    id: 96,
    name: "USD Dollar",
    symbol: "دولار",
    code: "USD",
    is_active: false,
    is_default: false,
  },
];

if (backdrop && overlay) {
  let allCurrencies = [...currencies];
  let currentCurrencyInfo = allCurrencies?.filter(
    (c) => c.code === currency
  )[0];
  if (currentCurrencyInfo) {
    setSelectedCurrencyInfo(
      currentCurrencyInfo.id,
      currentCurrencyInfo.name,
      currentCurrencyInfo.symbol,
      currentCurrencyInfo.code
    );
  } else {
    currentCurrencyInfo = allCurrencies?.filter((c) => c.code === currency)[0];
    setSelectedCurrencyInfo(
      currentCurrencyInfo.id,
      currentCurrencyInfo.name,
      currentCurrencyInfo.symbol,
      currentCurrencyInfo.code
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
    ?.addEventListener("keyup", searchCurrencies);

  document
    .getElementById("currency_overlay_dismiss_btn")
    ?.addEventListener("click", hideCountryOverlay);

  function searchCurrencies() {
    inner_content.innerHTML = null;
    allCurrencies = [...currencies];
    if (this.value) {
      allCurrencies = allCurrencies?.filter(
        (c) =>
          c.name?.includes(this.value) ||
          c.code?.includes(this.value) ||
          c.name?.toLowerCase()?.includes(this.value) ||
          c.code?.toLowerCase()?.includes(this.value)
      );
    } else allCurrencies = [...currencies];
    setHTML();
  }

  function setHTML() {
    inner_content.innerHTML = "";
    allCurrencies?.forEach((ctry) => {
      const el = document.createElement("div");
      el.classList.add("col-lg-4");
      el.classList.add("col-sm-6");
      el.innerHTML = `
      <div class="country-item" data-id="${ctry?.id}" data-code="${ctry?.code}" data-name="${ctry?.name}" data-symbol="${ctry?.symbol}">
        <span>${ctry?.name}</span>
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

  const chng_ctry_btns = document.getElementsByClassName("change_currency_btn");
  for (let i = 0; i < chng_ctry_btns.length; i++) {
    chng_ctry_btns[i].addEventListener("click", showCountryOverlay);
  }

  function showCountryOverlay() {
    backdrop.classList.add("shown");
    overlay.classList.add("shown");
    allCurrencies = [...currencies];
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
    const id = this.getAttribute("data-id");
    const code = this.getAttribute("data-code");
    const symbol = this.getAttribute("data-symbol");
    const name = this.getAttribute("data-name");
    setSelectedCurrencyInfo(id, name, symbol, code);
    hideCountryOverlay();
  }

  function setSelectedCurrencyInfo(id, name, symbol, code) {
    for (let i = 0; i < currency_overlay_selected_label.length; i++) {
      currency_overlay_selected_label[i].getElementsByTagName(
        "small"
      )[0].innerText = name;
    }

    // write logic here
  }
}

// fetch("").then((data)=>{

// }).catch((error)=>{

// })
