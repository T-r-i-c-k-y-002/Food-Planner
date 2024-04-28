/*function CreateAlertviaDom(message){
    STRUCTURE WE HAVE TO CREATE
<div class="alert">
    <strong>✅ Successfull</strong> Food Is Updated
</div>

// accessing
const main = document.getElementById('main');

// creating
const div = document.createElement('div');

// classname creation
div.className = "alert";

//creating content
const TextNode = document.createTextNode(message);

// adding content to created element 
div.append(TextNode);

main.prepend(div);
}
//creating the text by passing parameter.
CreateAlertviaDom("Food Is Updated");
const res = document.querySelector(".alert .alert-message");
console.log(res);*/
//const foodContainerel = document.getElementById('food-container');
/*console.time("noraml way");
for(var i=0;i<1000;i++){
    const li = document.createElement('li');
    //const textNode = document.createTextNode(`Food-items: ${i}`);
    li.textContent = `Food-Items : ${i}`;
    li.className = 'food-item';
    foodContainerel.append(li);
}
console.timeEnd("noraml way");
console.time("DocFRAG way");
const fragment = document.createDocumentFragment();
for(var i=0;i<1000;i++){
    const li = document.createElement('li');
    //const textNode = document.createTextNode(`Food-items: ${i}`);
    li.textContent = `Food-Items : ${i}`;
    li.className = 'food-item';
    fragment.append(li);
    
}
foodContainerel.append(fragment);
console.timeEnd("DocFRAG way");*/
// getting user input and push the contents from user and by forEach loop appending the contents to the page.
/*let len = prompt("enter the no of foods to be added : ");
const fav = [];
for(let i = 1; i<=len; i++){
    let user = prompt("enter ur fav food : ");
    fav.push(user);
}
//console.log(fav);
const foodFragment = document.createDocumentFragment();
fav.forEach((food) => {
    const li = document.createElement('li');
    li.textContent = food;
    li.className = 'food-item';
    foodFragment.append(li);
})

foodContainerel.append(foodFragment);*/
/*foodContainerel.insertAdjacentHTML('afterbegin','LIST OF FOODS');
foodContainerel.insertAdjacentHTML('afterend','LIST OF FOODS');
foodContainerel.insertAdjacentHTML('beforebegin','LIST OF FOODS');
foodContainerel.insertAdjacentHTML('beforeend','LIST OF FOODS');*/
/*let msg = confirm("do you really want to replace food ?");
let foodrep = prompt("enter the food :");
if(msg == true){
    var wish = prompt("enter the place where u want to update ur food ?");
    var w = Number(wish);
    const first = document.querySelector(`.food-container :nth-child(${w})`);
    const upbut = document.getElementById('sam');
    //console.log(first);
    upbut.addEventListener('click',()=>{
        const li = document.createElement('li');
        li.className = 'food-item';
        li.textContent = 'rasam';
        
        replaceWith() working and use :-

        first.replaceWith(li);
})
}else{
    console.log("user doesn't want to change the food ");
}
const upbut = document.getElementById('sam');
upbut.addEventListener('click',()=>{
    var m = confirm("do you really want to replace food ?");
    if(m == false){
        alert("failed to replace");
    }else{
        var user_inpt = prompt("enter you input food :");
        var wish = prompt("enter the place where u want to update ur food ?");
        var w = Number(wish);
        const f = document.querySelector(`.food-container :nth-child(${w})`);
        const li = document.createElement('li');
        li.className = 'food-item';
        li.textContent = `${user_inpt}`;
        f.replaceWith(li);

    }
})
const dup = document.getElementById('duplicate');
const resync = document.getElementById('uptoclone');

resync.addEventListener('click',()=>{
    dup.innerHTML = '';
    const cloning = foodContainerel.cloneNode(true);
    dup.append(cloning);

})

// getting custom attributes 
//let Hobby = inputName.getAttribute("data-hobby");
//console.log(Hobby);
//console.log(inputName.attributes);
var get = inputName.attributes;
for(let at of get){
    console.log(at);
}*/
//  style="padding: 5px 10px; font-size: 10px;background-color: royalblue;color: #fff;border: none;border-radius: 5px;"

// method 1 

//const bttn = document.querySelector(".input-name-container button");
// using 'seAttribute' method:

//bttn.setAttribute("style","padding: 5px 10px; font-size: 10px;background-color: royalblue;color: #fff;border: none;border-radius: 5px;");
// using 'property access':
// method 2

//bttn.style.backgroundColor = "royalblue"
//bttn.style.color = "#fff"
//bttn.style.padding = "6px 10px"
//bttn.style.borderRadius = "5px"

//using 'cssText' method:
// method 3
//bttn.style.cssText = "padding: 5px 10px; font-size: 10px;background-color: royalblue;color: #fff;border: none;border-radius: 5px;"

//inputName.style.cssText = "border-radius: 8px; padding: 5px 6px; outline: none; border: 1px solid; border-color: pink";

//const inputName = document.querySelector(".input-name-container input");

//console.log(inputName.className);
//inputName.className += " NewClassName2";
/*const inputContainer = document.querySelector('.input-name-container');
const showBtn = document.querySelector('#showBtn');

showBtn.addEventListener('click',() => {
   if(inputContainer.style.display === "none"){
    inputContainer.style.display = "block";
    showBtn.innerHTML = "hide";
   }else{
    inputContainer.style.display = "none";
    showBtn.innerHTML = "show";
   }
   
})*/
//const credits = document.querySelector('header span');
/*credits.onclick = ()=>{
    alert('Testing');
}
console.log(credits);
function handle(event){
    
    console.log(event);
}
credits.addEventListener('click',handle);
const handling = ()=>{
    console.log('EVENTLISTENERS...!!!');
    credits.removeEventListener('click',handling);
   
}
credits.addEventListener('click',handling);

const formEL = document.querySelector("form");
const divEL = document.querySelector("form div");
const pEL = document.querySelector("form p");

formEL.addEventListener('click',(event)=>{
    alert('Form');
    console.log(event.target.nodeName);
});
divEL.addEventListener('click',()=>{alert('Div')});
pEL.addEventListener('click',()=>{alert('paragragh')});

for(let element of document.querySelectorAll("form, form *")){
    element.addEventListener('click', ()=>{
        console.log(`Capturing Phase: ${element.tagName}`);
    }, {capture: true});

    element.addEventListener('click',()=>{
        console.log(`Bubbling Phase: ${element.tagName}`);
    });
}

const formEle = document.querySelector('form');
const inputEle = document.querySelector('form input');
const checkEle = document.querySelector("form input[type='checkbox']");

formEle.addEventListener("submit",(event)=>{
    event.preventDefault();
    let l = 4
    if(inputEle.value.length < l){
        alert('name should startwith atleast 5 character !!');
        return;
    }
    if(!checkEle.checked){
        alert('please tick the box');
        return;
    }
    console.log("form submitted", inputEle.value, checkEle.checked);
    
});
const listEL = document.querySelectorAll('form li');

listEL.forEach(lst => {
    lst.addEventListener('click',() => {
        console.log('clicked:', lst.innerHTML);
    });
});
const tableEL = document.querySelector('table');
let selectedId;
const btn = document.querySelector('#b');
const submitEl = document.querySelector('#sub');


tableEL.addEventListener('click',(event)=>{
    const target = event.target;
    const closestTr = target.closest("tr");
    if(target.tagName === 'TH'){
        return;
    }
    
    if(selectedId != undefined){
        selectedId.classList.remove("active");
    }
    selectedId = closestTr;
    closestTr.classList.add("active");
    console.log('clicked:', target);
    alert(`Hello ${target.textContent}`);
});





btn.style.cssText = "padding: 6px;font-size: 11px;border-radius: 6px;border: 1.5px solid gray;margin: 6px;"

submitEl.style.cssText = "padding: 6px;font-size: 11px;border-radius: 6px;border: 1.5px solid gray;"

function display(){
    const amtINP = document.querySelector('input[name="Amount"]');
    if(amtINP.value === ""){
        console.log("Fucker");
    }else{
        alert(`Donated Amount: ${amtINP.value}`);
    }

}

function toggleD(){
    const  newDiv = document.querySelector("div");
    if(newDiv.style.display == "block"){
        newDiv.style.display = "none";
        btn.style.backgroundColor = "";
    }else{
        newDiv.style.display = "block";
        btn.style.backgroundColor = "lightblue";
    }
    

}
document.addEventListener("mousedown",(event) => {
    console.log("MouseDown: ",event);
}) // it will show the entire information of the window when it has been clicked.

document.addEventListener("mouseup",(event) => {
    console.log("MouseUp: ",event);
}) // it will show the entire information of the window when it has been released.

document.addEventListener("mouseenter", (e) => {
    console.log("MouseEnter" ,e);
}) // it will display alert or log whenever mouse enters the particular area in the document.

const inputField = document.querySelector(".input-container [id='input-food']");

inputField.addEventListener('mouseenter',(e) => {
    console.log('U Have Entered Input Field');
})
document.addEventListener("mouseleave", (e) => {
    console.log("MouseLeave");
}) // whenever the cursor leaves the screen it throws some message.
document.addEventListener("mousemove", (e) => {
    console.log("mousemove");
})
document.addEventListener('keyup', (event)=>{
    console.log('keyup', event);
})
document.addEventListener('keydown', (event)=>{
    console.log('keydown', event);
})
document.addEventListener('keyup',(event) => {

    switch (event.key) {
        case 'a':
            console.log("you have pressed", event.key);
            break;
        case 'b':
            console.log("you have pressed", event.key);
            break;
        case 'c':
            console.log("you have pressed", event.key);
            break;
        case 'd':
            console.log("you have pressed", event.key);
            break;
        case 'e':
            console.log("you have pressed", event.key);
            break;
        case 'f':
            console.log("you have pressed", event.key);
            break;
        case 'g':
            console.log("you have pressed", event.key);
            break;
        case 'h':
            console.log("you have pressed", event.key);
            break;
        case 'i':
            console.log("you have pressed", event.key);
            break;
        case 'j':
            console.log("you have pressed", event.key);
            break;
        case 'k':
            console.log("you have pressed", event.key);
            break;
        case 'l':
            console.log("you have pressed", event.key);
            break;
        case 'm':
            console.log("you have pressed", event.key);
            break;
        case 'n':
            console.log("you have pressed", event.key);
            break;
        case 'o':
            console.log("you have pressed", event.key);
            break;
        case 'p':
            console.log("you have pressed", event.key);
            break;
        
        default:
            console.log('invalid key');
            break;
    }
})*/
// const formEl = document.forms[0];  By Index
// getting form
const formEl = document.forms.feedback; // By Name

const btn = document.querySelector('form button');
// Get Elements from Form 
// OLD WAY
/*const fullNameEl = formEl.elements.fullname;
const typeEl = formEl.elements.type;
const emailEl = formEl.elements.email;
const descEl = formEl.elements.description;
const termsEl = formEl.elements.terms;*/

// 1.Attributes
let nameEL = formEl.elements.fullname;
//nameEL.readOnly = true; 
//nameEL.disabled = true; 
//console.log(nameEL.value);

// 2.Events
//nameEL.addEventListener('focus', () => console.log('FOCUSED!!!')) // it shows whether the input box is in focus state.
//nameEL.addEventListener('blur', () => console.log('NOT_FOCUSED!!!')) //  it shows whether the input box is in unfocus state.
//nameEL.addEventListener('input', (e) => console.log(`You Entered :  ${e.target.value}`)) // it is triggered when the input gets some input value from user.
//nameEL.addEventListener('change', (e) => console.log(`Changed Value :  ${e.target.value}`)) // it shows the final value of the input event.

// 3.Methods
//console.log(nameEL);
// EFFECTIVE WAY
// encodeURIComponent is used to neglate space between two words and it is in the form of encryption.
// ${x[0] = ${x[1]}} it will return the value at the first index as well as second index.
const wholeCategory = document.querySelector('#input-categories');
const { type } = formEl.elements;
const arr = [...type];
/*wholeCategory.addEventListener('change',(event) => {
    const selected = arr.find((cat) => {
        return cat.checked;
    })
    console.log(event.target);
    //console.log('SELECTED', selected.value);
})*/

/*wholeCategory.addEventListener('change', (e) => {
  setTimeout(() => {
    if(e.target.value === "Contribution"){
        alert('Thank You for contribution');
    }else{
        return ;
    }
  },1000)
})*/

const handleSubmit = (e) => {
    e.preventDefault();
    
   // const { fullname, type, email, description, terms } = formEl.elements; // object destructing
 
    const formdata = new FormData(formEl)
    
    //console.log(); //  formData() is used to handle the data in an effective manner and it arranges the complex datas in a structured manner. '...' spread operator is used to convert the object to array.
    
    /*
    1. by urlstring 

    const data = [...formdata.entries()];
    //const dataString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');
    const dataString = data.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    console.log(dataString);// old way of doing*/ 

    // new way of doing

    /*const AnotherdataString = new URLSearchParams(formdata).toString();
    console.log(AnotherdataString);*/

   // 2. by json

    //const jsonData = JSON.stringify(Object.fromEntries(formdata)); // Object.fromEntries(formdata)  it will return the datas as object   JSON.stringify() will convert the data value to string or json.
    // console.log(jsonData);
     
    /*1. XMLHttpRequest method
     let xhr = new XMLHttpRequest(); initilaizing 
     xhr.open('GET', "https://reqres.in/api/users/2", true); addressing where we want to fetch 
     
     xhr.onload = function(){    after performing result it must perform some action on website
        const obj = JSON.parse(xhr.responseText)   converts JSON to objects
        document.getElementById('response').innerText = obj.data.email; displaying the content that we fetched 
       
     }
     xhr.send();  sending a request */
     /*2. fetch() method
     fetch("https://reqres.in/api/users?page=2", {
        method: 'GET',
        //headers: {
        //    'Content-type': 'application/json'  
        //
        //},
        //body: jsonData, // or new FormData(formEl)
     })
     .then(res => res.json()) // converting response into an object
     .then((data) => {
        console.log(data); // displaying the fetched data in log section
        document.getElementById('response').innerText = JSON.stringify(data.data);  // displaying on the webpage
     });*/


     
}

/*const handleformdata = (e) => {
    console.log('formData Event Fired');

    const formData = e.formData;
    formData.append('api-key','sadssdsadasdsadad');
    console.log([...formData.entries()]);
    console.log([...formData.values()]);
    console.log(formData.get("email"));
    console.log(formData);
}*/

formEl.addEventListener('submit', () => {
    alert("Thanks For the FeedBack :) !!");
    handleSubmit();
});

/*const termsEl = formEl.elements.terms;

termsEl.addEventListener("click", (e) => {
    if (e.target.checked) {
      let confirmation = confirm("Here are some terms, do you accept?");
  
      if (!confirmation) {
        e.preventDefault();
      }
    }
  });
*/
//formEl.addEventListener('formdata', handleformdata);

const CountryEL = formEl.elements.Country;
// console.log(CountryEL);
// CountryEL.value = "THAI"
// CountryEL.selectedIndex = 2;
// console.log(CountryEL[2].innerText);

CountryEL.addEventListener("change", (e) => {
    console.log(e.target.options[e.target.selectedIndex].innerText);
})

// normal Way
const OptionEL = document.createElement("option");
OptionEL.value = "TK";
OptionEL.innerText = "Turkey";


// new Way
const AnotherOp = new Option("Australia","AUS");


// CountryEL.append(OptionEL)  adding created element using Dom append method to HTML Dynamically
CountryEL.add(OptionEL, 4)  // adding created element using Dom add method to HTML Dynamically if want to add the created option on a specific index we can do.
CountryEL.add(AnotherOp)
CountryEL.remove(2); // removes the text from the given index.