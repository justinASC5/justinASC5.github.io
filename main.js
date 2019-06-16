let numberArray = [];     //Array of numbers to be used as positions for the quoteArray
let quoteArray = [
    '"Bats frighten me. It’s time my enemies share my dread."',
    '"Perhaps the knife was too slow."',
    '"Tell me where the trigger is, then you have my permission to die."',
    '"You’ll hunt me. You’ll condemn me. Set the dogs on me. Because that’s what needs to happen. Because sometimes truth isn’t good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded."',
    '"It’s not who I am underneath, but what I do that defines me."',
    '"I’m whatever Gotham needs me to be."',
    '"I won’t kill you, but I don’t I have to save you."',
    '"A hero can be anyone, even a man doing something as simple and reassuring as putting a coat on a young boy’s shoulders to let him know the world hadn’t ended."',
    '"This city just showed you that it’s full of people ready to believe in good."',
    '"I am vengeance, I am the night, I am Batman."',
    '"All men have limits. They learn what they are and learn not to exceed them. I ignore mine."',
    '"There is a difference between you and me. We both looked into the abyss, but when it looked back at us… you blinked."',
    '"I wear a mask. And that mask, it’s not to hide who I am, but to create what I am."',
    '"What do you see when you look at me, the child whose shoes you used to tie every morning, the teenager you drove to his first date? I am the reason the criminals breathe easier when the sun rises. Tonight will not be my end, but it will be theirs!"',
    '"Sometimes the truth isn’t good enough, sometimes people deserve more. Sometimes people deserve to have their faith rewarded."',
    '"If you kill a killer, the number of killers in the room remains the same."',
    '"You can never escape me. Bullets don’t harm me. Nothing harms me. But I know pain. I know pain. Sometimes I share it. With someone like you."',
    '"You either die a hero, or you live long enough to see yourself become the villain."',
    '"This city just showed you that its full of people, ready to believe in good."',
    '"Why do we fall? So we can learn to pick ourselves up."'
];

//Generates a new array of numbers
function generateArray() {      
  for(let i = 0; i < 20; i++){
    numberArray.push(i);
  }
}

 //Picks a random number from the number array, removes it from the number array (to prevent repeats), 
 //and uses it as a position for the quote array 
function randomQuote() {       
    if(numberArray.length == 0){  //Generates a new number array once every number was used
      generateArray();
    }
   let randomNum = Math.floor((Math.random() * numberArray.length)); 
   let quotePosition = numberArray[randomNum]; //Takes the number in the position of the random number
   numberArray.splice(randomNum, 1); //Removes number from number array
   return quotePosition;
}

const button = document.getElementById("button");
button.addEventListener('click', buttonClick);
function buttonClick(event) {
    document.getElementById("quote").innerHTML = quoteArray[randomQuote()];
}







