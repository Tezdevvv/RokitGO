function showContent(contentId) {
    // Sembunyikan semua konten
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Tampilkan konten yang dipilih
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    } else {
        console.error("Konten dengan ID " + contentId + " tidak ditemukan.");
    }
}

function colorChoose(contentId) {
    // Sembunyikan semua konten
    const contents = document.querySelectorAll('.colorNan');
    contents.forEach(content => content.classList.remove('colorBlack'));

    // Tampilkan konten yang dipilih
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('colorBlack');
    } else {
        console.error("Konten dengan ID " + contentId + " tidak ditemukan.");
    }
}

function showItem(itemId) {
    // Sembunyikan semua konten
    const item = document.querySelectorAll('.itemNone');
    item.forEach(item => item.classList.remove('itemActive'));

    // Tampilkan konten yang dipilih
    const selectedContent = document.getElementById(itemId);
    if (selectedContent) {
        selectedContent.classList.add('itemActive');
    } else {
        console.error("Konten dengan ID " + itemId + " tidak ditemukan.");
    }
}

function chooseItem(itemId) {
    // Sembunyikan semua konten
    const item = document.querySelectorAll('.itemNoChoose');
    item.forEach(item => item.classList.remove('itemChoose'));

    // Tampilkan konten yang dipilih
    const selectedContent = document.getElementById(itemId);
    if (selectedContent) {
        selectedContent.classList.add('itemChoose');
    } else {
        console.error("Konten dengan ID " + itemId + " tidak ditemukan.");
    }
}

function sendMessageToWhatsapp(nomor) {
    const urlToWhatsapp = `https://wa.me/${nomor}?text=Halo, saya adalah suplier`;

    window.open(urlToWhatsapp, "_blank");
  }