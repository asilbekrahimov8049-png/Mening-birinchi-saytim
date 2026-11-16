/* ==========================================================================
   ZAMONAVIY & INTERAKTIV JAVASCRIPT KODI (script.js)
   Asilbek | Frontend Dasturchi Portfoliosi
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. TELEGRAM BOT VA SHAXSIY SOZLAMALAR
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
    const sections = document.querySelectorAll('section[id]');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const statNumbers = document.querySelectorAll('.stat-number');


    /* --------------------------------------------------------------------------
       2. FOOTERDA YILNI AVTOMATIK YANGILASH
       -------------------------------------------------------------------------- */
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    /* --------------------------------------------------------------------------
       3. TYPEWRITER (YOZILUVCHI MATN EFFEKTI - FRONTEND DASTURCHI BELGISI!)
       -------------------------------------------------------------------------- */
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const words = [
            "Frontend Dasturchiman",
            "Veb Dasturchiman",
            "JavaScript Ishqibozi",
            "Zamonaviy Saytlar Quruvchisi"
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // O'chirish tezroq
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 110; // Yozish maromi
            }

            // So'z to'liq yozilganda
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1800; // So'z oxirida kutish
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 400; // Yangi so'z oldidan kutish
            }

            setTimeout(type, typingSpeed);
        }

        type(); // Typewriter effektini ishga tushirish
    }


    /* --------------------------------------------------------------------------
       4. MOBIL QURILMALAR UCHUN GAMBURGER MENYU
       -------------------------------------------------------------------------- */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Menyu havolasi bosilganda menyuni yopish
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });

        // Tashqariga bosilganda menyuni yopish
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            }
        });
    }


    /* --------------------------------------------------------------------------
       5. TUN (DARK) VA KUN (LIGHT) REJIMI (LOCALSTORAGE BILAN)
       -------------------------------------------------------------------------- */
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');

            if (isDark) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('site-theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('site-theme', 'light');
            }
        });
    }


    /* --------------------------------------------------------------------------
       6. SCROLL XODISALARI: HEADER, ACTIVE LINK VA BACK-TO-TOP
       -------------------------------------------------------------------------- */
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Sticky headerga soya berish
        if (scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back-to-top tugmasini ko'rsatish
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        // Active linkni aniqlash
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
        const scrollPosition = scrollY + 140;

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
       7. STATISTIKA RAQAMLARINING O'SIB BORISH ANIMATSIYASI
       -------------------------------------------------------------------------- */
    let animated = false;
    function startCounting() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let count = 0;
            const increment = target / 35;

            const updateNumber = () => {
                count += increment;
                if (count < target) {
                    stat.textContent = Math.ceil(count);
                    setTimeout(updateNumber, 35);
                } else {
                    stat.textContent = target;
                }
            };
            updateNumber();
        });
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    startCounting();
                    animated = true;
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }


    /* --------------------------------------------------------------------------
       8. LOYIHALAR FILTRI (PROJECT FILTER TABS)
       -------------------------------------------------------------------------- */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Faol tugmani belgilash
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });


    /* --------------------------------------------------------------------------
       9. ALOQA FORMASI VA TELEGRAM BOTGA XABAR YUBORISH
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
            submitBtn.innerHTML = `<span>Telegramga yuborilmoqda...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            const telegramMessage = `🔔 <b>Saytingizdan yangi xabar!</b>\n\n` +
                                   `👤 <b>Ism:</b> ${name}\n` +
                                   `📧 <b>Email/Tel:</b> ${email}\n` +
                                   `💬 <b>Xabar:</b>\n${message}\n\n` +
                                   `⏰ <i>Vaqt: ${new Date().toLocaleTimeString()}</i>`;

            try {
                const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
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

                const data = await response.json();

                if (data.ok) {
                    contactForm.reset();
                    showToastNotification("Muvaffaqiyatli!", "Xabaringiz Telegramga yuborildi. Rahmat!");
                } else {
                    console.error("Telegram API xatosi:", data);
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

    console.log("🚀 Sayt to'liq yuklandi va barcha animatsiyalar faollashtirildi!");
});
