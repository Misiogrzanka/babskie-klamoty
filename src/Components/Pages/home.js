import React from 'react'

import { HeaderTemplate, CardsTemplate, FooterTemplate } from '../Templates'

export const HomePage = () => {
    return(
        <React.Fragment>
            <HeaderTemplate />
            <CardsTemplate />
            <FooterTemplate />
        </React.Fragment>
    )
}