// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

const ages = [32, 33, -1, 40];
const result = () => ages.every(item => item > 0);
console.log(result());