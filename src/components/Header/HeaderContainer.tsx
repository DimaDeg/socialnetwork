import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {logout} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {



    render() {
        return (<div>
            <Header {...this.props}/>
        </div>)
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)