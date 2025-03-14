import React from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../images/landing.png'
import axios from 'axios';
import { FlexContainer } from '../../globalStyles';

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = (props) => {
    return (
        <div>
          <IntroCardContainer>
              <IntroLeftContainerHeader>
                  <div>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px"}}>
                      Our Story
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "18px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      Advanta a vested interest in the success of our customers; if they succeed we succeed.<br/><br/>
                      We share our passion for innovation to nurture and inspire the next generation of businesses built and leveraged by AI.
                  </DescriptionContainer>
                  </div>
              </IntroLeftContainerHeader>
              <IntroLeftContainer className="" style={{flexBasis: "50%"}}>
                  <div style={{width: "100%"}}>
                      <img
                          src={landing}
                          style={{width: "100%", objectFit: "contain", objectPosition: "top right"}}
                          >
                      </img>
                  </div>
              </IntroLeftContainer>
          </IntroCardContainer>
            <FlexContainer style={{display: "flex", width: "100%", justifyContent: "center",
            backgroundColor: "#F7F9FF", padding: "50px 0px", justifyContent: "space-evenly"}}
            >
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                      Who we are?
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      We specialize in AI-driven solutions, helping businesses leverage data to enhance automation, decision-making, and customer experiences.
                  </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                      What we do?
                    </IntroTitle>
                    <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      We build AI-powered systems, including chatbots, intelligent knowledge bases, personalized recommendations, and content generation tools to drive efficiency and engagement.
                    </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                      Why choose us?
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      Our team consists of business experts, AI experts, and engineers with deep industry experience.
                  </DescriptionContainer>
                </FeatureItemLarge>
            </FlexContainer>
        </div>
    )
}

export default IntroCard
