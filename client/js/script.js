//small li will not work
//it must be capital
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

function addToDo() {
  //validate input and add message if empty
  const msg = document.getElementById("message");
  const inputValue = document.getElementById("task").value;

  if (inputValue.trim() === "") {
    msg.innerText = "Please Add a task!";
    return;
  }

  // if message is empty and no value is added to task
  // focus the input
  msg.innerText = "";
  document.getElementById("task").value = "";
  document.getElementById("task").focus();

  //create the todo item
  const newList = document.createElement("li");
  const task = document.createTextNode(inputValue);
  newList.appendChild(task);
  document.getElementById("list").appendChild(newList);
  const span = document.createElement("span");
  const textNode = document.createTextNode("\u00D7");

  //add a close btn
  span.classList = "close";
  span.appendChild(textNode);
  newList.appendChild(span);

  //remove todo item
  span.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addToDo();
});
