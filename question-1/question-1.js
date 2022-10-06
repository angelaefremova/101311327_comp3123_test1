const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (mixedArray.filter((x) => typeof x === 'string')).map(x => x.toLowerCase());

const checkPromise = () =>
    new Promise((resolve, reject) => {
        resolve(lowerCaseWords);
        reject({ error: "There was and error!" })
    });

checkPromise().then((message) => {
    console.log(message)
})
    .catch((message) => {
        console.log(message)
    });

