let cards = []
let isAlive = false
let clickStart = 0

function startGame(){
    if(isAlive == false){
        isAlive = true
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
        cards.push(firstCard)
        cards.push(secondCard)
        console.log(cards)
    }else{
        clickStart = 1
    }
    renderMessage()
}


function getRandomNumber(){
    return Math.floor(Math.random()*13) + 1
}


function newCard(){
    if(isAlive == true){
        let newCard = getRandomNumber()
        cards.push(newCard)
        console.log(cards)
    }
    renderMessage()
}

function renderMessage(){
    let messageDOM = document.getElementById("message")
    let cardDOM = document.getElementById("card_display")
    let sumDOM = document.getElementById("sum_display")

    if(isAlive == false){
        messageDOM.textContent = "Please start the game!"
        messageDOM.style.color = "#FFF"
    }else if(clickStart === 1){
        messageDOM.textContent = "Select New Card"
        messageDOM.style.color = "#FFF"
        clickStart = 0
    }else{
        let sum = 0
        cardDOM.textContent = "Cards: "
        for(let i=0; i < cards.length; i++){
            sum += cards[i]
            cardDOM.textContent += cards[i]+" | "
        }
        console.log(sum)
        sumDOM.textContent = "Cards: "+sum

        if(sum > 21){
            isAlive = false
            hasStarted = false
            cards = []
            messageDOM.textContent = "You have lost the game. Start Game again!"
            messageDOM.style.color = "#CD5C5C"
        }else if(sum < 21){
            messageDOM.textContent = "Select New Card"
            messageDOM.style.color = "#FFF"
        }else{
            isAlive = false
            hasStarted = false
            cards = []
            messageDOM.textContent = "You have wom the game. Start Game again!"
            messageDOM.style.color = "green"
        }        
    }
}