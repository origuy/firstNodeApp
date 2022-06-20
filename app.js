const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path")
const hello = "Hello World";
console.log(hello);
const data =  fs.readFileSync(`${__dirname}/animals.json`,"utf-8")
const animal =  fs.readFileSync(`${__dirname}/templates/animal.html`,"utf-8")
const overview =  fs.readFileSync(`${__dirname}//templates/overview.html`,"utf-8")
const row =  fs.readFileSync(`${__dirname}//templates/row.html`,"utf-8")
const dataParsed = JSON.parse(data)
console.log(path)

//SERVER
 const server = http.createServer((req,res) => {
    switch (req.url) {
        case "/home":
            res.writeHead(200,{
                "Content-type": 'text/html'
            })
            let output = drawAnimal(dataParsed[2],animal)
            console.log(typeof output)
            res.end(output)
            break;
        case "/api":
            res.writeHead(200,{
                "Content-type": 'apllication/json'
            })
            res.end(data)
        default:
            res.writeHead(404,{
                "Content-type": 'text/html'
            })
            res.end("<h1>404 Page not found</h1>")
            break;
    }

    
});
let port = 8000;
let host = "127.0.0.1"
server.listen(port,host,() => {
    console.log(`The Server is running on ${host}:${port}`)
});
function drawAnimal(data,animal,res) {
    // let output = animal.replace('#circle#',data.icon)
    let output = animal.replace('#animalName#',data.animal_name)
    output = output.replace("#circle#",data.icon)
    output = output.replace("#logo#",`https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`)
    output = output.replace("#Class#",data.class)
    output = output.replace("#LivesOn#",data.lives_on)
    output = output.replace("#vegeterian#",data.vegeterian)
    output = output.replace("#Description#",data.description)   
    return output
    
}
setTimeout(() => {
    
}, 1000);

