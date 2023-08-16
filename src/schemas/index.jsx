import * as Yup from "yup";

export const SignUPschema = Yup.object({

    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Plese enter your email!"),
    password: Yup.string().min(6).required("plese enter your Password"),

});