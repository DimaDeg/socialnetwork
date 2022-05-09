import React from "react";
import {MessageType} from "../../../../Redux/DialogsReducer";



export const Message:React.FC<MessageType> = (props:MessageType) => {
    return(
        <div key={props.id}>
            {props.message}
        </div>
    )
}