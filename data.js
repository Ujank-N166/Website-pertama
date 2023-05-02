const nama = "Jajang Nurjaman";
let usia = 28;

const biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;
    if(usia > 10 && usia < 19) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia > 29) {
        generasi = "generasi muda";
    }
    else if (usia > 2 && usia <11) {
        generasi = "generasi anak dewasa";
    }
    else if (usia < 3) {
        generasi = "generasi anak";
    }
    else {
        generasi = "generasi not available";
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generateBiodata();