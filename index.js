// Mijozlar jadvalini yaratish
var mijozlarTable = document.createElement("table");
mijozlarTable.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Ismi</th>
        <th>Telefon raqami</th>
        <th>Yuk nomi</th>
        <th>Yuk kengligi</th>
        <th>Yuk uzunligi</th>
        <th>Yuk balandligi</th>
        <th>Yuk og'irligi</th>
        <th>Qabul qilingan sana</th>
        <th>Saqlash muddati</th>
        <th>Statusi</th>
        <th>Amallar</th>
    </tr>
`;
document.getElementById("mijozlar").appendChild(mijozlarTable);

// Malumotlar bazasidan mijozlarni o'qish
var storedMijozlar = localStorage.getItem("mijozlar");
var mijozlar = storedMijozlar ? JSON.parse(storedMijozlar) : [];
const today = new Date(); const nextThreeDays = new Date(today. setDate(today. getDate() + 3)); 
// Mijozlar jadvaliga mijozlarni qo'shish
function renderMijozlar() {
    mijozlarTable.innerHTML = `
        <tr>
        <th>ID</th>
        <th>Ismi</th>
        <th>Telefon raqami</th>
        <th>Yuk nomi</th>
        <th>Yuk kengligi</th>
        <th>Yuk uzunligi</th>
        <th>Yuk balandligi</th>
        <th>Yuk og'irligi</th>
        <th>Qabul qilingan sana</th>
        <th>Saqlash muddati</th>
        <th>Statusi</th>

        <th>Amallar</th>
            
        </tr>
    `;

    mijozlar.forEach(function(mijoz, index) {
        var row = mijozlarTable.insertRow();
        row.innerHTML = `
            <td>${index}</td>
            <td>${mijoz.ism}</td>
            <td>${mijoz.telefon}</td>
            <td>${mijoz.yuknomi}</td>
            <td>${mijoz.yukkengligi}</td>
            <td>${mijoz.yukUzunligi}</td>
            <td>${mijoz.yukBalandligi}</td>
            <td>${mijoz.ogirligi}</td>
            <td>${mijoz.qabulSana}</td>
            <td>${mijoz.saqlash}</td>
            <td>${mijoz.status}</td>
        
            <td>
                <button onclick="editMijoz(${index})">O'zgartirish</button>
                <button onclick="deleteMijoz(${index})">O'chirish</button>
            </td>
        `;
    });
}

// Malumotlar bazasiga yangi mijozni qo'shish
function addOrder() {
    var telefon = document.getElementById("telefon").value;
    var ism = document.getElementById("cargoOwner").value;
    var yukNomi = document.getElementById("yuknomi").value;
    var yukkengligi = document.getElementById("yukkengligi").value;
    var ogirligi = document.getElementById("ogirligi").value;
    var yukBalandligi = document.getElementById("yukBalandligi").value;
    var yukUzunligi = document.getElementById("yukUzunligi").value;
    var status = document.getElementById("status").value;
    var saqlash = document.getElementById("saqlash").value;

    var qabulSana = new Date().toLocaleDateString();


    // Yangi mijozni qo'shish
    var newMijoz = {
        ism: ism,
        yukNomi: yukNomi,
        telefon: telefon,
        yukkengligi: yukkengligi,
        ogirligi: ogirligi,
        qabulSana: qabulSana,
        yukBalandligi:yukBalandligi,
        yukUzunligi: yukUzunligi,
        status:status,
        saqlash:saqlash,
     };

    // Malumotlar bazasiga yangi mijozni qo'shish
    mijozlar.push(newMijoz);
    localStorage.setItem("mijozlar", JSON.stringify(mijozlar));

    // Mijozlar jadvalini qayta yaratish
    renderMijozlar();
}

// Mijozni o'zgartirish
function editMijoz(index) {
    var editedMijoz = mijozlar[index];
    // Mijozni o'zgartirish logikasi shu yerga yoziladi
    console.log("Mijozni o'zgartirish:", editedMijoz);
}

// Mijozni o'chirish
function deleteMijoz(index) {
    mijozlar.splice(index, 1);
    localStorage.setItem("mijozlar", JSON.stringify(mijozlar));
    renderMijozlar();
}

// Statusni matnga aylantirish

// Mijozlar jadvalini yaratish
renderMijozlar();
// Malumotlar bazasiga yangi mijozni qo'shish
function addOrder() {
    var telefon = document.getElementById("telefon").value;
    var ism = document.getElementById("cargoOwner").value;
    var yuknomi = document.getElementById("yuknomi").value;
    var yukkengligi = document.getElementById("yukkengligi").value;
    var ogirligi = document.getElementById("ogirligi").value;
    var yukBalandligi = document.getElementById("yukBalandligi").value;
    var yukUzunligi = document.getElementById("yukUzunligi").value;
    var status = document.getElementById("status").value;
    var saqlash = document.getElementById("saqlash").value;
    var qabulSana = new Date().toLocaleDateString();
   


    // Yangi mijozni qo'shish
    var newMijoz = {
        telefon: telefon,
        ism: ism,
        yuknomi: yuknomi,
        yukkengligi: yukkengligi,
        ogirligi: ogirligi,
        qabulSana: qabulSana,
        status: status,
        yukBalandligi:yukBalandligi,
        yukUzunligi: yukUzunligi,
        saqlash:saqlash,

    };

    // Malumotlar bazasiga yangi mijozni qo'shish
    mijozlar.push(newMijoz);
    localStorage.setItem("mijozlar", JSON.stringify(mijozlar));

    // Formani tozalash
    clearForm();

    // Mijozlar jadvalini qayta yaratish
    renderMijozlar();
}

// Formani tozalash
function clearForm() {
    document.getElementById("telefon").value = "";
    document.getElementById("cargoOwner").value = "";
    document.getElementById("yuknomi").value = "";
    document.getElementById("manzil").value = "";
    document.getElementById("yukkengligi").value = "";
    document.getElementById("ogirligi").value = "";
    document.getElementById("yukBalandligi").value = "";
    document.getElementById("yukUzunligi").value = "";
    document.getElementById("status").value = "";
    document.getElementById("saqlash").value = "";



}
// Mijozni o'zgartirish
function editMijoz(index) {
    var editedMijoz = mijozlar[index];

    // Malumotlarni inputlarga yozish
    document.getElementById("telefon").value = editedMijoz.telefon;
    document.getElementById("ism").value = editedMijoz.ism;
    document.getElementById("yuknomi").value = editedMijoz.yuknomi;
    document.getElementById("yukkengligi").value = editedMijoz.yukkengligi;
    document.getElementById("ogirligi").value = editedMijoz.ogirligi;
    document.getElementById("yukBalandligi").value = editedMijoz.yukBalandligi;
    document.getElementById("yukUzunligi").value = editMijoz.yukUzunligi;
    document.getElementById("status").value = editMijoz.status;
    document.getElementById("saqlash").value = editMijoz.saqlash;

    // "Qo'shish" tugmasini "O'zgartirish" tugmasiga o'zgartirish
    var addButton = document.getElementById("addButton");
    addButton.innerText = "O'zgartirish";
    addButton.onclick = function() { updateOrder(index); };
}

// Mijozni o'zgartirish
function updateOrder(index) {
    var telefon = document.getElementById("telefon").value;
    var ism = document.getElementById("cargoOwner").value;
    var yuknomi = document.getElementById("yuknomi").value;
    var yukkengligi = document.getElementById("yukkengligi").value;
    var ogirligi = document.getElementById("ogirligi").value;
    var yukBalandligi = document.getElementById("yukBalandligi").value;
    var yukUzunligi = document.getElementById("yukUzunligi").value;


    var updatedMijoz = {
        telefon: telefon,
        ism: ism,
        yuknomi: yuknomi,
        yukkengligi: yukkengligi,
        ogirligi: ogirligi,
        qabulSana: mijozlar[index].qabulSana,
        qabulStatusi: mijozlar[index].qabulStatusi,
        yukBalandligi: mijozlar[index].yukBalandligi,
        yukUzunligi: mijozlar[index].yukUzunligi
    };

    // Avvalgi indeksni o'chirish
    mijozlar.splice(index, 1);

    // Mijozlarni yangi indeksga joylash
    mijozlar.splice(index, 0, updatedMijoz);

    localStorage.setItem("mijozlar", JSON.stringify(mijozlar));

    // Formani tozalash
    clearForm();

    // "Mijozni o'zgartirish" tugmasini "Buyurtmani qo'shish" tugmasiga qaytarish
    var addButton = document.getElementById("addButton");
    addButton.innerText = "Buyurtmani qo'shish";
    addButton.onclick = addOrder;

    // Mijozlar jadvalini qayta yaratish
    renderMijozlar();
}
// mapp
function calculate(){
    const holati = document.getElementById("status").value;
    const kenglik = document.getElementById("yukkengligi").value;
    const uzunlik = document.getElementById("yukUzunligi").value;
    const balandligi = document.getElementById("yukBalandligi").value;
    const massa = document.getElementById("ogirligi").value;
    const saqlash = document.getElementById("saqlash").value;
    console.log(holati);
    
    let hajmi = kenglik * uzunlik * balandligi;
    
    console.log(hajmi);

    if( holati === 'oddiy' ){
        let price = hajmi * massa * 400*saqlash;
        alert (`${saqlash}-kunga ${price} so'mni tashkil qiladi`);
    }
    else if( holati === 'bronza' ){
        let price = hajmi * massa * 300*saqlash;
        alert (`${saqlash}-kunga ${price} so'mni tashkil qiladi`);
    }
    else if( holati === 'silver' ){
        let price = hajmi * massa * 200 *saqlash;
        alert (`${saqlash}-kunga ${price} so'mni tashkil qiladi`);
    }
    else{
        let price = hajmi * massa * 100*saqlash;
        alert (`${saqlash}-kunga ${price} so'mni tashkil qiladi`);
    }
    
    
    console.log(price);
}


// telegram

