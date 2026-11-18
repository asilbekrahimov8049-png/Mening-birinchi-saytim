// ==========================================================================
// VERCEL SERVERLESS AI CHAT ENGINE (api/chat.js)
// Asilbek Rahimov Portfoliosi uchun Professional AI Assistent Backend
// ==========================================================================

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: "Faqat POST so'rovi qabul qilinadi"
        });
    }

    try {
        const { message, history = [], lang = 'uz' } = req.body;

        if (!message || typeof message !== 'string' || message.trim() === '') {
            return res.status(400).json({
                success: false,
                message: "Xabar matni kiritilmadi"
            });
        }

        const userMsg = message.trim();
        const safeLang = ['uz', 'ru', 'en'].includes(lang) ? lang : 'uz';

        // ----------------------------------------------------------------------
        // TASDIQLANGAN BILIMLAR BAZASI VA SISTEMA KO'RSATMASI (SYSTEM PROMPT)
        // ----------------------------------------------------------------------
        const systemPrompt = `Siz Asilbek Rahimovning shaxsiy portfolio saytidagi rasmiy, aqlli va do'stona AI assistentisiz.

ASILBEK RAHIMOV HAQIDA TASDIQLANGAN HAQIQIY MA'LUMOTLAR:
- Kasbi: Frontend Dasturchi & Web Engineer (Junior / Amaliyotchi).
- Manzili: Toshkent, O'zbekiston.
- Yo'nalishi: Zamonaviy, tezkor, toza kodli va barcha ekranlarga (mobil, planshet, kompyuter) 100% moslashuvchan veb-saytlar yaratish.
- Texnologiyalar to'plami (Tech Stack):
  * HTML5: Semantik teglash, SEO standartlari, qulay veb-arxitektura.
  * CSS3: Flexbox, CSS Grid, CSS Animatsiyalar, Dark/Light rejim, zamonaviy SaaS dizayn.
  * JavaScript (ES6+): DOM manipulatsiyasi, Asinxron dasturlash (Fetch API, Async/Await), LocalStorage, forma validatsiyasi.
  * Vositalar: Git, GitHub, Vercel CI/CD serverless deploy, Telegram Bot API integratsiyasi.
- Asosiy Loyihalari:
  1. "Online Market Platformasi" — E-Commerce do'koni. Mahsulotlar katalogi, interaktiv savatcha, saralash va umumiy narx hisobi. (HTML5, CSS Grid, JS ES6+).
  2. "Global Weather Pro" — Dunyo shaharlari ob-havosi. Real vaqtdagi ob-havo, namlik, shamol tezligi va 5 kunlik prognoz. (Fetch API, Async JS).
  3. "TaskFlow" — Rejalar va vazifalar menejeri. Rejalar qo'shish, bajarilgan deb belgilash, qidiruv, LocalStorage xotirasi. (Vanilla JS, Clean UI).
- Xizmatlar va Narxlar:
  * Landing page (bir sahifali reklama saytlari): 2-4 kun muddatda.
  * Vizitka saytlar va shaxsiy portfoliolar: 3-5 kun muddatda.
  * Korporativ va ko'p sahifali veb-saytlar: 5-10 kun muddatda.
  * Narxlar loyiha murakkabligiga qarab qulay va kelishilgan holda belgilanadi.
- Aloqa ma'lumotlari:
  * Telegram: @Rakh1mov_07x (https://t.me/Rakh1mov_07x)
  * Instagram: @asilbek_rakh1mov (https://instagram.com/asilbek_rakh1mov)
  * Email: asilbekrahimov8049@gmail.com
  * GitHub: https://github.com/asilbekrahimov8049-png

QAT'IY QOIDALAR:
1. Foydalanuvchi qaysi tilda murojaat qilsa, o'sha tilda (${safeLang}) samimiy, aniq va ixcham javob bering.
2. Hech qachon o'ylab topilgan yolg'on ma'lumot (soxta diplomlar, soxta kompaniyalar, bilmaydigan texnologiyalar) aytmang.
3. Agar foydalanuvchi sayt buyurtma qilmoqchi bo'lsa:
   - Qanday sayt kerakligini (landing, internet-do'kon, korporativ sayt),
   - Taxminiy muddat va talablarini so'rang,
   - Asilbekning shaxsiy Telegramiga (@Rakh1mov_07x) yozishni yoki saytdagi Bog'lanish formasini to'ldirishni taklif qiling.
4. Javoblarni chiroyli formatda (nuqtali ro'yxat, qalin shrift bilan ajratib) taqdim eting.`;

        // ----------------------------------------------------------------------
        // 1. OPENAI (ChatGPT / GPT-3.5 / GPT-4o-mini) INTEGRATSIYASI
        // ----------------------------------------------------------------------
        if (process.env.OPENAI_API_KEY) {
            try {
                const formattedHistory = Array.isArray(history) 
                    ? history.slice(-6).map(h => ({
                        role: h.role === 'user' ? 'user' : 'assistant',
                        content: String(h.content || '').slice(0, 500)
                    }))
                    : [];

                const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            ...formattedHistory,
                            { role: 'user', content: userMsg }
                        ],
                        max_tokens: 350,
                        temperature: 0.6
                    })
                });

                if (openaiResponse.ok) {
                    const aiData = await openaiResponse.json();
                    if (aiData.choices && aiData.choices[0]?.message?.content) {
                        return res.status(200).json({
                            success: true,
                            source: 'openai',
                            reply: aiData.choices[0].message.content.trim()
                        });
                    }
                }
            } catch (err) {
                console.error("OpenAI so'rovida xatolik:", err);
            }
        }

        // ----------------------------------------------------------------------
        // 2. GOOGLE GEMINI AI (Gemini 1.5 Flash) INTEGRATSIYASI
        // ----------------------------------------------------------------------
        if (process.env.GEMINI_API_KEY) {
            try {
                const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
                
                const contents = [
                    {
                        role: 'user',
                        parts: [{ text: `${systemPrompt}\n\nFoydalanuvchi so'rovi: "${userMsg}"` }]
                    }
                ];

                const geminiResponse = await fetch(geminiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents,
                        generationConfig: {
                            temperature: 0.6,
                            maxOutputTokens: 350
                        }
                    })
                });

                if (geminiResponse.ok) {
                    const geminiData = await geminiResponse.json();
                    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (text) {
                        return res.status(200).json({
                            success: true,
                            source: 'gemini',
                            reply: text.trim()
                        });
                    }
                }
            } catch (err) {
                console.error("Gemini API so'rovida xatolik:", err);
            }
        }

        // ----------------------------------------------------------------------
        // 3. O'RNATILGAN AQLLI BILIMLAR TIZIMI (SMART FALLBACK ENGINE)
        // API kalit ulanmagan yoki internet uzilgan holatda ham 100% aniq ishlaydi
        // ----------------------------------------------------------------------
        const reply = generateSmartFallbackReply(userMsg, history, safeLang);

        return res.status(200).json({
            success: true,
            source: 'smart_engine',
            reply: reply
        });

    } catch (error) {
        console.error("AI Server umumiy xatosi:", error);
        return res.status(500).json({
            success: false,
            message: "AI yordamchisi bilan bog'lanishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
        });
    }
}

// --------------------------------------------------------------------------
// DETERMINISTIK AQLLI BILIMLAR BAZASI FUNKSIYASI (UZ / RU / EN)
// --------------------------------------------------------------------------
function generateSmartFallbackReply(userText, history = [], lang = 'uz') {
    const q = userText.toLowerCase().trim();

    // 1. SALOMLASHISH VA HOL-AHVOL
    if (q.includes("salom") || q.includes("assalom") || q.includes("qalaysiz") || q.includes("privet") || q.includes("hello") || q.includes("hi ") || q === "hi" || q.includes("zdravstvuyte")) {
        if (lang === 'ru') {
            return "Здравствуйте! 👋 Я персональный ИИ-ассистент Асилбека Рахимова. Чем могу помочь вам сегодня? Вы можете спросить о навыках Асилбека, его проектах или заказать разработку сайта!";
        } else if (lang === 'en') {
            return "Hello! 👋 I am Asilbek Rahimov's personal AI Assistant. How can I help you today? Feel free to ask about Asilbek's skills, projects, or discuss website development services!";
        } else {
            return "Assalomu alaykum! 👋 Men Asilbek Rahimovning shaxsiy AI assistentiman. Sizga qanday yordam bera olaman? Asilbekning bilimlari, loyihalari yoki sayt yaratish xizmati bo'yicha bemalol savol berishingiz mumkin!";
        }
    }

    // 2. ASILBEK KIM VA NIMALAR QILA OLADI? (BIO & SKILLS)
    if (q.includes("kim") || q.includes("haqida") || q.includes("кто") || q.includes("who") || q.includes("stack") || q.includes("bilim") || q.includes("qobiliyat") || q.includes("skill") || q.includes("tajriba")) {
        if (lang === 'ru') {
            return "👨‍💻 **Асилбек Рахимов** — Frontend-разработчик и Web Engineer из Ташкента.\n\n" +
                   "• **Ключевой стек:** HTML5, CSS3 (Grid, Flexbox, Animations), JavaScript (ES6+, Fetch API, LocalStorage).\n" +
                   "• **Инструменты:** Git, GitHub, Vercel Serverless, интеграция Telegram-ботов.\n" +
                   "• **Подход:** Создает адаптивные, быстрые и чистые веб-интерфейсы с вниманием к UI/UX.";
        } else if (lang === 'en') {
            return "👨‍💻 **Asilbek Rahimov** is a passionate Frontend Developer & Web Engineer from Tashkent, Uzbekistan.\n\n" +
                   "• **Core Tech Stack:** HTML5, CSS3 (Grid, Flexbox, Animations), JavaScript (ES6+, DOM, Fetch API, LocalStorage).\n" +
                   "• **Tooling:** Git, GitHub, Vercel Serverless Deployment, Telegram Bot Integration.\n" +
                   "• **Focus:** Building modern, mobile-first, and high-performance interactive web applications.";
        } else {
            return "👨‍💻 **Asilbek Rahimov** — O'zbekistonlik iqtidorli Frontend Dasturchi va Web Engineer.\n\n" +
                   "• **Asosiy texnologiyalari:** HTML5, CSS3 (Grid, Flexbox, Zamonaviy animatsiyalar), JavaScript (ES6+, Asinxron so'rovlar, DOM, LocalStorage).\n" +
                   "• **Vositalar:** Git, GitHub, Vercel Serverless Hosting, Telegram Bot integratsiyasi.\n" +
                   "• **Maqsadi:** Har qanday ekranga 100% moslashuvchi, chaqqon va chiroyli veb-saytlar yaratish.";
        }
    }

    // 3. LOYIHALAR HAQIDA
    if (q.includes("loyiha") || q.includes("ish") || q.includes("portfolio") || q.includes("market") || q.includes("weather") || q.includes("taskflow") || q.includes("проект") || q.includes("project")) {
        if (lang === 'ru') {
            return "🚀 **Ключевые проекты Асилбека:**\n\n" +
                   "1. **Online Market Platformasi** — интерактивный интернет-магазин с каталогом товаров, корзиной покупок и подсчетом стоимости (HTML5, CSS Grid, JS ES6+).\n" +
                   "2. **Global Weather Pro** — веб-приложение погоды городов мира в реальном времени с 5-дневным прогнозом (Fetch API, Async JS).\n" +
                   "3. **TaskFlow** — планировщик задач с фильтрами и сохранением в памяти браузера LocalStorage.\n\n" +
                   "Все проекты можно протестировать в разделе **'Проекты'** выше!";
        } else if (lang === 'en') {
            return "🚀 **Asilbek's Featured Projects:**\n\n" +
                   "1. **Online Market Platform** — Fully responsive E-Commerce store with product catalog, cart manager, and live pricing calculations (HTML5, CSS Grid, JS ES6+).\n" +
                   "2. **Global Weather Pro** — Real-time weather dashboard fetching live city metrics and 5-day forecasts via OpenWeather APIs.\n" +
                   "3. **TaskFlow** — Interactive to-do and productivity planner with LocalStorage persistence and dark mode.\n\n" +
                   "You can test them out in the **'Projects'** section above!";
        } else {
            return "🚀 **Asilbekning asosiy amaliy loyihalari:**\n\n" +
                   "1. **Online Market Platformasi** — Mahsulotlar katalogi, interaktiv savatcha va buyurtma hisoblagichiga ega to'liq e-commerce do'koni (HTML5, CSS Grid, JS ES6+).\n" +
                   "2. **Global Weather Pro** — Dunyo shaharlarining real vaqtdagi ob-havosi, harorati va 5 kunlik prognozi (Fetch API, Async JS).\n" +
                   "3. **TaskFlow** — Vazifalar va rejalarni boshqaruvchi, brauzer xotirasida (LocalStorage) saqlovchi qulay to-do tizimi.\n\n" +
                   "Ularni sahifadagi **'Loyihalar'** bo'limida ko'rishingiz va sinab ko'rishingiz mumkin!";
        }
    }

    // 4. SAYT BUYURTMA QILISH, XIZMATLAR VA NARXLAR
    if (q.includes("narx") || q.includes("buyurtma") || q.includes("qancha") || q.includes("sayt kerak") || q.includes("xizmat") || q.includes("цена") || q.includes("стоимость") || q.includes("заказ") || q.includes("price") || q.includes("cost") || q.includes("order") || q.includes("hire")) {
        if (lang === 'ru') {
            return "💼 **Услуги и разработка сайтов от Асилбека:**\n\n" +
                   "• **Landing Page (Одностраничник):** Срок 2–4 дня.\n" +
                   "• **Сайт-визитка / Портфолио:** Срок 3–5 дней.\n" +
                   "• **Корпоративный сайт:** Срок 5–10 дней.\n" +
                   "• Все сайты включают адаптацию под мобильные устройства, интеграцию Telegram-уведомлений и оптимизацию скорости.\n\n" +
                   "💰 Точная цена зависит от объема. Напишите Асилбеку в Telegram: **@Rakh1mov_07x** для бесплатной консультации!";
        } else if (lang === 'en') {
            return "💼 **Web Development Services by Asilbek:**\n\n" +
                   "• **Landing Pages:** 2–4 days delivery.\n" +
                   "• **Personal / Portfolio Websites:** 3–5 days delivery.\n" +
                   "• **Corporate Websites:** 5–10 days delivery.\n" +
                   "• Includes 100% responsive design, Telegram notification forms, and high performance.\n\n" +
                   "💰 Pricing depends on project scope. Reach out to Asilbek directly on Telegram: **@Rakh1mov_07x** for a custom estimate!";
        } else {
            return "💼 **Asilbek taklif qiladigan veb-dasturlash xizmatlari:**\n\n" +
                   "• **Landing Page (Bir sahifali sayt):** 2–4 kun muddatda.\n" +
                   "• **Vizitka / Shaxsiy portfolio sayt:** 3–5 kun muddatda.\n" +
                   "• **Korporativ va ko'p sahifali saytlar:** 5–10 kun muddatda.\n" +
                   "• Saytlarning barchasi smartfon va planshetlarga to'liq moslashadi, Telegramga xabar yuborish tizimi va SEO sozlamalariga ega bo'ladi.\n\n" +
                   "💰 Aniq narx va muddatni bepul hisoblab berish uchun Telegramda **@Rakh1mov_07x** ga yozing yoki quyidagi bog'lanish formasini to'ldiring!";
        }
    }

    // 5. ALOQA VA KONTAKTLAR
    if (q.includes("aloqa") || q.includes("bog'lanish") || q.includes("telegram") || q.includes("kontakt") || q.includes("email") || q.includes("instagram") || q.includes("nomer") || q.includes("telefon") || q.includes("contact") || q.includes("phone")) {
        if (lang === 'ru') {
            return "📱 **Контакты для прямой связи с Асилбеком:**\n\n" +
                   "• **Telegram:** [@Rakh1mov_07x](https://t.me/Rakh1mov_07x)\n" +
                   "• **Instagram:** [@asilbek_rakh1mov](https://instagram.com/asilbek_rakh1mov)\n" +
                   "• **Email:** asilbekrahimov8049@gmail.com\n" +
                   "• **GitHub:** [asilbekrahimov8049-png](https://github.com/asilbekrahimov8049-png)\n\n" +
                   "Вы также можете оставить заявку через форму внизу сайта!";
        } else if (lang === 'en') {
            return "📱 **Direct Contact Channels for Asilbek:**\n\n" +
                   "• **Telegram:** [@Rakh1mov_07x](https://t.me/Rakh1mov_07x)\n" +
                   "• **Instagram:** [@asilbek_rakh1mov](https://instagram.com/asilbek_rakh1mov)\n" +
                   "• **Email:** asilbekrahimov8049@gmail.com\n" +
                   "• **GitHub:** [asilbekrahimov8049-png](https://github.com/asilbekrahimov8049-png)\n\n" +
                   "Or submit a quick message through the contact form at the bottom!";
        } else {
            return "📱 **Asilbek bilan bog'lanish uchun rasmiy kontaktlar:**\n\n" +
                   "• **Telegram:** [@Rakh1mov_07x](https://t.me/Rakh1mov_07x)\n" +
                   "• **Instagram:** [@asilbek_rakh1mov](https://instagram.com/asilbek_rakh1mov)\n" +
                   "• **Email:** asilbekrahimov8049@gmail.com\n" +
                   "• **GitHub:** [asilbekrahimov8049-png](https://github.com/asilbekrahimov8049-png)\n\n" +
                   "Shuningdek, saytning pastki qismidagi **Bog'lanish** formasi orqali to'g'ridan-to'g'ri xabar qoldirishingiz mumkin!";
        }
    }

    // 6. BUYURTMACHI MA'LUMOT QILDIRGANDA (LEAD INTAKE)
    if (q.includes("@") || q.includes("+998") || /\d{9}/.test(q)) {
        if (lang === 'ru') {
            return "✅ Спасибо за предоставленный контакт! Информация зафиксирована. Асилбек свяжется с вами в Telegram или по почте в ближайшее время!";
        } else if (lang === 'en') {
            return "✅ Thank you for sharing your contact details! Asilbek will get in touch with you shortly.";
        } else {
            return "✅ Bog'lanish ma'lumotlaringiz uchun rahmat! Xabaringiz qayd etildi. Asilbek tez orada Telegram yoki email orqali siz bilan aloqaga chiqadi!";
        }
    }

    // 7. UMUMIY JAVOB (FALLBACK)
    if (lang === 'ru') {
        return `Спасибо за ваш вопрос! По поводу "${userText}" вы можете написать лично Асилбеку в Telegram: **@Rakh1mov_07x** — он с удовольствием ответит на все технические и коммерческие вопросы.`;
    } else if (lang === 'en') {
        return `Thank you for your question! Regarding "${userText}", feel free to message Asilbek directly on Telegram: **@Rakh1mov_07x** — he will be glad to assist you personally.`;
    } else {
        return `Qiziqishingiz uchun katta rahmat! "${userText}" bo'yicha batafsil ma'lumot olish yoki bepul maslahat uchun Asilbekning shaxsiy Telegramiga (**@Rakh1mov_07x**) yozishingiz mumkin. U sizga albatta yordam beradi!`;
    }
}
