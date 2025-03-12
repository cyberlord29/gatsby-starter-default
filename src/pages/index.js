import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from '../components/IntroCard/IntroCard.element'
import styled from 'styled-components';
import Courses from "../components/Courses/Courses"
import Booking from "../components/Booking/Booking"

export const Banner = styled.div`
  background-color: #445588;
  height: 275px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 36px;
  padding: 0px 3rem;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;


const IndexPage = () => (
  <Layout>
    <IntroCard/>
    {/* <Banner>
    We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.

    </Banner> */}
    <IntroCardContainer  style={{backgroundColor: "#445588", padding: "80px"}}>
            <div>
            <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", color: "#fff"}}>
              We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.
            </IntroTitle>
            <DescriptionContainer style={{marginBottom: "5px", color: "#fff"}}>
                {'We assist data-driven companies in enhancing operational efficiency, reducing costs, and creating new revenue streams through the implementation of Generative AI solutions.'}
            </DescriptionContainer>
            <DescriptionContainer style={{marginBottom: "10px", color: "#fff"}}>
                {'Our AI experts can develop AI solutions from pilot to production within weeks, not years. Our development approach merges clear strategies, deep industry knowledge, and technical expertise to accelerate progress.'}
            </DescriptionContainer>
            <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                {/* {'Join our mailing list or arrange a callback.'} */}
            </DescriptionContainer>
            </div>
    </IntroCardContainer>
    <Courses/>
    <Booking></Booking>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

