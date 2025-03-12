import React from 'react'
import { FeatureContainer, FeatureTitle, FeatureDescription, FeatureCard, FeatureItemsContainer, FeatureItemIllustration, FeatureItemTitle, FeatureItemDescription, FeatureItem} from './Features.elements'
import one from '../../img/one.png'
import two from '../../img/two.png'
import logo from '../../img/logo.svg'
const Features = (props) => {
    const {title, description, items} = props.data;
    return (
        <FeatureContainer>
            <FeatureCard>
                <FeatureTitle>
                  {title}
                </FeatureTitle>
                <FeatureDescription>
                   {description}
                </FeatureDescription>
            </FeatureCard>
            <FeatureItemsContainer>
                {items.map((item,i) => {
                console.log("../.."+item.image);
                return (<FeatureItem>
                    <FeatureItemIllustration>
                        {i+1==1&&<img src = {one} height={120}/>}
                        {i+1==2&&<img src = {two} height={120}/>}
                        {i+1==3&&<img style={{marginBottom:"40px", marginTop: "40px"}} src = {logo} height={40}/>}
                    </FeatureItemIllustration> 
                    <FeatureItemTitle>
                        {item.title}
                    </FeatureItemTitle>
                    <FeatureItemDescription>
                        {item.description}
                    </FeatureItemDescription>
                </FeatureItem>)})}
            </FeatureItemsContainer>
        </FeatureContainer>
    )
}

export default Features
