import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {AuthType, login} from "../../../Redux/reducers/auth-reducer";
import {Navigate} from "react-router-dom";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './login.module.css'


type InitialValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').typeError('Incorrect password')
})

export const Login = () => {

    const dispatch = useDispatch()
    const {isAuth} = useSelector<AppStateType, AuthType>(state => state.Auth)

    const InitialValues: InitialValuesType = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = (values: InitialValuesType) => {
        dispatch(login(values))
    }

    if (isAuth) return <Navigate to={'/profile'}/>

    return <div className={s.page}>
        <Formik initialValues={InitialValues} onSubmit={onSubmit} validationSchema={SignupSchema}>
            <Form>
                <div className={s.item}>
                    <label htmlFor={'email'}>
                        <Field className={s.input} placeholder={'email'} type={'text'} name={'email'} id={'email'}/>
                        <ErrorMessage name={'email'} render={msg => (<div className={s.error}>{msg}</div>)}/>
                    </label>
                </div>
                <div className={s.item}>
                    <label htmlFor={'password'}>
                        <Field className={s.input} placeholder={'password'} type={'password'} name={'password'} id={'password'}/>
                        <ErrorMessage name={'password'} render={msg => (<div className={s.error}>{msg}</div>)}/>
                    </label>
                </div>
                <div className={s.checkbox}>Remember Me
                    <label htmlFor={'rememberMe'}>
                        <Field type={'checkbox'} name={'rememberMe'} id={'rememberMe'}/>
                    </label>
                </div>
                <div className={s.item}>
                    <button className={s.button} type={'submit'}>Login</button>
                </div>
            </Form>
        </Formik>
    </div>
}