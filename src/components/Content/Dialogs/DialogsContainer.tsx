import {InitialDialogsType, SendMessageAC} from "../../../Redux/dialogs-reducer";
import {Dialogs} from './Dialogs';
import {AppStateType} from "../../../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

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

export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)
