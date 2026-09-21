(function () {
  const STORAGE_KEY = 'estateliga-lang';
  const DEFAULT = 'en';

  const dict = {
    en: {
      nav_home: 'Home',
      nav_properties: 'Listings',
      nav_about: 'About',
      nav_contact: 'Contact',
      eyebrow: 'Constanța · Mamaia · Romania',
      tagline: 'Homes by the Black Sea — for living, investing, and returning to the shore. We help you buy, sell, and rent in Constanța and Mamaia with clear advice and a local eye.',
      cta_view: 'View listings',
      cta_contact: 'Contact',
      by_appointment: 'Sales & rentals',
      footer_home: 'Sale & Rent ◆ Constanța · Mamaia',
      page_properties: 'LISTINGS',
      page_about: 'ABOUT',
      page_contact: 'CONTACT',
      footer_properties: 'Constanța · Mamaia ◆ Sale & Rent',
      listings_empty_title: 'No listings yet',
      listings_empty_text: 'Homes for sale and rent in Constanța and Mamaia will appear here — different budgets and types. Message us if you are looking for something specific.',
      about_heritage: 'LOCAL',
      about_heritage_body: 'We work where the city meets the sea — Constanța and Mamaia. Streets, buildings, and seasons we know first-hand, so every recommendation stays practical.',
      about_exclusivity: 'SALE & RENT',
      about_exclusivity_body: 'Apartments, houses, and seaside homes: buy, sell, and rent. From everyday flats to stronger lots when they appear — we match the place to how you use it.',
      about_discretion: 'CLEAR STEPS',
      about_discretion_body: 'From the first call to the keys: honest numbers, transparent documents, and guidance without pressure. You always know what comes next.',
      about_quote: '“A good home by the sea should feel simple — and right.”',
      footer_about: 'Local ◆ Sale & Rent ◆ Clear steps',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send message',
      atelier: 'OFFICE',
      label_correspondence: 'Email',
      label_telephone: 'Phone',
      label_salon: 'Area',
      value_salon: 'Constanța · Mamaia',
      contact_note: 'Tell us what you need — buy, sell, or rent. We usually reply within one to two business days.',
      footer_contact: 'Constanța · Mamaia ◆ Romania',
    },
    ro: {
      nav_home: 'Acasă',
      nav_properties: 'Anunțuri',
      nav_about: 'Despre',
      nav_contact: 'Contact',
      eyebrow: 'Constanța · Mamaia · România',
      tagline: 'Case lângă Marea Neagră — pentru locuit, investiție și întoarcere la mal. Vă ajutăm să cumpărați, vindeți și închiriați în Constanța și Mamaia, cu sfaturi clare și cunoaștere locală.',
      cta_view: 'Vezi anunțuri',
      cta_contact: 'Contact',
      by_appointment: 'Vânzări & închirieri',
      footer_home: 'Vânzare & Închiriere ◆ Constanța · Mamaia',
      page_properties: 'ANUNȚURI',
      page_about: 'DESPRE',
      page_contact: 'CONTACT',
      footer_properties: 'Constanța · Mamaia ◆ Vânzare & Închiriere',
      listings_empty_title: 'Încă nu sunt anunțuri',
      listings_empty_text: 'Locuințe de vânzare și închiriere în Constanța și Mamaia vor apărea aici — bugete și tipuri diferite. Scrieți-ne dacă căutați ceva anume.',
      about_heritage: 'LOCAL',
      about_heritage_body: 'Lucrăm acolo unde orașul întâlnește marea — Constanța și Mamaia. Cunoaștem străzile, clădirile și sezoanele, ca recomandările să rămână practice.',
      about_exclusivity: 'VÂNZARE & ÎNCHIRIERE',
      about_exclusivity_body: 'Apartamente, case și locuințe la mare: cumpărare, vânzare și închiriere. De la locuințe obișnuite la loturi mai selecte, când apar — potrivim locul cu modul în care îl folosiți.',
      about_discretion: 'PAȘI CLARE',
      about_discretion_body: 'De la primul apel până la chei: cifre corecte, documente transparente și îndrumare fără presiune. Știți mereu ce urmează.',
      about_quote: '„O casă bună lângă mare ar trebui să pară simplă — și potrivită.”',
      footer_about: 'Local ◆ Vânzare & Închiriere ◆ Pași clari',
      form_name: 'Nume',
      form_email: 'Email',
      form_message: 'Mesaj',
      form_submit: 'Trimite mesajul',
      atelier: 'BIROU',
      label_correspondence: 'Email',
      label_telephone: 'Telefon',
      label_salon: 'Zonă',
      value_salon: 'Constanța · Mamaia',
      contact_note: 'Spuneți-ne ce căutați — cumpărare, vânzare sau închiriere. Răspundem de obicei în una–două zile lucrătoare.',
      footer_contact: 'Constanța · Mamaia ◆ România',
    },
    de: {
      nav_home: 'Start',
      nav_properties: 'Angebote',
      nav_about: 'Über uns',
      nav_contact: 'Kontakt',
      eyebrow: 'Constanța · Mamaia · Rumänien',
      tagline: 'Wohnen am Schwarzen Meer — zum Leben, Anlegen und Wiederkommen. Wir helfen Ihnen beim Kauf, Verkauf und bei der Vermietung in Constanța und Mamaia — klar und vor Ort.',
      cta_view: 'Angebote ansehen',
      cta_contact: 'Kontakt',
      by_appointment: 'Kauf & Miete',
      footer_home: 'Kauf & Miete ◆ Constanța · Mamaia',
      page_properties: 'ANGEBOTE',
      page_about: 'ÜBER UNS',
      page_contact: 'KONTAKT',
      footer_properties: 'Constanța · Mamaia ◆ Kauf & Miete',
      listings_empty_title: 'Noch keine Angebote',
      listings_empty_text: 'Kauf- und Mietangebote in Constanța und Mamaia erscheinen hier — verschiedene Budgets und Typen. Schreiben Sie uns bei konkreter Suche.',
      about_heritage: 'VOR ORT',
      about_heritage_body: 'Wir arbeiten dort, wo Stadt und Meer zusammentreffen — Constanța und Mamaia. Straßen, Häuser und Saisons kennen wir aus der Praxis.',
      about_exclusivity: 'KAUF & MIETE',
      about_exclusivity_body: 'Wohnungen, Häuser und Objekte am Meer: Kauf, Verkauf und Miete. Von Alltagwohnungen bis zu stärkeren Losen, wenn sie kommen — passend zu Ihrer Nutzung.',
      about_discretion: 'KLARE SCHRITTE',
      about_discretion_body: 'Vom ersten Gespräch bis zu den Schlüsseln: ehrliche Zahlen, transparente Unterlagen, Beratung ohne Druck. Sie wissen immer, was als Nächstes kommt.',
      about_quote: '„Ein gutes Zuhause am Meer sollte sich einfach anfühlen — und richtig.“',
      footer_about: 'Vor Ort ◆ Kauf & Miete ◆ Klare Schritte',
      form_name: 'Name',
      form_email: 'E-Mail',
      form_message: 'Nachricht',
      form_submit: 'Nachricht senden',
      atelier: 'BÜRO',
      label_correspondence: 'E-Mail',
      label_telephone: 'Telefon',
      label_salon: 'Gebiet',
      value_salon: 'Constanța · Mamaia',
      contact_note: 'Sagen Sie uns, was Sie brauchen — Kauf, Verkauf oder Miete. Wir antworten in der Regel innerhalb von ein bis zwei Werktagen.',
      footer_contact: 'Constanța · Mamaia ◆ Rumänien',
    },
    ru: {
      nav_home: 'Главная',
      nav_properties: 'Объявления',
      nav_about: 'О нас',
      nav_contact: 'Контакт',
      eyebrow: 'Констанца · Мамая · Румыния',
      tagline: 'Жильё у Чёрного моря — чтобы жить, вкладывать и возвращаться к берегу. Помогаем купить, продать и сдать в аренду в Констанце и Мамае — просто и по делу.',
      cta_view: 'Смотреть объявления',
      cta_contact: 'Контакт',
      by_appointment: 'Продажа и аренда',
      footer_home: 'Продажа и аренда ◆ Констанца · Мамая',
      page_properties: 'ОБЪЯВЛЕНИЯ',
      page_about: 'О НАС',
      page_contact: 'КОНТАКТ',
      footer_properties: 'Констанца · Мамая ◆ Продажа и аренда',
      listings_empty_title: 'Объявлений пока нет',
      listings_empty_text: 'Здесь появятся квартиры и дома на продажу и в аренду в Констанце и Мамае — разные бюджеты и типы. Напишите, если ищете что-то конкретное.',
      about_heritage: 'НА МЕСТЕ',
      about_heritage_body: 'Работаем там, где город встречается с морем — Констанца и Мамая. Знаем улицы, дома и сезоны не по буклету, а на практике.',
      about_exclusivity: 'ПРОДАЖА И АРЕНДА',
      about_exclusivity_body: 'Квартиры, дома и жильё у моря: покупка, продажа и аренда. От обычных вариантов до более сильных лотов, когда они есть — подбираем под то, как вы будете жить.',
      about_discretion: 'ПОНЯТНЫЕ ШАГИ',
      about_discretion_body: 'От первого звонка до ключей: честные цифры, прозрачные документы и помощь без давления. Вы всегда понимаете, что дальше.',
      about_quote: '«Хороший дом у моря должен ощущаться просто — и правильно.»',
      footer_about: 'На месте ◆ Продажа и аренда ◆ Понятные шаги',
      form_name: 'Имя',
      form_email: 'Email',
      form_message: 'Сообщение',
      form_submit: 'Отправить',
      atelier: 'ОФИС',
      label_correspondence: 'Email',
      label_telephone: 'Телефон',
      label_salon: 'Район',
      value_salon: 'Констанца · Мамая',
      contact_note: 'Напишите, что нужно — купить, продать или снять. Обычно отвечаем в течение одного–двух рабочих дней.',
      footer_contact: 'Констанца · Мамая ◆ Румыния',
    },
  };
  };

  function apply(lang) {
    const pack = dict[lang] || dict[DEFAULT];
    document.documentElement.lang = lang === 'en' ? 'en' : lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function init() {
    let lang = DEFAULT;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) lang = saved;
    } catch (_) {}
    apply(lang);
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => apply(btn.dataset.lang));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
