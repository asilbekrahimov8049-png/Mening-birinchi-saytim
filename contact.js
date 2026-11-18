// ==========================================================================
// VERCEL SERVERLESS BACKEND (Node.js API)
// Ushbu fayl serverda ishlaydi va Telegram Bot tokenni maxfiy saqlaydi!
// ==========================================================================

export default async function handler(req, res) {
    // 1. Faqat POST so'rovlarni qabul qilamiz
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: "Faqat POST so'rovi qabul qilinadi"
        });
    }

    try {
        const { name, email, message, lang = 'uz' } = req.body;

        // 2. Maydonlar to'ldirilganini tekshirish (Validatsiya)
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Barcha maydonlarni to'ldirish shart"
            });
        }

        // 3. Maxfiy Telegram Bot kalitlari (Environment Variables yoki Zaxira kalitlar)
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '9037794886:AAElx_BlQTNFLCv-MyXHG4f4QpDV7NxVKuA';
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6014931528';

        const telegramText = `🔔 <b>Saytingizdan yangi xabar! (Backend orqali)</b>\n\n` +
                             `👤 <b>Ism:</b> ${name}\n` +
                             `📧 <b>Email/Tel:</b> ${email}\n` +
                             `💬 <b>Xabar:</b>\n${message}\n\n` +
                             `🌐 <b>Til:</b> ${lang.toUpperCase()}\n` +
                             `⏰ <i>Vaqt: ${new Date().toLocaleString()}</i>`;

        // 4. Telegram Bot API ga server orqali xavfsiz so'rov yuborish
        const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramText,
                parse_mode: 'HTML'
            })
        });

        const tgData = await tgResponse.json();

        if (!tgData.ok) {
            console.error('Telegram API xatosi:', tgData);
            return res.status(500).json({
                success: false,
                message: "Telegramga yuborishda xatolik yuz berdi"
            });
        }

        // 5. 🗄️ MA'LUMOTLAR BAZASI (Database - Supabase)
        // Agar Vercel Environment Variables'da Supabase kalitlari bo'lsa, xabarni bazaga yozamiz:
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_KEY;

        if (SUPABASE_URL && SUPABASE_KEY) {
            try {
                await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_KEY,
                        'Authorization': `Bearer ${SUPABASE_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        name: name,
                        contact: email,
                        message: message,
                        language: lang,
                        created_at: new Date().toISOString()
                    })
                });
                console.log('Xabar muvaffaqiyatli ma\'lumotlar bazasiga saqlandi.');
            } catch (dbError) {
                console.error('Bazaga saqlashda xatolik:', dbError);
            }
        }

        // 6. Frontendga muvaffaqiyatli javob qaytarish
        return res.status(200).json({
            success: true,
            message: "Xabar qabul qilindi va muvaffaqiyatli yuborildi!"
        });

    } catch (error) {
        console.error('Server xatosi:', error);
        return res.status(500).json({
            success: false,
            message: "Serverda ichki xatolik yuz berdi"
        });
    }
}
