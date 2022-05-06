const digit = document.querySelectorAll('.number');
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const okey = document.querySelector('.ok');
const trials = document.querySelector('.trials');
const infoPin = document.querySelector('.pin');
const wholeScreen = document.querySelector('main');
const pin = 1234;
const puk = 12345678;
let pin2;
let i = 3;
let j = 10;
digit.forEach(e =>{
    e.addEventListener('click', ()=>{
        if(output.value.toString().length === 4 && i > 1){
            output.value = output.value;
        }
        else if(output.value.toString().length === 8){
            output.value = output.value;
        }
        else{
            output.value += e.textContent;
        }
    });
});

clear.addEventListener('click', ()=>{
    output.value = output.value.slice(0, 5);
    output.value = output.value.slice(0, -1);
})

okey.addEventListener('click', ()=>{
    if(i > 0){
        pin2 = parseInt(output.value);
    }
    if(pin2 === pin){
        wholeScreen.textContent = "Correct Pin!!";
        wholeScreen.style.fontSize = `4rem`;
    }
    else{
        if(i > 1){
            infoPin.style.color = `white`;
            if(output.value){
                infoPin.textContent = "Wrong pin!! Try Again!!"
                i--;
            }
            trials.textContent = i;
            output.value = "";
            setTimeout(()=>{
                infoPin.textContent = "Enter Pin"
                infoPin.style.color = `black`
            }, 2000);
        }
        else{
            if(j === 0){
                wholeScreen.textContent = "Your Sim Card has been blocked permanently!!";
                wholeScreen.style.fontSize = `3rem`;
            }
            else{
                const puk2 = parseInt(output.value);
                console.log(output.value);
                if(puk2 === puk){
                    wholeScreen.textContent = "Correct Puk!! Sim unblocked!";
                    wholeScreen.style.fontSize = `3rem`;
                }
                trials.textContent = j;
                if(output.value != ""){
                    j--;
                }
                output.value = "";
                infoPin.textContent = "Enter Puk!! Sim Card Blocked!"
            }
        }
    }
})