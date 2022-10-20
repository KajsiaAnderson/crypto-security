function cipher(str) {
    //Deciphered reference letters
    let decoded = {
      a: "n",
      b: "o",
      c: "p",
      d: "q",
      e: "r",
      f: "s",
      g: "t",
      h: "u",
      i: "v",
      j: "w",
      k: "x",
      l: "y",
      m: "z",
      n: "a",
      o: "b",
      p: "c",
      q: "d",
      r: "e",
      s: "f",
      t: "g",
      u: "h",
      v: "i",
      w: "j",
      x: "k",
      y: "l",
      z: "m",
    };
  
    
    //convert the string to lowercase
    str = str.toLowerCase();
    
    //decipher the code
    let decipher = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' '){
            let newStr = str.trim()
        }else{
            decipher += decoded[str[i]];
        }
    }
    
    //return the output
    return decipher;
};

console.log(cipher("I love crypto"))
// v ybir pelcgb