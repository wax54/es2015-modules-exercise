const randBetween = (min, max) => {
    //get the diff
    const diff = (max - min) + 1;
    //get a random num between that diff
    const randNum = Math.floor(Math.random() * diff);
    //add the min back to get a rand num between (inclusive) min and max
    return randNum + min;
}
const randIndex = array => randBetween(0, array.length - 1);

const choice = items => {
    return items[randIndex(items)];
}

const remove = (array, item) => {
    console.log(item);
    const idx = array.findIndex(element => element === item);
    console.log(idx);
    array.splice(idx, 1);
    console.log(array)
    return item;
}

export { choice, remove }