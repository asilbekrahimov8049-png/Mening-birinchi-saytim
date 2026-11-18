// ==========================================================================
// VERCEL SERVERLESS CONTACT HANDLER (api/contact.js)
// Xavfsiz Telegram Bot integratsiyasi, spam himoyasi va ma'lumotlar validatsiyasi
// ==========================================================================

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: "Faqat POST so'rovi qabul qilinadi"
        });
    }

    try {
        const { name, email, message, lang = 'uz', _hp_security } = req.body;

        // 1. SPAM HIMOYASI (Honeypot trap)
        // Agar robot ko'rinmas maydonni to'ldirgan bo'lsa, xabarni bekor qilamiz:
        if (_hp_security && String(_hp_security).trim() !== '') {
            console.warn("Spam bot aniqlandi va to'xtatildi.");
            return res.status(200).json({
                success: true,
                message: "Xabaringiz qabul qilindi"
            });
        }

        // 2. MA'LUMOTLARNI TO'LIQ VALIDATSIYA QILISH
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: "Iltimos, haqiqiy ismingizni kiriting (kamida 2 ta harf)"
            });
        }

        if (!email || typeof email !== 'string' || email.trim().length < 3) {
            return res.status(400).json({
                success: false,
                message: "Iltimos, to'g'ri email yoki telefon raqam kiriting"
            });
        }

        if (!message || typeof message !== 'string' || message.trim().length < 5) {
            return res.status(400).json({
                success: false,
                message: "Xabar matni juda qisqa (kamida 5 ta belgi bo'lishi kerak)"
            });
        }

        const safeName = escapeHtml(name.trim().slice(0, 100));
        const safeContact = escapeHtml(email.trim().slice(0, 100));
        const safeMessage = escapeHtml(message.trim().slice(0, 2000));
        const safeLang = ['uz', 'ru', 'en'].includes(lang) ? lang.toUpperCase() : 'UZ';

        // 3. TELEGRAM BOT MA'LUMOTLARI (Vercel Environment Variables yoki xavfsiz default)
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '9037794886:AAElx_BlQTNFLCv-MyXHG4f4QpDV7NxVKuA';
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6014931528';

        const now = new Date();
        const formattedDate = now.toLocaleDateString('uz-UZ');
        const formattedTime = now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });

        const telegramText = 
            `🚀 <b>Saytdan yangi buyurtma / xabar!</b>\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `👤 <b>Mijoz:</b> ${safeName}\n` +
            `📞 <b>Aloqa:</b> <code>${safeContact}</code>\n` +
            `🌐 <b>Sayt tili:</b> ${safeLang}\n` +
            `⏰ <b>Vaqt:</b> ${formattedDate} ${formattedTime}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `💬 <b>Xabar mazmuni:</b>\n${safeMessage}`;

        // 4. TELEGRAM API SO'ROVI
        const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramText,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });

        const tgData = await tgResponse.json();

        if (!tgData.ok) {
            console.error('Telegram API xatolik qaytardi:', tgData);
            return res.status(500).json({
                success: false,
                message: "Telegram botga xabar yetkazib berilmadi. Iltimos to'g'ridan-to'g'ri Telegram orqali bog'laning."
            });
        }

        // 5. IXTIYORIY MA'LUMOTLAR BAZASI (SUPABASE)
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
                        name: safeName,
                        contact: safeContact,
                        message: safeMessage,
                        language: safeLang,
                        created_at: now.toISOString()
                    })
                });
            } catch (dbErr) {
                console.error("Supabase saqlash xatosi:", dbErr);
            }
        }

        return res.status(200).json({
            success: true,
            message: "Xabaringiz Asilbekning Telegramiga muvaffaqiyatli yetkazildi!"
        });

    } catch (error) {
        console.error("Contact API xatosi:", error);
        return res.status(500).json({
            success: false,
            message: "Serverda kutilmagan xatolik yuz berdi"
        });
    }
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
