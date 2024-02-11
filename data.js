const nama= 'hendro';
let usia=7;
// console.log(nama);
// console.log(usia);

let biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata(){
    // console.log(`nama saya adalah ${nama} dan usia saya adalah ${usia}`)
    let generasi;
    if (usia >20 && usia <30){
    generasi = ("generasi remaja")
    }
    else if (usia >0 && usia <5){
    generasi = ("generasi balita")
    }
    else{
    generasi = ("generasi anak-anak")
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);
generateBiodata();
