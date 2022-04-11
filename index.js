// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    return cats.pop()
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
    return cats;
}
function appendCat(name){
    let cat = cats.slice();
    cat.push(name);
    return cat;
}
function prependCat(name){
    let cat = cats.slice();
    cat.unshift(name);
    return cat;
}
function removeLastCat(name){
    let cat = [...cats];
    cat.splice(2,1);
    return cat;
}
function removeFirstCat(name){
    let cat = [...cats];
    cat.splice(0,1);
    return cat;
}