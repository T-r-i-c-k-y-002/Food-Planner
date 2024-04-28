//console.log(document.getElementById('heading').innerText);
let inputFood = document.getElementById('input-food');
let inputBtn = document.getElementById('input-btn');
let foodContainer = document.getElementById('food-container');
let nolistEl = document.getElementById('no-list');
let CountEl = document.getElementById('food-count-list')


document.addEventListener("DOMContentLoaded", () => {
    const FetchedItems = [...JSON.parse(localStorage.getItem("FoodItems"))];
    FetchedItems.forEach(item => {

        const newFoodItemEL = document.createElement('li');
        const divItem = document.createElement('div');
        const divRemoveItem = document.createElement('div')
        
        // adding the 2 divs at the initial stage because it stores the items in memory but it can't recoganized by DOM so we are appending it.
        newFoodItemEL.append(divItem, divRemoveItem);
    
        // setting the event that are used by the previous lists.PARENTELEMENT means ParentNode's Attributes.
        divRemoveItem.parentElement.setAttribute("onclick", "removeItem(event)");
        //const Text = document.createTextNode(inputFood.value);
        divRemoveItem.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    
        divItem.innerHTML = item.FoodItem;
        newFoodItemEL.className = "food-item";
        //li.append(Text);
        foodContainer.append(newFoodItemEL);
        newFoodItemEL.append(divItem);
        newFoodItemEL.append(divRemoveItem);

    })

    RefreshUI();
})


const handleInputFood = () => {
    // adding food items via dom creation 
    const newFoodItemEL = document.createElement('li');
    const divItem = document.createElement('div');
    const divRemoveItem = document.createElement('div')
    
    // adding the 2 divs at the initial stage because it stores the items in memory but it can't recoganized by DOM so we are appending it.
    newFoodItemEL.append(divItem, divRemoveItem);

    // setting the event that are used by the previous lists.PARENTELEMENT means ParentNode's Attributes.
    divRemoveItem.parentElement.setAttribute("onclick", "removeItem(event)");
    //const Text = document.createTextNode(inputFood.value);
    divRemoveItem.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    divItem.innerHTML = inputFood.value;
    newFoodItemEL.className = "food-item";
    //li.append(Text);
    foodContainer.append(newFoodItemEL);
    newFoodItemEL.append(divItem);
    newFoodItemEL.append(divRemoveItem);
    //foodContainer.innerHTML += `<li class = "food-item">${inputFood.value}</li>`;

    // for storing userinputs in the localstorage.
    localStorage.setItem("FoodItems", JSON.stringify(
        [...JSON.parse(localStorage.getItem("FoodItems") || "[]"), { FoodItem: inputFood.value}]
    )
    );

    RefreshUI();
}

inputBtn.addEventListener('click', () => {
    if(inputFood.value == ""){
        return ;
    }else{
        handleInputFood();
    }
    inputFood.value = ""
})
  
// adding values using keyboard
inputFood.addEventListener('keyup', (event) => {
    if(event.key === "Enter"){
        handleInputFood();
        inputFood.value = "";
    } else if(event.key === "Z" && (event.ctrlKey || event.metaKey)){  // undo operation
        inputFood.value = "";
    } 
})

/* getElementsByClassName() 

let foodItems = document.getElementsByClassName('food-item');
let allFoods = [].map.call(foodItems, (food) => food.textContent);
console.log(allFoods);*/
function removeItem(event){
    const existing = event.target.parentNode.parentNode;
    existing.remove();

    // Removing the localstorage Data
    const FetchedItems = [...JSON.parse(localStorage.getItem("FoodItems"))];

    FetchedItems.forEach(item => {
        if(item.FoodItem === existing.innerText){
            FetchedItems.splice(FetchedItems.indexOf(item), 1);
        }
    })

    localStorage.setItem("FoodItems", JSON.stringify(FetchedItems));

    RefreshUI();
}

function RefreshUI() {
         CountEl.innerText = `ITEM NOS : ${foodContainer.children.length}`
    // if(foodContainer.children.length > 0){
    //     nolistEl.hidden = true;
    // }else {
    //     nolistEl.hidden = false;
    // }

    foodContainer.children.length > 0 ? ((nolistEl.hidden = true),(CountEl.hidden = false)) : ((nolistEl.hidden = false),(CountEl.hidden = true))
}