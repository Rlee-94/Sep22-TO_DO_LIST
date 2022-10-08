const btn = document.querySelector(".header__button");
let input = document.getElementById("header__input");
const enterInput = document.getElementById("header__input");
const listContent = document.querySelector(".list__content");
const error = document.querySelector(".header__error");

function addItem() {
  if (input.value.length > 0) {
    const toDoItem = document.createElement("li");
    const text = document.createTextNode(input.value);

    toDoItem.classList.add("list__items");
    toDoItem.appendChild(text);
    listContent.appendChild(toDoItem);

    addRemoveButton(toDoItem);
    hideError();
    input.value = "";
  } else {
    displayError();
  }
}

function addRemoveButton(parent) {
  const remove = parent.appendChild(document.createElement("button"));
  remove.textContent = "remove";
  remove.classList.add("list__remove");
  remove.onclick = function () {
    this.parentElement.remove();
    hideError();
  };
}

function toggleStrikethrough(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("strikethrough");
  }
}

function displayError() {
  error.classList.remove("hidden");
}

function hideError() {
  error.classList.add("hidden");
}

btn.addEventListener("click", addItem);
listContent.addEventListener("click", toggleStrikethrough);
enterInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addItem();
  }
});
