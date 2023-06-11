console.log('hello world')
//CREATION FILE
const fs=require('fs')
const http=require('http')
const server=http.createServer(function(req,res){
    res.write('<h1>Hello Node!!!!</h1>');
    res.end();
})
server.listen(3000,err=>{
    err?console.log(err):console.log('ur linked to server 3000')
})
//TASK3
const fs=require("fs")
console.log("File systeme starting..")
fs.writeFile("welcome.txt", "hello node", (err) => {
    err ? console.log(err) : console.log("File successfully created");
  });
  fs.readFile("welcome.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
  //TASK4
  const password = require ('./password-generator')
  //TASK5
  const transporter = require ('./email-sender')

server.listen(3000, (err) => {
  err
    ? console.log(err)
    : console.log("Server is running on http://localhost:3000");
});

