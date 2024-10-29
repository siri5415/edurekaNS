const fs = require('fs');
openFile:

// fs.open("index.html", 'r+', (err, fd) => {
//     if (err) {
//         console.log("Error in opening the file : " + err);
//     }else{
//         console.log("file descriptor : " + fd);
//         // based on the 'fd' you can read the file, write and you can close this file as well as
//         console.log("File opened successfully !!");
//         fs.close(fd);
//         console.log("File closed successfully !!");
//     }
// });

GETFile:

// fs.stat("index.html", (err, stats) => {
//     if (err) {
//         console.log("Error in opening the file : " + err);
//     }else{
//         console.log("Stats are : " +JSON.stringify(stats));
//         console.log("Stats proto is : " +JSON.stringify(stats.__proto__.__proto__.__proto__));
//         console.log("is File : " + stats.isFile());
//         console.log("is Directory : " + stats.isDirectory());
//     }
// });

writeFile :

// fs.writeFile("testpage.txt", "we are in 2nd NodeJS class", (err)=>{
//          if(err) {
//             console.log("Error in creating the file : " + err);
//          }else{
//             console.log("created the file successfully !!");
        //  }
// })

readFile :

// fs.readFile("testpage.txt", (err,data)=>{
//          if(err) {
//             console.log("Error in reading the file : " + err);
//          }else{
//             console.log("File content is : " + data.toString());
//          }
// })

renameFile :

// fs.rename("newname.doc", "latestname.rtf", (err)=>{
//     if(err) {
//        console.log("Error in renaming the file : " + err);
//     }else{
//        console.log("File renamed successfully !!");
//     }
// })

appendFile : 

// fs.appendFile("index.html", "I am learning NodeJs FS", (err)=>{
//     if(err){
//            console.log("Error in appending the file : " + err);
//     }else{
//         console.log("File appended successfully !!");
//     }
// })

deleteFile :

fs.unlink("Latestname.rtf", (err)=>{
    if(err){
           console.log("Error in deleting the file : " + err);
    }else{
        console.log("File deleted successfully !!");
    }
})
