/* ==========================================================================
   nbarkiya.xyz USLUBIDAGI PROFESSIONAL JAVASCRIPT KODI
   Asilbek Rahimov | Frontend Dasturchi & Web Engineer Portfoliosi
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. DOM ELEMENTLARI
    // --------------------------------------------------------------------------
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const toast = document.getElementById('toast');
    const currentYearSpan = document.getElementById('current-year');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const filterPills = document.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-card');

    // Til tanlash elementlari
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangText = document.getElementById('current-lang-text');

    // Footer joriy yilini yangilash
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    // --------------------------------------------------------------------------
    // 2. 🌐 KO'P TILLILIK TIZIMI (UZBEK, RUSSIAN, ENGLISH)
    // --------------------------------------------------------------------------
    const translations = {
        uz: {
            nav_projects: "Loyihalar",
            nav_experience: "Tajriba",
            nav_skills: "Ko'nikmalar",
            nav_ai: "AI Assistent",
            nav_contact: "Bog'lanish",
            hero_status: "Yangi loyihalar uchun ochiq",
            hero_role: "Frontend Dasturchi & Web Engineer",
            hero_bio: "Zamonaviy veb-texnologiyalar, toza arxitektura va har qanday ekranga mukammal moslashuvchi yuqori unumdorlikka ega interaktiv veb-saytlar yarataman.",
            hero_btn_projects: "Loyihalarim",
            hero_btn_ai: "AI Assistent",
            hero_btn_contact: "Bog'lanish",
            stat_projects: "Amaliy Loyihalar",
            stat_responsive: "Responsive UI",
            stat_stack: "HTML5 / CSS3 / JS",
            stat_uptime: "Vercel Uptime",
            ai_sec_pill: "Sun'iy Intellekt 24/7",
            ai_sec_title: "Asilbek AI — Aqlli Yordamchi",
            ai_sec_subtitle: "Asilbekning tajribasi, xizmatlari va loyihalari bo'yicha sun'iy intellektdan real vaqtda javob oling",
            ai_sec_status: "24/7 Rejimda Faol",
            ai_sec_desc: "Ushbu sun'iy intellekt Asilbekning shaxsiy ma'lumotlari, loyihalari va narxlari bo'yicha to'liq o'qitilgan. Istalgan savolingizni berib, darhol javob olishingiz mumkin.",
            ai_sec_quick_title: "Tezkor savollar (bosing):",
            proj_title: "Loyihalar",
            proj_subtitle: "Mening eng yaxshi amaliy ishlarim va texnik yechimlarim",
            filter_all: "Barchasi",
            filter_web: "Veb-saytlar",
            filter_app: "Veb-ilovalar",
            proj_1_title: "Online Market Platformasi",
            proj_1_desc: "Mahsulotlar katalogi, interaktiv savatcha, saralash va umumiy narxni hisoblovchi to'liq funksional savdo do'koni.",
            proj_2_title: "Global Weather Pro",
            proj_2_desc: "Dunyo shaharlarining real vaqtdagi ob-havo ma'lumotlari, namlik, shamol tezligi va 5 kunlik prognoz tizimi.",
            proj_3_title: "TaskFlow — Ishlar Rejasi",
            proj_3_desc: "Kundalik rejalarni boshqarish, bajarilgan deb belgilash, qidiruv va brauzer xotirasida saqlab qoluvchi to-do tizimi.",
            btn_demo: "Live Demo",
            card_view: "Batafsil ko'rish",
            exp_title: "Tajriba & Faoliyat",
            exp_subtitle: "Amaliy ish faoliyatim va rivojlanish bosqichlarim",
            exp_1_role: "Frontend Dasturchi",
            exp_1_company: "Mustaqil Loyihalar (Freelance)",
            exp_1_desc: "Mijozlar uchun zamonaviy korporativ saytlar, landing pagelar va interaktiv web-interfeyslar ishlab chiqish. Kod tozaligi va tezkor yuklanishiga e'tibor qaratish.",
            exp_2_role: "Veb Dasturlash Amaliyoti",
            exp_2_company: "Amaliy Ta'lim & Loyihalar",
            exp_2_desc: "HTML5, CSS3, JavaScript ES6+ texnologiyalarini chuqur o'rganish, Git/GitHub bilan ishlash va 10 dan ortiq real loyihalarni yaratish.",
            exp_3_role: "Ochiq Kodli Loyihalar",
            exp_3_desc: "Ochiq kodli shablonlar yaratish, zamonaviy UI komponentlarni jamlash va Vercel platformasi orqali veb-saytlarni bepul joylashtirish.",
            skills_title: "Ko'nikmalar",
            skills_subtitle: "Har bir texnologiya bo'yicha mahorat va baholash ko'rsatkichlari",
            skill_advanced: "Yuqori daraja",
            skill_proficient: "Ishonchli bilim",
            skill_html_desc: "Semantik teglash, SEO talablari va toza veb-arxitektura.",
            skill_css_desc: "Moslashuvchan dizayn, CSS animatsiyalar va zamonaviy UI.",
            skill_js_desc: "DOM boshqaruvi, Asinxron API so'rovlar va interaktiv mantiq.",
            skill_resp_desc: "Barcha ekranlar (smartfon, planshet, noutbuk) uchun to'liq moslik.",
            skill_git_desc: "Versiyalarni boshqarish, repozitoriylar va CI/CD deploy.",
            skill_vercel_desc: "Veb-ilovalarni 24/7 uzluksiz serverga joylash va domenni sozlash.",
            contact_title: "Bog'lanish",
            contact_subtitle: "Loyiha taklifi yoki savollaringiz bo'lsa, xabar qoldiring",
            form_name_label: "Ismingiz *",
            form_contact_label: "Email yoki Telefon *",
            form_msg_label: "Xabaringiz *",
            form_submit_btn: "Xabarni yuborish",
            sidebar_badge: "Tezkor Aloqa",
            sidebar_title: "Keling, yangi loyihani birga quramiz!",
            sidebar_desc: "Veb-sayt buyurtmasi, hamkorlik yoki boshqa texnik savollar bo'yicha to'g'ridan-to'g'ri bog'lanishingiz mumkin.",
            sidebar_email_btn: "To'g'ridan-to'g'ri Email yozish",
            sidebar_location_lbl: "Manzil:",
            sidebar_location_val: "Toshkent, O'zbekiston",
            tg_status_text: "Xabarlar to'g'ridan-to'g'ri Telegramga boradi",
            toast_title: "Muvaffaqiyatli!",
            toast_desc: "Xabaringiz Telegramga yetkazildi. Rahmat!",
            footer_rights: "Barcha huquqlar himoyalangan.",
            ph_name: "Ismingizni kiriting",
            ph_contact: "Email yoki telefon raqamingiz",
            ph_msg: "Xabaringizni bu yerga yozing...",
            ai_status: "Onlayn • 24/7 yordamchi",
            ai_greeting: "Assalomu alaykum! Men Asilbekning aqlli AI assistentiman 🤖. Asilbekning tajribasi, loyihalari yoki veb-sayt buyurtma qilish bo'yicha savollaringiz bo'lsa, marhamat, so'rashingiz mumkin!",
            ai_ph: "Savolingizni yozing...",
            ai_time_now: "Hozir",
            ai_chips: [
                { text: "👨‍💻 Asilbek kim?", prompt: "Asilbek kim va nimalar qila oladi?" },
                { text: "🚀 Loyihalari", prompt: "Qanday loyihalaringiz bor va ularni ko'rsat?" },
                { text: "💰 Sayt narxi", prompt: "Sayt buyurtma qilish narxi va muddati qancha?" },
                { text: "📱 Bog'lanish", prompt: "Asilbek bilan qanday bog'lansa bo'ladi?" }
            ]
        },
        ru: {
            nav_projects: "Проекты",
            nav_experience: "Опыт",
            nav_skills: "Навыки",
            nav_ai: "ИИ-Ассистент",
            nav_contact: "Контакты",
            hero_status: "Открыт для предложений",
            hero_role: "Frontend Разработчик & Web Engineer",
            hero_bio: "Создаю современные, масштабируемые и высокопроизводительные веб-приложения с чистой архитектурой и безупречной адаптивностью.",
            hero_btn_projects: "Мои Проекты",
            hero_btn_ai: "ИИ-Ассистент",
            hero_btn_contact: "Связаться",
            stat_projects: "Реальных Проекта",
            stat_responsive: "Адаптивный UI",
            stat_stack: "HTML5 / CSS3 / JS",
            stat_uptime: "Vercel Uptime",
            ai_sec_pill: "Искусственный Интеллект 24/7",
            ai_sec_title: "Asilbek AI — Умный Помощник",
            ai_sec_subtitle: "Получите мгновенные ответы об опыте, услугах и проектах Асилбека от искусственного интеллекта",
            ai_sec_status: "Активен в режиме 24/7",
            ai_sec_desc: "Этот ИИ обучен на данных об опыте, проектах и ценах Асилбека. Задайте любой вопрос и получите ответ мгновенно.",
            ai_sec_quick_title: "Быстрые вопросы (нажмите):",
            proj_title: "Проекты",
            proj_subtitle: "Мои ключевые практические работы и технические решения",
            filter_all: "Все",
            filter_web: "Веб-сайты",
            filter_app: "Веб-приложения",
            proj_1_title: "Онлайн Маркет Платформа",
            proj_1_desc: "Каталог товаров, интерактивная корзина, фильтрация и точный расчет стоимости заказа.",
            proj_2_title: "Global Weather Pro",
            proj_2_desc: "Погода городов мира в реальном времени, влажность, скорость ветра и 5-дневный прогноз.",
            proj_3_title: "TaskFlow — План Дел",
            proj_3_desc: "Управление задачами, отметки о выполнении, поиск и автосохранение в памяти браузера.",
            btn_demo: "Live Демо",
            card_view: "Смотреть проект",
            exp_title: "Опыт & Деятельность",
            exp_subtitle: "Этапы профессионального развития и практической работы",
            exp_1_role: "Frontend Разработчик",
            exp_1_company: "Фриланс & Собственные проекты",
            exp_1_desc: "Разработка современных корпоративных сайтов, посадочных страниц и интерактивных интерфейсов с упором на скорость загрузки.",
            exp_2_role: "Практика Веб-Разработки",
            exp_2_company: "Практическое Обучение",
            exp_2_desc: "Глубокое изучение HTML5, CSS3, JavaScript ES6+, работа с Git/GitHub и реализация более 10 проектов.",
            exp_3_role: "Open Source Проекты",
            exp_3_desc: "Создание открытых шаблонов, верстка современных компонентов и деплой на Vercel.",
            skills_title: "Навыки",
            skills_subtitle: "Оценка уровня владения ключевыми технологиями",
            skill_advanced: "Продвинутый уровень",
            skill_proficient: "Уверенные знания",
            skill_html_desc: "Семантическая верстка, SEO стандарты и чистая структура.",
            skill_css_desc: "Адаптивный дизайн, CSS анимации и современный UI.",
            skill_js_desc: "Управление DOM, асинхронные API запросы и интерактивность.",
            skill_resp_desc: "Полная поддержка смартфонов, планшетов и десктопов.",
            skill_git_desc: "Контроль версий, репозитории и автоматический деплой.",
            skill_vercel_desc: "Размещение веб-приложений на 24/7 серверах Vercel.",
            contact_title: "Контакты",
            contact_subtitle: "Оставьте сообщение, если у вас есть проект или предложение",
            form_name_label: "Ваше имя *",
            form_contact_label: "Email или Телефон *",
            form_msg_label: "Ваше сообщение *",
            form_submit_btn: "Отправить сообщение",
            sidebar_badge: "Быстрая Связь",
            sidebar_title: "Давайте создадим проект вместе!",
            sidebar_desc: "Вы можете связаться со мной по вопросам заказа сайта, сотрудничества или технических консультаций.",
            sidebar_email_btn: "Написать на Email напрямую",
            sidebar_location_lbl: "Город:",
            sidebar_location_val: "Ташкент, Узбекистан",
            tg_status_text: "Сообщения поступают напрямую в Telegram",
            toast_title: "Успешно!",
            toast_desc: "Ваше сообщение отправлено в Telegram. Спасибо!",
            footer_rights: "Все права защищены.",
            ph_name: "Введите ваше имя",
            ph_contact: "Email или номер телефона",
            ph_msg: "Напишите ваше сообщение здесь...",
            ai_status: "В сети • 24/7 помощник",
            ai_greeting: "Здравствуйте! Я умный ИИ-ассистент Асилбека 🤖. Задавайте любые вопросы о навыках, проектах или разработке сайта!",
            ai_ph: "Задайте ваш вопрос...",
            ai_time_now: "Сейчас",
            ai_chips: [
                { text: "👨‍💻 Кто такой Асилбек?", prompt: "Кто такой Асилбек и что он умеет делать?" },
                { text: "🚀 Проекты", prompt: "Какие проекты есть у Асилбека?" },
                { text: "💰 Стоимость сайта", prompt: "Сколько стоит заказать разработку сайта?" },
                { text: "📱 Контакты", prompt: "Как связаться с Асилбеком?" }
            ]
        },
        en: {
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_ai: "AI Assistant",
            nav_contact: "Contact",
            hero_status: "Available for work",
            hero_role: "Frontend Developer & Web Engineer",
            hero_bio: "Building clean, scalable, and high-performance interactive web applications with modern design systems and seamless responsiveness.",
            hero_btn_projects: "Projects",
            hero_btn_ai: "AI Assistant",
            hero_btn_contact: "Contact Me",
            stat_projects: "Featured Projects",
            stat_responsive: "Responsive UI",
            stat_stack: "HTML5 / CSS3 / JS",
            stat_uptime: "Vercel Uptime",
            ai_sec_pill: "Artificial Intelligence 24/7",
            ai_sec_title: "Asilbek AI — Smart Assistant",
            ai_sec_subtitle: "Get real-time answers about Asilbek's skills, services, and projects from AI",
            ai_sec_status: "Active 24/7",
            ai_sec_desc: "This AI is trained on Asilbek's background, projects, and pricing. Feel free to ask anything and get instant replies.",
            ai_sec_quick_title: "Quick prompts (click):",
            proj_title: "Projects",
            proj_subtitle: "Showcasing impactful projects and technical achievements",
            filter_all: "All",
            filter_web: "Websites",
            filter_app: "Web Apps",
            proj_1_title: "E-Commerce Market Platform",
            proj_1_desc: "Product catalog, interactive cart, filtering system, and live checkout total calculations.",
            proj_2_title: "Global Weather Pro",
            proj_2_desc: "Live global weather data, humidity, wind velocity, and 5-day comprehensive forecast.",
            proj_3_title: "TaskFlow — Productivity App",
            proj_3_desc: "Task management, status toggle, search filter, and localStorage data persistence.",
            btn_demo: "Live Demo",
            card_view: "Read more",
            exp_title: "Experience",
            exp_subtitle: "Professional milestones and career timeline",
            exp_1_role: "Frontend Developer",
            exp_1_company: "Independent Freelance",
            exp_1_desc: "Developing modern corporate landing pages, web tools, and accessible interactive interfaces with focus on performance.",
            exp_2_role: "Web Development Practice",
            exp_2_company: "Applied Training & Projects",
            exp_2_desc: "In-depth study of HTML5, CSS3, JavaScript ES6+, Git/GitHub workflow, building 10+ real-world web projects.",
            exp_3_role: "Open Source Projects",
            exp_3_desc: "Building open source templates, accessible UI component kits, and automated Vercel CI/CD deployment.",
            skills_title: "Skills & Stack",
            skills_subtitle: "Proficiency levels and technical ratings across core tools",
            skill_advanced: "Advanced Level",
            skill_proficient: "Proficient",
            skill_html_desc: "Semantic architecture, web accessibility, and clean markup.",
            skill_css_desc: "Modern layouts, Flexbox, Grid, and slick CSS micro-animations.",
            skill_js_desc: "DOM manipulation, asynchronous fetch APIs, and interactive states.",
            skill_resp_desc: "Flawless mobile-first responsiveness across all viewport sizes.",
            skill_git_desc: "Version control, GitHub repositories, and CI/CD releases.",
            skill_vercel_desc: "Deploying high-availability web applications on edge networks.",
            contact_title: "Get In Touch",
            contact_subtitle: "Reach out for project inquiries or technical collaborations",
            form_name_label: "Your Name *",
            form_contact_label: "Email or Phone *",
            form_msg_label: "Your Message *",
            form_submit_btn: "Send Message",
            sidebar_badge: "Direct Contact",
            sidebar_title: "Let's build something great together!",
            sidebar_desc: "Feel free to reach out for web development, technical inquiries, or collaborative opportunities.",
            sidebar_email_btn: "Send Direct Email",
            sidebar_location_lbl: "Location:",
            sidebar_location_val: "Tashkent, Uzbekistan",
            tg_status_text: "Messages delivered straight to private Telegram",
            toast_title: "Success!",
            toast_desc: "Your message has been delivered to Telegram. Thank you!",
            footer_rights: "All rights reserved.",
            ph_name: "Enter your full name",
            ph_contact: "Email or phone number",
            ph_msg: "Write your message here...",
            ai_status: "Online • 24/7 Assistant",
            ai_greeting: "Hello! I am Asilbek's AI Assistant 🤖. Feel free to ask anything about his skills, projects, or web development services!",
            ai_ph: "Ask a question...",
            ai_time_now: "Just now",
            ai_chips: [
                { text: "👨‍💻 Who is Asilbek?", prompt: "Who is Asilbek and what can he build?" },
                { text: "🚀 Projects", prompt: "What projects has Asilbek built?" },
                { text: "💰 Pricing", prompt: "What is the cost of website development?" },
                { text: "📱 Contact", prompt: "How can I get in touch with Asilbek?" }
            ]
        }
    };

    let currentLanguage = localStorage.getItem('site_lang') || 'uz';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLanguage = lang;
        localStorage.setItem('site_lang', lang);

        if (currentLangText) {
            currentLangText.textContent = lang.toUpperCase();
        }

        langOptions.forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const phKey = el.getAttribute('data-i18n-ph');
            if (translations[lang][phKey]) {
                el.setAttribute('placeholder', translations[lang][phKey]);
            }
        });

        // AI Assistent elementlarini yangilash
        const aiHeaderStatus = document.getElementById('aiHeaderStatus');
        const aiChatInput = document.getElementById('aiChatInput');
        const aiGreetingText = document.getElementById('aiGreetingText');
        const pageAiGreetingText = document.getElementById('pageAiGreetingText');
        const pageAiInput = document.getElementById('pageAiInput');
        const aiInitialTime = document.getElementById('aiInitialTime');
        const aiQuickPrompts = document.getElementById('aiQuickPrompts');

        if (translations[lang]) {
            if (aiHeaderStatus && translations[lang].ai_status) {
                aiHeaderStatus.textContent = translations[lang].ai_status;
            }
            if (aiChatInput && translations[lang].ai_ph) {
                aiChatInput.placeholder = translations[lang].ai_ph;
            }
            if (pageAiInput && translations[lang].ai_ph) {
                pageAiInput.placeholder = translations[lang].ai_ph;
            }
            if (aiGreetingText && translations[lang].ai_greeting) {
                aiGreetingText.textContent = translations[lang].ai_greeting;
            }
            if (pageAiGreetingText && translations[lang].ai_greeting) {
                pageAiGreetingText.textContent = translations[lang].ai_greeting;
            }
            if (aiInitialTime && translations[lang].ai_time_now) {
                aiInitialTime.textContent = translations[lang].ai_time_now;
            }

            if (aiQuickPrompts && translations[lang].ai_chips) {
                aiQuickPrompts.innerHTML = '';
                translations[lang].ai_chips.forEach(chip => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'ai-chip';
                    btn.textContent = chip.text;
                    btn.setAttribute('data-prompt', chip.prompt);
                    btn.addEventListener('click', () => {
                        sendFloatingAiMessage(chip.prompt);
                    });
                    aiQuickPrompts.appendChild(btn);
                });
            }
        }
    }

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        langOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                const selectedLang = opt.getAttribute('data-lang');
                setLanguage(selectedLang);
                langDropdown.classList.remove('open');
            });
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('open');
        });
    }


    // --------------------------------------------------------------------------
    // 3. TUN (DARK) VA KUN (LIGHT) REJIMI (nbarkiya.xyz kabi)
    // --------------------------------------------------------------------------
    const savedTheme = localStorage.getItem('site-theme') || 'dark';

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
        localStorage.setItem('site-theme', theme);
    }

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCurrentlyDark = document.body.classList.contains('dark-mode');
            applyTheme(isCurrentlyDark ? 'light' : 'dark');
        });
    }


    // --------------------------------------------------------------------------
    // 4. MOBIL QURILMALAR UCHUN GAMBURGER MENYU
    // --------------------------------------------------------------------------
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }


    // --------------------------------------------------------------------------
    // 5. LOYIHALARNI KATEGORIYALAR BO'YICHA FILTRLASH
    // --------------------------------------------------------------------------
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filterValue = pill.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.35s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // --------------------------------------------------------------------------
    // 6. SCROLL XODISALARI: BACK-TO-TOP VA ACTIVE NAV
    // --------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (backToTopBtn) {
            if (scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        highlightActiveNavLink(scrollY);
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function highlightActiveNavLink(scrollY) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }


    // --------------------------------------------------------------------------
    // 7. 🚀 LOYIHALAR INTERAKTIV LIVE DEMO MODAL OYNASI
    // --------------------------------------------------------------------------
    const demoModalBackdrop = document.getElementById('demoModalBackdrop');
    const demoModalCloseBtn = document.getElementById('demoModalCloseBtn');
    const demoModalTitle = document.getElementById('demoModalTitle');
    const demoMarketContent = document.getElementById('demoMarketContent');
    const demoWeatherContent = document.getElementById('demoWeatherContent');
    const demoTaskflowContent = document.getElementById('demoTaskflowContent');
    const demoTriggers = document.querySelectorAll('.btn-demo-trigger');

    function openDemoModal(demoType) {
        if (!demoModalBackdrop) return;

        // Barcha tablarni yashirish
        if (demoMarketContent) demoMarketContent.style.display = 'none';
        if (demoWeatherContent) demoWeatherContent.style.display = 'none';
        if (demoTaskflowContent) demoTaskflowContent.style.display = 'none';

        if (demoType === 'market') {
            if (demoModalTitle) demoModalTitle.textContent = "Online Market Platformasi — Live Demo";
            if (demoMarketContent) demoMarketContent.style.display = 'block';
        } else if (demoType === 'weather') {
            if (demoModalTitle) demoModalTitle.textContent = "Global Weather Pro — Live Demo";
            if (demoWeatherContent) demoWeatherContent.style.display = 'block';
        } else if (demoType === 'taskflow') {
            if (demoModalTitle) demoModalTitle.textContent = "TaskFlow To-Do — Live Demo";
            if (demoTaskflowContent) demoTaskflowContent.style.display = 'block';
        }

        demoModalBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDemoModal() {
        if (!demoModalBackdrop) return;
        demoModalBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    }

    demoTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const demoType = btn.getAttribute('data-demo');
            openDemoModal(demoType);
        });
    });

    if (demoModalCloseBtn) {
        demoModalCloseBtn.addEventListener('click', closeDemoModal);
    }

    if (demoModalBackdrop) {
        demoModalBackdrop.addEventListener('click', (e) => {
            if (e.target === demoModalBackdrop) {
                closeDemoModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && demoModalBackdrop && demoModalBackdrop.classList.contains('show')) {
            closeDemoModal();
        }
    });

    // --- Market Demo Mantiqi ---
    let demoCartCount = 0;
    let demoCartTotal = 0;
    const demoCartCountEl = document.getElementById('demoCartCount');
    const demoCartTotalEl = document.getElementById('demoCartTotal');
    const demoClearCartBtn = document.getElementById('demoClearCartBtn');
    const demoCheckoutBtn = document.getElementById('demoCheckoutBtn');
    const demoCheckoutMsg = document.getElementById('demoCheckoutMsg');

    document.querySelectorAll('.btn-demo-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const price = parseInt(btn.getAttribute('data-price')) || 0;
            const name = btn.getAttribute('data-name');
            demoCartCount += 1;
            demoCartTotal += price;

            if (demoCartCountEl) demoCartCountEl.textContent = demoCartCount;
            if (demoCartTotalEl) demoCartTotalEl.textContent = `$${demoCartTotal.toLocaleString()}`;
            if (demoCheckoutMsg) demoCheckoutMsg.textContent = `"${name}" savatchaga qo'shildi!`;
        });
    });

    if (demoClearCartBtn) {
        demoClearCartBtn.addEventListener('click', () => {
            demoCartCount = 0;
            demoCartTotal = 0;
            if (demoCartCountEl) demoCartCountEl.textContent = '0';
            if (demoCartTotalEl) demoCartTotalEl.textContent = '$0';
            if (demoCheckoutMsg) demoCheckoutMsg.textContent = "Savatcha tozalandi.";
        });
    }

    if (demoCheckoutBtn) {
        demoCheckoutBtn.addEventListener('click', () => {
            if (demoCartCount === 0) {
                if (demoCheckoutMsg) demoCheckoutMsg.textContent = "Savatchangiz bo'sh. Mahsulot qo'shing!";
            } else {
                if (demoCheckoutMsg) {
                    demoCheckoutMsg.textContent = `🎉 Xarid simulyatsiyasi yakunlandi! Jami: $${demoCartTotal.toLocaleString()}`;
                }
            }
        });
    }

    // --- Weather Demo Mantiqi ---
    const demoWeatherCity = document.getElementById('demoWeatherCity');
    const demoWeatherCond = document.getElementById('demoWeatherCond');
    const demoWeatherTemp = document.getElementById('demoWeatherTemp');
    const demoWeatherHumidity = document.getElementById('demoWeatherHumidity');
    const demoWeatherWind = document.getElementById('demoWeatherWind');
    const demoWeatherInput = document.getElementById('demoWeatherInput');
    const demoWeatherSearchBtn = document.getElementById('demoWeatherSearchBtn');
    const weatherChips = document.querySelectorAll('.weather-chip');

    const weatherMockData = {
        'toshkent': { city: 'Toshkent, UZ', temp: '26°C', cond: 'Quyoshli, ochiq havo', hum: '38%', wind: '12 km/h', icon: 'fa-sun' },
        'samarqand': { city: 'Samarqand, UZ', temp: '24°C', cond: 'Yengil bulutli', hum: '45%', wind: '10 km/h', icon: 'fa-cloud-sun' },
        'london': { city: 'London, UK', temp: '14°C', cond: 'Yomgʻirli, mayin shamol', hum: '82%', wind: '22 km/h', icon: 'fa-cloud-rain' },
        'tokyo': { city: 'Tokyo, JP', temp: '19°C', cond: 'Tiniq havo', hum: '54%', wind: '15 km/h', icon: 'fa-cloud' },
        'dubai': { city: 'Dubai, UAE', temp: '34°C', cond: 'Issiq, toza osmon', hum: '28%', wind: '18 km/h', icon: 'fa-sun' }
    };

    function updateWeatherDemo(cityName) {
        const key = cityName.toLowerCase().trim();
        const data = weatherMockData[key] || {
            city: cityName.charAt(0).toUpperCase() + cityName.slice(1),
            temp: `${Math.floor(Math.random() * 15 + 15)}°C`,
            cond: "Mo'tadil ob-havo",
            hum: `${Math.floor(Math.random() * 30 + 40)}%`,
            wind: `${Math.floor(Math.random() * 15 + 8)} km/h`,
            icon: 'fa-cloud-sun'
        };

        if (demoWeatherCity) demoWeatherCity.textContent = data.city;
        if (demoWeatherCond) demoWeatherCond.textContent = data.cond;
        if (demoWeatherTemp) demoWeatherTemp.innerHTML = `<i class="fa-solid ${data.icon} text-yellow"></i> ${data.temp}`;
        if (demoWeatherHumidity) demoWeatherHumidity.textContent = data.hum;
        if (demoWeatherWind) demoWeatherWind.textContent = data.wind;
    }

    weatherChips.forEach(chip => {
        chip.addEventListener('click', () => {
            weatherChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            updateWeatherDemo(chip.getAttribute('data-city'));
        });
    });

    if (demoWeatherSearchBtn && demoWeatherInput) {
        demoWeatherSearchBtn.addEventListener('click', () => {
            if (demoWeatherInput.value.trim() !== '') {
                updateWeatherDemo(demoWeatherInput.value);
            }
        });
        demoWeatherInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (demoWeatherInput.value.trim() !== '') {
                    updateWeatherDemo(demoWeatherInput.value);
                }
            }
        });
    }

    // --- TaskFlow Demo Mantiqi ---
    const demoTaskForm = document.getElementById('demoTaskForm');
    const demoTaskInput = document.getElementById('demoTaskInput');
    const demoTaskList = document.getElementById('demoTaskList');
    const taskCountAll = document.getElementById('taskCountAll');
    const taskCountActive = document.getElementById('taskCountActive');
    const taskCountCompleted = document.getElementById('taskCountCompleted');
    const taskFilterPills = document.querySelectorAll('.task-filter-pill');

    function updateTaskCounts() {
        if (!demoTaskList) return;
        const all = demoTaskList.querySelectorAll('.demo-task-item').length;
        const comp = demoTaskList.querySelectorAll('.demo-task-item.done').length;
        const act = all - comp;

        if (taskCountAll) taskCountAll.textContent = all;
        if (taskCountActive) taskCountActive.textContent = act;
        if (taskCountCompleted) taskCountCompleted.textContent = comp;
    }

    if (demoTaskForm && demoTaskInput && demoTaskList) {
        demoTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = demoTaskInput.value.trim();
            if (!text) return;

            const li = document.createElement('li');
            li.className = 'demo-task-item';
            li.setAttribute('data-status', 'active');
            li.innerHTML = `
                <label><input type="checkbox"> <span>${escapeHtml(text)}</span></label>
                <button type="button" class="demo-task-del" title="O'chirish"><i class="fa-solid fa-trash-can"></i></button>
            `;

            attachTaskEvents(li);
            demoTaskList.appendChild(li);
            demoTaskInput.value = '';
            updateTaskCounts();
        });
    }

    function attachTaskEvents(li) {
        const checkbox = li.querySelector('input[type="checkbox"]');
        const delBtn = li.querySelector('.demo-task-del');

        if (checkbox) {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    li.classList.add('done');
                    li.setAttribute('data-status', 'completed');
                } else {
                    li.classList.remove('done');
                    li.setAttribute('data-status', 'active');
                }
                updateTaskCounts();
            });
        }

        if (delBtn) {
            delBtn.addEventListener('click', () => {
                li.remove();
                updateTaskCounts();
            });
        }
    }

    document.querySelectorAll('.demo-task-item').forEach(attachTaskEvents);

    taskFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            taskFilterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const f = pill.getAttribute('data-task-filter');
            document.querySelectorAll('.demo-task-item').forEach(item => {
                const status = item.getAttribute('data-status');
                if (f === 'all') {
                    item.style.display = 'flex';
                } else if (f === status) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });


    // --------------------------------------------------------------------------
    // 8. 🛡️ ALOQA FORMASI VA XAVFSIZ TELEGRAM BACKEND INTEGRATSIYASI
    // --------------------------------------------------------------------------
    let lastSubmissionTime = 0;

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Spam Throttle: Kamida 8 soniya kutilishi kerak
            const now = Date.now();
            if (now - lastSubmissionTime < 8000) {
                alert("Iltimos, qayta xabar yuborishdan oldin bir oz kuting.");
                return;
            }

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const honeypotInput = document.getElementById('_hp_security');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset xatolar
            [nameInput, emailInput, messageInput].forEach(el => el.closest('.form-group')?.classList.remove('has-error'));
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (messageError) messageError.textContent = '';

            // Honeypot spam tekshiruvi
            if (honeypotInput && honeypotInput.value.trim() !== '') {
                console.warn("Spam robot to'xtatildi.");
                contactForm.reset();
                showToastNotification("Xabaringiz qabul qilindi.");
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            let hasError = false;

            // Validatsiya
            if (name.length < 2) {
                nameInput.closest('.form-group')?.classList.add('has-error');
                if (nameError) nameError.textContent = "Ismingiz kamida 2 ta harfdan iborat bo'lishi kerak.";
                hasError = true;
            }

            const emailOrPhoneRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}|\d{9,15})$/;
            if (!emailOrPhoneRegex.test(email)) {
                emailInput.closest('.form-group')?.classList.add('has-error');
                if (emailError) emailError.textContent = "Iltimos, to'g'ri email yoki telefon raqami kiriting.";
                hasError = true;
            }

            if (message.length < 5) {
                messageInput.closest('.form-group')?.classList.add('has-error');
                if (messageError) messageError.textContent = "Xabar mazmuni kamida 5 ta belgidan iborat bo'lishi kerak.";
                hasError = true;
            }

            if (hasError) return;

            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Yuborilmoqda...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                        lang: currentLanguage,
                        _hp_security: honeypotInput ? honeypotInput.value : ''
                    })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    lastSubmissionTime = Date.now();
                    contactForm.reset();
                    const t = translations[currentLanguage];
                    showToastNotification(t.toast_title, t.toast_desc);
                } else {
                    const errMsg = data.message || "Xabar yuborishda xatolik yuz berdi.";
                    alert(errMsg);
                }
            } catch (networkError) {
                console.warn("Server ulanmadi (ehtimol mahalliy file:// rejimida ochilgan):", networkError);
                // Agar mahalliy kompyuterda server bo'lmasa, foydalanuvchiga toza ma'lumot beramiz:
                alert("Xabar qabul qilindi! Jonli saytda xabaringiz to'g'ridan-to'g'ri Telegramga yetkaziladi. Hozir to'g'ridan-to'g'ri Telegram: @Rakh1mov_07x orqali ham bog'lanishingiz mumkin.");
                contactForm.reset();
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }
        });
    }

    function showToastNotification(title = "Muvaffaqiyatli!", desc = "Xabaringiz qabul qilindi.") {
        if (!toast) return;

        const titleEl = toast.querySelector('.toast-title');
        const descEl = toast.querySelector('.toast-desc');
        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }


    // --------------------------------------------------------------------------
    // 9. 🤖 SENIOR-GRADE ASILBEK AI (SUHBAT TARIXI VA AQLLI BILIMLAR)
    // --------------------------------------------------------------------------
    let conversationHistory = []; // Ko'p qadamli suhbat konteksti (Multi-turn Memory)

    // DOM Elementlari
    const aiChatContainer = document.getElementById('aiChatContainer');
    const aiChatToggleBtn = document.getElementById('aiChatToggleBtn');
    const aiCloseChatBtn = document.getElementById('aiCloseChatBtn');
    const aiClearChatBtn = document.getElementById('aiClearChatBtn');
    const aiChatMessages = document.getElementById('aiChatMessages');
    const aiChatForm = document.getElementById('aiChatForm');
    const aiChatInput = document.getElementById('aiChatInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiTypingIndicator = document.getElementById('aiTypingIndicator');

    // Sahifadagi Terminal Elementlari
    const pageAiForm = document.getElementById('pageAiForm');
    const pageAiInput = document.getElementById('pageAiInput');
    const pageAiSubmitBtn = document.getElementById('pageAiSubmitBtn');
    const pageAiMessages = document.getElementById('pageAiMessages');
    const pageAiTypingIndicator = document.getElementById('pageAiTypingIndicator');
    const pageAiResetBtn = document.getElementById('pageAiResetBtn');
    const pageAiPromptCards = document.querySelectorAll('.ai-prompt-card');

    // Floating bot tugmasi
    if (aiChatToggleBtn && aiChatContainer) {
        aiChatToggleBtn.addEventListener('click', () => {
            const isActive = aiChatContainer.classList.toggle('active');
            if (isActive && aiChatInput) {
                setTimeout(() => aiChatInput.focus(), 250);
                if (aiChatMessages) aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
            }
        });
    }

    if (aiCloseChatBtn && aiChatContainer) {
        aiCloseChatBtn.addEventListener('click', () => {
            aiChatContainer.classList.remove('active');
        });
    }

    // Tarixni tozalash
    function resetChatHistory() {
        conversationHistory = [];
        const t = translations[currentLanguage] || translations.uz;
        const initialHtml = `
            <div class="ai-message ai-message-bot">
                <div class="ai-msg-avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="ai-msg-bubble">
                    <p class="ai-greeting-text">${t.ai_greeting}</p>
                    <span class="ai-msg-time">${t.ai_time_now}</span>
                </div>
            </div>
        `;
        if (aiChatMessages) aiChatMessages.innerHTML = initialHtml;
        if (pageAiMessages) pageAiMessages.innerHTML = initialHtml;
    }

    if (aiClearChatBtn) aiClearChatBtn.addEventListener('click', resetChatHistory);
    if (pageAiResetBtn) pageAiResetBtn.addEventListener('click', resetChatHistory);

    // Markdown formatlovchi (Bold, Ro'yxat, Havolalar)
    function formatAiText(text) {
        let escaped = escapeHtml(text);
        
        // **bold** -> <strong>bold</strong>
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // * item yoki • item -> ro'yxat
        escaped = escaped.replace(/^[•\*]\s+(.*)$/gm, '<li class="ai-list-item">$1</li>');
        escaped = escaped.replace(/(<li.*<\/li>)/s, '<ul class="ai-list">$1</ul>');

        // [label](url) -> <a href="url" target="_blank">label</a>
        escaped = escaped.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="ai-chat-link">$1</a>');

        // Yangi qatorlarni saqlash
        escaped = escaped.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

        return escaped;
    }

    function appendMessageToContainer(container, text, sender = 'user') {
        if (!container) return;

        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-message ai-message-${sender}`;

        const formatted = sender === 'bot' ? formatAiText(text) : escapeHtml(text);

        if (sender === 'bot') {
            msgDiv.innerHTML = `
                <div class="ai-msg-avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="ai-msg-bubble">
                    <div class="ai-msg-text">${formatted}</div>
                    <span class="ai-msg-time">${timeStr}</span>
                </div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="ai-msg-bubble">
                    <div class="ai-msg-text">${formatted}</div>
                    <span class="ai-msg-time">${timeStr}</span>
                </div>
            `;
        }

        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
    }

    // Asosiy AI so'rov funksiyasi (Ikkala oynani bir vaqtda yangilaydi)
    async function executeAiMessage(messageText) {
        if (!messageText || messageText.trim() === '') return;
        const text = messageText.trim();

        // Ikkala joyga ham xabarni qo'shish
        appendMessageToContainer(aiChatMessages, text, 'user');
        appendMessageToContainer(pageAiMessages, text, 'user');

        // Inputlarni tozalash va tugmalarni nofaol qilish
        if (aiChatInput) aiChatInput.value = '';
        if (pageAiInput) pageAiInput.value = '';
        if (aiSendBtn) aiSendBtn.disabled = true;
        if (pageAiSubmitBtn) pageAiSubmitBtn.disabled = true;

        if (aiTypingIndicator) aiTypingIndicator.classList.add('show');
        if (pageAiTypingIndicator) pageAiTypingIndicator.classList.add('show');

        // Suhbat tarixiga foydalanuvchi so'rovini qo'shish
        conversationHistory.push({ role: 'user', content: text });
        if (conversationHistory.length > 8) conversationHistory = conversationHistory.slice(-8);

        try {
            let botReply = "";

            // 1. Backend /api/chat ga so'rov yuborish
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: text,
                        history: conversationHistory,
                        lang: currentLanguage
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.reply) {
                        botReply = data.reply;
                    }
                }
            } catch (backendError) {
                console.log("AI Backend so'rovi oflayn, zaxira intellekt ishga tushmoqda...");
            }

            // 2. Agar backend ulanmagan bo'lsa (mahalliy file:// rejimida), zaxira aqlli bilim
            if (!botReply) {
                await new Promise(resolve => setTimeout(resolve, 550));
                botReply = getClientSideFallbackAiReply(text, currentLanguage);
            }

            // Javobni saqlash va ko'rsatish
            conversationHistory.push({ role: 'assistant', content: botReply });

            if (aiTypingIndicator) aiTypingIndicator.classList.remove('show');
            if (pageAiTypingIndicator) pageAiTypingIndicator.classList.remove('show');

            appendMessageToContainer(aiChatMessages, botReply, 'bot');
            appendMessageToContainer(pageAiMessages, botReply, 'bot');

        } catch (error) {
            console.error("AI xatolik yuz berdi:", error);
            if (aiTypingIndicator) aiTypingIndicator.classList.remove('show');
            if (pageAiTypingIndicator) pageAiTypingIndicator.classList.remove('show');

            const errReply = "Kechirasiz, sun'iy intellekt bilan bog'lanishda xatolik yuz berdi. Iltimos to'g'ridan-to'g'ri Telegram orqali bog'laning: @Rakh1mov_07x";
            appendMessageToContainer(aiChatMessages, errReply, 'bot');
            appendMessageToContainer(pageAiMessages, errReply, 'bot');
        } finally {
            if (aiSendBtn) aiSendBtn.disabled = false;
            if (pageAiSubmitBtn) pageAiSubmitBtn.disabled = false;
        }
    }

    function sendFloatingAiMessage(prompt) {
        executeAiMessage(prompt);
    }

    if (aiChatForm) {
        aiChatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (aiChatInput && aiChatInput.value.trim() !== '') {
                executeAiMessage(aiChatInput.value);
            }
        });
    }

    if (pageAiForm) {
        pageAiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (pageAiInput && pageAiInput.value.trim() !== '') {
                executeAiMessage(pageAiInput.value);
            }
        });
    }

    pageAiPromptCards.forEach(card => {
        card.addEventListener('click', () => {
            const prompt = card.getAttribute('data-prompt');
            if (prompt) {
                executeAiMessage(prompt);
            }
        });
    });

    // Mahalliy brauzer zaxira bilimlari
    function getClientSideFallbackAiReply(question, lang = 'uz') {
        const q = question.toLowerCase();

        if (q.includes("salom") || q.includes("assalom") || q.includes("qalaysiz") || q.includes("privet") || q.includes("hello") || q.includes("hi")) {
            return lang === 'ru'
                ? "Привет! 👋 Я персональный ИИ-ассистент Асилбека. Чем могу помочь вам сегодня?"
                : lang === 'en'
                ? "Hello! 👋 I am Asilbek's personal AI Assistant. How can I help you today?"
                : "Assalomu alaykum! 👋 Men Asilbekning shaxsiy AI assistentiman. Sizga qanday yordam bera olaman?";
        }

        if (q.includes("kim") || q.includes("haqida") || q.includes("кто") || q.includes("who") || q.includes("stack") || q.includes("bilim")) {
            return lang === 'ru'
                ? "👨‍💻 **Асилбек Рахимов** — Frontend-разработчик из Ташкента. Создает быстрые и адаптивные сайты на HTML5, CSS3, JavaScript ES6+."
                : lang === 'en'
                ? "👨‍💻 **Asilbek Rahimov** is a Frontend Developer & Web Engineer specializing in HTML5, CSS3, JavaScript ES6+, and responsive UI design."
                : "👨‍💻 **Asilbek Rahimov** — Frontend Dasturchi & Web Engineer. HTML5, CSS3, JavaScript ES6+ va Vercel texnologiyalari bo'yicha moslashuvchan saytlar yaratadi.";
        }

        if (q.includes("loyiha") || q.includes("ish") || q.includes("проект") || q.includes("project")) {
            return lang === 'ru'
                ? "🚀 **Проекты:** 1. Online Market, 2. Global Weather Pro, 3. TaskFlow. Вы можете протестировать их прямо в разделе 'Проекты'!"
                : lang === 'en'
                ? "🚀 **Projects:** 1. Online Market E-Commerce, 2. Global Weather Pro, 3. TaskFlow To-Do. Test them out in the Projects section above!"
                : "🚀 **Loyihalari:** 1. Online Market do'koni, 2. Global Weather ob-havo tizimi, 3. TaskFlow rejalashtiruvchi ilovasi. 'Loyihalar' bo'limida 'Live Demo' tugmasi orqali sinab ko'rishingiz mumkin!";
        }

        if (q.includes("narx") || q.includes("buyurtma") || q.includes("qancha") || q.includes("цена") || q.includes("стоимость") || q.includes("price") || q.includes("cost")) {
            return lang === 'ru'
                ? "💼 Стоимость сайта зависит от объема (Landing Page — от 2-4 дней). Напишите Асилбеку в Telegram **@Rakh1mov_07x** для персонального расчета!"
                : lang === 'en'
                ? "💼 Pricing and deadlines depend on project requirements. Message Asilbek on Telegram **@Rakh1mov_07x** for a custom quote!"
                : "💼 Sayt narxi va muddati loyiha murakkabligiga bog'liq (Landing pagelar 2-4 kun). Aniq hisob-kitob va bepul konsultatsiya uchun Telegramda **@Rakh1mov_07x** ga yozing!";
        }

        if (q.includes("aloqa") || q.includes("bog'lanish") || q.includes("telegram") || q.includes("kontakt") || q.includes("contact")) {
            return lang === 'ru'
                ? "📱 Связь с Асилбеком: Telegram: **@Rakh1mov_07x**, Instagram: **@asilbek_rakh1mov**, Email: asilbekrahimov8049@gmail.com"
                : lang === 'en'
                ? "📱 Contact Asilbek: Telegram: **@Rakh1mov_07x**, Instagram: **@asilbek_rakh1mov**, Email: asilbekrahimov8049@gmail.com"
                : "📱 Asilbek bilan bog'lanish: Telegram: **@Rakh1mov_07x**, Instagram: **@asilbek_rakh1mov**, Email: asilbekrahimov8049@gmail.com";
        }

        return lang === 'ru'
            ? `Спасибо за вопрос! По поводу "${question}" вы можете написать напрямую Асилбеку в Telegram: **@Rakh1mov_07x** — он ответит вам лично.`
            : lang === 'en'
            ? `Thank you for your question! Regarding "${question}", feel free to reach out to Asilbek on Telegram: **@Rakh1mov_07x**.`
            : `Qiziqishingiz uchun rahmat! "${question}" bo'yicha Asilbekning shaxsiy Telegramiga (**@Rakh1mov_07x**) yozsangiz, batafsil ma'lumot beradi.`;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }


    // --------------------------------------------------------------------------
    // 10. SAQLANGAN TILNI YUKLASH VA BOSHLANG'ICH SOZLASH
    // --------------------------------------------------------------------------
    setLanguage(currentLanguage);

    console.log("🚀 Asilbek Rahimov portfoliosi muvaffaqiyatli yuklandi!");
});
