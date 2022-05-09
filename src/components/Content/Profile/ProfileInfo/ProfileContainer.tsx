import React from "react";
import {Profile} from "../Profile";
import axios from "axios";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {ProfilePageType, ProfileUserType, setUserProfile} from "../../../../Redux/profile-reducer";
import {useParams} from "react-router-dom";


type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileUserType | null
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
}

export class ProfileContainerAPI extends React.Component<ProfileContainerType & {param:{userId:string}},{}> {

    componentDidMount() {
        let userId = this.props.param.userId
        if(!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }


    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

export const withCustomWithRouter = <P extends object>(Component: React.ComponentType<P>): React.FC => {

    return function WithProps (props: any) {
        const params = useParams()
        return (
            <Component {...props} params={params} />
        )
    }
}

export let ProfileContainer = (connect(mapStateToProps, {setUserProfile}),withCustomWithRouter)(ProfileContainerAPI)