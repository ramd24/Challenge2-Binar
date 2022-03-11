function checkEmail (email) {
    let validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    let invalidEmail = /^([a-z\d\.-]+)@([a-z\d-]+)$/
    
    if ( typeof(email) == 'undefined' ) {
      return 'ERROR: email cannot be empty';
    }
    if ( email.match(validEmail) ) {
      return 'VALID';
    }
    if ( email.match(invalidEmail) ){
      return 'INVALID';
    }
    if ( typeof(email) == 'string' && !email.match(validEmail) ) {
      return 'ERROR: use a valid email address';
    }
}

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());