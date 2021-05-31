function chaostruct(str) {
    return str.split('').map((char) => {
      const charCode = char.charCodeAt();
  
      if (charCode == 97 || charCode == 65) {
          return "Chaos";
      }
      else if (charCode == 101 || charCode == 69) {
          return "cHaos";
      }
      else if (charCode == 105 || charCode == 73) {
          return "chAos";
      }
      else if (charCode == 111 || charCode == 79) {
          return "chaOs";
      }
      else if (charCode == 117 || charCode == 85) {
          return "chaoS";
      }
      else {
        return char;
      }
    }).join('');
  }
  
  console.log(chaostruct('test'));