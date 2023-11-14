// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age"
// từ một mảng chứa các đối tượng "person".

let arrayPerson = [
    {
        name: "ThanhPV",
        age: 22
    },
    {
        name: "PhuongTD",
        age: 25
    }
];

const [personA,personB] = arrayPerson;
console.log(personA.name);
console.log(personA.age);
console.log(personB.name);
console.log(personB.age);