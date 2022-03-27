import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return(
        <div>
            <div >
                <img
                    className={s.bi}
                    src='https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm'
                    alt={''}/>
            </div>
            <div className={s.item}>
                Avatar + Description
            </div>
        </div>
    )

}