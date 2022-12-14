"use strict";

let containerMovementsNew = document.querySelector(".movements");
const add = document.querySelector(".add__task");
const checkBox = document.querySelector(".hide__tasks");
const delBtn = document.getElementById("btn");

let movements = [
  "Clean the garden",
  "Vacuum clean the house",
  "Buy grocerries",
  "Sleep",
];

const displayMovements = function (movements) {
  containerMovementsNew.innerHTML = " ";
  const [...movs] = movements;
  //   console.log(movs);

  movs.forEach(function (el) {
    // el = el.toLowerCase();
    const htmlNew = `
    
        <div class="movements__row"><img src="list.png" alt="list" class="list" />
        ${el.charAt(0).toUpperCase() + el.slice(1)}
        
        <button class="form__btn" id="${el}"  onmouseover="mouseHover('${el}')" 
        onmouseout="mouseOut('${el}')"
        onclick="deleteTask('${el}')"><img src="trash-1.png" alt="trash" class="trash" />delete</button>  
    
        </div> 

         
     `;

    //  <div class="movements__row"><img src="list.png" alt="list" class="list" />
    //  ${el}

    //  <button class="form__btn"   onmouseover="mouseHover('${el}')"
    //  onmouseout="mouseOut('${el}')"

    //  onclick="deleteTask('${el}')"><img src="trash.png" alt="trash" class="trash" />delete</button>

    //  </div>
    containerMovementsNew.insertAdjacentHTML("beforeend", htmlNew);
  });
};

// displayMovements('')

const addTask = function () {
  const taskInput = document.querySelector("#addTask");
  let taskInputVal = taskInput.value;
  taskInputVal = taskInputVal.charAt(0).toUpperCase() + taskInputVal.slice(1);
  console.log(taskInputVal);
  movements.push(taskInputVal);
  taskInput.value = "";

  //   console.log(movements);
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
  console.log(arg);
  movements = movements.filter((data) => data !== arg);

  displayMovements(movements);
};

const searchTask = function (arg) {
  console.log(arg);
  // const args = arg.toLowerCase();
  const args = arg.charAt(0).toUpperCase() + arg.slice(1);
  let movementsNew = movements.filter(function (data) {
    return data.includes(args);
  });

  displayMovements(movementsNew);
};
const mouseHover = function (el) {
  //console.log(el);
  const ele = document.getElementById(el);
  //console.log(ele);
  ele.style.backgroundColor = "green";
  ele.style.color = "white";

  // //console.log("I was hovered in");
};
const mouseOut = function (el) {
  //console.log(el);
  const ele = document.getElementById(el);
  //console.log(ele);
  ele.style.backgroundColor = "white";
  ele.style.color = "black";

  // //console.log("I was hovered out");
};
