
const fs = require('fs')


const series = {
    title : "Sirisha",
    author : "Ardhala"
};

// const data = JSON.stringify(series);

// fs.writeFile('series.json', data, (err,data)=>{
//     if(err) throw err;
//     console.log("File created !!!");
// })


// fs.readFile('series.json', (err, data)=>{
//     if(err) throw err;
//     const output = JSON.parse(data)
//     console.log(output.author);
// })

const data = fs.readFileSync('series.json').toString();
const jsonData = JSON.parse(data);

jsonData.title = "Sireesha";

const strFormat = JSON.stringify(jsonData);
fs.writeFileSync('series.json',strFormat)
