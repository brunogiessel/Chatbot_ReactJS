import React from 'react'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field} from 'formik'
import handleSubmit from './handle_submit'

import './login.css'

const validations = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

const Login = () => {
    return (
        <div>
            <div className="auth">
                <h1 className="title">Bem Vindo ao Chatbot React</h1>
                <h2>Login</h2>
                <Formik 
                    initialValues={{}} 
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="login">
                        <div className="login-group">
                            <Field
                                name ="username"
                                className="login-field" 
                            />
                            <ErrorMessage
                                component="span"
                                name="username"
                                className="login-error" 
                            />
                        </div>
                        <div className="login-group">
                            <Field
                                name ="password" 
                                className="login-field" 
                            />
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="login-error" 
                            />
                        </div>
                        <button className="login-button" type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login