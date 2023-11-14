// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến
// "first" và các phần tử còn lại vào một mảng mới "rest".

const array1 = [1, 4, 8, 130, 44];
const [first, ...rest] = array1;
console.log(first);
console.log(rest);