let randomArray = ['Barry', 'Berry', 'Sjakie', 'Frrits', 'Fristi', 'Meneer Pannenkoek']

let myFilter = function (array) {
    array.map(function(name) {
        if (name.includes('rr')) {
            console.log(name)
            return name;
        } else {
            return;
        }
    })
    Array.from(array);
}

console.log('Array voor function:', randomArray); 

let filteredArray = myFilter(randomArray);

console.log('Array na function:', filteredArray)
