// Global scope

// a var function scope-ú
// a függvények határozzák meg a scope-ot
var globalName = "Joe";

function someThing() {
    //var globalName = "Jack";
    globalName = "Piri"; // a globális változót változtatom meg.
    console.log(globalName);
}
someThing();

console.log(globalName);


// a let block scope-ú
// a blokkok határozzák meg a scope-ot
let name = "Sanyi";

// let name = "Varga Béla";
/*
    Memória takarékosság céljából
    nem engedi meg, hogy a let-es változót,
    újra deklaráljam.
    
    A var-ral létrehozott változót engedi újra deklarálni.
    A let-tel létrehozott változót nem engedi újra deklarálni.
*/
{
    //let name = "Pisti";
    name = "Pisti";
    console.log(name);
}

console.log(name);

// const
/**
 * A konstans változók nevét érdemes nagy betűvel írni.
 * pl. NEV, ERTEK, ... stb.
 * A konstans változó nem definiálható újra.
 *
 */

const NEVE = "Géza";
//NEVE = "Béla";
{
    //NEVE = "Ubul";
    const NEVE = "Ubul";
    console.log(NEVE);
}

console.log(NEVE);