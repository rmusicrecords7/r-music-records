(function () {
  "use strict";
  var paths = { uk: "/", en: "/index-en.html", de: "/de/index.html", fr: "/fr/index.html", ru: "/ru/index.html" };
  var supported = Object.keys(paths);
  var choiceKey = "rmr-lang-choice";
  function languageFromTag(tag) {
    var code = String(tag || "").toLowerCase().split(/[-_]/)[0];
    return supported.indexOf(code) !== -1 ? code : null;
  }
  function languageFromBrowser() {
    var preferences = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < preferences.length; i++) {
      var match = languageFromTag(preferences[i]);
      if (match) return match;
    }
    return null;
  }
  function languageFromCountry(country) {
    var code = String(country || "").toUpperCase();
    if (code === "UA") return "uk";
    if (code === "DE" || code === "AT") return "de";
    if (code === "FR") return "fr";
    if (code === "RU" || code === "BY") return "ru";
    if (["US", "GB", "CA", "AU", "NZ", "IE"].indexOf(code) !== -1) return "en";
    return "en";
  }
  function goToLanguage(language) {
    var destination = paths[language] || paths.en;
    if (location.pathname !== destination) location.replace(destination);
  }
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest(".lang a");
    if (link) {
      var href = link.getAttribute("href") || "";
      var language = href.indexOf("/de/") === 0 ? "de" :
        href.indexOf("/fr/") === 0 ? "fr" :
        href.indexOf("/ru/") === 0 ? "ru" :
        href === "/index-en.html" ? "en" :
        (href === "/" || href === "/index.html") ? "uk" : null;
      if (language) {
        try { localStorage.setItem(choiceKey, language); } catch (e) {}
      }
    }
    var toggle = target.closest("[data-lang]");
    if (toggle) {
      var selected = languageFromTag(toggle.getAttribute("data-lang"));
      if (selected) {
        try { localStorage.setItem(choiceKey, selected); } catch (e) {}
      }
    }
  }, true);

  // Only route the default homepage. Direct localized URLs remain untouched.
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;
  try {
    var saved = localStorage.getItem(choiceKey);
    if (saved && paths[saved]) {
      goToLanguage(saved);
      return;
    }
  } catch (e) {}
  var browserLanguage = languageFromBrowser();
  if (browserLanguage) {
    goToLanguage(browserLanguage);
    return;
  }
  // Country is a fallback only when browser language is unsupported.
  var controller = window.AbortController ? new AbortController() : null;
  var timeout = controller ? setTimeout(function () { controller.abort(); }, 1800) : null;
  fetch("https://ipapi.co/json/", controller ? { signal: controller.signal } : {})
    .then(function (response) {
      if (!response.ok) throw new Error("Country lookup unavailable");
      return response.json();
    })
    .then(function (data) {
      if (timeout) clearTimeout(timeout);
      goToLanguage(languageFromCountry(data && data.country_code));
    })
    .catch(function () {
      if (timeout) clearTimeout(timeout);
      goToLanguage("en");
    });
})();