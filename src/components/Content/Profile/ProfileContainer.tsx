import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileUserType, updateStatus} from "../../../Redux/profile-reducer";
import {compose} from 'redux';
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {CustomWithRouter} from "../../../HOC/withRouter";


type MapStatePropsType = {
    profile: ProfileUserType | null
    status: string,
    authorizedUserId: number | null
}

type MapDispatchPropsType = {
    getProfile: (id: number) => void
    getStatus: (id: number) => void
    updateStatus: (text: string) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerType & { params: { userId: number } }, {}> {

    componentDidMount() {
        let userId = Number(this.props.params.userId)
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

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
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.id
    }
}

export default compose<React.ComponentType>(withAuthRedirect, (connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus
})), CustomWithRouter)(ProfileContainer)
