// THE WEBSITE TITLE: change it here, and it changes on every page.
const SITE_TITLE = "Fading Crafts of Japan";

// Puts the title into the white box on the homepage.
document.querySelectorAll("[data-site-title]").forEach(function (element) {
  element.textContent = SITE_TITLE;
});

// Puts the title into the browser tab, for example "Impact | Fading Crafts of Japan".
const pageName = document.body.dataset.page;
document.title = pageName ? pageName + " | " + SITE_TITLE : SITE_TITLE;
