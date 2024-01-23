// 1. The logo text of the site has the wrong color. Change it to the correct one.
let logoText = document.querySelector('.logo-text');
logoText.style.color = '#384241';

// 2. alignment of the elements in the header element are wrong. Change it to the correct one.
let header = document.querySelector('header');
header.style.justifyContent = 'left';

// 3. The header has a border at the bottom, but it has the wrong color.
header.style.borderBottomColor = 'lightgray';

// 4. The recipe name is wrong, change it to the correct one.
let recipeName = document.querySelector('#recipe-name');
recipeName.innerText = 'Frozen Cheescake';

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
// This can be fixed by adding a class to that element.
let timeContainer = document.querySelector('.time-container');
timeContainer.firstChild.className = 'material-icons';

// 6. The estimated time of the recipe is also incorrect. 
// Change it to the correct time estimation.
timeContainer.lastChild.innerText = '60+ min';

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. 
// Change it to the correct one.
const img = document.querySelector('img');
img.src = 'assets/frozen-cheesecake-slice.jpg'

// 8. The background color of the ingredients list container is wrong. Fix it.
let ingredientsContainer = document.querySelector('.ingredients-container');
ingredientsContainer.style.backgroundColor = '#f9f9f9';

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. 
// In the list of the ingredients to the bottom, there is a text instead of two list items. 
// Remove the text and add those two list items.
let listForBottom = document.querySelector('.ingredients-list-bottom');
let children = listForBottom.children;
listForBottom.removeChild(children[0]);

function addItem(parent, element, text){
    const item = document.createElement(element);
    const itemText = document.createTextNode(text);
    item.appendChild(itemText);
    parent.appendChild(item);
}

addItem(listForBottom, 'li', '15st Digestivekex');
addItem(listForBottom, 'li', 'Lite smör');

// 10. The third ingredient in the list of ingredients to the paste is wrong. 
// Change that specific ingredient to the correct one.
let pasteList = document.querySelector('.ingredients-list-paste');
pasteList.children[2].innerText = '3tsk vaniljsocker';

// 11. There is also a missing ingredient in the list of ingredients to the paste. 
// Look and see what it is and add that one the the end of the list.
addItem(pasteList, 'li', '400g naturell philadelphiaost')

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling 
// applied to it. Remove that styling.
let instructions = document.querySelector('.instructions.shadow');
instructions.classList.remove('shadow');

// 13. Two list elements of the list of instructions are incorrect. 
// Find them and change them to the correct ones.
let instructionsList = document.querySelector('.instructions-list');
instructionsList.children[1].innerText = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsList.children[8].innerText = 'Ställ in i frysen över natten.';