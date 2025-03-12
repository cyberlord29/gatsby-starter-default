import React from 'react'
import { HIWCardContainer, HIWDescription, HIWTitle } from './HIWCard.elements'


const HIWCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.cards.map((data) => <HIWCardContainer>
                <HIWTitle>{data.title}</HIWTitle>
                <HIWDescription>{data.description}</HIWDescription>
            </HIWCardContainer>)}
        </div>
    );
}

export default HIWCard
