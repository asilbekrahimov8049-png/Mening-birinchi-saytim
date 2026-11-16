/* ==========================================================================
   ZAMONAVIY VEB-SAYT JAVASCRIPT KODI (script.js)
   Boshlovchi dasturchilar uchun har bir qadam tushunarli izohlangan.
   ========================================================================== */

// DOM (Document Object Model) to'liq yuklangandan keyin kodlarni ishga tushirish
document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. KERAKLI ELEMENTLARNI TANLAB OLISH (DOM SELECTORS)
       HTML elementlarini JavaScript orqali boshqarish uchun ularni o'zgaruvchilarga olamiz.
       -------------------------------------------------------------------------- */
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const toast = document.getElementById('toast');
    const currentYearSpan = document.getElementById('current-year');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');


    /* --------------------------------------------------------------------------
       2. FOOTERDA YILNI AVTOMATIK YANGILASH
       Har yili kodni qo'lda o'zgartirmaslik uchun Date ob'ektidan joriy yilni olamiz.
       -------------------------------------------------------------------------- */
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    /* --------------------------------------------------------------------------
       3. MOBIL QURILMALAR UCHUN GAMBURGER MENYU
       Telefonlarda menyuni ochish va yopish vazifasi.
       -------------------------------------------------------------------------- */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // 'open' klassini qo'shish yoki olib tashlash (toggle)
            navMenu.classList.toggle('open');

            // Menyuning ochiq yoki yopiqligiga qarab ikonkani o'zgartirish (bars <-> xmark)
            if (navMenu.classList.contains('open')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Menyu ichidagi biror havolani (link) bosganda menyuni avtomatik yopish
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });

        // Menyudan tashqari boshqa joyga bosilganda ham menyuni yopish
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    }


    /* --------------------------------------------------------------------------
       4. TUN (DARK) VA KUN (LIGHT) REJIMI (THEME TOGGLE)
       Foydalanuvchining tanlagan mavzusini localStorage (brauzer xotirasi)da saqlaymiz.
       -------------------------------------------------------------------------- */
    // Avval saqlangan mavzuni xotiradan tekshiramiz
    const savedTheme = localStorage.getItem('site-theme');

    // Agar avval dark mode tanlangan bo'lsa, uni yoqamiz
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // body ga 'dark-mode' klassini qo'shamiz yoki o'chiramiz
            document.body.classList.toggle('dark-mode');

            // Hozir qaysi rejimdaligini aniqlaymiz
            const isDark = document.body.classList.contains('dark-mode');

            // Ikonkani yangilash (oy yoki quyosh)
            if (isDark) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('site-theme', 'dark'); // Xotiraga saqlash
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('site-theme', 'light'); // Xotiraga saqlash
            }
        });
    }


    /* --------------------------------------------------------------------------
       5. SAHIFANI PASTGA SURGANDA (SCROLL) HEADER USLUBINI O'ZGARTIRISH
       Sahifa bir oz pastga surilganda headerga soya (shadow) qo'shiladi.
       -------------------------------------------------------------------------- */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Qaysi bo'limda turganimizni aniqlab, mos menyuni faollashtirish (Active link)
        highlightActiveNavLink();
    });

    function highlightActiveNavLink() {
        const scrollPosition = window.scrollY + 120;

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
       6. ALOQA FORMASINI TELEGRAM BOTGA ULASH VA YUBORISH
       Foydalanuvchi ma'lumot kiritib yuborganda to'g'ridan-to'g'ri Telegramingizga keladi!
       -------------------------------------------------------------------------- */
    // Telegram Bot ma'lumotlari
    const TELEGRAM_BOT_TOKEN = '9037794886:AAElx_BlQTNFLCv-MyXHG4f4QpDV7NxVKuA';
    const TELEGRAM_CHAT_ID = '6014931528';

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Sahifa yangilanib ketishini to'xtatish

            // Formadagi qiymatlarni olish
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Oddiy validatsiya (barcha maydonlar to'ldirilganmi?)
            if (!name || !email || !message) {
                alert("Iltimos, barcha maydonlarni to'ldiring!");
                return;
            }

            // Tugmani "Yuborilmoqda..." holatiga o'tkazish
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Yuborilmoqda...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            // Telegramga yuboriladigan matn formati
            const telegramMessage = `🔔 <b>Saytingizdan yangi xabar!</b>\n\n` +
                                   `👤 <b>Ism:</b> ${name}\n` +
                                   `📧 <b>Email:</b> ${email}\n` +
                                   `💬 <b>Xabar:</b>\n${message}`;

            try {
                // Telegram Bot API ga so'rov yuborish
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
                    // Muvaffaqiyatli yuborildi: Formani tozalash va bildirishnomani ko'rsatish
                    contactForm.reset();
                    showToastNotification("Muvaffaqiyatli!", "Xabaringiz Telegramga yuborildi. Tez orada javob beraman.");
                } else {
                    console.error("Telegram API xatosi:", data);
                    alert("Xabar yuborishda xatolik yuz berdi. Botingizga /start bosganingizga ishonch hosil qiling.");
                }
            } catch (error) {
                console.error("Tarmoq xatosi:", error);
                alert("Internet bilan bog'lanishda xatolik yuz berdi.");
            } finally {
                // Tugmani avvalgi holatiga qaytarish
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }
        });
    }

    // Toast bildirishnomasini ko'rsatuvchi yordamchi funksiya
    function showToastNotification(title = "Muvaffaqiyatli!", desc = "Xabaringiz qabul qilindi.") {
        if (!toast) return;

        const titleEl = toast.querySelector('.toast-title');
        const descEl = toast.querySelector('.toast-desc');
        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;

        toast.classList.add('show');

        // 4 soniyadan keyin bildirishnomani yana yashirish
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    console.log("🚀 Veb-sayt muvaffaqiyatli yuklandi va barcha skriptlar ishlamoqda!");
});
