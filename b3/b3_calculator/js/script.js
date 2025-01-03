const numbers = document.getElementsByClassName("btn");
const result = document.getElementById("result");
const logHistory = document.getElementById("history");
let history = [];
let expressionData = "";
let resultData = "";

for (let number of numbers) {
  number.addEventListener("click", function () {
    if (this.value) {
      result.innerHTML += this.value;
    } else if (this.id === "del") {
      let res = result.innerHTML;
      result.innerHTML = res.substring(0, res.length - 1);
    } else if (this.id === "ac") {
      result.innerHTML = "";
      logHistory.style.display = "none";
      history = [];
    } else if (this.id === "equals") {
      if (result.innerHTML === "") {
        return;
      }
      let res = result.innerHTML;
      let output = eval(res);
      expressionData = res;
      resultData = output;
      history.push({ expression: expressionData, result: resultData });
      let log = "";
      for (let key in history) {
        log +=
          history[key].expression +
          " = " +
          history[key].result +
          "<br>" +
          "<br>";
      }
      logHistory.innerHTML = log;
      result.innerHTML = output;

      logHistory.style.display = "block";
    }
  });
}