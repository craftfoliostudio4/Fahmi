// ─── NAVIGATION LOGIC (MPA ROUTING) ───
function navigateTo(pageId) {
  const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('/html/');
  const rootPrefix = isRoot ? '' : '../';
  const htmlPrefix = isRoot ? 'html/' : '';
  const routes = {
    'home': rootPrefix + 'index.html',
    'about': htmlPrefix + 'about.html',
    'products': htmlPrefix + 'expertise.html',
    'portfolio': htmlPrefix + 'research.html',
    'certifications': htmlPrefix + 'achievements.html',
    'clients': htmlPrefix + 'positions.html',
    'contact': htmlPrefix + 'contact.html'
  };

  if (routes[pageId]) {
    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.classList.add('page-exit');
      setTimeout(() => {
        window.location.href = routes[pageId];
      }, 150);
    } else {
      window.location.href = routes[pageId];
    }
  }
}

function setActiveNav() {
  const path = window.location.pathname;
  let pageId = 'home';
  if (path.includes('about')) pageId = 'about';
  else if (path.includes('expertise')) pageId = 'products';
  else if (path.includes('research')) pageId = 'portfolio';
  else if (path.includes('achievements')) pageId = 'certifications';
  else if (path.includes('positions')) pageId = 'clients';
  else if (path.includes('contact')) pageId = 'contact';


  document.querySelectorAll('.drawer-nav-link').forEach(btn => {
    if (btn.getAttribute('data-nav') === pageId) {
      btn.className = 'drawer-nav-link text-start py-3 px-4 text-sm font-semibold rounded transition-all duration-300 mb-1 border-s-4 flex items-center gap-2 text-white bg-white/10 border-[#5BA4F5] ps-6';
    } else {
      btn.className = 'drawer-nav-link text-start py-3 px-4 text-sm font-medium rounded transition-all duration-300 mb-1 border-s-4 flex items-center gap-2 text-white/70 border-transparent hover:text-white hover:bg-white/5 hover:ps-6';
    }
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-nav') === pageId) {
      btn.className = 'nav-btn px-3.5 py-2 text-sm font-medium rounded transition-all text-white bg-[#1565C0]/70';
    } else {
      btn.className = 'nav-btn px-3.5 py-2 text-sm font-medium rounded transition-all text-white/65 hover:text-white';
    }
  });

  document.querySelectorAll('.desktop-nav-link').forEach(btn => {
    if (btn.getAttribute('data-nav') === pageId) {
      btn.className = 'desktop-nav-link px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 text-white bg-white/10 border border-white/10 shadow-sm';
    } else {
      btn.className = 'desktop-nav-link px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-white/70 hover:text-white hover:bg-white/5 border border-transparent';
    }
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ─── EXPERTISE LOGIC ───
const specialties = [
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 12.75H18L15 21L9 3L6 12.75H3" />', name: 'General Surgery', cat: 'Core Surgery', desc: 'Comprehensive operative management of abdominal, soft-tissue, and gastrointestinal conditions using modern evidence-based surgical techniques.', procedures: ['Bowel resection', 'Soft-tissue tumours', 'Abdominal wall repair', 'Colostomy'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />', name: 'Laparoscopic Surgery', cat: 'Minimally Invasive', desc: 'Advanced minimally invasive procedures including TAPP hernia repair and laparoscopic cholecystectomy with proven excellent patient outcomes.', procedures: ['TAPP hernia repair', 'Cholecystectomy', 'Diagnostic laparoscopy', 'Adhesiolysis'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />', name: 'Gallbladder Surgery', cat: 'Minimally Invasive', desc: 'Laparoscopic and open cholecystectomy for gallstone disease, acute cholecystitis, and biliary complications.', procedures: ['Laparoscopic cholecystectomy', 'Open cholecystectomy', 'ERCP liaison', 'Bile duct exploration'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />', name: 'Hernia Repair (TAPP)', cat: 'Minimally Invasive', desc: 'Specialist in Transabdominal Preperitoneal laparoscopic hernia repair — the gold-standard approach patients travel across Yemen to receive.', procedures: ['TAPP inguinal repair', 'Open inguinal repair', 'Ventral hernia repair', 'Recurrent hernia'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />', name: 'Appendectomy', cat: 'Core Surgery', desc: 'Laparoscopic and open appendectomy for acute appendicitis, with research-backed protocols minimising complication rates.', procedures: ['Laparoscopic appendectomy', 'Open appendectomy', 'Complicated appendicitis', 'Perforation management'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />', name: 'Emergency Surgery', cat: 'Acute Care', desc: 'Rapid operative intervention for life-threatening abdominal emergencies, requiring decisive surgical judgement under pressure.', procedures: ['Perforated viscus', 'Intestinal obstruction', 'Mesenteric ischaemia', 'Acute abdomen'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />', name: 'Trauma Surgery', cat: 'Acute Care', desc: 'Operative management of abdominal and thoracic trauma with expertise in damage-control surgery and multi-system injuries.', procedures: ['Damage control surgery', 'Abdominal trauma', 'Vascular injury', 'Multi-system trauma'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />', name: 'Breast Surgery', cat: 'Subspecialty', desc: 'Surgical management of benign and malignant breast conditions, supported by peer-reviewed research in breast disease.', procedures: ['Lumpectomy', 'Mastectomy', 'Sentinel node biopsy', 'Oncological reconstruction'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />', name: 'Thyroid Surgery', cat: 'Subspecialty', desc: 'Thyroidectomy and hemithyroidectomy for nodular disease, goiter, and malignancy — backed by published thyroid research.', procedures: ['Total thyroidectomy', 'Hemithyroidectomy', 'Parathyroid surgery', 'Thyroid cancer'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />', name: 'Burns Surgery', cat: 'Acute Care', desc: 'Multidisciplinary management of burn injuries including acute debridement, skin grafting, and reconstructive surgery.', procedures: ['Burn debridement', 'Split-skin grafting', 'Wound care', 'Scar management'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />', name: 'Pediatric Surgery', cat: 'Subspecialty', desc: 'Operative care for paediatric patients with congenital and acquired surgical conditions requiring specialist expertise.', procedures: ['Paediatric appendectomy', 'Congenital hernias', 'Intussusception', 'Paediatric emergencies'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />', name: 'Gastrointestinal Surgery', cat: 'Core Surgery', desc: 'Surgery of the upper and lower GI tract including stomach, small bowel, and colorectal procedures using modern techniques.', procedures: ['Gastrectomy', 'Small bowel surgery', 'GI obstruction', 'Stoma formation'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a7.5 7.5 0 11-15 0m15 0a7.5 7.5 0 10-15 0" />', name: 'Colorectal Surgery', cat: 'Core Surgery', desc: 'Colonic and rectal surgery for malignancy, diverticular disease, haemorrhoids, anal fistulae, and inflammatory bowel disease.', procedures: ['Hemicolectomy', 'Anterior resection', 'Haemorrhoidectomy', 'Anal fistula surgery'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2.25m0 0v2.25m0-2.25h2.25m-2.25 0H9.75M12 3a9 9 0 100 18 9 9 0 000-18z" />', name: 'Acute Abdomen Surgery', cat: 'Acute Care', desc: 'Rapid assessment and surgical management of acute abdominal presentations with systematic evidence-based diagnostic and operative approach.', procedures: ['Diagnostic laparoscopy', 'Emergency laparotomy', 'Peritonitis', 'Intra-abdominal sepsis'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />', name: 'Surgical Consultation', cat: 'Academic & Clinical', desc: 'Expert second-opinion and multidisciplinary consultation for complex surgical cases, risk stratification, and pre-operative planning.', procedures: ['Pre-operative assessment', 'Second opinion', 'MDT participation', 'Risk stratification'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />', name: 'Clinical Teaching', cat: 'Academic & Clinical', desc: 'Bedside and theatre-based teaching of undergraduate and postgraduate surgical trainees, with formal curriculum responsibilities at Hadramout University.', procedures: ['Undergraduate teaching', 'Postgraduate supervision', 'OSCE examining', 'Simulation training'] },
  { icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />', name: 'Surgical Mentorship', cat: 'Academic & Clinical', desc: 'Long-term mentorship of surgical trainees through career guidance, operative supervision, research support, and professional development.', procedures: ['Career guidance', 'Operative supervision', 'Research mentorship', 'Professional development'] }
];

let currentCat = 'All';

function renderSpecialties() {
  const grid = document.getElementById('specialties-grid');
  const searchInput = document.getElementById('specialty-search');
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  
  const filtered = specialties.filter(s => {
    const matchCat = currentCat === 'All' || s.cat === currentCat;
    const matchSearch = !search || s.name.toLowerCase().includes(search) || s.desc.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-3 text-center py-10 text-slate-500">No specialties match your search.</div>`;
    return;
  }

  const specialtiesDict = {
  "General Surgery": "الجراحة العامة",
  "Laparoscopic Surgery": "جراحة المناظير",
  "Gallbladder Surgery": "جراحة المرارة",
  "Hernia Repair (TAPP)": "إصلاح الفتق (TAPP)",
  "Appendectomy": "استئصال الزائدة الدودية",
  "Emergency Surgery": "جراحة الطوارئ",
  "Trauma Surgery": "جراحة الإصابات",
  "Breast Surgery": "جراحة الثدي",
  "Thyroid Surgery": "جراحة الغدة الدرقية",
  "Clinical Teaching": "التدريس السريري",
  "Core Surgery": "الجراحة الأساسية",
  "Minimally Invasive": "الجراحة طفيفة التوغل",
  "Acute Care": "الرعاية الحرجة",
  "Subspecialty": "التخصص الدقيق",
  "Academic & Clinical": "الأكاديمية والسريرية",
  "Burns Surgery": "جراحة الحروق",
  "Pediatric Surgery": "جراحة الأطفال",
  "Gastrointestinal Surgery": "جراحة الجهاز الهضمي",
  "Colorectal Surgery": "جراحة القولون والمستقيم",
  "Acute Abdomen Surgery": "جراحة البطن الحاد",
  "Surgical Consultation": "الاستشارة الجراحية",
  "Surgical Mentorship": "الإرشاد الجراحي",
  "Comprehensive operative management of abdominal, soft-tissue, and gastrointestinal conditions using modern evidence-based surgical techniques.": "إدارة جراحية شاملة لأمراض البطن والأنسجة الرخوة والجهاز الهضمي باستخدام تقنيات جراحية حديثة مبنية على الأدلة.",
  "Advanced minimally invasive procedures including TAPP hernia repair and laparoscopic cholecystectomy with proven excellent patient outcomes.": "إجراءات متقدمة طفيفة التوغل تشمل إصلاح الفتق (TAPP) واستئصال المرارة بالمنظار مع نتائج ممتازة مثبتة للمرضى.",
  "Laparoscopic and open cholecystectomy for gallstone disease, acute cholecystitis, and biliary complications.": "استئصال المرارة بالمنظار والمفتوح لعلاج حصوات المرارة، والتهاب المرارة الحاد، والمضاعفات الصفراوية.",
  "Specialist in Transabdominal Preperitoneal laparoscopic hernia repair — the gold-standard approach patients travel across Yemen to receive.": "متخصص في إصلاح الفتق بالمنظار عبر البطن أمام الصفاق (TAPP) — المعيار الذهبي الذي يسافر المرضى من جميع أنحاء اليمن للحصول عليه.",
  "Laparoscopic and open appendectomy for acute appendicitis, with research-backed protocols minimising complication rates.": "استئصال الزائدة الدودية بالمنظار والمفتوح لالتهاب الزائدة الدودية الحاد، مع بروتوكولات مدعومة بالأبحاث لتقليل معدلات المضاعفات.",
  "Rapid operative intervention for life-threatening abdominal emergencies, requiring decisive surgical judgement under pressure.": "تدخل جراحي سريع في حالات الطوارئ البطنية المهددة للحياة، مما يتطلب حكمًا جراحيًا حاسمًا تحت الضغط.",
  "Operative management of abdominal and thoracic trauma with expertise in damage-control surgery and multi-system injuries.": "الإدارة الجراحية لإصابات البطن والصدر مع خبرة في جراحة السيطرة على الأضرار وإصابات متعددة الأجهزة.",
  "Surgical management of benign and malignant breast conditions, supported by peer-reviewed research in breast disease.": "الإدارة الجراحية لأمراض الثدي الحميدة والخبيثة، مدعومة بأبحاث محكمة في أمراض الثدي.",
  "Thyroidectomy and hemithyroidectomy for nodular disease, goiter, and malignancy — backed by published thyroid research.": "استئصال الغدة الدرقية الكامل والنصف لعلاج الأمراض العقدية وتضخم الغدة الدرقية والأورام الخبيثة — مدعومة بأبحاث منشورة في الغدة الدرقية.",
  "Multidisciplinary management of burn injuries including acute debridement, skin grafting, and reconstructive surgery.": "الإدارة متعددة التخصصات لإصابات الحروق بما في ذلك التنضير الحاد والترقيع الجلدي والجراحة الترميمية.",
  "Operative care for paediatric patients with congenital and acquired surgical conditions requiring specialist expertise.": "الرعاية الجراحية لمرضى الأطفال الذين يعانون من حالات جراحية خلقية ومكتسبة تتطلب خبرة متخصصة.",
  "Surgery of the upper and lower GI tract including stomach, small bowel, and colorectal procedures using modern techniques.": "جراحة الجهاز الهضمي العلوي والسفلي بما في ذلك عمليات المعدة والأمعاء الدقيقة والقولون والمستقيم باستخدام تقنيات حديثة.",
  "Colonic and rectal surgery for malignancy, diverticular disease, haemorrhoids, anal fistulae, and inflammatory bowel disease.": "جراحة القولون والمستقيم لعلاج الأورام الخبيثة، وأمراض الرتج، والبواسير، والنواسير الشرجية، وأمراض الأمعاء الالتهابية.",
  "Rapid assessment and surgical management of acute abdominal presentations with systematic evidence-based diagnostic and operative approach.": "التقييم السريع والإدارة الجراحية لحالات البطن الحادة مع نهج تشخيصي وجراحي منهجي قائم على الأدلة.",
  "Expert second-opinion and multidisciplinary consultation for complex surgical cases, risk stratification, and pre-operative planning.": "الرأي الثاني للخبير والاستشارة متعددة التخصصات للحالات الجراحية المعقدة وتصنيف المخاطر والتخطيط قبل الجراحة.",
  "Bedside and theatre-based teaching of undergraduate and postgraduate surgical trainees, with formal curriculum responsibilities at Hadramout University.": "التدريس السريري بجانب السرير وفي غرف العمليات لمتدربي الجراحة في المرحلة الجامعية والدراسات العليا، مع مسؤوليات المناهج الرسمية في جامعة حضرموت.",
  "Long-term mentorship of surgical trainees through career guidance, operative supervision, research support, and professional development.": "الإرشاد طويل الأمد لمتدربي الجراحة من خلال التوجيه المهني، والإشراف العملي، ودعم الأبحاث، والتطوير المهني.",
  "Bowel resection": "استئصال الأمعاء",
  "Soft-tissue tumours": "أورام الأنسجة الرخوة",
  "Abdominal wall repair": "إصلاح جدار البطن",
  "Colostomy": "فغر القولون",
  "TAPP hernia repair": "إصلاح الفتق (TAPP)",
  "Cholecystectomy": "استئصال المرارة",
  "Diagnostic laparoscopy": "المنظار التشخيصي",
  "Adhesiolysis": "فك الالتصاقات",
  "Laparoscopic cholecystectomy": "استئصال المرارة بالمنظار",
  "Open cholecystectomy": "استئصال المرارة المفتوح",
  "ERCP liaison": "التنسيق لعمليات المنظار المراري (ERCP)",
  "Bile duct exploration": "استكشاف القناة الصفراوية",
  "TAPP inguinal repair": "إصلاح الفتق الإربي (TAPP)",
  "Open inguinal repair": "إصلاح الفتق الإربي المفتوح",
  "Ventral hernia repair": "إصلاح الفتق البطني",
  "Recurrent hernia": "الفتق المتكرر",
  "Laparoscopic appendectomy": "استئصال الزائدة الدودية بالمنظار",
  "Open appendectomy": "استئصال الزائدة الدودية المفتوح",
  "Complicated appendicitis": "التهاب الزائدة الدودية المعقد",
  "Perforation management": "علاج الانثقاب",
  "Perforated viscus": "انثقاب الأحشاء",
  "Intestinal obstruction": "انسداد الأمعاء",
  "Mesenteric ischaemia": "نقص تروية المساريق",
  "Acute abdomen": "البطن الحاد",
  "Damage control surgery": "جراحة السيطرة على الأضرار",
  "Abdominal trauma": "إصابات البطن",
  "Vascular injury": "إصابات الأوعية الدموية",
  "Multi-system trauma": "إصابات متعددة الأجهزة",
  "Lumpectomy": "استئصال ورم الثدي",
  "Mastectomy": "استئصال الثدي",
  "Sentinel node biopsy": "خزعة العقدة الحارسة",
  "Oncological reconstruction": "الترميم الجراحي للأورام",
  "Total thyroidectomy": "استئصال الغدة الدرقية بالكامل",
  "Hemithyroidectomy": "استئصال نصف الغدة الدرقية",
  "Parathyroid surgery": "جراحة جارات الدرقية",
  "Thyroid cancer": "سرطان الغدة الدرقية",
  "Burn debridement": "تنضير الحروق",
  "Split-skin grafting": "الترقيع الجلدي",
  "Wound care": "العناية بالجروح",
  "Scar management": "علاج الندبات",
  "Paediatric appendectomy": "استئصال الزائدة الدودية للأطفال",
  "Congenital hernias": "الفتوق الخلقية",
  "Intussusception": "الانغلاف المعوي",
  "Paediatric emergencies": "طوارئ الأطفال",
  "Gastrectomy": "استئصال المعدة",
  "Small bowel surgery": "جراحة الأمعاء الدقيقة",
  "GI obstruction": "انسداد الجهاز الهضمي",
  "Stoma formation": "عمل فغرة",
  "Hemicolectomy": "استئصال نصف القولون",
  "Anterior resection": "الاستئصال الأمامي",
  "Haemorrhoidectomy": "استئصال البواسير",
  "Anal fistula surgery": "جراحة ناسور الشرج",
  "Emergency laparotomy": "شق البطن الاستكشافي الطارئ",
  "Peritonitis": "التهاب الصفاق",
  "Intra-abdominal sepsis": "الإنتان داخل البطن",
  "Pre-operative assessment": "التقييم قبل العملية",
  "Second opinion": "الرأي الطبي الثاني",
  "MDT participation": "المشاركة في فريق متعدد التخصصات (MDT)",
  "Risk stratification": "تصنيف المخاطر",
  "Undergraduate teaching": "تدريس طلاب البكالوريوس",
  "Postgraduate supervision": "الإشراف على طلاب الدراسات العليا",
  "OSCE examining": "امتحانات الأوسكي (OSCE)",
  "Simulation training": "التدريب بالمحاكاة",
  "Career guidance": "التوجيه المهني",
  "Operative supervision": "الإشراف على العمليات",
  "Research mentorship": "الإرشاد البحثي",
  "Professional development": "التطوير المهني"
};

  const t = (text) => {
    return specialtiesDict[text] ? `<span class="lang-en">${text}</span><span class="lang-ar">${specialtiesDict[text]}</span>` : text;
  };

  
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = filtered.map(s => `
      <div class="p-7 rounded-xl border border-[#E2EAF4] bg-white hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up flex flex-col h-full">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 shrink-0 rounded-xl bg-[#F0F7FF] dark:bg-slate-800 flex items-center justify-center text-[#1565C0] border border-[#D4E2F4] dark:border-slate-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${s.icon}
            </svg>
          </div>
          <div class="flex-1 pt-1">
            <p class="font-mono text-xs tracking-wider text-[#1565C0] mb-1 uppercase">${t(s.cat)}</p>
            <h3 class="font-semibold text-lg leading-tight text-[#0B1F3A] dark:text-white">${t(s.name)}</h3>
          </div>
        </div>
        <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-5 flex-1">${t(s.desc)}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          ${s.procedures.map(p => `<span class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 border border-[#E2EAF4] dark:border-slate-700">${t(p)}</span>`).join('')}
        </div>
      </div>
    `).join('');
    grid.style.transition = 'opacity 0.4s ease';
    grid.style.opacity = '1';
  }, 200);
  return; // Prevent original execution
  grid.innerHTML = filtered.map(s => `
    <div class="p-7 rounded-xl border border-[#E2EAF4] bg-white hover:shadow-lg transition-all">
      <p class="font-mono text-xs text-[#1565C0] mb-1">${t(s.cat)}</p>
      <h3 class="font-semibold text-base text-[#0B1F3A] mb-2">${t(s.name)}</h3>
      <p class="text-sm text-slate-500 mb-4">${t(s.desc)}</p>
      <div class="flex flex-wrap gap-1.5">
        ${s.procedures.map(p => `<span class="px-2 py-0.5 rounded text-xs bg-[#F0F7FF] text-slate-500 border border-[#D4E2F4]">${t(p)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function setSpecialtyCategory(cat) {
  currentCat = cat;
  renderSpecialties();
  
  const activeBtnStyle = 'spec-cat-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1565C0] text-white border border-[#1565C0] transition-all duration-300 hover:-translate-y-1 hover:shadow-md';
  const inactiveBtnStyle = 'spec-cat-btn px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F0F7FF] dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-[#D4E2F4] dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md';

  document.querySelectorAll('.spec-cat-btn').forEach(btn => {
    const onclickVal = btn.getAttribute('onclick') || '';
    if (onclickVal.includes("'" + cat + "'") || onclickVal.includes('"' + cat + '"')) {
      btn.className = activeBtnStyle;
    } else {
      btn.className = inactiveBtnStyle;
    }
  });
}


function filterSpecialties() {
  renderSpecialties();
}

// ─── CONTACT LOGIC ───
function handleContactSubmit(e) {
  e.preventDefault();
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  if (contactForm) contactForm.classList.add('hidden');
  if (contactSuccess) contactSuccess.classList.remove('hidden');
}

// ─── INITIALIZATION ───
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  renderSpecialties();
  renderPublications();
});

// ─── THEME & LANG LOGIC ───
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function toggleLang() {
  const currentLang = document.documentElement.getAttribute('lang') || 'ar';
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.setAttribute('lang', newLang);
  if (typeof translateDOM === 'function') translateDOM(newLang);
  localStorage.setItem('lang', newLang);
}

// Apply saved preferences immediately
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  const savedLang = localStorage.getItem('lang') || 'en';
  document.documentElement.setAttribute('lang', savedLang);
  if (typeof translateDOM === 'function') translateDOM(savedLang);
})();


function toggleSideDrawer() {
  const drawer = document.getElementById('side-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer.classList.contains('drawer-open')) {
    drawer.classList.remove('drawer-open');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  } else {
    drawer.classList.add('drawer-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  }
}


// ─── SCROLL ANIMATIONS ───
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
});


// ─── PUBLICATIONS LOGIC ───
const publications = [
  {
    cat: 'General Surgery',
    type: 'Original Article',
    year: '2018',
    title: 'Appendicitis in the Hadramout Region: Clinical Presentation, Management and Outcomes',
    journal: 'Journal of Surgical Research',
    desc: 'Prospective study examining clinical patterns, surgical management, and postoperative outcomes of appendicitis in the Yemeni regional context, identifying key prognostic factors for optimising care.',
    tags: ['Appendicitis', 'Emergency Surgery', 'Yemen'],
    hasRG: true
  },
  {
    cat: 'Breast Surgery',
    type: 'Original Article',
    year: '2017',
    title: 'Breast Diseases in Women of Reproductive Age: Surgical Management and Histopathological Correlation',
    journal: 'Middle East Journal of Surgery',
    desc: 'Descriptive analysis of breast disease presentations, surgical interventions, and histopathological findings in a regional hospital, contributing evidence-based data for low-resource settings.',
    tags: ['Breast Surgery', 'Oncology', 'Histopathology']
  },
  {
    cat: 'Thyroid Surgery',
    type: 'Review Article',
    year: '2016',
    title: 'Thyroid Disorders and Surgical Outcomes in Hadramout: A Retrospective Review',
    journal: 'Arab Journal of Endocrinology & Metabolism',
    desc: 'Retrospective review of thyroid disease patterns and surgical outcomes, examining complications, recurrence rates, and quality-of-life indicators in the Hadramout population.',
    tags: ['Thyroid Surgery', 'Endocrine', 'Outcomes']
  },
  {
    cat: 'Trauma Surgery',
    type: 'Original Article',
    year: '2015',
    title: 'Abdominal Trauma Surgery: A Prospective Study of 200 Cases at a Tertiary Centre',
    journal: 'Journal of Trauma & Acute Care Surgery',
    desc: 'Prospective analysis of 200 consecutive abdominal trauma cases evaluating injury patterns, operative findings, damage-control strategies, and mortality predictors in a resource-limited setting.',
    tags: ['Trauma', 'Damage Control', 'Prospective Study']
  },
  {
    cat: 'Surgical Safety',
    type: 'Quality Improvement',
    year: '2020',
    title: 'Implementation of the WHO Surgical Safety Checklist: Impact on Postoperative Infection Rates',
    journal: 'Patient Safety in Surgery',
    desc: 'Evaluation of the WHO Surgical Safety Checklist at a regional university hospital demonstrating approximately 80% reduction in postoperative infection rates through structured perioperative protocols.',
    tags: ['Patient Safety', 'WHO Checklist', 'Infection Prevention']
  },
  {
    cat: 'Laparoscopic Surgery',
    type: 'Original Article',
    year: '2022',
    title: 'Laparoscopic TAPP Hernia Repair in Limited-Resource Settings: Feasibility and Outcomes',
    journal: 'Hernia',
    desc: 'Assessment of safety and outcomes of laparoscopic TAPP hernia repair at a Yemeni tertiary hospital, demonstrating comparable results to open repair with significantly shorter recovery.',
    tags: ['Laparoscopic', 'TAPP', 'Hernia Repair']
  },
  {
    cat: 'Research Collaboration',
    type: 'Collaborative Research',
    year: '2025',
    title: 'International Collaboration on Diabetic Wound Healing: Mechanisms and Clinical Translation',
    journal: 'Wound Repair & Regeneration',
    desc: 'Funded international multi-centre collaboration launched in 2025, examining novel interventions in diabetic wound healing — bridging bench science with clinical surgical application.',
    tags: ['Diabetic Wounds', 'International', 'Funded 2025']
  }
];

const pubsDict = {
  "Thyroid Surgery": "جراحة الغدة الدرقية",
  "Review Article": "مقال مراجعة",
  "Thyroid Disorders and Surgical Outcomes in Hadramout: A Retrospective Review": "اضطرابات الغدة الدرقية والنتائج الجراحية في حضرموت: مراجعة استعادية",
  "Arab Journal of Endocrinology & Metabolism": "المجلة العربية لأمراض الغدد الصماء والأيض",
  "Retrospective review of thyroid disease patterns and surgical outcomes, examining complications, recurrence rates, and quality-of-life indicators in the Hadramout population.": "مراجعة استعادية لأنماط أمراض الغدة الدرقية والنتائج الجراحية، وفحص المضاعفات، ومعدلات التكرار، ومؤشرات جودة الحياة في سكان حضرموت.",
  "Endocrine": "الغدد الصماء",
  "Outcomes": "النتائج",
  "Trauma Surgery": "جراحة الإصابات",
  "Original Article": "مقال أصلي",
  "Abdominal Trauma Surgery: A Prospective Study of 200 Cases at a Tertiary Centre": "جراحة إصابات البطن: دراسة مستقبلية لـ 200 حالة في مركز رعاية متقدم",
  "Journal of Trauma & Acute Care Surgery": "مجلة جراحة الإصابات والرعاية الحادة",
  "Prospective analysis of 200 consecutive abdominal trauma cases evaluating injury patterns, operative findings, damage-control strategies, and mortality predictors in a resource-limited setting.": "تحليل مستقبلي لـ 200 حالة متتالية لإصابات البطن لتقييم أنماط الإصابة، والنتائج التشغيلية، واستراتيجيات السيطرة على الأضرار، ومؤشرات الوفيات في بيئة محدودة الموارد.",
  "Trauma": "الإصابات",
  "Damage Control": "السيطرة على الأضرار",
  "Prospective Study": "دراسة مستقبلية",
  "General Surgery": "الجراحة العامة",
  "Appendicitis in the Hadramout Region: Clinical Presentation, Management and Outcomes": "التهاب الزائدة الدودية في منطقة حضرموت: العرض السريري والإدارة والنتائج",
  "Journal of Surgical Research": "مجلة البحوث الجراحية",
  "Prospective study examining clinical patterns, surgical management, and postoperative outcomes of appendicitis in the Yemeni regional context, identifying key prognostic factors for optimising care.": "دراسة مستقبلية تبحث في الأنماط السريرية والإدارة الجراحية والنتائج بعد الجراحة لالتهاب الزائدة الدودية في السياق الإقليمي اليمني، وتحديد العوامل التنبؤية الرئيسية لتحسين الرعاية.",
  "Appendicitis": "التهاب الزائدة الدودية",
  "Emergency Surgery": "جراحة الطوارئ",
  "Yemen": "اليمن",
  "Breast Surgery": "جراحة الثدي",
  "Breast Diseases in Women of Reproductive Age: Surgical Management and Histopathological Correlation": "أمراض الثدي لدى النساء في سن الإنجاب: الإدارة الجراحية والارتباط النسيجي المرضي",
  "Middle East Journal of Surgery": "مجلة الشرق الأوسط للجراحة",
  "Descriptive analysis of breast disease presentations, surgical interventions, and histopathological findings in a regional hospital, contributing evidence-based data for low-resource settings.": "تحليل وصفي لعروض أمراض الثدي والتدخلات الجراحية والنتائج النسيجية المرضية في مستشفى إقليمي، مما يساهم في توفير بيانات قائمة على الأدلة للإعدادات منخفضة الموارد.",
  "Oncology": "طب الأورام",
  "Histopathology": "علم أمراض الأنسجة",
  "Patient Safety": "سلامة المرضى",
  "Clinical Audit": "تدقيق سريري",
  "Implementation of the WHO Surgical Safety Checklist in a Yemeni Regional Hospital": "تنفيذ قائمة منظمة الصحة العالمية للسلامة الجراحية في مستشفى إقليمي يمني",
  "World Journal of Surgery": "المجلة العالمية للجراحة",
  "A comprehensive clinical audit detailing the phased implementation of the WHO surgical safety checklist, demonstrating significant reduction in postoperative complications and near-miss events.": "تدقيق سريري شامل يوضح بالتفصيل التنفيذ المرحلي لقائمة منظمة الصحة العالمية للسلامة الجراحية، مما يوضح انخفاضًا كبيرًا في مضاعفات ما بعد الجراحة والحوادث الوشيكة.",
  "WHO Checklist": "قائمة منظمة الصحة العالمية",
  "Hernia Repair": "إصلاح الفتق",
  "Surgical Technique": "تقنية جراحية",
  "Laparoscopic TAPP Hernia Repair in Limited-Resource Settings: Challenges and Adaptations": "إصلاح الفتق بالمنظار عبر البطن أمام الصفاق (TAPP) في البيئات محدودة الموارد: التحديات والتكيفات",
  "Surgical Endoscopy": "تنظير جراحي",
  "Analysis of technical adaptations and outcomes for Transabdominal Preperitoneal (TAPP) laparoscopic hernia repairs performed in resource-constrained surgical environments.": "تحليل التعديلات التقنية والنتائج لعمليات إصلاح الفتق بالمنظار عبر البطن أمام الصفاق (TAPP) التي أجريت في بيئات جراحية محدودة الموارد.",
  "Laparoscopic Surgery": "جراحة المناظير",
  "TAPP": "إصلاح الفتق (TAPP)",
  "Hernia": "الفتق",
  "Research Collaboration": "تعاون بحثي",
  "Collaborative Research": "بحوث تعاونية",
  "International Collaboration on Diabetic Wound Healing: Mechanisms and Clinical Translation": "التعاون الدولي حول التئام الجروح السكرية: الآليات والترجمة السريرية",
  "Wound Repair & Regeneration": "إصلاح الجروح وتجديدها",
  "Funded international multi-centre collaboration launched in 2025, examining novel interventions in diabetic wound healing — bridging bench science with clinical surgical application.": "تعاون دولي متعدد المراكز ممول تم إطلاقه في عام 2025، يبحث في تدخلات جديدة في التئام الجروح السكرية — ويربط بين علوم المختبرات والتطبيق الجراحي السريري.",
  "Diabetic Wounds": "الجروح السكرية",
  "International": "دولي",
  "Funded 2025": "ممول لعام 2025",
  "Collaborate →": "تعاون ←",
  "ResearchGate →": "ريسيرش جيت ←",
  "Surgical Safety": "السلامة الجراحية",
  "Quality Improvement": "تحسين الجودة",
  "Implementation of the WHO Surgical Safety Checklist: Impact on Postoperative Infection Rates": "تنفيذ قائمة منظمة الصحة العالمية للسلامة الجراحية: التأثير على معدلات العدوى بعد الجراحة",
  "Patient Safety in Surgery": "سلامة المرضى في الجراحة",
  "Evaluation of the WHO Surgical Safety Checklist at a regional university hospital demonstrating approximately 80% reduction in postoperative infection rates through structured perioperative protocols.": "تقييم قائمة منظمة الصحة العالمية للسلامة الجراحية في مستشفى جامعي إقليمي يوضح انخفاضًا بنسبة تقارب 80٪ في معدلات العدوى بعد الجراحة من خلال بروتوكولات منظمة حول الجراحة.",
  "Infection Prevention": "الوقاية من العدوى",
  "Laparoscopic TAPP Hernia Repair in Limited-Resource Settings: Feasibility and Outcomes": "إصلاح الفتق بالمنظار (TAPP) في البيئات محدودة الموارد: الجدوى والنتائج",
  "Assessment of safety and outcomes of laparoscopic TAPP hernia repair at a Yemeni tertiary hospital, demonstrating comparable results to open repair with significantly shorter recovery.": "تقييم سلامة ونتائج إصلاح الفتق بالمنظار (TAPP) في مستشفى رعاية متقدم يمني، مما يوضح نتائج مماثلة للإصلاح المفتوح مع تعافي أسرع بكثير.",
  "Laparoscopic": "منظار"
};

function renderPublications() {
  const list = document.getElementById('publications-list');
  if (!list) return;

  const tPub = (text) => {
    return pubsDict[text] ? `<span class="lang-en">${text}</span><span class="lang-ar">${pubsDict[text]}</span>` : text;
  };

  const html = publications.map(p => `
    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-[#E2EAF4] dark:border-slate-700 hover:shadow-xl transition-all animate-on-scroll group flex flex-col md:flex-row gap-6">
      <div class="w-14 h-14 shrink-0 rounded-xl bg-[#F0F7FF] dark:bg-slate-800 flex items-center justify-center text-[#1565C0] border border-[#D4E2F4] dark:border-slate-700 group-hover:bg-[#1565C0] group-hover:text-white group-hover:border-[#1565C0] transition-colors">
        ${p.cat === 'Research Collaboration' ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>` : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`}
      </div>
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="px-2.5 py-1 rounded bg-[#E3F0FF] dark:bg-slate-700 text-[#0D47A1] dark:text-[#BAD3F0] text-xs font-mono font-semibold tracking-wide">${tPub(p.cat)}</span>
          <span class="px-2.5 py-1 rounded border border-[#E2EAF4] dark:border-slate-600 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium">${tPub(p.type)}</span>
          <span class="text-xs font-mono text-slate-400 dark:text-slate-500">${p.year}</span>
        </div>
        <h3 class="text-xl font-display font-semibold mb-2 text-[#0B1F3A] dark:text-white group-hover:text-[#1565C0] dark:group-hover:text-[#5BA4F5] transition-colors">${tPub(p.title)}</h3>
        <p class="text-sm italic text-[#1565C0] dark:text-[#5BA4F5] mb-4">${tPub(p.journal)}</p>
        <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">${tPub(p.desc)}</p>
          <div class="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E2EAF4] dark:border-slate-700">
          <div class="flex flex-wrap gap-2">
            ${p.tags.map(tag => `<span class="px-3 py-1 rounded-full text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">${tPub(tag)}</span>`).join('')}
          </div>
          <div class="flex items-center gap-4">
            ${p.hasRG ? `<button class="text-sm font-semibold text-[#1565C0] dark:text-[#5BA4F5] hover:text-[#0D47A1] transition-colors flex items-center gap-1">${tPub('ResearchGate →')}</button>` : ''}
            <button class="text-sm font-semibold text-slate-400 dark:text-slate-500 hover:text-[#1565C0] dark:hover:text-white transition-colors flex items-center gap-1">${tPub('Collaborate →')}</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  list.innerHTML = html + `
    <div class="mt-14 pt-10 border-t border-[#E2EAF4] dark:border-slate-800 text-center animate-on-scroll flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-[#E3F0FF] dark:bg-slate-800 flex items-center justify-center text-[#1565C0] mb-6">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
      </div>
      <h2 class="font-display text-3xl text-[#0B1F3A] dark:text-white mb-4"><span class="lang-en">Full publication list on ResearchGate</span><span class="lang-ar">القائمة الكاملة للمنشورات على ريسيرش جيت</span></h2>
      <a href="https://www.researchgate.net/publication/299940971_Histopathological_pattern_of_thyroid_diseases_among_patients_in_Hadhramout-Yemen" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white bg-[#1565C0] hover:bg-[#0D47A1] transition-colors mt-2">
        <span class="lang-en">Visit Profile</span><span class="lang-ar">زيارة الملف الشخصي</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>
  `;
}
