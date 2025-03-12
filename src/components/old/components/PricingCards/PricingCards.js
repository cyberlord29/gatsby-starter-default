import React from 'react'
import {
    PricingCardsContainer,
    PricingCard,
    PricingPlanName,
    Price,
    PriceCycle,
    PriceDescription,
    PerksContainer,
    Perk,
    PriceContainer,
    PerkContainer
} from './PricingCards.elements'

import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { WhiteButton } from '../../globalStyles';

const PricingCards = (props) => {
    const plans = props.data
    return (
    <PricingCardsContainer>
        {plans.map((pricingCard) => 
        <PricingCard {...pricingCard.isFeatured ? "primary" : ""}> 
           <PricingPlanName>
               {pricingCard.planName}
           </PricingPlanName>
           {/* <PriceContainer>
              <PriceCycle>{pricingCard.cycle}</PriceCycle>
           </PriceContainer> */}
           {/* <PriceDescription>{pricingCard.description}</PriceDescription> */}
           <PerksContainer>
            {pricingCard.perks.map((perk) => 
               (
               <PerkContainer>
                   <IoCheckmarkDoneCircle color = "#0070ba" />
                   <Perk>
                     {perk}
                   </Perk> 
               </PerkContainer>
               )
            )}
           </PerksContainer>
           <div style={{display: 'flex', flexDirection: "column"}}>
            <Price style={{margin: "10px"}}>{pricingCard.price}</Price>
            <a target="_blank" href="https://www.paypal.com/myaccount/transfer/homepage/external/profile?flowContextData=M5_tU75wk68h1gqaQPv3FH7BxhB3Tjbm1YuPZIQtrygO5llXQaOFEJAIjEdXDNa-zgTFwQXZgtiOACyD55ndi5HBbUi_pgOXxEzubL2nEaZ30Q6gvUEjpnRh8P-X3eW7DgmVDYGQAyM4AHOn7jV5JOPnwFG0xd42e6tJEnsiKYxF6T1Gnk4heXlrTO2E3dYJf_NDefp1PV3K5pEuYV8Zoiw9fhd0MXTa6quLA0">
                <WhiteButton>Buy now</WhiteButton>
            </a>
           </div>
        </PricingCard>)}
    </PricingCardsContainer>
    );
}

export default PricingCards
