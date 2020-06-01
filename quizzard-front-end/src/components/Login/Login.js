import React from 'react'
import { Formik, FastField, ErrorMessage, } from "formik";
import {object, string} from "yup";
import { useHistory } from 'react-router-dom';
import SubmitButton from "../submit-button";
import { useAuthContext } from "../../contexts/auth";

const INITIAL_VALUES = {
    email: '',
    password: '',
}

const SCHEMA = object().shape({
    email: string().email().required('Email is required'),
    password: string().required('Password is required').min(8, 'At least 8 characters'),
})

const Login = () => {
    const { loginStart, loading } = useAuthContext();
    const history = useHistory();
    const onSubmit = async (values) => {
        const { email, password } = values;
        const user = await loginStart(email, password);
        if (user) {
            history.push('/play/quiz');
        }
    };
    return (
        <>
            <title>Home - Quiz App</title>
            <div id="home">
                <section>
                    <h1>Login</h1>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={SCHEMA}
                        onSubmit={onSubmit}
                    >
                        <div>
                            <FastField name="email" type="email" placeholder="Email"  />
                            <ErrorMessage name="email" />
                            <FastField name="password" type="password" placeholder="Password" />
                            <ErrorMessage name="password" />
                            <SubmitButton text="Login" loading={loading} />
                        </div>
                    </Formik>
                </section>
            </div>
        </>
    )
}
export default Login;
