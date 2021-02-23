let text = document.getElementById("textEncode");
let userCode = document.getElementById("offset");
let button = document.getElementById("encodeButton");
let button2 = document.getElementById("decodeButton");
let printResult = document.getElementById("result");
let resultEncode = [];
let resultDecode = [];

button.addEventListener("click", () => {
  let textValue = text.value;
  let userCodeValue = (parseInt(userCode.value));
  resultEncode.toString;
  cipher.encode(textValue, userCodeValue);
  printResult.innerHTML = resultEncode.join("");
});

button2.addEventListener("click", () => {
  let userCodeValue = (parseInt(userCode.value));
  resultEncode.toString;
  cipher.decode(resultEncode, userCodeValue);
  printResult.innerHTML = resultDecode.join("");
});