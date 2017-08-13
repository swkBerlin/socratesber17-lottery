const seedrandom = require('seedrandom');
const fs = require('fs');
const rng = seedrandom('socratesber2017');


function getRandomSubarray(arr, size) {
	// From https://stackoverflow.com/a/11935263
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * rng());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

const mails = fs.readFileSync('applicants.txt').toString().split('\n');

console.log(getRandomSubarray(mails, 35).join("\n"));