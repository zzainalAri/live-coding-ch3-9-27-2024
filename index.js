const fs = require("fs").promises;
const fsSync = require("fs");

// 1, membaca file 
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8")

// 2. proses print isi dari surat cinta
console.log(`ini line 7 : ${loveLetter}`)

// 3. Membuat file baru untuk membalas surat cinta
const loveFeedback = "nado saranghae";
fsSync.writeFileSync("./balasan.txt",  loveFeedback)

// fs.mkdir("Coba_bikin_folder", () => {

// } )

// console.log(writeResult)


// menimpa isi konten dari indeex.txt
fsSync.writeFileSync("./index.txt",  'ketimpa ga cinta kita part4')

async function bacaSuratCinta() {
    try {
        const bacaSuratCinta = await fs.readFile('./index.txt', "utf-8") 
        console.log(`ini surat cinta ${bacaSuratCinta}`)
    } catch (error) {
        console.log(error)
    }
}

bacaSuratCinta()

// INI ASYNC nya
// asynchronus file read/write
loveLetter = fs.readFile("./index.txt" , "utf-8", (err, data) => {
    console.log(`ini line 23 : ${data}`)
})




console.log(`ini line 29 : ${loveLetter}`)