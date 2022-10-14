// 1. Do “The sum of a range” exercise in Chap 4
const range = (start, end, step) => {
    if (!step) step = 1
    let arr = []

    if (step < 0)
        for (let i = start; i >= end; i += step) arr.push(i)
    else
        for (let i = start; i <= end; i += step) arr.push(i)

    return arr
}
const sum = (arr) => {
    let s = 0
    arr.forEach(e => s += e);
    return s
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

