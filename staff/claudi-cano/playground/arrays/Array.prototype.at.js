console.log('TEST Array.prototype.at')

console.log('CASE locate index 2 on array1')

var array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log('An index of ' + index + ' returns ' + array1.at(index));
// Expected output: "An index of 2 returns 8"

index = -2;

console.log('An index of ' + index + ' returns ' + array1.at(index));
// Expected output: "An index of -2 returns 130"
