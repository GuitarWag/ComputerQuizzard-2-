import React from 'react'
import { Formik, FastField, ErrorMessage, } from "formik";
import {object, string} from "yup";
import { useHistory } from 'react-router-dom';
import SubmitButton from "../submit-button";
import {useAuthContext} from "../../contexts/auth";

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
}

const SCHEMA = object().shape({
    name: string().required('Name is required'),
    email: string().email().required('Email is required'),
    password: string().required('Password is required').min(8, 'At least 8 characters'),
})

const Register = () => {
    const { registerStart, loading } = useAuthContext();
    const history = useHistory();
    const onSubmit = async (values) => {
        const { name, email, password } = values;
        const user = await registerStart(name, email, password);
        if (user) {
            history.push('/');
        }
    };
    return (
        <>
            <title>Home - Quiz App</title>
            <div id="home">
                <section>
                    <h1>Register</h1>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={SCHEMA}
                        onSubmit={onSubmit}
                    >
                        <div>
                            <FastField name="name" placeholder="Name" />
                            <ErrorMessage name="name" />
                            <FastField name="email" type="email" placeholder="Email"  />
                            <ErrorMessage name="email" />
                            <FastField name="password" type="password" placeholder="Password" />
                            <ErrorMessage name="password" />
                            <SubmitButton text="Register" loading={loading} />
                        </div>
                    </Formik>
                </section>
            </div>
        </>
    )
}
export default Register;