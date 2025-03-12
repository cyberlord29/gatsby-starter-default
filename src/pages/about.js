import React from 'react'
import {IntroCardAboutPage, Testimonial, Booking } from '../components'
import { AboutContainerAboutPage } from '../components/About/About.element'
import { DescriptionContainer } from '../components/IntroCard/IntroCard.element'
import { Card, FlexContainer, Header, RDiv, Underline } from '../globalStyles'
import Layout from "../components/layout"

import nehal from '../images/nehal.jpeg'
import man from '../images/man.jpeg'


const AboutPage = () => {
    return (
        <Layout>
            <IntroCardAboutPage/>
            <div style={{backgroundColor: "#F7F9FF", padding: "0px 5%"}}>
              {/* <Header style={{padding: "0px", fontSize: "34px"}}>
                    <div>
                        <div>
                            Culture Matters
                        </div>
                        <Underline/>
                    </div>
              </Header>
              <DescriptionContainer  style={{fontSize: "18px", marginTop: "20px", color: "#4B586A"}}>
              We at Advanta, are as proud of our culture and values as we are of our services. In addition the organisation supports grassroots and International charities wherever possible.
              </DescriptionContainer> */}
            <AboutContainerAboutPage style={{position: "static", margin: "0px 0px"}}>
                <Header style={{padding: "0px",margin: "100px 0px", marginBottom: "50px", fontSize: "34px"}}>
                      <div>
                          <div>
                              Our Team
                          </div>
                          <Underline/>
                      </div>
                </Header>
                <FlexContainer style={{alignItems: "center", padding: "0px 20px"}}>
                    <div>
                        <img
                            src={nehal}
                            style={{width: "100%"}}
                            >
                        </img>
                    </div>
                    <div style={{padding: "50px"}}>
                      <div style={{fontSize: "24px", color:"#172647"}}>
                        Nehal Mahmood
                      </div>
                      <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        CEO | B.Tech & MBA Schulich
                        <br/>
                        <br/>
                      </div>
                          <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", maxWidth: "800px"}}>
                          Experienced management consultant with 6+ years of expertise in business strategy, technology, and transformative AI projects to drive business value. Skilled in optimizing operations, enabling data-driven decision-making, and delivering strategic impact.<br/><br/><br/>
                          </div>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center", marginTop: "50px"}}>
                      <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                        Maneesh Dharma
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                      CTO | B.Tech, Computer Science & Engineering
                    </div>
                      <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", maxWidth: "800px"}}>
                      Over 7 years of experience in building scalable digital products, optimizing business processes, and integrating AI solutions. Specializing in system design, software architecture, automation, and product development. <br/><br/>
                      </div>
                    </div>
                    <div>
                        <img
                            src={man}
                            style={{width: "100%"}}
                            >
                        </img>
                    </div>
                </FlexContainer>
            </AboutContainerAboutPage>
                          </div>
            {/* <Booking/> */}
        </Layout>
    )
}

export default AboutPage
