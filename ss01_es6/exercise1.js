// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).

const numbers = [65, 44, 12, 4];
const newArr = numbers.map((number) => {
    if (number > 5) {
        return number;
    }
})

const resultArray = newArr.filter((number) => number !== undefined );
console.log(resultArray);