/**
 * 
 * @param { Number } min the smallest number you would accept getting back
 * @param { Number } max the largest number you would accept getting back
 * @returns a number between (inclusively) min and max
 */

const randBetween = (min, max) => {
    //get the diff
    const diff = (max - min) + 1;
    //get a random num between that diff
    const randNum = Math.floor(Math.random() * diff);
    //add the min back to get a rand num between (inclusive) min and max
    return randNum + min;
}

/** get a random (valid) index back for a given array*/
const randIndex = array => randBetween(0, array.length - 1);

/** get a random item from the given array back */
const choice = items => items[randIndex(items)];

/** remove an item from an array returns the item (if found) */
const remove = (array, item) => {
    const idx = array.findIndex(element => element === item);
    if (idx === -1) return undefined;
    else return array.splice(idx, 1);
}

export { choice, remove }