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
  { name: 'General Surgery', cat: 'Core Surgery', desc: 'Comprehensive operative management of abdominal, soft-tissue, and GI conditions.', procedures: ['Bowel resection', 'Abdominal wall repair'] },
  { name: 'Laparoscopic Surgery', cat: 'Minimally Invasive', desc: 'Advanced minimally invasive procedures including TAPP hernia repair and cholecystectomy.', procedures: ['TAPP hernia repair', 'Cholecystectomy'] },
  { name: 'Gallbladder Surgery', cat: 'Minimally Invasive', desc: 'Laparoscopic and open cholecystectomy for gallstone disease and biliary complications.', procedures: ['Laparoscopic cholecystectomy', 'Open cholecystectomy'] },
  { name: 'Hernia Repair (TAPP)', cat: 'Minimally Invasive', desc: 'Transabdominal Preperitoneal laparoscopic hernia repair.', procedures: ['TAPP inguinal repair', 'Ventral hernia repair'] },
  { name: 'Appendectomy', cat: 'Core Surgery', desc: 'Laparoscopic and open appendectomy for acute appendicitis.', procedures: ['Laparoscopic appendectomy', 'Open appendectomy'] },
  { name: 'Emergency Surgery', cat: 'Acute Care', desc: 'Rapid operative intervention for life-threatening abdominal emergencies.', procedures: ['Perforated viscus', 'Acute abdomen'] },
  { name: 'Trauma Surgery', cat: 'Acute Care', desc: 'Damage-control surgery and multi-system trauma management.', procedures: ['Damage control surgery', 'Abdominal trauma'] },
  { name: 'Breast Surgery', cat: 'Subspecialty', desc: 'Surgical management of benign and malignant breast conditions.', procedures: ['Lumpectomy', 'Mastectomy'] },
  { name: 'Thyroid Surgery', cat: 'Subspecialty', desc: 'Thyroidectomy and hemithyroidectomy for nodular disease and goiter.', procedures: ['Total thyroidectomy', 'Hemithyroidectomy'] },
  { name: 'Clinical Teaching', cat: 'Academic & Clinical', desc: 'Bedside and theatre-based teaching of surgical trainees.', procedures: ['Undergraduate teaching', 'OSCE examining'] }
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
    "Comprehensive operative management of abdominal, soft-tissue, and GI conditions.": "إدارة جراحية شاملة لأمراض البطن والأنسجة الرخوة والجهاز الهضمي.",
    "Advanced minimally invasive procedures including TAPP hernia repair and cholecystectomy.": "إجراءات جراحية متقدمة طفيفة التوغل تشمل إصلاح الفتق (TAPP) واستئصال المرارة.",
    "Laparoscopic and open cholecystectomy for gallstone disease and biliary complications.": "استئصال المرارة بالمنظار أو الجراحة المفتوحة لعلاج حصى المرارة ومضاعفات القنوات الصفراوية.",
    "Transabdominal Preperitoneal laparoscopic hernia repair.": "إصلاح الفتق بالمنظار عبر البطن أمام الصفاق (TAPP).",
    "Laparoscopic and open appendectomy for acute appendicitis.": "استئصال الزائدة الدودية بالمنظار والجراحة المفتوحة لعلاج التهاب الزائدة الدودية الحاد.",
    "Rapid operative intervention for life-threatening abdominal emergencies.": "تدخل جراحي سريع في حالات طوارئ البطن المهددة للحياة.",
    "Damage-control surgery and multi-system trauma management.": "جراحة السيطرة على الأضرار وإدارة الإصابات متعددة الأجهزة.",
    "Surgical management of benign and malignant breast conditions.": "الإدارة الجراحية لأمراض الثدي الحميدة والخبيثة.",
    "Thyroidectomy and hemithyroidectomy for nodular disease and goiter.": "استئصال الغدة الدرقية الكامل أو النصفي لعلاج الأمراض العقدية وتضخم الغدة الدرقية.",
    "Bedside and theatre-based teaching of surgical trainees.": "التدريس السريري بجانب السرير وفي غرف العمليات للمتدربين الجراحيين.",
    "Bowel resection": "استئصال الأمعاء",
    "Abdominal wall repair": "إصلاح جدار البطن",
    "TAPP hernia repair": "إصلاح الفتق (TAPP)",
    "Cholecystectomy": "استئصال المرارة",
    "Laparoscopic cholecystectomy": "استئصال المرارة بالمنظار",
    "Open cholecystectomy": "استئصال المرارة المفتوح",
    "TAPP inguinal repair": "إصلاح الفتق الإربي (TAPP)",
    "Ventral hernia repair": "إصلاح الفتق البطني",
    "Laparoscopic appendectomy": "استئصال الزائدة الدودية بالمنظار",
    "Open appendectomy": "استئصال الزائدة الدودية المفتوح",
    "Perforated viscus": "انثقاب الأحشاء",
    "Acute abdomen": "البطن الحاد",
    "Damage control surgery": "جراحة السيطرة على الأضرار",
    "Abdominal trauma": "إصابات البطن",
    "Lumpectomy": "استئصال ورم الثدي",
    "Mastectomy": "استئصال الثدي",
    "Total thyroidectomy": "استئصال الغدة الدرقية بالكامل",
    "Hemithyroidectomy": "استئصال نصف الغدة الدرقية",
    "Undergraduate teaching": "تدريس طلاب البكالوريوس",
    "OSCE examining": "امتحانات الأوسكي (OSCE)"
  };

  const t = (text) => {
    return specialtiesDict[text] ? `<span class="lang-en">${text}</span><span class="lang-ar">${specialtiesDict[text]}</span>` : text;
  };

  
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = filtered.map(s => `
      <div class="p-7 rounded-xl border border-[#E2EAF4] bg-white hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up">
        <p class="font-mono text-xs text-[#1565C0] mb-1">${t(s.cat)}</p>
        <h3 class="font-semibold text-base text-[#0B1F3A] mb-2">${t(s.name)}</h3>
        <p class="text-sm text-slate-500 mb-4">${t(s.desc)}</p>
        <div class="flex flex-wrap gap-1.5">
          ${s.procedures.map(p => `<span class="px-2 py-0.5 rounded text-xs bg-[#F0F7FF] text-slate-500 border border-[#D4E2F4]">${t(p)}</span>`).join('')}
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
  const savedLang = localStorage.getItem('lang') || 'ar';
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
