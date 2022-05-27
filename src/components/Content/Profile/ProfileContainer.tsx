import React, {JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {ProfilePageType, ProfileUserType, setUserProfile} from "../../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from 'redux';


type MapStatePropsType = {
    profile: ProfileUserType | null
    // status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
    // updateStatus: (status:string) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerType & {params:{ userId: string }}>{

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

export const CustomWithRouter = <P extends object>(Component: React.ComponentType<P>): React.FC => {
    return function WithProps (props: any) {
        const params = useParams()
        return (
            <Component {...props} params={params} />
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

export default compose<React.ComponentType>((connect(mapStateToProps, {setUserProfile})),CustomWithRouter)(ProfileContainer)
