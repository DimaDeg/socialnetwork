import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {getProfile, ProfileUserType} from "../../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from 'redux';
import {Login} from "../Login/login";


type MapStatePropsType = {
    profile: ProfileUserType | null
    isAuth: boolean
    // status: string
}

type MapDispatchPropsType = {
    getProfile: (id: number) => void
    // updateStatus: (status:string) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerType & { params: { userId: string } }, {}> {

    componentDidMount() {
        let userId = Number(this.props.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Login/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth
    }
}

export const CustomWithRouter = <P extends object>(Component: React.ComponentType<P>): React.FC => {
    return function WithProps(props: any) {
        const params = useParams()
        return (
            <Component {...props} params={params}/>
        )
    }
}
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose<React.ComponentType>((connect(mapStateToProps, {getProfile})), CustomWithRouter)(ProfileContainer)
