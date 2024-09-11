// function alertViaDom(message) {
//   let main = document.getElementById("main");

//   // div.textContent = "food is updated";
//   // create div element vr dom

//   let div = document.createElement("div");
//   const textNode = document.createTextNode(message);

//   // create class name
//   div.className = "alert";

//   // append
//   div.append(textNode);
//   console.log(div);
//   main.prepend(div);
//   console.log(typeof div);
// }

// // alertViaDom("✔ suceessful Food is ordered");
// // alertViaDom("food is updated");

// function alertViainnerHTML(message) {
//   const template = `<div class="alert">${message}</div>`;

//   main.innerHTML += template;

//   console.log(typeof template);
// }
// alertViainnerHTML("i was created by innerHTML");

// const foodContainer = document.getElementById("food-container");

// console.time("normal way");
// for (let i = 1; i <= 10000; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Food items ${i}`;
//   li.className = "food-item";

//   foodContainer.append(li);
// }
// console.timeEnd("normal way");

// let fragment = document.createDocumentFragment();

// console.dir(fragment);

// console.time("fragment");

// for (let i = 1; i <= 10000; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Food items ${i}`;
//   li.className = "food-item";

//   fragment.append(li);
// }

// console.timeEnd("fragment");

// console.dir(fragment);

// foodContainer.append(fragment);

// challenge

// const favouriteFoods = ["chicken biriyani", "maggi", "tomotorice", "curdrice"];

// let foodContainer = document.getElementById("food-container");
// const foodFragment = document.createDocumentFragment();

// favouriteFoods.forEach((food) => {
//   const li = document.createElement("li");
//   li.textContent = food;
//   li.className = "food-item";

//   foodFragment.append(li);
// });

// foodContainer.append(foodFragment);

// const foodContainer = document.getElementById("food-container");

// const sambar = document.querySelector(".food-item");

// console.log(sambar);

// const li = document.createElement("li");
// li.textContent = "parupu sambar";
// li.className = "food-item";

// sambar.replaceWith(li); // new way

// sambar.parentNode.replaceChild(li, sambar); // old way

// let naveen = document.createElement("li");

// naveen.textContent = "Naveen";

// naveen.className = "food-item";

// foodContainer.replaceChildren(naveen);

// console.log(naveen);
// const li = document.createElement("li");
// li.textContent = "maggi";
// li.className = "food-item";

// foodContainer.prepend(li);
// foodContainer.append(li);
// foodContainer.before(li);
// foodContainer.after(li);

// const foodContainer = document.querySelector("#food-container");
// const duplicate = document.getElementById("duplicate");
// const resync = document.getElementById("Resync");

// const clone = foodContainer.cloneNode(); // by default it is false , so it only gives the parent element

// resync.addEventListener("click", () => {
//   const cloneData = foodContainer.cloneNode(true);
//   // console.log(clone);
//   // console.log(cloneData);
//   duplicate.append(cloneData);
// });

// const favouriteFoods = [
//   "chicken biriyani",
//   "mutton biriyani",
//   "prawn biriyani",
//   "fish biriyani",
// ];

// for (let i = 0; i < favouriteFoods.length; i++) {
//   console.log(favouriteFoods[i]);
// }

// // for of
// for (const item of favouriteFoods) {
//   console.log(item);
// }

// let foodcontainerEl = document.querySelectorAll(".food-container li");
// // console.log(foodcontainerEl);

// const fooditems = [];

// for (const item of foodcontainerEl) {
//   fooditems.push(item.innerText);
// }
// // console.log(fooditems);

// //spread operator

// foodcontainerEl.forEach((food) => console.log("Food", food));

// const newFoodValue = [...foodcontainerEl].forEach((food) =>
//   console.log("Food", food)
// );
// console.log(newFoodValue);

// // queryselectorall : nodelist
// let li = document.querySelectorAll("li");
// console.log(li, li.length);

// // children
// console.log(foodcontainerEl.children, foodcontainerEl.children.length);

// console.log(foodcontainerEl.parentNode.parentElement);
// console.log(foodcontainerEl.closest("main"));

// console.log(foodcontainerEl.parentNode);
// console.log(foodcontainerEl.parentElement);

// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// console.dir(document.documentElement.parentNode.parentNode);
// console.dir(document.documentElement.parentNode.parentElement);

// console.log(document.nodeType);

// any node : node

// console.log(numbers.nextSibling);
// console.log(numbers.nextElementSibling);

// any element node : element

// console.log(numbers.previousSibling);
// console.log(numbers.previousElementSibling.innerText);

// let input = document.getElementsByClassName("check");
// console.log(input);

// const hobby = input.getAttribute("hobby");
// const place = input.getAttribute("place");
// console.log(hobby, place);

// for (let att of input.attributes) {
//   console.log(att);
// }

// 1.set attribute

// btnEl.setAttribute(
//   "style",
//   "padding: 3px 10px;border-radius: 5px;background-color: aqua;font-size: 12px;"
// );

// 2.direct property access

// btnEl.style.padding = "5px 15px";
// btnEl.style.fontSize = "20px";
// btnEl.style.letterSpacing = "2px"; // using camel case to write a style instead of "- or space "
// btnEl.style.borderRadius = "50px";

//3.css text

// btnEl.style.cssText =
//   "background-color:blue ;color:#fff ;padding: 3px 10px; border-radius:5px";

//const btnEl = document.querySelector("#input-name-container");

// const showBtnEl = document.querySelector(".showbtn");

// showBtnEl.addEventListener("click", () => {
//   if (btnEl.classList.contains("hide") === "none") {
//     showBtnEl.innerText = "Hide Div";
//     btnEl.style.display = "block";
//     // showBtnEl.style.backgroundColor = "gray";
//     btnEl.classList.remove("hide");
//   } else {
//     showBtnEl.innerText = "Show Div";
//     // btnEl.style.display = "none";
//     btnEl.classList.add("hide");
//     showBtnEl.style.backgroundColor = "green";
//   }
// });

// let creditBtn = document.querySelector("header span");

// HTML attributes (bad practice for real time applications )
// creditBtn.setAttribute("onclick", 'alert("authored by naveen")');

// (bad practice for real time applications) drawback

// creditBtn.onclick = function () {
//   alert("authored by naveen");
// };

// creditBtn.onclick = function () {
//   alert("authored by trisha");
// };

// addEventListener  ==> is the best practice for the real time applications

// const handleCreditMsg = (event) => {
//   alert("authorised by naveen");
//   console.log(event.target);
// };
// creditBtn.addEventListener("click", handleCreditMsg);

// console.log(creditBtn);

// const formEl = document.querySelector("form");
// const inputEl = document.querySelector("form input");
// const checkboxEl = document.querySelector("form input [type='checkbox']");
// console.log(checkboxEl);

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("form submitted", inputEl.value, checkboxEl);
// });

// const tableEl = document.getElementById("table");
// // console.log(tableEl);

// let selectedId;

// tableEl.addEventListener("click", (event) => {
//   const target = event.target;
//   const closestTr = target.closest("tr");

//   if (target.tagName === "TH") return; // ignoring TH element

//   if (selectedId != undefined) {
//     selectedId.classList.remove("active");
//   }

//   selectedId = closestTr;
//   console.log("clicked", target);
//   closestTr.classList.add("active");

//   console.log();

//   // alert(`hello ${closestTr.children[0].textContent}`);
// });

// TASK

// document.addEventListener("click", (event) => {
//     const id = event.target.dataset.toggleId;
//     if (!id) return;

//     const el = document.getElementById(id);
//     el.hidden = !el.hidden;
//     // console.log(id);

//     const form = document.querySelector("#donate-form");
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const donateAmt = event.target.querySelector("input").value;
//       console.log(donateAmt);
//       alert(`thank you for donating ₹${donateAmt}.`);
//     });
//   });

// document.addEventListener("keydown", (event) => {
// //   console.log("keydown", event);
// // });

// document.addEventListener("keyup", (event) => {
//   console.log(`keyup ${event.key}, ${event.code}`);

//   switch (event.key) {
//     case "ArrowUp":
//       alert("you have presed arrowup");
//       break;
//     case "ArrowDown":
//       alert("you have pressed arrowdown");
//       break;
//     case "ArrowLeft":
//       alert("you have presed arrowLeft");
//       break;
//     case "ArrowRight":
//       alert("you have pressed arrowRight");
//       break;

//     default:
//       alert("unknown key detected");
//       break;
//   }
// });

// let formEl = document.forms.feedback;

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const { fullName, type, email, desc, terms } = formEl.elements;

//   console.log("form has been submitted");
// });

// let formEl = document.forms.feedback;
// const btnEl = document.querySelector("form button");

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const formData = new FormData(formEl);

//   //   const array = new URLSearchParams(formData).toString();
//   //   console.log("using URLSearchParams", array);

//   const jsondata = JSON.stringify(Object.fromEntries(formData));
//   console.log("using json format", jsondata);
// };

// formEl.addEventListener("submit", handleSubmit);

// let catogoryEl = formEl.elements.type;

// const allCatagory = [...catogoryEl];
// console.log(allCatagory);

// 1. ATTRIBUTES

// allCatagory.forEach((catogory) => {
//   console.log(catogory.value);
//   console.log(catogory.checked);
// });

// EVENTS
