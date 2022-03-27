import {InitialDialogsType, SendMessageAC, UpdateMessageTextAC} from "../../../Redux/DialogsReducer";
import {Dialogs} from './Dialogs';
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateType = {
    DialogsPage: InitialDialogsType
}

type MapDispatchToProps = {
    sendMessage: (text: string) => void
    updateMessage: (text: string) => void
}
export type DialogsPageType = MapStateType & MapDispatchToProps


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        DialogsPage: state.DialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: () => dispatch(SendMessageAC()),
        updateMessage: (text) => dispatch(UpdateMessageTextAC(text))
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)