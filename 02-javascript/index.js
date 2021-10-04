let text = document.getElementsByTagName("input")[0];
let submit = document.getElementsByTagName("input")[1];
let ul = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", (e) => {
  if (text.value !== "") {
    e.preventDefault();

    const myLi = document.createElement("li");
    myLi.innerHTML = text.value;
    ul.appendChild(myLi);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    myLi.appendChild(delBtn);
  } else if (text.value === "") {
    alert("Item can not empty !");
    text.placeholder = "Masukkan Item";
    text.focus();
  } else {
    alert("Item already exist.");
    text.placeholder = "Masukkan Item";
    text.focus();
  }
  const close = document.querySelectorAll("button");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.remove();
    });
  }
  text.value = "";
  text.focus();
});
