let FirstCard = getRandomCard()
let SecCard = getRandomCard()
let Cards = []
let sum = 0
let HasBlackJ = false
let isAlive = true
let message = ""
let Msg = document.getElementById("Msg")
let SumEle = document.getElementById("SumEl")
let CardEle = document.getElementById("CardEle")
//let SumEle = document.querySelector(".SumEl")
//console.log(sum)
//console.log(Msg)
let player ={
    Name: "Rose" , 
    chip: 150,
    sayHi: function(){
   console.log("Hiii")
    }
    }

let player1 = document.getElementById("Player")
player1.textContent = player.Name + ": $" + player.chip



function StartGame(){
   // player.sayHi()
    isAlive = true
let FirstCard = getRandomCard()
let SecCard = getRandomCard()
Cards = [FirstCard,SecCard]
sum = FirstCard + SecCard
renderGame()
}

function renderGame(){
    if(sum < 21){
        message = "Do you want new card?"
    } 
    
    else if (sum === 21)
    {
    HasBlackJ = true
    message = "Yahooo,You won!"
    }
    
    else if (sum > 21){
        isAlive = false
        message= "Oh Oh,You lost"
    
    }
   Msg.textContent = message
   SumEle.textContent = "Sum = " + sum
   //CardEle.textContent = "Cards are :" + Cards
   CardEle.textContent = "Cards are :"
   for (let i = 0; i < Cards.length; i++) {
    CardEle.textContent += Cards[i] + " "
}

}
 function NewCard(){
    if (isAlive === true && HasBlackJ === false){
let NewCard = getRandomCard()
Cards.push(NewCard)
sum = sum + NewCard
renderGame()
    }
 }

 function getRandomCard(){
 //let temp = Math.floor((Math.random()*10)+2)
 let temp = Math.floor((Math.random()*13)+1)
 if (temp > 10) {
    return 10
} else if (temp === 1) {
    return 11
} else {
 return temp
}

 }




