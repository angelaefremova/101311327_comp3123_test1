const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (mixedArray.filter((x) => typeof x === 'string')).map(x => x.toLowerCase());
console.log(lowerCaseWords);