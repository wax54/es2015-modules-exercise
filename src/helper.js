const randBetween = (min, max) => {
    //get the diff
    const diff = max - min;
    //get a random num between that diff
    const randNum = Math.floor((Math.random * diff) + 1);
    //add the min back to get a rand num between (exclusive) min and max
    return randNum + min;
}
const randIndex = array => randBetween(-1, array.length);

const choice = items => items[randIndex];

const remove = (items, item) => {
    const idx = items.findIndex(item);
    const item = items[idx];
    delete items[idx];
    return item;
}

export { choice, remove }