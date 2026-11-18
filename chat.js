// ==========================================================================
// VERCEL SERVERLESS AI CHAT BACKEND (api/chat.js)
// Asilbek Rahimovning Portfoliosi uchun Sun'iy Intellekt (AI) Assistenti
// ==========================================================================

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: "Faqat POST so'rov qabul qilinadi" });
    }

    try {
        const { message, lang = 'uz' } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({ success: false, message: "Xabar bo'sh bo'lishi mumkin emas" });
        }

        const userMsg = message.trim();
        const lowerMsg = userMsg.toLowerCase();

        // 1. Agar Vercel Environment Variables'da OpenAI kaliti bo'lsa (OpenAI ChatGPT)
        if (process.env.OPENAI_API_KEY) {
            try {
                const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'system',
                                content: `Siz Asilbek Rahimovning shaxsiy portfolio veb-saytidagi do'stona va aqlli AI assistentisiz. 
                                Asilbek — O'zbekistonlik iqtidorli Frontend Dasturchi & Web Engineer.
                                Bilimlari: HTML5, CSS3, JavaScript ES6+, Responsive dizayn, Git, Vercel, Telegram bot integratsiyasi.
                                Kontaktlari: Telegram @Rakh1mov_07x, Instagram @asilbek_rakh1mov, Email asilbekrahimov8049@gmail.com.
                                Loyihalari: Online Market, Ob-havo ilovasi, TaskFlow to-do.
                                Foydalanuvchi qaysi tilda yozsa, o'sha tilda (${lang}) muloyim, qisqa va aniq javob bering.`
                            },
                            { role: 'user', content: userMsg }
                        ],
                        max_tokens: 250,
                        temperature: 0.7
                    })
                });

                const aiData = await aiRes.json();
                if (aiData.choices && aiData.choices[0]) {
                    return res.status(200).json({
                        success: true,
                        reply: aiData.choices[0].message.content.trim()
                    });
                }
            } catch (err) {
                console.error("OpenAI xatosi:", err);
            }
        }

        // 2. Agar Vercel Environment Variables'da Gemini kaliti bo'lsa (Google Gemini AI)
        if (process.env.GEMINI_API_KEY) {
            try {
                const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
                const geminiRes = await fetch(geminiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `Siz Asilbek Rahimovning portfio saytidagi AI yordamchisiz. Asilbek - Frontend dasturchi (HTML, CSS, JS). 
                                Kontakt: Telegram @Rakh1mov_07x. Foydalanuvchi xabari: "${userMsg}". 
                                Qisqa, do'stona va samimiy javob bering.`
                            }]
                        }]
                    })
                });

                const geminiData = await geminiRes.json();
                if (geminiData.candidates && geminiData.candidates[0]?.content?.parts[0]?.text) {
                    return res.status(200).json({
                        success: true,
                        reply: geminiData.candidates[0].content.parts[0].text.trim()
                    });
                }
            } catch (err) {
                console.error("Gemini API xatosi:", err);
            }
        }

        // 3. Kalit kiritilmagan bo'lsa ham ishlaydigan aqlli "Smart Portfolio Assistant" mexanizmi:
        let reply = "";

        if (lowerMsg.includes("salom") || lowerMsg.includes("privet") || lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
            reply = lang === 'ru' 
                ? "Привет! Я персональный ИИ-ассистент Асилбека. Чем могу помочь вам сегодня?"
                : lang === 'en'
                ? "Hello! I am Asilbek's personal AI assistant. How can I assist you today?"
                : "Assalomu alaykum! Men Asilbekning shaxsiy AI assistentiman. Sizga qanday yordam bera olaman?";
        } 
        else if (lowerMsg.includes("kim") || lowerMsg.includes("haqida") || lowerMsg.includes("кто") || lowerMsg.includes("who")) {
            reply = lang === 'ru'
                ? "Асилбек Рахимов — Frontend-разработчик. Создает быстрые, современные и адаптивные сайты на HTML, CSS и JavaScript."
                : lang === 'en'
                ? "Asilbek Rahimov is a Frontend Developer & Web Engineer specializing in HTML, CSS, JavaScript, and responsive SaaS interfaces."
                : "Asilbek Rahimov — Frontend Dasturchi. U zamonaviy, tezkor va barcha ekranlarga moslashuvchi veb-saytlar hamda ilovalar yaratadi.";
        }
        else if (lowerMsg.includes("loyiha") || lowerMsg.includes("ish") || lowerMsg.includes("проект") || lowerMsg.includes("project")) {
            reply = lang === 'ru'
                ? "Среди проектов Асилбека: Интернет-магазин (E-Commerce), Приложение погоды (Global Weather) и TaskFlow планировщик задач. Вы можете протестировать их в разделе 'Проекты'."
                : lang === 'en'
                ? "Asilbek's portfolio includes an E-Commerce Market Platform, Global Weather App, and TaskFlow To-Do. Check out the 'Projects' section above!"
                : "Asilbekning asosiy loyihalari: Online Do'kon, Global Weather ob-havo ilovasi va TaskFlow rejalar tizimi. Saytdagi 'Loyihalar' bo'limida ularni ko'rishingiz mumkin!";
        }
        else if (lowerMsg.includes("aloqa") || lowerMsg.includes("bog'lanish") || lowerMsg.includes("telegram") || lowerMsg.includes("kontakt") || lowerMsg.includes("contact")) {
            reply = lang === 'ru'
                ? "Вы можете связаться с Асилбеком напрямую в Telegram: @Rakh1mov_07x или написать в форме ниже."
                : lang === 'en'
                ? "You can connect with Asilbek directly on Telegram: @Rakh1mov_07x or send a message through the contact form."
                : "Asilbek bilan to'g'ridan-to'g'ri Telegram orqali bog'lanishingiz mumkin: @Rakh1mov_07x yoki pastdagi forma orqali xabar yozing.";
        }
        else if (lowerMsg.includes("narx") || lowerMsg.includes("buyurtma") || lowerMsg.includes("qancha") || lowerMsg.includes("цена") || lowerMsg.includes("price") || lowerMsg.includes("cost")) {
            reply = lang === 'ru'
                ? "Стоимость и сроки разработки сайта зависят от сложности проекта. Напишите Асилбеку в Telegram @Rakh1mov_07x для подробной консультации!"
                : lang === 'en'
                ? "Pricing and timeline depend on project scope. Reach out to Asilbek on Telegram @Rakh1mov_07x for a custom quote!"
                : "Sayt narxi va muddati loyiha murakkabligiga bog'liq. Aniq hisob-kitob va maslahat olish uchun Telegramda @Rakh1mov_07x ga yozing!";
        }
        else {
            reply = lang === 'ru'
                ? `Спасибо за вопрос! По поводу "${userMsg}" вы можете написать Асилбеку в Telegram: @Rakh1mov_07x — он ответит вам лично.`
                : lang === 'en'
                ? `Thank you for your inquiry! Regarding "${userMsg}", feel free to reach out to Asilbek on Telegram @Rakh1mov_07x.`
                : `Qiziqishingiz uchun rahmat! "${userMsg}" bo'yicha Asilbekning shaxsiy Telegramiga (@Rakh1mov_07x) yozsangiz, batafsil ma'lumot beradi.`;
        }

        return res.status(200).json({
            success: true,
            reply: reply
        });

    } catch (error) {
        console.error("AI Server xatosi:", error);
        return res.status(500).json({ success: false, message: "AI javob berishda xatolik yuz berdi" });
    }
}
