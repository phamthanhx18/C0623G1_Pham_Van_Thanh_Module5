// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

const ages = [3, 10, 18, 20];
const result = (number) => ages.some((item) => item === number) ? number : "không tìm thấy";
console.log(result(4));