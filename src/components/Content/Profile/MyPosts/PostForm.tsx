import React from 'react';
import {useFormik} from 'formik';

type PostFormTextareaPropsType = {
    addPost: (text: string) => void
}

export const PostForm: React.FC<PostFormTextareaPropsType> = ({addPost}) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: (values, {resetForm}) => {
            addPost(values.post)
            resetForm({values: {post: ''}})
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor={'post'}>
                <input name={'post'} id={'post'} placeholder={'your post'}
                       onChange={formik.handleChange} value={formik.values.post}
                />
            </label>
            <button disabled={formik.values.post === ''} type={'submit'}>click</button>
        </form>
    )
}
