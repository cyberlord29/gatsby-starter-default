import * as React from "react"

import Layout from "../layout"
import Seo from "../seo"
import IntroCard from "../IntroCard/IntroCardService"
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from '../IntroCard/IntroCardBanner.element'
import styled from 'styled-components';
import Courses from "../Courses/Courses"
import Booking from "../Booking/Booking"
import gatsby from '../../images/gatsby-icon.png'
import { CourseItem } from "../Courses/Courses.elements"
import { FlexContainer } from "../../globalStyles"
import ProcessFlow from "../Graphic/ProcessFlow"

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

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
  box-shadow: 0px 0px 0px 0px #445884;
  background: linear-gradient(to right, #445884, #627092);
  border-radius: 16px;
  border: none;
  background-color: white;
  width: 400px;
  padding: 20px 10px;
  margin: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 20px 0px;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px 30px;
  height: 100%;
  width: 100%;
  max-width: 800px;
  
  @media (max-width: 768px) {
    margin: 0px 15px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  width: 100%;
  text-align: left;
  color: white;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin-top: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Product = ({title, serviceList, children, description, reverse=false}) => {
  return (
    <ServiceItem style={{ width: "100%" }}>
      <ProductContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </ContentContainer>
      </ProductContainer>
    </ServiceItem>
  )
}

const IndexPage = ({title, description, serviceList=[]}) => (
  <Layout>
    <IntroCard title={title} description={
      Array.isArray(description) 
        ? description.map((text, i) => (
            <React.Fragment key={i}>
              {text}
              {i < description.length - 1 && <><br/><br/></>}
            </React.Fragment>
          ))
        : description
    }/>
    <ProcessFlow />
    <div style={{color: "white", fontSize: "36px", fontWeight: "600", textAlign: "center", padding: "20px", background: "#5DA9FF"}}>
        What We Offer 
    </div>
    <IntroCardContainer style={{background: "#E0F4FF", paddingTop: "40px"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            {serviceList.map((service,i) => (
                <Product key={service.title} title={service.title} reverse={i%2===0}>
                    <div>
                        {Array.isArray(service.content) 
                            ? service.content.map((text, i) => (
                                <p key={i} style={{marginBottom: i < service.content.length - 1 ? "20px" : "0"}}>
                                    {text}
                                </p>
                              ))
                            : <p>{service.content}</p>
                        }
                    </div>
                </Product>
            ))}
        </div>
    </IntroCardContainer>
    <Booking />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

