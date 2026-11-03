//06-conversiones.js 
//Qué hace?: Convierte entre millas y kilometos con un decimal 
//Comó correrlo: node 06-conversiones.js 

const KM_POR_MILLA = 1.609344;

function millasAKMm (millas){
    return Math.round(millas * KM_POR_MILLA * 10)/10;
}

function kmAMillas (km){
    return Math.round((km / KM_POR_MILLA)*10)/10;
}

console.log(millasAKMm(26.2));
console.log(kmAMillas(10));
console.log(kmAMillas(-5));