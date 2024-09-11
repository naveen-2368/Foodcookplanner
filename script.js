let inputFood = document.getElementById("input-food");
let inputbutton = document.getElementById("input-btn");
let foodcontainer = document.getElementById("food-container");
let nolistEl = document.getElementById("nolist")
const handleInputFood = () => {
  //   foodcontainer.append();

  let li = document.createElement("li");
  const divItem = document.createElement("div");
  const divRemoveBtn = document.createElement("div");

  li.append(divItem, divRemoveBtn);
  divRemoveBtn.parentElement.setAttribute("onclick", "removeitem(event)");
  divRemoveBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  li.className = "food-item";
  divItem.textContent = inputFood.value;
  // const text = document.createTextNode(inputFood.value);

  foodcontainer.append(li);
  li.append(divItem);
  li.append(divRemoveBtn);
  inputFood.value = "";

  refreshUI()

};

inputbutton.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
    inputFood.value = "";
  } else if (event.key === "keyZ" && (event.ctrlKey || event.metaKey)) {
    inputFood.value = "";
  }
});

function removeitem(event) {
  let existList = event.target.parentNode.parentNode;
  existList.remove("");

  refreshUI()

  existList.classList.add("hide");
}


function refreshUI(){
    if (foodcontainer.children.length >0 ) {
      // children exist
      nolistEl.hidden = true
    }
    else{
      // no children 
      nolistEl.hidden = false
    }
}