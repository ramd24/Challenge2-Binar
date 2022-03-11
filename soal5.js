function getSplitName(personName) {
    if ( typeof(personName) == 'string'){
        let namaLengkap = personName.split(' ');

        if ( namaLengkap.length <= 3 ) {

            if (namaLengkap.length == 3){
                let firstName = personName.split(' ')[0];
                let middleName = personName.split(' ')[1]; 
                let lastName = personName.split(' ')[2];
                let dataNama = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
            return dataNama;
            }
            
            else if (namaLengkap.length == 2){
                let firstName = personName.split(' ')[0];
                let middleName = null;
                let lastName = personName.split(' ')[1];
                let dataNama = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
            return dataNama;
            }
            else {
                let firstName = personName.split(' ')[0];
                let middleName = null;
                let lastName = null;
                let dataNama = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                };
            return dataNama;
            }
        }
        else {
            return 'Error: This function is only for 3 characters name';
        }
    }
    else{
        return 'Error: Name must be filled with string value';
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));