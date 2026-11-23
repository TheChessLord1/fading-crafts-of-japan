// Homepage search. Nothing the visitor types is saved or sent anywhere.
const searchBox = document.querySelector("#search");
const rows = document.querySelectorAll(".craft-row");
const noResults = document.querySelector("#no-results");

// Makes text simple to compare: small letters, and no macrons (ō becomes o).
// Hyphens count as spaces, so "satsuma-kiriko" finds "Satsuma kiriko".
function simplify(text) {
  return text.toLowerCase().normalize("NFD").replace(/\p{Mn}/gu, "")
    .replace(/[-\s]+/g, " ").trim();
}

function filterCrafts() {
  const wanted = simplify(searchBox.value);
  let found = 0;
  rows.forEach(function (row) {
    const name = row.querySelector("h3").textContent;
    const summary = row.querySelector("p").textContent;
    const matches = simplify(name + " " + summary).includes(wanted);
    row.hidden = !matches;
    if (matches) found = found + 1;
  });
  noResults.textContent = found === 0 ? "No crafts found. Try another name." : "";
}

searchBox.addEventListener("input", filterCrafts);
filterCrafts(); // also runs once in case the browser remembered some text
