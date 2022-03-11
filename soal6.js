function getAngkaTerbesarKedua(numberData){
    if ( numberData != null ) {
        if ( Array.isArray(numberData) ) {
            const x = numberData.sort();
            const y = x.reverse();
            console.log(y[1]);
        }
        else {
            return 'Error: Input is not an Array';
        }
    }
    else{
        return 'Error: Data cannot be empty';
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8];

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())