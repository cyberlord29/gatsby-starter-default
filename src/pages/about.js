import React from 'react'
import {IntroCardAboutPage } from '../components'
import { AboutContainerAboutPage } from '../components/About/About.element'
import Layout from "../components/layout"
import Booking from '../components/Booking/Booking'

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
          
            </AboutContainerAboutPage>
                          </div>
            <Booking></Booking>
        </Layout>
    )
}

export default AboutPage
