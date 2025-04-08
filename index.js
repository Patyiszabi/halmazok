let betuk = new Set(['a', 'b', 'c', 'd']); 
for (let betu of betuk) {
    console.log(betu);
}
betuk.add("f");
let betu = "t";

betuk.add(betu);

if (betuk.has(betu)) {
    console.log("Ez az elem(" + betu + ") a halmazban van:");
}

betuk.delete(betu);

let iterator = betuk.values();
console.log(iterator);

for (let betu of betuk) {
    console.log(iterator.next().value);
}

let a = new Set();
let b = new Set();

for (let i = 0; i < 20; i++) {
    a.add(Math.floor(Math.random() * 100) + 1);
    b.add(Math.floor(Math.random() * 100) + 1);
}


console.log(a);
console.log(b);

console.log ("Két halmaz különbsége: " +  a.difference(b));

console.log("Két halmaz metszete: " + a.intersection(b));

console.log("Két halmaz unionja: " + a.union(b));

console.log("A halmaz részhalmaza- e a B halmaznak: " + a.issubset(b));

let input = 0
do{
    input = prompt(parseInt("Adj meg egy számot 1 és 100 között:"));
}
while (input < 1 || input > 100 || isNaN(input));

if (a.has(input))
{
    console.log("Az elem(" + input + ") a halmazban van");
}
else
{    
    console.log("Az elem(" + input + ") a halmazban nincs");
}