import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from '../components/IntroCard/IntroCardBanner.element'
import styled from 'styled-components';
import Courses from "../components/Courses/Courses"
import Booking from "../components/Booking/Booking"
import gatsby from '../images/gatsby-icon.png'
import { CourseItem } from "../components/Courses/Courses.elements"
import { FlexContainer } from "../globalStyles"
import BusinessInfographic from "../components/Graphic/BusinessInfographic"
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

const Product = ({title, content, children}) => {
  return (
      <CourseItem style={{background: "linear-gradient(to right, #445884, #5DA9FF)"}}>
          <div>
              <div style={{padding: "20px 0px", fontWeight: "600", fontSize: "24px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left"}}>
                  <img src={gatsby} style={{width: "10%", padding: "5px"}}/>
                  <div style={{ fontWeight: "600", fontSize: "24px", display: "flex", width: "100%"}}>
                  {title}

                  </div>
                  {/* <Underline style={{background:"white"}}/> */}
              </div>

              <div style={{display: "flex", padding: "0px 35px", textAlign: "left"}}>
                  {children}
              </div>
              <div>
                  {/* <Button>
                      Learn more
                  </Button> */}
              </div>
          </div>
      </CourseItem>
  )
}

const images = [
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Walt_Disney_wordmark.svg/2560px-Walt_Disney_wordmark.svg.png",50],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Riot_Games_wordmark.svg/2560px-Riot_Games_wordmark.svg.png", 50],
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png",50],
  ["https://logos-world.net/wp-content/uploads/2024/02/Twilio-Logo.png",80],
  ["https://www.wem.ca/media/2772/harryrosen-web-logo.png",70],
  ["https://brandlogos.net/wp-content/uploads/2023/08/sanofi-logo_brandlogos.net_c29es.png", 90]
];

const IndexPage = () => (
  <Layout>
    <IntroCard/>
    {/* <Banner>
    We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.

    </Banner> */}


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
              <FlexContainer>
                <Product title="Identify Needs">
                        <div>
                            <p>
                                We analyze your business to determine the best technology solutions for maximum impact.
                            </p>
                        </div>
                    </Product>
                    <Product title="Cost Effective Solutions">
                        <div>
                            <p>
                                We help you navigate high implementation costs by offering scalable, budget-friendly solutions that deliver real value.
                            </p>
                        </div>
                    </Product>
                    <Product title="Seamless Integration">
                        <div>
                            <p>
                                Our team ensures smooth adoption by integrating AI with your existing systems, minimizing disruptions and maximizing efficiency.
                            </p>
                        </div>
                    </Product>
                </FlexContainer>
                <FlexContainer>
                    <Product title="Skill Dev & Support">
                        <div>
                            <p>
                                We provide guidance and training to help your team effectively leverage AI, ensuring long-term success.
                            </p>
                        </div>
                    </Product>
                    <Product title="Future-Ready Strategy">
                        <div>
                            <p>
                                We don't just implement tech; we help future-proof your business with long-term strategies for sustainable growth.
                            </p>
                        </div>
                    </Product>
                    <Product title="Continuous Innovation">
                        <div>
                            <p>
                                We stay at the forefront of technological advancements to ensure your business remains competitive and innovative.
                            </p>
                        </div>
                    </Product>
                </FlexContainer>
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

