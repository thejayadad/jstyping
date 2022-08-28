

let text = "Thanks for watching, have a good day"
let i = 0;

function writeText(){
    document.body.innerText = text.slice(0,i);
    i++
    if( i> text.lenght){
        i = 0;
    }
}

setInterval(writeText, 100);