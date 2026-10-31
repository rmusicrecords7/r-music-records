(function () {
  "use strict";
  var root = document.querySelector("[data-lead-form]");
  if (!root) return;
  var locale = (document.documentElement.lang || "en").toLowerCase().slice(0, 2);
  var lang = locale === "uk" ? "uk" : locale === "ru" ? "ru" : locale === "de" ? "de" : locale === "fr" ? "fr" : "en";
  var isUA = lang === "uk";
  var currency = isUA ? "₴" : "$";
  var channel = (lang === "uk" || lang === "ru") ? "telegram" : "whatsapp";
  var t = {
    uk: {eyebrow:"ЗАПИТ НА ПРОЄКТ",title:"Розрахуй орієнтовну вартість і надішли заявку",intro:"Обери послугу, вкажи кількість і додай посилання на демо. Після натискання відкриється Telegram із підготовленим повідомленням.",name:"Твоє ім’я",service:"Послуга",qty:"Кількість",hours:"Години запису",songs:"Кількість треків",link:"Посилання на демо або файли",details:"Що потрібно зробити?",estimate:"Орієнтовна вартість",submit:"Продовжити в Telegram ↗",note:"Це попередній розрахунок. Для послуг із ціною «від» фінальну вартість узгоджуємо після перегляду матеріалу. Дані не зберігаються на сайті.",required:"Заповни ім’я та обери послугу.",msg:"Нова заявка з R Music Records",services:[["record","Запис вокалу",1000,"hour"],["mix","Зведення мультитреку з вокалом",4500,"song"],["vocalmix","Зведення вокалу під готовий мінус",3500,"song"],["master","Мастеринг",1000,"song"],["arrange","Створення аранжування",8000,"from"],["lyricsedit","Редагування тексту",3000,"text"],["lyricswrite","Написання тексту",8000,"fromtext"],["sunorebuild","Перезбірка аранжування Suno",8000,"from"],["sunoedit","Доопрацювання аранжування Suno",4000,"from"]]},
    ru: {eyebrow:"ЗАПРОС НА ПРОЕКТ",title:"Рассчитай ориентировочную стоимость и отправь заявку",intro:"Выбери услугу, укажи количество и добавь ссылку на демо. После нажатия откроется Telegram с подготовленным сообщением.",name:"Твоё имя",service:"Услуга",qty:"Количество",hours:"Часы записи",songs:"Количество треков",link:"Ссылка на демо или файлы",details:"Что нужно сделать?",estimate:"Ориентировочная стоимость",submit:"Продолжить в Telegram ↗",note:"Это предварительный расчёт. Для услуг с ценой «от» итоговую стоимость согласуем после просмотра материала. Данные не сохраняются на сайте.",required:"Укажи имя и выбери услугу.",msg:"Новая заявка с R Music Records",services:[["record","Запись вокала",22,"hour"],["mix","Сведение мультитрека с вокалом",100,"song"],["vocalmix","Сведение вокала под готовый минус",78,"song"],["master","Мастеринг",25,"song"],["arrange","Создание аранжировки",180,"from"],["sunorebuild","Пересборка аранжировки Suno",180,"from"],["sunoedit","Доработка аранжировки Suno",100,"from"]]},
    en: {eyebrow:"PROJECT REQUEST",title:"Estimate your project and send a request",intro:"Choose a service, set the quantity and add a demo link. The button opens WhatsApp with a prepared message for you to review and send.",name:"Your name",service:"Service",qty:"Quantity",hours:"Recording hours",songs:"Number of tracks",link:"Demo or file link",details:"What would you like done?",estimate:"Estimated starting price",submit:"Continue in WhatsApp ↗",note:"This is an estimate. For services marked “from”, the final quote is agreed after reviewing your material. Your details are not stored on this website.",required:"Please enter your name and choose a service.",msg:"New project request from R Music Records",services:[["record","Vocal recording",22,"hour"],["mix","Multitrack mixing with vocals",100,"song"],["vocalmix","Vocal mixing to a ready backing track",78,"song"],["master","Mastering",25,"song"],["arrange","Arrangement writing",180,"from"],["sunorebuild","Rebuilding a Suno arrangement",180,"from"],["sunoedit","Editing a Suno arrangement",100,"from"]]},
    de: {eyebrow:"PROJEKTANFRAGE",title:"Kosten einschätzen und Anfrage senden",intro:"Wähle eine Leistung, gib die Menge an und füge einen Demo-Link hinzu. WhatsApp öffnet sich mit einer vorbereiteten Nachricht, die du prüfen und selbst senden kannst.",name:"Dein Name",service:"Leistung",qty:"Menge",hours:"Aufnahmestunden",songs:"Anzahl der Tracks",link:"Demo- oder Datei-Link",details:"Was soll gemacht werden?",estimate:"Unverbindlicher Richtpreis",submit:"Weiter zu WhatsApp ↗",note:"Dies ist eine Schätzung. Bei Preisen „ab“ wird der Endpreis nach Prüfung des Materials vereinbart. Deine Angaben werden nicht auf dieser Website gespeichert.",required:"Bitte Namen eingeben und eine Leistung auswählen.",msg:"Neue Projektanfrage über R Music Records",services:[["record","Gesangsaufnahme",22,"hour"],["mix","Multitrack-Mixing mit Vocals",100,"song"],["vocalmix","Vocal-Mixing auf fertigem Instrumental",78,"song"],["master","Mastering",25,"song"],["arrange","Arrangement-Erstellung",180,"from"],["sunorebuild","Suno-Arrangement neu aufbauen",180,"from"],["sunoedit","Suno-Arrangement bearbeiten",100,"from"]]},
    fr: {eyebrow:"DEMANDE DE PROJET",title:"Estimez le coût et envoyez une demande",intro:"Choisissez un service, indiquez la quantité et ajoutez un lien vers votre démo. WhatsApp s’ouvrira avec un message préparé que vous pourrez vérifier et envoyer.",name:"Votre nom",service:"Service",qty:"Quantité",hours:"Heures d’enregistrement",songs:"Nombre de morceaux",link:"Lien vers la démo ou les fichiers",details:"Que souhaitez-vous réaliser ?",estimate:"Estimation de départ",submit:"Continuer sur WhatsApp ↗",note:"Cette estimation est indicative. Pour les services « à partir de », le prix final est convenu après examen des fichiers. Vos informations ne sont pas enregistrées sur ce site.",required:"Veuillez saisir votre nom et choisir un service.",msg:"Nouvelle demande via R Music Records",services:[["record","Enregistrement vocal",22,"hour"],["mix","Mixage multipiste avec voix",100,"song"],["vocalmix","Mixage de voix sur instrumental",78,"song"],["master","Mastering",25,"song"],["arrange","Création d’arrangement",180,"from"],["sunorebuild","Reconstruction d’un arrangement Suno",180,"from"],["sunoedit","Modification d’un arrangement Suno",100,"from"]]}
  }[lang];
  var form = root.querySelector("form");
  var service = form.querySelector("[name=service]");
  var qty = form.querySelector("[name=quantity]");
  var estimate = root.querySelector("[data-estimate]");
  var qtyLabel = root.querySelector("[data-quantity-label]");
  var nameInput = form.querySelector("[name=name]");
  var linkInput = form.querySelector("[name=link]");
  var detailsInput = form.querySelector("[name=details]");
  root.querySelector("[data-eyebrow]").textContent = t.eyebrow;
  root.querySelector("h2").textContent = t.title;
  root.querySelector("[data-intro]").textContent = t.intro;
  root.querySelector("[data-name-label]").textContent = t.name;
  root.querySelector("[data-service-label]").textContent = t.service;
  root.querySelector("[data-link-label]").textContent = t.link;
  root.querySelector("[data-details-label]").textContent = t.details;
  root.querySelector("[data-estimate-label]").textContent = t.estimate;
  root.querySelector("[data-submit-label]").textContent = t.submit;
  root.querySelector("[data-note]").textContent = t.note;
  service.innerHTML = '<option value="">—</option>' + t.services.map(function(s){return '<option value="'+s[0]+'">'+s[1]+'</option>';}).join("");
  var selected = null;
  function format(value) {
    return new Intl.NumberFormat(lang === "uk" || lang === "ru" ? "uk-UA" : lang === "de" ? "de-DE" : lang === "fr" ? "fr-FR" : "en-US", {maximumFractionDigits:0}).format(value) + " " + currency;
  }
  function update() {
    selected = t.services.find(function(s){return s[0]===service.value;});
    var isHour = selected && selected[3] === "hour";
    qtyLabel.textContent = isHour ? t.hours : t.songs;
    qty.max = isHour ? "40" : "20";
    if (!selected) { estimate.textContent = "—"; return; }
    var count = Math.max(1, Math.min(Number(qty.value)||1, Number(qty.max)));
    var total = selected[2] * count;
    var prefix = selected[3] === "from" || selected[3] === "fromtext" ? (lang==="uk"?"від ":lang==="ru"?"от ":lang==="de"?"ab ":lang==="fr"?"à partir de ":"from ") : "";
    estimate.textContent = prefix + format(total);
  }
  service.addEventListener("change", update);
  qty.addEventListener("input", update);
  qty.addEventListener("change", update);
  form.addEventListener("focusin", function(){ if(!form.dataset.started){form.dataset.started="1"; if(window.gtag)window.gtag("event","form_start",{form_name:"project_request"});} });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!nameInput.value.trim() || !selected) { alert(t.required); return; }
    var count = Math.max(1, Number(qty.value)||1);
    var total = selected[2] * count;
    var prefix = selected[3] === "from" || selected[3] === "fromtext" ? (lang==="uk"?"від ":lang==="ru"?"от ":lang==="de"?"ab ":lang==="fr"?"à partir de ":"from ") : "";
    var amount = prefix + format(total);
    var quantityLabel = selected[3] === "hour" ? t.hours : selected[3] === "text" || selected[3] === "fromtext" ? (lang==="uk"?"Кількість текстів":lang==="ru"?"Количество текстов":lang==="de"?"Anzahl der Texte":lang==="fr"?"Nombre de textes":"Number of lyrics") : t.songs;
    var lines = [t.msg, t.name + ": " + nameInput.value.trim(), t.service + ": " + selected[1], quantityLabel + ": " + count, t.estimate + ": " + amount];
    if (linkInput.value.trim()) lines.push(t.link + ": " + linkInput.value.trim());
    if (detailsInput.value.trim()) lines.push(t.details + ": " + detailsInput.value.trim());
    var message = lines.join("\n");
    var url = channel === "telegram" ? "https://t.me/r_music_records?text=" + encodeURIComponent(message) : "https://wa.me/380937201536?text=" + encodeURIComponent(message);
    if (window.gtag) window.gtag("event","form_submit",{form_name:"project_request",service:service.value,quantity:count,estimated_value:total,currency:isUA?"UAH":"USD"});
    if (window.gtag) window.gtag("event","messenger_handoff_click",{messenger:channel,service:service.value});
    var opened = window.open(url,"_blank","noopener");
    if (!opened) window.location.href = url;
  });
  update();
})();