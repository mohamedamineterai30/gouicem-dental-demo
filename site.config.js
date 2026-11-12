// Client : Dr. Gouicem Soumia (@dr_gouicem). Source : profil Instagram public, 12 nov 2026.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andha.
globalThis.CLINIC = {
  demo: true, // true = les RDV yet7attou f navigateur (demo). false = site réel (Netlify).
  name: "Gouicem Dental Clinic",
  short: "G",
  specialty: { fr: "Dentisterie esthétique", ar: "طب الأسنان التجميلي" },
  city: { fr: "Algérie", ar: "الجزائر" }, // A CONFIRMER : ville / wilaya
  tagline: {
    fr: "Votre Hollywood Smile, signé Dr. Gouicem.",
    ar: "ابتسامة هوليوود، بتوقيع د. قويسم.",
  },
  intro: {
    fr: "Facettes, zircon, implants et blanchiment. Réservez votre consultation en 30 secondes, sans attendre au téléphone.",
    ar: "فينير، زيركون، زراعة وتبييض. احجزي استشارتك في 30 ثانية، بدون انتظار على الهاتف.",
  },
  doctor: {
    name: "Dr. Gouicem Soumia",
    title: { fr: "Chirurgien-dentiste · esthétique, implantologie, laser", ar: "جراحة أسنان · تجميل، زراعة، ليزر" },
    bio: {
      fr: "Le Dr. Gouicem conçoit chaque sourire sur mesure : étude du visage, simulation du résultat, puis réalisation en facettes ou en zircon. Le cabinet dispose de la radio panoramique et du laser sur place.",
      ar: "تصمم د. قويسم كل ابتسامة حسب ملامح الوجه: دراسة، محاكاة للنتيجة، ثم الإنجاز بالفينير أو الزيركون. العيادة مجهزة بالأشعة البانورامية والليزر.",
    },
    photo: "", // A AJOUTER : sa photo, avec son accord
  },
  phone: "0540734440",
  whatsapp: "213540734440", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "dr_gouicem",
  address: { fr: "Adresse du cabinet (à confirmer)", ar: "عنوان العيادة (للتأكيد)" },
  mapsUrl: "",
  theme: { primary: "#1f3a8a", dark: "#0a0f24", accent: "#c9a55c" },

  // A CONFIRMER : horaires réels. 0 = dimanche ... 6 = samedi. [] = fermé.
  hours: {
    0: [["09:00", "12:30"], ["14:00", "17:00"]],
    1: [["09:00", "12:30"], ["14:00", "17:00"]],
    2: [["09:00", "12:30"], ["14:00", "17:00"]],
    3: [["09:00", "12:30"], ["14:00", "17:00"]],
    4: [["09:00", "12:30"], ["14:00", "17:00"]],
    5: [],
    6: [["09:00", "13:00"]],
  },
  slotMinutes: 30,
  daysAhead: 21,

  services: [
    { id: "consult", name: { fr: "Consultation", ar: "استشارة" }, desc: { fr: "Examen, radio panoramique sur place et plan de traitement.", ar: "فحص، أشعة بانورامية في العيادة وخطة علاج." } },
    { id: "hollywood", name: { fr: "Hollywood Smile", ar: "ابتسامة هوليوود" }, desc: { fr: "Design du sourire complet, adapté à votre visage.", ar: "تصميم ابتسامة كاملة تناسب ملامحك." } },
    { id: "facettes", name: { fr: "Facettes", ar: "فينير" }, desc: { fr: "Fines, naturelles, pour corriger forme et teinte.", ar: "رقيقة وطبيعية، لتصحيح الشكل واللون." } },
    { id: "zircon", name: { fr: "Couronnes zircon", ar: "تيجان الزيركون" }, desc: { fr: "Solides, sans métal, couleur de la dent.", ar: "قوية، بدون معدن، بلون السن." } },
    { id: "implant", name: { fr: "Implantation", ar: "زراعة الأسنان" }, desc: { fr: "Remplacer une dent manquante durablement.", ar: "تعويض السن المفقود بشكل دائم." } },
    { id: "blanchiment", name: { fr: "Blanchiment", ar: "تبييض الأسنان" }, desc: { fr: "Des dents plus claires en une séance.", ar: "أسنان أكثر بياضا في جلسة واحدة." } },
    { id: "laser", name: { fr: "Soins au laser", ar: "العلاج بالليزر" }, desc: { fr: "Gencives et soins précis, plus de confort.", ar: "علاج اللثة بدقة وراحة أكبر." } },
  ],

  points: [
    { fr: "Simulation du sourire avant de commencer", ar: "محاكاة الابتسامة قبل البدء" },
    { fr: "Radio panoramique et laser sur place", ar: "أشعة بانورامية وليزر في العيادة" },
    { fr: "Rendez-vous confirmé par WhatsApp", ar: "تأكيد الموعد عبر واتساب" },
  ],
  proof: [
    { n: "286 k", l: { fr: "abonnés sur Instagram", ar: "متابع على إنستغرام" } },
    { n: "320+", l: { fr: "cas et conseils publiés", ar: "حالة ونصيحة منشورة" } },
  ],

  // Video + tsawer Higgsfield (12 nov 2026). Tsawer l-cabinet houma AI, machi l-cabinet ta3ha :
  // f demo barka. 9bel ma site yekhroj l patients, ytbeddlou b tsawer 7a9i9iyin ta3ha.
  film: {
    video: "assets/dent.mp4",
    poster: "assets/dent-poster.jpg",
    title: { fr: "Chaque sourire est une pièce unique.", ar: "كل ابتسامة قطعة فريدة." },
    text: {
      fr: "Facettes et zircon façonnés à la teinte et à la forme de vos dents, pour un résultat naturel.",
      ar: "فينير وزيركون بلون وشكل أسنانك، لنتيجة طبيعية.",
    },
  },
  galleryTitle: { fr: "Le cabinet", ar: "العيادة" },
  gallery: ["assets/fauteuil.jpg", "assets/accueil.jpg", "assets/aligneur.jpg"],

  faq: [
    {
      q: { fr: "Faut-il payer pour réserver ?", ar: "هل يجب الدفع للحجز؟" },
      a: { fr: "Non. La réservation en ligne est gratuite, le règlement se fait au cabinet.", ar: "لا. الحجز عبر الموقع مجاني، والدفع في العيادة." },
    },
    {
      q: { fr: "Je viens d'une autre wilaya, comment faire ?", ar: "أنا من ولاية أخرى، كيف أفعل؟" },
      a: { fr: "Réservez une consultation et précisez-le sur WhatsApp : nous regroupons vos séances.", ar: "احجزي استشارة واذكري ذلك على واتساب: نجمع لك الجلسات." },
    },
    {
      q: { fr: "Comment annuler ou changer l'heure ?", ar: "كيف ألغي أو أغيّر الموعد؟" },
      a: { fr: "Écrivez-nous sur WhatsApp ou appelez, au moins 24 heures avant.", ar: "راسلينا على واتساب أو اتصلي، 24 ساعة على الأقل قبل الموعد." },
    },
  ],
};
