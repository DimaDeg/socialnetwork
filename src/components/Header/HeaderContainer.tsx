import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {getAuthUserData, setAuthUserData} from "../../Redux/auth-reducer";
import axios from "axios";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return (<div>
            <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
        </div>)
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserData, setAuthUserData})(HeaderContainer)