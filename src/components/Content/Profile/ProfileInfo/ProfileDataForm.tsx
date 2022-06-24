import {ContactsProfileType, ProfileUserType, saveProfileInfo} from "../../../../Redux/reducers/profile-reducer";
import React from "react";
import {Nullable} from "../../../../API/Api";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import s from './ProfileInfo.module.css'
import * as Yup from "yup";

type ProfileDataFormType = {
    profile: ProfileUserType
    toggleEditMode: () => void
}

type InitialValuesType = {
    fullName: string
    aboutMe: Nullable<string>
    lookingForAJob: boolean
    lookingForAJobDescription: Nullable<string>
    contacts: ContactsProfileType
}

export const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile, toggleEditMode}) => {

    const {contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName} = profile
    const dispatch = useDispatch()

    const InitialValues: InitialValuesType = {
        fullName: fullName,
        aboutMe: aboutMe,
        lookingForAJob: lookingForAJob,
        lookingForAJobDescription: lookingForAJobDescription,
        contacts: {
            facebook: contacts.facebook,
            github: contacts.github,
            instagram: contacts.instagram,
            vk: contacts.vk,
            mainLink: contacts.mainLink,
            twitter: contacts.twitter,
            website: contacts.website,
            youtube: contacts.youtube
        }
    }

    const onSubmit = (values: InitialValuesType) => {
        dispatch(saveProfileInfo(values));
        toggleEditMode()
    }

    const SignupSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is Required').typeError('Required'),
        aboutMe: Yup.string().required('Required').typeError('Required'),
        lookingForAJobDescription: Yup.string().required('Required').typeError('Required'),
    })

    return (<div className={s.info}>
        <Formik initialValues={InitialValues} onSubmit={onSubmit} validationSchema={SignupSchema}>
            <Form>
                <div><label htmlFor={'fullName'}><b>Full name: </b>
                    <Field placeholder={'full name'} classname={s.input} name={'fullName'} id={'fullName'}/>
                    <ErrorMessage name={'fullName'} render={msg => (<div className={s.error}>{msg}</div>)}/>
                </label>
                </div>
                <div><label htmlFor={'aboutMe'}><b>aboutMe: </b>
                    <Field placeholder={'About Me'} classname={s.input} name={'aboutMe'} id={'aboutMe'}/>
                    <ErrorMessage name={'aboutMe'} render={msg => (<div className={s.error}>{msg}</div>)}/>
                </label></div>
                <div><label htmlFor={'lookingForAJob'}><b>looking For A Job: </b>
                    <Field classname={s.input} type={'checkbox'} name={'lookingForAJob'} id={'lookingForAJob'}/>
                </label></div>
                <div><label htmlFor={'lookingForAJobDescription'}><b>looking For A Job Description: </b>
                    <Field placeholder={'Description'} classname={s.input} name={'lookingForAJobDescription'} id={'lookingForAJobDescription'}/>
                    <ErrorMessage name={'lookingForAJobDescription'}
                                  render={msg => (<div className={s.error}>{msg}</div>)}/>
                </label></div>
                <div>
                    <b>Contacts:</b> {Object.keys(contacts).map(key =>
                    <div className={s.contacts} key={key}>
                        <label htmlFor={key}><b>{key}: </b>
                            <Field classname={s.input} name={'contacts.'+key} id={key}/>
                        </label>
                    </div>
                )
                }
                </div>
                <button type={'submit'}>Save</button>
            </Form>
        </Formik>
    </div>)
}