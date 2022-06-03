import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {getProfile, ProfileUserType} from "../../../Redux/profile-reducer";
import {compose} from 'redux';
import { withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {CustomWithRouter} from "../../../HOC/withRouter";



type MapStatePropsType = {
    profile: ProfileUserType | null
    status: string
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
        status:state.ProfilePage.status
    }
}

export default compose<React.ComponentType>((connect(mapStateToProps, {getProfile})),CustomWithRouter,withAuthRedirect)(ProfileContainer)
