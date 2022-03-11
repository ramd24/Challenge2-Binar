function isValidPassword (inputPassword) {
    let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    let noCapsPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/g;
  
    if ( typeof(inputPassword) == 'undefined'){
      return 'Error: Enter your password';
    }
    if ( inputPassword.length < 8 && typeof(inputPassword) == 'string'){
      return 'False, Error: ${password} only consists ${password.length} letters';
    }
    if ( inputPassword.match(validPassword) ){
      return 'True';
    }
    if ( inputPassword.match(noCapsPassword) ){
      return 'False, because ${inputPassword} has no Caps Letter'
    }
    if ( typeof(inputPassword) == 'number') {
      return 'False, because ${password} only consists number'
    }
  
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())