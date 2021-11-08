
let firstName=prompt("Adınız nedir ?")
let myName=document.querySelector("#myName")
myName.innerHTML=firstName.toUpperCase();

let clock=document.querySelector("#myClock")

clock.addEventListener("onload",showTime())

function showTime() {
    let tarih=new Date;
    let saat=tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye=tarih.getSeconds();
    let gun=tarih.getUTCDay();
    
    if (gun==1) {
        gun="Pazar"
    }
    else if (gun==2) {
        gun="Pazartesi"
    }
    else if (gun==3) {
        gun="Salı"
    }
    else if (gun==4) {
        gun="Çarşamba"
    }
    else if (gun==5) {
        gun="Perşembe"
    }
    else if (gun==6) {
        gun="Cuma"
    }
    else if (gun==7) {
        gun="Cumartesi"
    }

    let tarihBilgisi=(`${saat}:${dakika}:${saniye} ${gun}`);
    
    clock.innerHTML=tarihBilgisi;
    setTimeout(showTime,1000)
}


