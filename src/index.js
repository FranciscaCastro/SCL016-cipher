import cipher from './cipher.js'

let text = document.getElementById("textToEncode");
let text2 = document.getElementById("textToDecode")
let code = document.getElementById("offset");
let button = document.getElementById("encodeButton");
let button2 = document.getElementById("decodeButton");
let printResult1 = document.getElementById("resultEnc");
let printResult2 = document.getElementById("resultDec");


button.addEventListener("click", () => {
  let textValue = text.value;
  let codeValue = (parseInt(code.value));
  if(document.getElementById("offset").value.length == 0) {
    alert("Por favor ingrese un número en el recuadro del medio")
}
  printResult1.innerHTML = (cipher.encode(codeValue, textValue));
  });

button2.addEventListener("click", () => {
  let text2Value = text2.value
  let codeValue = (parseInt(code.value));
  if(document.getElementById("offset").value.length == 0) {
    alert("Por favor ingrese un número en el recuadro del medio")
}
  printResult2.innerHTML = (cipher.decode(codeValue, text2Value));
 });

function clearInputs() { 
  document.getElementById("textToEncode").value = "";
  document.getElementById("textToDecode").value = "";
  document.getElementById("offset").value = "";
}

clearInputs();