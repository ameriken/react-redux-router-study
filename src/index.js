const array1 = [0, 1, 2, 3, 4];

// indexは配列の何番目か
// ouputは配列の中身
// trueが返す場合のみ配列だけを採用
const newArray1 = array1.filter((output,index) => {
    return output > 3
});

console.log(newArray1);

const array2 = ["tanaka", "nakanishi", "sasaki", "koyama", "oda"];
const newArray2 = array2.filter((output,index) => {
    return output === 'nakanishi';
});
console.log(newArray2);

const array3 = ["nakanishi", "Furukawa", "tanaka"];
const newArray3 = array3.filter((output,index) => {
    return output.length > 7;
});
console.log(newArray3);
