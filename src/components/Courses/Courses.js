import React from 'react'
import { Banner, CoursesContainer, Header, Button, CourseItem } from './Courses.elements'
import { FlexContainer, Underline } from '../../globalStyles'
import { navigate } from 'gatsby'
import gatsby from '../../images/gatsby-icon.png'
const Product = ({title, content, children}) => {
    return (
        <CourseItem>
            <div style={{padding: "20px 0px", fontWeight: "600", fontSize: "30px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left"}}>
                <img src={gatsby} style={{width: "30%", padding: "5px"}}/>
                {title}
                {/* <Underline style={{background:"white"}}/> */}
            </div>

            <div style={{display: "flex", justifyContent: "flex-start", padding: "0px 0px"}}>
                {children}
            </div>
        </CourseItem>
    )
}

const Courses = (props) => {
    return (
        <CoursesContainer>
            <div style={{padding: "10px 7% 70px"}}>
                <Header style={{display: "flex", fontSize: "34px",}}>
                    <div>
                        <div>
                            What we offer
                        </div>
                        <Underline width={10}/>
                    </div>
                </Header>
                <FlexContainer>
                    <Product title="Applications">
                        <div>
                        <p>
                            Using customer data or Business data to build AI solutions
                        </p>
                        <div style={{ fontWeight: "100"}}>
                    <ul className='arrows' style={{margin: "20px 10px"}}>
                        <li>Chatbots</li>
                            
                        <li>Knowledge Base</li>
                        <li>Recommendations and Personalization</li>
                        <li>Content Generation (Text and possibly Multimedia)</li>
                    </ul>
                        </div>
                    </div>

                    </Product>
                    <Product title="Sales">
                        <div>
                            <p>
                                Leveraging AI to optimize sales processes and increase revenue.
                            </p>
                            <ul className='arrows'  style={{margin: "20px 10px"}}>

                                <li>Lead Scoring and Prioritization</li>
                                <li>Automated Outreach and Follow-ups</li>
                                <li>Sales Forecasting and Trend Analysis</li>
                                <li>AI-powered CRM Insights</li>
                                <li>Dynamic Pricing and Offer Optimization</li>
                            </ul>
                        </div>
                    </Product>

                    <Product title="Marketing">
                        <div>
                            <p>
                                Using AI to enhance marketing strategies and improve engagement.
                            </p>
                            <ul className='arrows'  style={{margin: "20px 10px"}}>

                                <li>Customer Segmentation and Targeting</li>
                                <li>AI-driven Content Generation and Copywriting</li>
                                <li>Ad Performance Optimization</li>
                                <li>Personalized Email and Campaign Automation</li>
                                <li>Sentiment Analysis for Brand Monitoring</li>
                            </ul>
                        </div>
                    </Product>
                </FlexContainer>
                <FlexContainer>
                        {/*<Course title="Crypto Like a Pro Trading System" img={clpt} page={'/crypto-like-a-pro-system'} duration={"3 months"} crypto/>*/}
                    {/* <Course title="Algorithms" img={algo} duration={"1 month"} difficulty={"intermediate"}/>
                    <Course title="Advanced Forex" img={atp1} duration={"1 month"} difficulty={"intermediate"}/> */}
                </FlexContainer>
                {/* <FlexContainer>
                    <Course title="Options" img={options} duration={"3 months"} difficulty={"intermediate"}/>
                </FlexContainer> */}
            </div>
        </CoursesContainer>
    )
}

export default Courses
