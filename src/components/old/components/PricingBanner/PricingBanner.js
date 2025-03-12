import React from 'react'
import { PricingBannerContainer, BannerTitle, BannerDescription } from './PricingBanner.elements'

const PricingBanner = (props) => {
    const {title, description} = props
    return (
        <PricingBannerContainer>
            <BannerTitle>
                {title}
            </BannerTitle>
            <BannerDescription>
                {description}
            </BannerDescription>
        </PricingBannerContainer>
    )
}

export default PricingBanner
