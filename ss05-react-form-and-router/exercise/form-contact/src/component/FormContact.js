import {Formik, Form, Field,ErrorMessage} from "formik";
import * as Yup from "yup";

function FormContact() {
    const initValue = {
        name: "",
        phone: "",
        email: "",
        message: ""
    }
    const validateObject = {
        name: Yup.string().required("Tên không được để trống !")
            .matches("[a-zA-Z]{1,}","Tên chỉ được chứa chữ !"),
        phone: Yup.string().required("SĐT Không được để trống")
            .matches("(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})", "Số điện thoại không đúng định dạng"),
        email: Yup.string().required("Message không được để trống")
            .email("Định dạng email không hợp lệ !")
            .matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
        message: Yup.string().required("Message không được để trống")
    }
    function handleSubmit() {
        alert("Add contact successfully!!!");
    }
    return (
        <>
            <h1>Liên hệ</h1>
            <Formik
                initialValues={initValue}
                onSubmit={handleSubmit}
                validationSchema={Yup.object(validateObject)}>
                <Form>
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <ErrorMessage name="name" component="p" className="error"/>
                    <Field type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="phone">Số điện thoại: </label>
                    <br/>
                    <ErrorMessage name="phone" component="p" className="error"/>
                    <Field type="text" name="phone" id="phone"/>
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <br/>
                    <ErrorMessage name="email" component="p" className="error"/>
                    <Field type="text" name="email" id="email"/>
                    <br/>
                    <label htmlFor="message">Message: </label>
                    <br/>
                    <ErrorMessage name="message" component="p" className="error"/>
                    <Field type="text" component="textarea" name="message" id="message" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </Form>
            </Formik>
        </>
    )
}

export default FormContact;