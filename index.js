
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}

wrapGifts(gifts); 




const names = ['Lisa', 'Kaitlin', 'Jan'];
const message = ['surprise'];

function writeCards(names, message){
    const array = [];
    for (let i = 0; i< names.length; i++){
      array.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
     // debugger;
        
    }
    return array;
}

writeCards(names,message);






//let countdown = 10;
function countDown(countdown){      
    while (countdown >= 0) {
   console.log(countdown--);
    } 
    
}
//countDown(10);


