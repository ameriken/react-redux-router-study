const array1 = [0, 1, 2, 3, 4];

// indexは配列の何番目か
// ouputは配列の中身
const newArray1 = array1.map((output,index) => {
    return `${index}番目は${output}です。`;
});

console.log(newArray1);

//この例がわかりやすくて、phpでいうforeach();
const array2 = ["tanaka", "nakanishi", "sasaki", "koyama", "oda"];
const newArray2 = array2.map((output,index) => {
    return `${index}番目は${output}です。`;
});
console.log(newArray2);
