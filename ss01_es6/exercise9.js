// 9. Sử dụng Rest parameter để nhận vào một danh sách tên
// và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
const returnFomartListName = ([...arrayString]) => {
   let result = "Welcome";
    for (const resultElement of arrayString) {
        result += ", "+resultElement;
    }
    return result;
}
console.log(returnFomartListName(["Thanh","Pham","Van"]))