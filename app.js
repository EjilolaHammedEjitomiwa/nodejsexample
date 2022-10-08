// const amount = 13

// if (amount < 10) {
//     console.log('Small number');
// } else {
//     console.log('Large number');
// }

// console.log('Hello its my first node app!!!');

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
// console.log('Hello GeoDev');

// },5000)

// const { name } = require('./names');
// const sayHello = require('./utils');
// const utils = require('./utils')
// const data = require('./anotherExport')
// require('./add')

// console.log(data);

// sayHello(name)

// console.log(name);
// console.log(utils);

// sayHello(name)


// const os = require('os')
// const user = os.userInfo()

// console.log(user);

// // to get the uptime of the system

// console.log(`The System uptime is ${os.uptime} seconds`);

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOs);

// const path = require('path')

// const filePath = path.join('content', 'subFolder', 'test.txt')

// console.log(filePath);

// const baseName = path.basename(filePath)

// console.log(baseName);

// to get the absolute path of a file

// const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt')
// console.log(absolute);


// console.log(path.sep);

// const { readFile, writeFile } = require('fs')

// const first = readFileSync('./content/firstText.txt', 'utf-8')
// const second = readFileSync('./content/secondText.txt', 'utf-8')

// writeFileSync('./content/sampletext.txt', 'Hello GeoDev', { flag: 'a' })

// console.log(first, second);

// const { readFile, writeFile } = require('fs')

// readFile('./content/firstText.txt', 'utf-8', (err, result) => {

//     if (err) {
//         console.log(err);
//         return
//     }

//     const first = result


//     readFile('./content/secondText.txt', 'utf-8', (err, result) => {

//         if (err) {
//             console.log(err);
//             return
//         }

//         const second = result


//         writeFile('./content/result.txt', `This is the result ${first} , ${second}`, { flag: 'a' }, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }

//             console.log(result);



//         })

//     })



// })


const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to Geotopup')
    }

    res.end(`
        <h1>Oops Page not exists</h1>
    `)



})


server.listen(3000)