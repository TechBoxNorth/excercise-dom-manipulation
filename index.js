// 1. What is the name of the recipe?
const recipeName = document.querySelector('#recipe-name');
console.log(recipeName.innerText);

// 2. What HTML tag is used to display the Recipe name?
const tag = document.getElementById('recipe-name');
console.log(tag.nodeName);

// 3. What is the font size of the paragraph tag with the class "description".
const pTag = document.querySelector('.description');
const pTagCSS = getComputedStyle(pTag);
console.log(pTagCSS.fontSize);

// 4. What is the value of the alt atrribute on the image?
const img = document.querySelector('img');
const imgAlt = img.alt;
console.log(imgAlt);

/* 5. What is the dimensions and the url of the image? 
Create an object that looks like this, and log it to the console:
{
  url: string
  height: number,
  width: number,
}
*/
const imgInfo = {
    url: img.src,
    height: img.height,
    width: img.width
}
console.log(imgInfo);

// 1. How many ingredients does the paste have?
const ingredients = document.querySelector('.ingredients-list-paste');
const numIngredients = ingredients.childElementCount;
console.log(numIngredients);

// 2. Which is the forth element in the list containing the ingredients for the paste?
console.log(ingredients.children[3].innerText);

/* 3. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
{
  order: number;
  text: instruction;
} 
*/
let instructionObjects = [];
const instructionsList = document.querySelector('.instructions-list');
const instructions = instructionsList.children;
for(let i = 0; i < instructions.length; i++){
    const instObj = {
        order: i + 1,
        text: instructions[i].innerText
    }
    instructionObjects.push(instObj);
}
console.log(instructionObjects);