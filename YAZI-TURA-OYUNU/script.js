// Tura ve Yazı oluştur ve başlangıçta sıfırla

let tura = 0;
let yazi = 0;

//Coin,flip,reset butonu seç
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector('#reset-button');

//Flip butonuna tıklanıldığına;

flipBtn.addEventListener('click', () =>{
    //Rastgale 0 ve 1 sayısını seçer. 0:Tura,1:Yazı
    let i = Math.floor(Math.random() * 2);

    //Coin animasyonu geçici olarak kapat
    coin.style.animation = "none";

    if(i){
        //Eğer i 1 ise yani yazı ise,100 milisaniye sonra coin'e flip-tura animasyonunu uygula

        setTimeout(() =>{
            coin.style.animation = "spin-tura 3s forwards";
        },100);
        tura++;
    }else{
                //Eğer i 0 ise yani tura ise,100 milisaniye sonra coin'e spin-yazi animasyonunu uygula
        setTimeout(() =>{
            coin.style.animation = "spin-yazi 3s forwards";
        },100);
        yazi++;
    }

    //İstatistikleri güncelle ve butonu devre dışı bırak

    setTimeout(updateStats, 3000);
    disableButton();
});

//İstatistikleri güncelleme fonksiyonu
function updateStats(){
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;

}

//Butonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    },3000);
}


//Reset butonu
resetBtn.addEventListener('click',()=>{
    coin.style.animation="none";
    tura = 0;
    yazi = 0;
    updateStats();
})