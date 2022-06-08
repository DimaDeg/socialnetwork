import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void,
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer)