
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts); 




const names = ['Lisa', 'Kaitlin', 'Jan' ];
const eventName = ['surprise'];

function writeCards(names, eventName){
    for (let i = 0; i< names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        
    }
    return (names,eventName);
}

writeCards(names,eventName);


let countdown = 10;
function countDown(){      
    while (countdown >= 0) {
   console.log(countdown--);
    } 
    
}
countDown(10);