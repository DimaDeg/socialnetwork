import {InitialDialogsType, SendMessageAC} from "../../../Redux/reducers/dialogs-reducer";
import {Dialogs} from './Dialogs';
import {AppStateType} from "../../../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import React from "react";

type MapStateType = {
    DialogsPage: InitialDialogsType
}

type MapDispatchToProps = {
    sendMessage: (message:string) => void
}
export type DialogsPageType = MapStateType & MapDispatchToProps


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        DialogsPage: state.DialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (message) => dispatch(SendMessageAC(message)),
    }

}

const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)
export default DialogsContainer