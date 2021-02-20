import React from 'react'

import {FooterInner} from "../Organisms"
import {FooterLine} from "../Atoms/footer"

export const FooterTemplate = () => {
    return(
        <div class="footer">
			<FooterLine />
            <FooterInner />
        </div>
    )
}