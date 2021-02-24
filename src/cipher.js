const cipher = {
  encode: (text, code) => {
    let asciiConvert;
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        // MAYÚSCULAS
        let upperFormula = ((ascii - 65 + code) % 26 + 65);
        resultEncode[i] = upperFormula;
      } else if (ascii >= 97 && ascii <= 122) {
        // MINÚSCULAS
        let lowerFormula = ((ascii - 97 + code) % 26 + 97);
        resultEncode[i] = lowerFormula;
      } else {
        let asciiConvert = ascii;
        resultEncode[i] = asciiConvert;
      }
    }
    for (let j = 0; j < resultEncode.length; j++) {
      asciiConvert = String.fromCharCode(resultEncode[j]);
      resultEncode[j] = asciiConvert;
    }
    return resultEncode;
  },

  decode: (codedText, code) => {
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
    return resultDecode;
  }
  };


