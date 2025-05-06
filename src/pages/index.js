import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroCard from "../components/IntroCard/IntroCard"
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from '../components/IntroCard/IntroCardBanner.element'
import styled from 'styled-components';
import Courses from "../components/Courses/Courses"
import Booking from "../components/Booking/Booking"
import Testimonials from "../components/Testimonials/Testimonials"
import gatsby from '../images/gatsby-icon.png'
import { CourseItem } from "../components/Courses/Courses.elements"
import { FlexContainer } from "../globalStyles"
import BusinessInfographic from "../components/Graphic/BusinessInfographic"
import Industries from "../components/Graphic/Industries"
import TypeWriter from "../components/TypeWriter/TypeWriter"

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
      <CourseItem style={{
          background: "linear-gradient(135deg, rgba(93, 169, 255, 0.1) 0%, rgba(68, 88, 132, 0.2) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "25px",
          borderRadius: "12px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          minHeight: "200px"
      }}>
          <div style={{height: "100%"}}>
              <div style={{
                  marginBottom: "15px",
                  fontWeight: "400",
                  fontSize: "22px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                  paddingBottom: "12px",
                  textAlign: "left"
              }}>
                  {title}
              </div>

              <div style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  opacity: "0.95",
                  textAlign: "left",
                  textJustify: "inter-word"
              }}>
                  {children}
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

    <TypeWriter />
    
    <IntroCardContainer  
      style={{background: "linear-gradient(to right, #445884, #627092)", paddingTop: "40px"}}
    > 
            <div>
              {/* <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", color: "#fff"}}>
                We empower clients with Gen AI models and agents that drive growth and ROI
              </IntroTitle> */}
              <DescriptionContainer style={{marginBottom: "5px", color: "#fff", textAlign: "left", textJustify: "inter-word"}}>
              We specialize in helping startups leverage AI, automation, and digital transformation to unlock new growth opportunities. Whether it's building intelligent AI applications, refining your sales and marketing strategy, automating business workflows, or developing seamless web and mobile solutions, Advanta is here to make technology work for you, not against you.
              </DescriptionContainer>
              <DescriptionContainer style={{marginBottom: "10px", color: "#fff", textAlign: "left", textJustify: "inter-word"}}>
              Our approach is simple, hands-on, and tailored so you don't need to be a tech expert to maximize efficiency, increase revenue, and stay ahead of the competition. We take the complexity out of digital transformation, making it accessible and actionable for startups at every stage.
              </DescriptionContainer>
              <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5", textAlign: "left"}}>
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
    <Industries/>
    <Testimonials/>
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

