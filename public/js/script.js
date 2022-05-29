const cal = document.querySelector(".calculate");
const input = document.querySelector(".input span");
const res = document.querySelector(".result span");
let temp = "";

cal.addEventListener("click", function (e) {
  if (!e.target.classList.contains("remove")) {
    temp += e.target.textContent;
    input.textContent = temp;
    const result = count(temp);
    res.textContent = result;
  } else {
    input.textContent = "";
    res.textContent = "";
    temp = "";
  }
});

function count(num) {
  let result = "";
  result += eval(num);
  return result;
}
