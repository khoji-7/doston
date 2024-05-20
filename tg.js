async function sendTelegramMessage() {
    const botToken = "7058068827:AAEwJvDklNcroajvm3PUIx9SvYgbOVAXG1k";
    const chatId = "-4230106591";
    const telefon = document.getElementById("telefon").value;
    const ism = document.getElementById("cargoOwner").value;
    const yukNomi = document.getElementById("yuknomi").value;
    const yukkengligi = document.getElementById("yukkengligi").value;
    const ogirligi = document.getElementById("ogirligi").value;
    const yukBalandligi = document.getElementById("yukBalandligi").value;
    const yukUzunligi = document.getElementById("yukUzunligi").value;
    const status = document.getElementById("status").value;
    const saqlash = document.getElementById("saqlash").value;

    const qabulSana = new Date().toLocaleDateString();


    
    const Sended = `
    
   Xat jo'natmasi: -----------------------\n 
    Yuk egasi ismi: ${ism}\n-----------------------\n 
    Yuk nomi: ${yukNomi}\n-----------------------\n 
    Yuk egasi nomeri: ${telefon}\n-----------------------\n 
    Yuk kengligi: ${yukkengligi}\n-----------------------\n 
    Yuk og'irligi: ${ogirligi}\n-----------------------\n 
    Yuk balandligi: ${yukBalandligi}\n-----------------------\n 
    Yuk uzunligi: ${yukUzunligi}\n-----------------------\n 
    Yukni saqlash muddati(kun): ${saqlash}\n-----------------------\n 
    Yuk egiasi tarif: ${status}\n-----------------------\n 
    Yukni qabul qilingan sana: ${qabulSana}\n-----------------------\n 





    
    `
    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: Sended
                }),
            }
        );
        if (response.status === 200) { 
            alert("Xabaringiz yetkazildi");
            window.location.reload()
        }
    } catch (error) {
        console.error("Xatolik:", error);

    }
    console.log(Name);
}
