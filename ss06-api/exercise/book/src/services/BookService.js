import axios from "axios";

export const getAllBook = async () => {
    try {
        let res = await axios.get("http://localhost:3301/books");
        return res.data;
    } catch (e) {
        return undefined;
    }
}

export const createBook = async (book) => {
    try {
        await axios.post("http://localhost:3301/books",book);
        return true;
    } catch (e) {
        return false;
    }
}

export const deleteBook = async (book) => {
    try {
        await axios.delete(`http://localhost:3301/books/${book.id}`);
        return true;
    } catch (e) {
        return false;
    }
}

export const getBook = async (bookId) => {
    try {
        let data = await axios.get(`http://localhost:3301/books/${bookId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}