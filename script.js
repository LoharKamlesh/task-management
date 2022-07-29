"use strict";

let containerMovementsNew = document.querySelector(".movements");
const add = document.querySelector(".add__task");
const checkBox = document.querySelector(".hide__tasks");

let movements = ["homework", "gardening", "to-do"];

const displayMovements = function (movements) {
  containerMovementsNew.innerHTML = " ";
  const [...movs] = movements;
  //   console.log(movs);

  movs.forEach(function (el) {
    const htmlNew = `
    
        <div class="movements__row">
        ${el}
        
            <button class="form__btn" onclick="deleteTask('${el}')">delete</button> 
    
        </div> 
         
     `;
    containerMovementsNew.insertAdjacentHTML("beforeend", htmlNew);
  });
};

// displayMovements('')

const addTask = function () {
  let taskInput = document.querySelector("#addTask");
  var taskInputVal = taskInput.value;
  movements.push(taskInputVal);
  taskInput.value = "";

  console.log(movements);
  displayMovements(movements);
};
add.addEventListener("click", addTask);
displayMovements(movements);

checkBox.addEventListener("change", function (e) {
  if (checkBox.checked === true) {
    containerMovementsNew.style.display = "none";
  } else {
    containerMovementsNew.style.display = "block";
  }
});

const deleteTask = function (arg) {
  movements = movements.filter((data) => data !== arg);
  //   console.log(data);
  displayMovements(movements);
};

const searchTask = function (arg) {
  let movementsNew = movements.filter((data) => data.includes(arg));
  console.log(movements);
  displayMovements(movementsNew);
};
