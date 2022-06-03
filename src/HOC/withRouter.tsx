import React from "react";
import {useParams} from "react-router-dom";

export const CustomWithRouter = <P extends object>(Component: React.ComponentType<P>): React.FC => {
    return function WithProps(props: any) {
        const params = useParams()
        return (
            <Component {...props} params={params}/>
        )
    }
}