import React from 'react';
import { useFormik} from 'formik';

type DialogFormTextareaPropsType = {
    sendMessage: (text: string) => void
}

export const DialogForm: React.FC<DialogFormTextareaPropsType> = ({sendMessage}) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: (values, {resetForm}) => {
            sendMessage(values.message)
            resetForm({values: {message: ''}})
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor={'message'}>
                <input name={'message'} id={'message'} placeholder={'Enter your message'} onChange={formik.handleChange} value={formik.values.message}/>
            </label>
            <button disabled={formik.values.message === ''} type={'submit'}>Send</button>
        </form>
    )
}