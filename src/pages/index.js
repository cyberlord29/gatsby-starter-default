import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from '../components/IntroCard/IntroCardBanner.element'
import styled from 'styled-components';
import Courses from "../components/Courses/Courses"
import Booking from "../components/Booking/Booking"
import gatsby from '../images/gatsby-icon.png'
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

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png",
];

const IndexPage = () => (
  <Layout>
    <IntroCard/>
    {/* <Banner>
    We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.

    </Banner> */}

     <IntroCardContainer  style={{background: "linear-gradient( to right, #445884 0%,#5DA9FF 30%, #5DA9FF 70%, #627092 100% ", padding: "40px"}}>
     <div className="overflow-hidden w-full py-4">
      <div className="flex whitespace-nowrap animate-scroll mask-fade" style={{ justifyItems: "space-evenly"}}>
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="logo"
            height={50}
            className="object-contain"
            style={{ marginRight: "40px" }}
          />
        ))}
      </div>

      {/* Styling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: max-content;
          animation: scroll 10s linear infinite;
        }

            .mask-fade {
      mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
      -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
    }
      `}</style>
    </div>
    </IntroCardContainer>
    <IntroCardContainer  
    style={{background: "linear-gradient(to right, #445884, #627092)"}}
   
    >
            <div>
            <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", color: "#fff"}}>
              We empower clients with Gen AI models and agents that drive growth and ROI
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

