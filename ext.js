let qrInstance = null; //создаём перемннную-контейнер для хранения qr

document.getElementById("inp").addEventListener("input", function(e) { //обработчик событий
    const text = e.target.value;//получаем значение
    
    //если qr уже есть, то очищаем и в библиотеке и на хтмл
    if (qrInstance) {
        qrInstance.clear();
        document.getElementById("qrcode").innerHTML = "";
    }
    //генерируем qr
    if (text) {
        qrInstance = new QRCode("qrcode", {
            text: text,
            width: 256,
            height: 256,
        });
    }
});