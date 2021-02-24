let text = document.getElementById("textToEncode");
let text2 = document.getElementById("textToDecode")
let code = document.getElementById("offset");
let button = document.getElementById("encodeButton");
let button2 = document.getElementById("decodeButton");
let printResult1 = document.getElementById("resultEnc");
let printResult2 = document.getElementById("resultDec");
let resultEncode = [];
let resultDecode = [];

button.addEventListener("click", () => {
  let textValue = text.value;
  let codeValue = (parseInt(code.value));
  resultEncode.toString;
  cipher.encode(textValue, codeValue);
  printResult1.innerHTML = resultEncode.join("");
});

button2.addEventListener("click", () => {
  let text2Value = text2.value
  let codeValue = (parseInt(code.value));
  resultDecode.toString;
  cipher.decode(text2Value, codeValue);
  printResult2.innerHTML = resultDecode.join("");
});

function clearInputs() { 
  document.getElementById("textToEncode").value = "";
  document.getElementById("textToDecode").value = "";
}