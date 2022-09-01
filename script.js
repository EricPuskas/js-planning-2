/**
 * While loops
 *
 * while(conditie care trebuie sa fie adevarata) {
 *     Executarea codului
 *  }
 */

let indice = 0;

while (indice < 10) {
  console.log(indice); // 2
  indice += 1; // indice = indice + 1; // indice++;

  if (indice === 2) {
    continue;
  }

  console.log("Hello");
}

/**
 * Arrays
 */
//               0       1        2
const lista = ["John", "Mary", "Tyler"];
const baieti = new Array();

let i = 0;

// i = 1
// 1 < 3
while (i < lista.length) {
  console.log(`Iteratie: ${i} - ${lista[i]}`);
  // i = 1;

  // lista[1]

  /**
   * Continue va reluat iteratia mai departe, fara sa execute codul de dupa continue;
   */
  if (lista[i] === "Mary") {
    i += 1;
    continue;
  }

  /**
   * Break ne va scoate complet din iteratie
   */
  if (lista[i] === "Marcel") {
    break;
  }

  // ["John"]
  baieti.push(lista[i]);

  i++;
}

console.log("Baieti:", baieti);

const array1 = [1, 2, 3];
console.log("Array1:", array1);
array1.push(4, 5, 6);
console.log("Array1_2:", array1);

let j = 0;

console.log("Array length:", array1.length);

while (j <= array1.length - 1) {
  console.log("X - Iteratie: ", j, array1[j]);
  j++;
}

j = 0;

while (j < array1.length) {
  console.log("Y - Iteratie: ", j, array1[j]);
  j++;
}
// 0      1        2
const array2 = ["Bike", "Horse", "Fruit"];

// initializare|conditia de oprire| comanda de executie dupa fiecare iteratie
for (let indice = 0; indice < 5 && array2.length > 2; indice++) {
  // indice = 0
  console.log(array2[indice]);

  // indice++
}

//               0 1 2 3 4
const myArray = [1, 2, 3, 4, 5];
const result = [5, 4, 3, 2, 1];

/**
 * i++; i = i + 1; i += 1;
 * i--; i = i - 1; i -= 1;
 */
const reverseArray = (array) => {
  const newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

console.log("Reverse my array please:", reverseArray(myArray));

/**
 * Tipuri de date
 * Primitive si Obiecte
 */

// Tipuri primitive de date (string, boolean, number)
// la reasignare la o alta variabila, ele se copiaza
// Tipuri de obiecte (array, obiecte, functiile)
// nu se copiaza, se face o legatura intre ele, la aceeasi zona de memorie

let numar1 = 5;
let numar2 = numar1;
console.log("Referinte numere1:", numar1, numar2);
numar2 = 10;
console.log("Referinte numere2:", numar1, numar2);

let boolean1 = false;
let boolean2 = boolean1;
console.log("Referinte booleans1:", boolean1, boolean2);
boolean2 = true;
console.log("Referinte booleans2:", boolean1, boolean2);

let string1 = "Test";
let string2 = string1;
console.log("Referinte string1:", string1, string2);
string2 = "Test3";
console.log("Referinte string2:", string1, string2);

// Pointers -> point to
let testArray1 = [1, 2, 3];
let testArray2 = testArray1;
console.log("Referinte arrays1:", testArray1, testArray2);
testArray2.push(4);
console.log("Referinte arrays2:", testArray1, testArray2);

// Destructuring / Spread operator
let arrayA = [2, 4, 6, 8];
let arrayB = [...arrayA];

console.log("ArrayB:", arrayB);
arrayA.push(10);
arrayB.push(100);
console.log("...arrayA:", ...arrayA);

console.log("REZULTAT:", arrayA, arrayB);

/**
 * Destructuring, ... <- rest operator
 */
const [a, b, c, ...d] = arrayB;
console.log("a:", a);
console.log("x:", b, c, d);

const fruits = ["Apple1", "Banana", "Orange", "Apple", "Mango"];

/**
 * Push <- Impingem un nou element in array
 * Se adauga un indice nou la final
 */
fruits.push("Melon");

/**
 * Unshift <- Impingem un nou elemet in array LA INCEPUT!
 * Fiecare indice se va schimba pentru a acomodat noul indice 0
 */
fruits.unshift("Melon");
console.log("Unshift:", fruits);

/**
 * Concatenare <- Lipim un array de array-ul nostru existent
 * ! Nu se modifica array-ul initial, ci doar in rezultatul functiei avem array-ul combinat
 */
const result2 = fruits.concat([1, 2, 3, 4]);
console.log("result2:", result2);

/**
 * Pop <- Se scoate ultimul element din array
 */
fruits.pop();
console.log("POP:", fruits);

/**
 * Splice <- Sterge elemente din array, folosindu-se de un indice de inceput si se poate configura sa adauge elemente noi in locul acestora
 */
fruits.splice(2, 1, "Banana Inlocuit");
console.log("Splice:", fruits);

const bigArray = new Array(10000);
bigArray[250] = "Wow";

/**
 * Poetry Club Door Policy Ex 1
 *
 * truthy -> tinde spre adevarat (true)
 * falsey -> tinde spre false (false)
 */
// "", 0, 1, []
const frontDoorResponse = (text) => {
  if ("") return console.log("No text");
  return text[0];
};

frontDoorResponse("");

/**
 * Poetry Club Door Policy Ex 2
 */
const frontDoorPassword = (str) => {
  let newStrArray = [];

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      const primulChar = str[i];
      newStrArray.push(primulChar.toUpperCase()); // s -> S
      continue;
    }

    newStrArray.push(str[i].toLowerCase());
  }

  return newStrArray.join("");
};

console.log(frontDoorPassword("ShIrE"));
console.log(frontDoorPassword("SHIRE"));
console.log(frontDoorPassword("shire"));
console.log(frontDoorPassword("stANdS So High"));
