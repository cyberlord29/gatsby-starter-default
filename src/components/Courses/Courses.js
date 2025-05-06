import React from 'react'
import { Banner, CoursesContainer, Header, Button, CourseItem } from './Courses.elements'
import { FlexContainer, Underline } from '../../globalStyles'
import { Link, navigate } from 'gatsby'
import gatsby from '../../images/gatsby-icon.png'
import BusinessInfographicSection from '../Graphic/BusinessInfographic'

const Product = ({title, content, children, to}) => {
    return (
        <CourseItem>
            <div style={{
                height: "100%", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between"
            }}>
                <div style={{
                    padding: "0px 0px 20px", 
                    fontWeight: "400", 
                    fontSize: "24px", 
                    color: "white",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                    marginBottom: "15px"
                }}>
                    {title}
                </div>

                <div style={{
                    display: "flex", 
                    justifyContent: "flex-start", 
                    flexGrow: 1,
                    marginBottom: "20px",
                }}>
                    {children}
                </div>
                
                <div style={{
                    width: "100%", 
                    display: "flex", 
                    justifyContent: "flex-end"
                }}>
                    <Link to={to} style={{textDecoration: "none"}}>
                        <Button style={{
                            position: "relative",
                            paddingRight: "35px",
                            transition: "all 0.3s ease"
                        }}>
                            Explore
                            <div style={{
                                position: "absolute",
                                right: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                transition: "all 0.3s ease",
                                opacity: "0.8"
                            }}>
                                →
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>

            <style>
                {`
                ${Button}:hover {
                    padding-right: 45px !important;
                }

                ${Button}:hover > div {
                    transform: translate(5px, -50%);
                    opacity: 1;
                }
                `}
            </style>
        </CourseItem>
    )
}

const Courses = (props) => {
    return (
        <CoursesContainer>
            <BusinessInfographicSection/>

            <div style={{padding: "40px 7% 70px"}}>
                <FlexContainer>
                    <Product title="Web Services" to="/web-services">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Comprehensive web development and integration solutions.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>Business Websites</li>
                                <li>Landing Websites</li>
                                <li>Payment System Integrations, CRM integrations</li>
                                <li>Customer Care setup</li>
                                <li>Integrations and workflow setup</li>
                                <li>SEO and discovery</li>
                            </ul>
                        </div>
                    </Product>
                    <Product title="AI Applications" to="/genai-applications">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Advanced AI solutions for modern business needs.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>Chatbots (LLM's, GenAI, Agentic AI)</li>
                                <li>Knowledge base</li>
                                <li>Recommendations and Personalization</li>
                                <li>Content Generation (Text and possibly Multimedia)</li>
                            </ul>
                        </div>
                    </Product>
                    <Product title="Strategy, Sales and Marketing" to="/strategy-sales-marketing">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Comprehensive business growth solutions.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>GTM Strategy</li>
                                <li>Sales Automation (Lead generation, Email automation, LinkedIn marketing, etc)</li>
                                <li>Marketing</li>
                                <li>Brand Management</li>
                                <li>Dashboards</li>
                            </ul>
                        </div>
                    </Product>
                </FlexContainer>
                <FlexContainer>
                    <Product title="Automation" to="/automation">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Streamline your business processes with intelligent automation.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>Workflow automations</li>
                                <li>Business Processes automations</li>
                                <li>Customer Lifecycle automations</li>
                            </ul>
                        </div>
                    </Product>
                    <Product title="Applications & Product Development" to="/applications-product-development">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Custom software solutions for your business needs.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>Web Applications</li>
                                <li>Consoles</li>
                                <li>Mobile Apps</li>
                                <li>Custom Client Interfaces (tailored to specific business needs)</li>
                            </ul>
                        </div>
                    </Product>
                    <Product title="Customer Data Intelligence" to="/customer-data-intelligence">
                        <div>
                            <p style={{ fontSize: "18px" }}>
                                Transform your data into actionable insights.
                            </p>
                            <ul className='arrows' style={{margin: "20px 10px", fontSize: "20px"}}>
                                <li>Integrating Data – Unifying first- & nth-party sources</li>
                                <li>Customer Intelligence – Driving targeted ads</li>
                                <li>Ad Optimization – Enhancing campaigns on Google, Facebook, Reddit</li>
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
