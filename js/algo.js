/*

Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE

*/
console.log("Összegzés algoritmus pld:\n\n");
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
    console.log(i + ". ciklus után az Összeg: ", sum);
}
console.log("Összeg: ", sum);

/*

Megszámlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE

*/
// Számoljuk meg a páros számokat
console.log("Megszámlálás algoritmus pld: Megszámoljuk a páros számokat!\n\n");
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Páros számok: ", db);
/*

Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
szám = következő szám
HA szám > lagnagyobb, AKKOR
legnagyobb = szám
FELTÉTEL VÉGE
CIKLUS VÉGE

*/

console.log("Szélső érték keresése: Maximum, Minimum érték keresése!\n\n");
let biggest = numericArray[0];
let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if( numericArray[i] > biggest) {
        biggest = numericArray[i];
    } else if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("A legnagyobb elem értéke: ", biggest);
console.log("A legkisebb elem értéke: ", smallest);
/*

Eldöntés tétele (algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
szám = következő elem
HA igaz a feltétel a számra, AKKOR
találat = IGAZ
FELTÉTEL VÉGE
CIKLUS VÉGE

*/

console.log("Eldöntés algoritmusa: Található a listában 5-ös szám?\n\n");
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("Ez a tömb tatalmazza az 5-ös számot: ", contains);
