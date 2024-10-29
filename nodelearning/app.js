// console.log("this file is created using npm");

const operatingSystem = require('os');
const fs  = require('fs')
const path = require('path')

console.log("Architecture : " + operatingSystem.arch());
console.log("Realse : " + operatingSystem.release());
console.log("Platform : " + operatingSystem.platform());

fs.writeFileSync("testData.txt", "I have NodeJS");

const 