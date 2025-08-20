let a = 9;
let b = 4;
let hasil;

// 1. Operator penambahan +
hasil = a + b;
console.log("a + b = ", a + b);
console.log("a + b = ", hasil);
console.log("a + b = ${hasil}");

// ` = backtick, " = kutif 2, ' = kutif 1

console.log(`a + b = ${hasil}`);

// 2. Operator pengurangan -
hasil = a - b;
console.log(`a - b = ${hasil}`);

// 3. Operator pembagian /
hasil = a / b;
console.log(`a / b = ${hasil}`);

// 4. Operator perkalian *
hasil = a * b;
console.log(`a * b = ${hasil}`);

// 5. Operator modulus/modulo %
hasil = a % b;
console.log(`a % b = ${hasil}`);

// 6. Operator Pangkat/ Eksponensial **
let x = 4;
let y = 2;
hasil = 4 ** 2;
console.log(`a pangkat/eksponensial b = ${hasil}`);

// 7. Operator Increment ++ => ditambah 1
x++;
hasil = x;
console.log(`Increment dari nilai x = ${hasil}`);

// 8. Operator Decrement -- => dikurang 1
y--;
hasil = y;
console.log(`Decrement dari nilai y = ${hasil}`);
