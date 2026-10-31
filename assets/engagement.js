(function () {
  "use strict";
  function track(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, Object.assign({
        page_path: window.location.pathname,
        page_title: document.title
      }, params || {}));
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;
    var href = link.getAttribute("href") || "";
    var method = null;
    if (/^https?:\/\/wa\.me\//i.test(href) || /whatsapp/i.test(href)) method = "whatsapp";
    else if (/t\.me\//i.test(href)) method = "telegram";
    else if (/instagram\.com\//i.test(href)) method = "instagram";
    else if (/^mailto:/i.test(href)) method = "email";
    else if (/^tel:/i.test(href)) method = "phone";

    if (method) {
      track("contact_click", {
        contact_method: method,
        link_url: href,
        link_text: (link.innerText || link.getAttribute("aria-label") || "").trim().slice(0, 100)
      });
      track(method + "_click", { link_url: href });
    }
    if (link.classList.contains("btn") || /#contact(?:$|[?])/.test(href)) {
      track("cta_click", {
        cta_text: (link.innerText || link.getAttribute("aria-label") || "").trim().slice(0, 100),
        link_url: href
      });
    }
  });

  document.addEventListener("toggle", function (event) {
    var item = event.target;
    if (item && item.matches && item.matches("details") && item.open) {
      track("faq_open", {
        question: (item.querySelector("summary")?.innerText || "").trim().slice(0, 150)
      });
    }
  }, true);

  if ("IntersectionObserver" in window) {
    var seen = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        if (!id || seen[id]) return;
        seen[id] = true;
        track("section_view", { section_id: id });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.35 });
    ["services", "pricing", "process", "faq", "studio-setup", "about", "order-request"].forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  var scrollSent = false;
  function checkScrollDepth() {
    if (scrollSent) return;
    var doc = document.documentElement;
    var height = Math.max(doc.scrollHeight, document.body ? document.body.scrollHeight : 0);
    if (height > 0 && window.scrollY + window.innerHeight >= height * 0.75) {
      scrollSent = true;
      track("scroll_75", { percent_scrolled: 75 });
      window.removeEventListener("scroll", checkScrollDepth);
    }
  }
  window.addEventListener("scroll", checkScrollDepth, { passive: true });
  checkScrollDepth();
})();