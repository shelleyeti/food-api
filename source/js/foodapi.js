//fetch is a function and a promise
fetch("http://localhost:8088/food")
  //then chains on methods
  .then(foods => foods.json()) //make it into json format
  .then(parsedFoods => {
    //parsed = de-jsonify
    console.table(parsedFoods);
  });




//returns food item in the html
foodFactory = foodItem => {
  return `
    <h3>${foodItem.name}</h3>
    `;
};

//selects element to print to html
addFoodToDom = foodAsHTML => {
  const el = document.querySelector("#container");
  el.innerHTML += foodAsHTML;
};

//get's the api 
function getData() {
    //sets el to a string, stop repeating query over page
    const el = document.querySelector("#container");
    el.innerHTML = "";

    fetch("http://localhost:8088/food")
        .then(foods => foods.json())
        .then(parsedFoods => {
            parsedFoods.forEach(food => {
                const foodAsHTML = foodFactory(food);
                addFoodToDom(foodAsHTML);
            });
        });
}

//selects button on html
const getDataButton = document.getElementById("btn-getData");

//add listener for static function
getDataButton.addEventListener("click", getData);
    
//if the function is made dynamitc, you must call an anyomous fuction to pass in the arguement 
// getDataButton.addEventListener("click", () => getData("drinks"));