// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages"
// bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức
// "displayInfo" để in ra thông tin về sách.

let title = "ReactJs";
let author = "PhuongTD";
let pages = 10
let book = {
    title,
    author,
    pages,
    displayInfo: function () {
        return `${title},${author},${pages} `;
    }
};
console.log(book.displayInfo());

