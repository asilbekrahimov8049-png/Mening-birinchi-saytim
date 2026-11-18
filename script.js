/* ==========================================================================
   nbarkiya.xyz USLUBIDAGI JAVASCRIPT KODI
   Asilbek Rahimov | Frontend Dasturchi Portfoliosi
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. TELEGRAM BOT SOZLAMALARI
       -------------------------------------------------------------------------- */
    const TELEGRAM_BOT_TOKEN = '9037794886:AAElx_BlQTNFLCv-MyXHG4f4QpDV7NxVKuA';
    const TELEGRAM_CHAT_ID = '6014931528';

    // DOM Elementlari
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

    // Til elementlari
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangText = document.getElementById('current-lang-text');


    /* --------------------------------------------------------------------------
       2. FOOTERDA YILNI YANGILASH
       -------------------------------------------------------------------------- */
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    /* --------------------------------------------------------------------------
       3. 🌐 KO'P TILLILIK TIZIMI (UZBEK, RUSSIAN, ENGLISH)
       -------------------------------------------------------------------------- */
    const translations = {
        uz: {
            nav_projects: "Loyihalar",
            nav_experience: "Tajriba",
            nav_skills: "Ko'nikmalar",
            nav_contact: "Bog'lanish",
            hero_status: "Yangi loyihalar uchun ochiq",
            hero_role: "Frontend Dasturchi & Web Engineer",
            hero_bio: "Zamonaviy veb-texnologiyalar, toza arxitektura va har qanday ekranga mukammal moslashuvchi yuqori unumdorlikka ega interaktiv veb-saytlar yarataman.",
            hero_btn_projects: "Loyihalarim",
            hero_btn_contact: "Bog'lanish",
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
            sidebar_location_lbl: "Manzil:",
            sidebar_location_val: "Toshkent, O'zbekiston",
            tg_status_text: "Xabarlar to'g'ridan-to'g'ri Telegramga boradi",
            toast_title: "Muvaffaqiyatli!",
            toast_desc: "Xabaringiz Telegramga yetkazildi. Rahmat!",
            footer_rights: "Barcha huquqlar himoyalangan.",
            ph_name: "Ismingizni kiriting",
            ph_contact: "Email yoki telefon raqamingiz",
            ph_msg: "Xabaringizni bu yerga yozing..."
        },
        ru: {
            nav_projects: "Проекты",
            nav_experience: "Опыт",
            nav_skills: "Навыки",
            nav_contact: "Контакты",
            hero_status: "Открыт для предложений",
            hero_role: "Frontend Разработчик & Web Engineer",
            hero_bio: "Создаю современные, масштабируемые и высокопроизводительные веб-приложения с чистой архитектурой и безупречной адаптивностью.",
            hero_btn_projects: "Мои Проекты",
            hero_btn_contact: "Связаться",
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
            sidebar_location_lbl: "Город:",
            sidebar_location_val: "Ташкент, Узбекистан",
            tg_status_text: "Сообщения поступают напрямую в Telegram",
            toast_title: "Успешно!",
            toast_desc: "Ваше сообщение отправлено в Telegram. Спасибо!",
            footer_rights: "Все права защищены.",
            ph_name: "Введите ваше имя",
            ph_contact: "Email или номер телефона",
            ph_msg: "Напишите ваше сообщение здесь..."
        },
        en: {
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_contact: "Contact",
            hero_status: "Available for work",
            hero_role: "Frontend Developer & Web Engineer",
            hero_bio: "Building clean, scalable, and high-performance interactive web applications with modern design systems and seamless responsiveness.",
            hero_btn_projects: "Projects",
            hero_btn_contact: "Contact Me",
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
            sidebar_location_lbl: "Location:",
            sidebar_location_val: "Tashkent, Uzbekistan",
            tg_status_text: "Messages delivered straight to private Telegram",
            toast_title: "Success!",
            toast_desc: "Your message has been delivered to Telegram. Thank you!",
            footer_rights: "All rights reserved.",
            ph_name: "Enter your full name",
            ph_contact: "Email or phone number",
            ph_msg: "Write your message here..."
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


    /* --------------------------------------------------------------------------
       4. TUN (DARK) VA KUN (LIGHT) REJIMI (nbarkiya.xyz kabi)
       -------------------------------------------------------------------------- */
    const savedTheme = localStorage.getItem('site-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.documentElement.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark-mode');

            if (isDark) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('site-theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('site-theme', 'light');
            }
        });
    }


    /* --------------------------------------------------------------------------
       5. MOBIL GAMBURGER MENYU
       -------------------------------------------------------------------------- */
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

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            }
        });
    }


    /* --------------------------------------------------------------------------
       6. LOYIHALAR FILTRI (SEGMENTED TABS)
       -------------------------------------------------------------------------- */
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filterValue = pill.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 30);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });


    /* --------------------------------------------------------------------------
       7. SCROLL XODISALARI: BACK-TO-TOP VA ACTIVE NAV
       -------------------------------------------------------------------------- */
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
    });

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


    /* --------------------------------------------------------------------------
       8. ALOQA FORMASI VA TELEGRAM BOTGA XABAR YUBORISH
       -------------------------------------------------------------------------- */
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                alert("Iltimos, barcha maydonlarni to'ldiring!");
                return;
            }

            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Yuborilmoqda...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            const telegramMessage = `🔔 <b>Saytingizdan yangi xabar!</b>\n\n` +
                                   `👤 <b>Ism:</b> ${name}\n` +
                                   `📧 <b>Email/Tel:</b> ${email}\n` +
                                   `💬 <b>Xabar:</b>\n${message}\n\n` +
                                   `🌐 <b>Til:</b> ${currentLanguage.toUpperCase()}\n` +
                                   `⏰ <i>Vaqt: ${new Date().toLocaleTimeString()}</i>`;

            try {
                let isSuccess = false;

                // 1. Vercel Serverless Backend (/api/contact) orqali xavfsiz yuborish
                try {
                    const backendRes = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            message,
                            lang: currentLanguage
                        })
                    });

                    if (backendRes.ok) {
                        const data = await backendRes.json();
                        if (data.success) {
                            isSuccess = true;
                        }
                    }
                } catch (backendError) {
                    // Mahalliy kompyuterda (file://) ochilganda backend bo'lmasa, zaxira sifatida ishlaydi
                    console.log("Backend ulanmadi, to'g'ridan-to'g'ri Telegramga yuborilmoqda...");
                }

                // 2. Agar backend ulanmagan bo'lsa, zaxira to'g'ridan-to'g'ri Telegram API
                if (!isSuccess) {
                    const fallbackRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            chat_id: TELEGRAM_CHAT_ID,
                            text: telegramMessage,
                            parse_mode: 'HTML'
                        })
                    });

                    const fallbackData = await fallbackRes.json();
                    if (fallbackData.ok) {
                        isSuccess = true;
                    }
                }

                if (isSuccess) {
                    contactForm.reset();
                    const t = translations[currentLanguage];
                    showToastNotification(t.toast_title, t.toast_desc);
                } else {
                    alert("Xabar yuborishda xatolik yuz berdi. Botingizga /start bosganingizga ishonch hosil qiling.");
                }
            } catch (error) {
                console.error("Tarmoq xatosi:", error);
                alert("Internet bilan bog'lanishda xatolik yuz berdi.");
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

    // Saqlangan tilni yuklash
    setLanguage(currentLanguage);

    console.log("🚀 nbarkiya.xyz uslubidagi portfolio muvaffaqiyatli ishga tushdi!");
});
