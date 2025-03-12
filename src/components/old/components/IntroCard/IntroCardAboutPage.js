import React from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../img/landing.png'
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
                      London Trading Institute has a vested interest in the success of our students; if they succeed we succeed.<br/>
                      We share our passion for trading to nurture and inspire the next generation of professional traders.
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
                      We provide a leading service in trading education and mentorship, recognised globally to help individuals become professional traders.
                  </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                      What we do?
                    </IntroTitle>
                    <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      We create successful & disciplined traders through Experience, education & inspiration.
                    </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                      Why choose us?
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      We aim to inspire both academic & personal Career advancements.
                  </DescriptionContainer>
                </FeatureItemLarge>
            </FlexContainer>
        </div>
    )
}

export default IntroCard
