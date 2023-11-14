// Sử dụng Rest parameter và Spread operator để tạo một hàm nhận
// vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrayNumber]) => {
    return arrayNumber.reduce((total,num) => total + num);
}
console.log(sumArray([1,3,4,5,1221,3]));