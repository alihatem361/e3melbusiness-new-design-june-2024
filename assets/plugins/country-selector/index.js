fetch("assets/plugins/country-selector/data.json")
  .then((res) => res?.json())
  .then((data) => console.log(data));
