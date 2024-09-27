const http = require("http");
const url = require("url");
const fs = require("fs");
const fsAsync = require("fs").promises;

const contentFileUtama = fs.readFileSync("./index.txt", "utf-8")
console.log(contentFileUtama)

// express = framework untuk memudahkaan http
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathUrl= req.url

    // default selalu ada :
    // localhost:3000/ = health check, cek aplikasinya jalan ga
    // 404 = handle jika url tidak ada
    if(pathUrl === "/yogi"){
        res.end("ini tugas yogi")
    } else if (pathUrl ==="/"){
        res.end("hello ke tim 7")
    } else if (pathUrl ==="/zai"){
        console.log("original data " + contentFileUtama)
        async function rewriteFromZai(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("Sukses nulis ulang fiile")
                const resultRewrite = await fsAsync.readFile(filepath, "utf-8")
                res.end = (resultRewrite)
            } catch (error) {
                console.log(error)
            }
        }
        rewriteFromZai("./index.txt", "hai")
    } else {
        res.end("ini gada ! 404")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('aplikasi ini jalan di port 3000')
})

console.log(contentFileUtama)