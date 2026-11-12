// Client : Dr. Gouicem Soumia (@dr_gouicem). Source : profil Instagram public, 12 nov 2026.
// "A CONFIRMER" = ma3louma ma l9inahach f profil, lazem tji men 3andha.
globalThis.CLINIC = {
  demo: true, // true = les RDV yet7attou f navigateur (demo). false = site réel (Netlify).
  name: "Gouicem Dental Clinic",
  short: "G",
  specialty: { fr: "Dentisterie esthétique", ar: "طب الأسنان التجميلي" },
  city: { fr: "Blida", ar: "البليدة" },
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
      fr: "À Blida, le Dr. Gouicem reçoit des patients qui veulent retrouver un sourire sain avant d'être beau : cas simples, reprises de soins ratés, réhabilitations complètes. Elle explique chaque étape à ses 286 000 abonnés, et à chaque patient au fauteuil.",
      ar: "في البليدة، تستقبل د. قويسم مرضى يريدون ابتسامة صحية قبل أن تكون جميلة: حالات بسيطة، تصحيح علاجات فاشلة، وإعادة تأهيل كاملة. تشرح كل خطوة لمتابعيها الـ 286 ألف، ولكل مريض على الكرسي.",
    },
    photo: "", // A AJOUTER : sa photo, avec son accord
  },
  phone: "0540734440",
  whatsapp: "213540734440", // A CONFIRMER : même numéro sur WhatsApp ?
  instagram: "dr_gouicem",
  address: { fr: "Boulevard Mohamed Boudiaf (20 mètres), en face de Promo Sim, Blida 09000", ar: "بولفار محمد بوضياف (20 متر)، مقابل برومو سيم، البليدة" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Boulevard+Mohamed+Boudiaf+Blida",
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
    { id: "consult", img: "assets/fauteuil.jpg", name: { fr: "Consultation", ar: "استشارة" }, desc: { fr: "Examen, radio panoramique sur place et plan de traitement.", ar: "فحص، أشعة بانورامية في العيادة وخطة علاج." } },
    { id: "hollywood", img: "assets/sourire.jpg", name: { fr: "Hollywood Smile", ar: "ابتسامة هوليوود" }, desc: { fr: "Design du sourire complet, adapté à votre visage.", ar: "تصميم ابتسامة كاملة تناسب ملامحك." } },
    { id: "facettes", img: "assets/facette.jpg", name: { fr: "Facettes", ar: "فينير" }, desc: { fr: "Fines, naturelles, pour corriger forme et teinte.", ar: "رقيقة وطبيعية، لتصحيح الشكل واللون." } },
    { id: "zircon", img: "assets/zircon.jpg", name: { fr: "Couronnes zircon", ar: "تيجان الزيركون" }, desc: { fr: "Solides, sans métal, couleur de la dent.", ar: "قوية، بدون معدن، بلون السن." } },
    { id: "implant", img: "assets/implant.jpg", name: { fr: "Implantation", ar: "زراعة الأسنان" }, desc: { fr: "Remplacer une dent manquante durablement.", ar: "تعويض السن المفقود بشكل دائم." } },
    { id: "blanchiment", img: "assets/blanchiment.jpg", name: { fr: "Blanchiment", ar: "تبييض الأسنان" }, desc: { fr: "Des dents plus claires en une séance.", ar: "أسنان أكثر بياضا في جلسة واحدة." } },
    { id: "laser", img: "assets/dent.jpg", name: { fr: "Soins au laser", ar: "العلاج بالليزر" }, desc: { fr: "Gencives et soins précis, plus de confort.", ar: "علاج اللثة بدقة وراحة أكبر." } },
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
  // Men l-posts ta3ha f Instagram (klamha hiya) : "ما نغطيوش المشكل، نعالجوه من الجذور"
  method: {
    title: { fr: "Notre méthode", ar: "طريقتنا" },
    quote: {
      fr: "« On ne couvre pas le problème, on le traite à la racine. La beauté sans la santé ne dure pas. »",
      ar: "« ما نغطيوش المشكل، نعالجوه من الجذور. الجمال بلا صحة ما يدومش. »",
    },
    steps: [
      { t: { fr: "Diagnostic précis", ar: "تشخيص دقيق" }, d: { fr: "Examen et radio panoramique pour voir ce que l'œil ne voit pas.", ar: "فحص وأشعة بانورامية لرؤية ما لا تراه العين." } },
      { t: { fr: "Soigner d'abord", ar: "العلاج أولا" }, d: { fr: "Racines, gencives, caries : tout est traité avant l'esthétique.", ar: "الجذور، اللثة، التسوس: كل شيء يُعالج قبل التجميل." } },
      { t: { fr: "Esthétique étudiée", ar: "تجميل مدروس" }, d: { fr: "Facettes, zircon ou implants, choisis selon votre cas.", ar: "فينير، زيركون أو زراعة، حسب حالتك." } },
    ],
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
