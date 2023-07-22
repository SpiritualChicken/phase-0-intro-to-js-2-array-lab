// Write your solution here!

let cats = [
    "Milo",
    "Otis",
    "Garfield",
]
function  destructivelyAppendCat(name) {
    cats.push(name);
}

function  destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    const copyCat = [...cats, name] 
    return copyCat
}


function prependCat(name) {
    const copyCat = [name, ...cats] 
    return copyCat
}

function removeLastCat() {
    const copyCat = cats.slice(0, -1);
    return copyCat;

}

function removeFirstCat() {
    const copyCat = cats.slice(1);
    return copyCat;

}