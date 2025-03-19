import React from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../images/landing.png'
import axios from 'axios';
import { FlexContainer } from '../../globalStyles';
import one from '../../images/1.png'
import two from '../../images/2.png'

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = ({title, description}) => {
    return (
        <div>
          <IntroCardContainer>
              <IntroLeftContainerHeader>
                  <div>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", fontSize: "50px"}}>
                      {title}
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "18px", marginTop: "5px", maxWidth: "500px"}}>
                     {description}
                  </DescriptionContainer>
                  </div>
              </IntroLeftContainerHeader>
              <IntroLeftContainer className="" style={{flexBasis: "50%",    background: "linear-gradient(to right, #53648B, #627092)"}}>
                 <div style={{width: "100%", padding: "20px"}}>
                                    <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                                        <img
                                            src={one}
                                            style={{width: "30%", objectFit: "contain", }}
                                            >
                                        </img>
                                        <img
                                            src={two}
                                            style={{width: "70%", objectFit: "contain", }}
                                            >
                                        </img>
                                    </div>
                                </div>
              </IntroLeftContainer>
          </IntroCardContainer>
        </div>
    )
}

export default IntroCard
