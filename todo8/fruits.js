let fruits = ["Apple","Mango","Orange"];

function addFruit(event) {
  event.preventDefault();
  let inputFruit = document.getElementById("inputFruit").value;
  fruits.push(inputFruit);
  displayFruits();
}

function removeFruit(event) {
  event.preventDefault();
  fruits.pop();
  displayFruits();
}

function removeAllFruits(event) {
  event.preventDefault();
  fruits = [];
  displayFruits();
}

function displayUpper(event) {
  event.preventDefault();
  fruits = fruits.map((fruit) => fruit.toUpperCase());
  displayFruits();
}

function displayLower(event) {
  event.preventDefault();
  fruits = fruits.map((fruit) => fruit.toLowerCase());
  displayFruits();
}

function displayFruits() {
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = "";
  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.innerHTML = fruit;
    fruitList.appendChild(li);
  });
}

function submit() {
  let finalList = document.getElementById("finalList");
  finalList.innerHTML = "";
  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.innerHTML = fruit;
    finalList.appendChild(li);
  });
}
