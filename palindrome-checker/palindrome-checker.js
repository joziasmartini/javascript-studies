function palindrome(str) {
    var clearString = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');
    
    for (var i = 0; i < clearString.length/2; i++) {
      if (clearString[i] !== clearString[clearString.length -1 -i]) {  
        return false;
      } 
    }
    return true;
  }
  
  palindrome("eye");