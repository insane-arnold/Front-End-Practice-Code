import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-60ca9-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const listDOM = document.getElementById("item-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    if(inputValue !== ""){
        push(shoppingListInDB, inputValue.trim())      
    }
    inputFieldEl.value = ""
})


onValue(shoppingListInDB, function(snapshot){
    if(snapshot.exists()){
        let itemList = Object.entries(snapshot.val())
        listDOM.innerHTML=""
        for(let i=0; i<itemList.length; i++){
            renderItemAsList(itemList[i])
        }
    }
    else{
        listDOM.innerHTML=""
        renderItemAsList(["ErrorCode_1", "Empty Cart"])
    }
    
})


function renderItemAsList(item){
    let itemID = item[0]
    let itemName = item[1]
    let listEle = document.createElement("li")
    listEle.textContent = itemName

    listEle.addEventListener("click", function(){
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    listDOM.append(listEle)
}



