/*
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

//Make a snack class
class Snacks {

    //Constructor
    constructor(name, price, type){
    this.name = name;
    this.price = price;
    this.type = type;
    }

    //Getters
    getName()
    {
        return this.name;
    }
    
    getPrice()
    {
        return this.price;
    }

    getType()
    {
        return this.type;
    }

    //Setters
    setName(newName)
    {
        this.name = newName
    }

    setPrice(newPrice)
    {
        this.price = newPrice;
    }

    setType(newType)
    {
        this.type = newType;
    }
}

let Inventory = [{ name :"Hot Cheetos", price : 1.50, type: "Spicy"}, { name :"Takis", price : 1.50, type: "Spicy"},
{ name :"Nerds", price : 1.75, type: "Sweet"}, { name :"Starburst", price : 2.00, type: "Sweet"}, 
{ name :"Pringles", price : 2.25, type: "Salty"}, { name :"Pretzel", price : 1.00, type: "Salty"}
]

let Reccomendation = new Set();

function makeReccomendation(type){
    valueFound = false;
    for (let i = 0; i < Inventory.length; i++) {
        if (type === Inventory[i].type) {
            Reccomendation.add(Inventory[i]);
            valueFound = true;
        }
    }

    if (valueFound == false)
    {
        alert("Reccomendation Not Found!");
    }
    showAll();
}

function showReccomendationConsole(){
    console.log("Reccomendation List: ")
    Reccomendation.forEach(function(value) {
        console.log(value);
    });
}

function displayReccomendation(){
    let reccomendationDiv = document.getElementById('Reccomendations');
    
    reccomendationDiv.innerHTML = '';

    Reccomendation.forEach(function(snack) {
        let snackDiv = document.createElement('div');
        snackDiv.innerHTML = "[ " + snack.type + ", " + snack.name + ", $" + snack.price + "], ";

        reccomendationDiv.appendChild(snackDiv);
    });
}

function showInventoryConsole()
{   console.log("Inventory List: ")
    for (i in Inventory){
        console.log(Inventory[i]);
    }
}

function displayInventory()
{
    let catalogDiv = document.getElementById('snackInventory');
    
    catalogDiv.innerHTML = '';

    Inventory.forEach(function(snack) {
        let snackDiv = document.createElement('div');
        snackDiv.innerHTML = "[ " + snack.type + ", " + snack.name + ", $" + snack.price + "], ";

        catalogDiv.appendChild(snackDiv);
    });
}

function addSnack()
{
    let snackName = document.getElementById('snackName').value;
    let snackPrice = document.getElementById('snackPrice').value;
    let snackType = document.getElementById('snackType').value;

    let snack = {
    name: snackName,
    price: Number(snackPrice),
    type: snackType
    };
    Inventory.push(snack);
    showAll();
}

function deleteSnack(name) {
    for (let i = 0; i < Inventory.length; i++) {
        if (name == Inventory[i].name) {
            Inventory.splice(i, 1);          
            console.log("Deleted: " + name);
            showAll();
            return; 
        }
    }
    alert("Snack Not Found!");
    console.log("Snack not found: " + name);  
}

function clearReccomendation()
{
    Reccomendation.clear();
    showAll();
}

function clearInventory()
{
    Inventory.splice(0,Inventory.length);
    showAll();
}

function calculateReccomendation()
{   
    let rectotal = 0;
    Reccomendation.forEach(function(value) {
        rectotal =  rectotal + value.price;
    });
    console.log("Total Reccommedation Database Value: $" + rectotal);
    
    let catalogDiv = document.getElementById('recTotal');
    catalogDiv.textContent = "$ " + rectotal;
}

function calculateInventory()
{   
    let intotal = 0;
    Inventory.forEach(function(value) {
        intotal =  intotal + value.price;
    });
    console.log("Total Inventory Database Value: $" + intotal);

    let catalogDiv = document.getElementById('inTotal');
    catalogDiv.textContent = '';
    catalogDiv.textContent = "$ " + intotal;
}

function showAll()
{
    showReccomendationConsole();  
    showInventoryConsole();
    displayReccomendation();
    displayInventory();
    calculateReccomendation();
    calculateInventory(); 
}

/*
const SPICY_URL = "https://m.media-amazon.com/images/I/71lwqLV0CLL.jpg";
const SWEET_URL = "https://m.media-amazon.com/images/I/91mKILVPzDL.jpg";
const SALTY_URL = "https://hips.hearstapps.com/hmg-prod/images/salty-snacks-6516f9a2f3702.jpg?crop=0.495xw:0.990xh;0,0.00962xh&resize=640:*";

// This is an array of strings (TV show titles)
let types = [
    "Spicy",
    "Sweet",
    "Salty",
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("snack-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < types.length; i++) {
        let title = types[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = SPICY_URL;
        } else if (i == 1) {
            imageURL = SWEET_URL;
        } else if (i == 2) {
            imageURL = SALTY_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    types.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
*/