import React from 'react'

import {FooterSocial, FooterCopyright} from "../Atoms/footer";

export const FooterInner = () => {
    return(
        <div class="footer__inner">
            <FooterCopyright />
            <FooterSocial />
        </div>
    )
}