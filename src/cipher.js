const cipher = {
  encode: (code, text) => {
    let resultEncode = [];
    let asciiConvert;
    for (let i = 0; i < text.length; i++) {  //Bucle para recorrer el string
      let ascii = text.charCodeAt(i);        //Variable que asigna el código ascii a cada valor que tome i
      // MAYÚSCULAS
      if (ascii >= 65 && ascii <= 90) {      //Condición, si ascii toma valor desde 65 a 90
        let upperFormula = ((ascii - 65 + code) % 26 + 65);   // Fórmula de cifrado Cesar
        resultEncode[i] = upperFormula;                       // Aplica la fórmula a cada valor del argumento
        // MINÚSCULAS
      } else if (ascii >= 97 && ascii <= 122) {               //Si toma valor de caracteres en minúscula
        let lowerFormula = ((ascii - 97 + code) % 26 + 97);   // Fórmula de descifrado
        resultEncode[i] = lowerFormula;                       //Aplica fórmula a cada valor del argumento
        // OTROS CASOS
      } else {
        let asciiConvert = ascii;                             //En cualquier otro caso, el código ascii se mantiene
        resultEncode[i] = asciiConvert;
      }
    }
    for (let j = 0; j < resultEncode.length; j++) {           
      asciiConvert = String.fromCharCode(resultEncode[j]);    // Convierte a string los valores ascii
      resultEncode[j] = asciiConvert;                         //Entrega una cadena para cada valor
    }
    return resultEncode.join("");                                      //Retorna la cadena concatenada
  },

  decode: (code, codedText) => {
    let resultDecode = [];
      for (let k = 0; k < codedText.length; k++) {
      let asciiDec = codedText[k].charCodeAt();
      if (asciiDec <= 91 && asciiDec >= 61) {
        let formulaUpperDec = (((asciiDec + 65) - code) % 26 + 65);
        resultDecode[k] = formulaUpperDec;
      } else if (asciiDec <= 122 && asciiDec >= 95) {
        let formulaLowerDec = (((asciiDec - 122) - code) % 26 + 122);
        resultDecode[k] = formulaLowerDec;
      } else {
        let formulaAsciiDec = asciiDec;
        resultDecode[k] = formulaAsciiDec;
      }
    }
    for (let l = 0; l < resultDecode.length; l++) {
      let asciiDecode = String.fromCharCode(resultDecode[l]);
      resultDecode[l] = asciiDecode;
    }
    return resultDecode.join("");
  }
  };

export default cipher;