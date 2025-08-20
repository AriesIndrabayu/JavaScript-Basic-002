// AND = &&
/*
Kondisi-1 && Kondisi-2
7 > 3 && 7 < 9
T && T = T
AND jika Kondisi Kiri dan Kondisi Kanan True maka hasilnya True selain itu Flase

Konddisi 1      vs      Kondisi 2       AND
    TRUE                   TRUE         TRUE
    FALSE                  TRUE         FALSE
    TRUE                  FALSE         FALSE
    FALSE                 FALSE         FALSE

Konddisi 1      vs      Kondisi 2       OR
    TRUE                   TRUE         TRUE
    FALSE                  TRUE         TRUE
    TRUE                  FALSE         TRUE
    FALSE                 FALSE         FALSE

Konddisi        NOT
    TRUE        FLASE
    FLASE        TRUE
*/
// OR = ||
// NOT = !

let nilai = 85;

// AND
console.log("Operator logika AND");
console.log(nilai > 75 && nilai < 90);
console.log(nilai < 60 && nilai > 80);
console.log(nilai > 60 && nilai == 90);
console.log(nilai == 60 && nilai == 90);

// OR
console.log("Operator logika OR");
console.log(nilai > 75 || nilai < 90);
console.log(nilai < 60 || nilai > 80);
console.log(nilai > 60 || nilai == 90);
console.log(nilai == 60 || nilai == 90);

// NOT
console.log("Operator logika NOT");
console.log(!nilai > 75);
console.log(!nilai < 75);
