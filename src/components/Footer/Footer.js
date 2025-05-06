import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import facebook from '../../images/facebook.png'
import like from '../../images/like.png'
import love from '../../images/love.png'
import youtube from '../../images/youtube.png'
import { 
    FooterContainer, 
    SocialMediaContainer,
    CopyrightContainer,
    NavIconContainer,
    IconLabelContainer,
    IconLabel,
    Banner
} from './Footer.elements'
import { FlexContainer } from '../../globalStyles';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <FooterContainer>
             {/* <div id="banner" style={{marginTop: "40px"}}/> */}
             <NavIconContainer>
                {/* <StaticImage src="../../img/logo2.png" height = {60} width={70}/> */}
                <IconLabelContainer>
                </IconLabelContainer>
            </NavIconContainer> 
            <Banner style={{height: "10px", padding: "0px", backgroundColor: "#5DA9FF"}}></Banner>
            <Banner style={{fontSize: "14px", backgroundColor: "#627092"}}>
                {/* <div style={{display: "flex", flexDirection:"column", cursor: "pointer"}}>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        About
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Courses
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Free Resources
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Events
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        Indicators
                    </div>
                </div> */}
                <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <div style={{fontSize: "16px", textAlign: "end"}}>
                            Advanta Technologies
                        </div>
                        <div style={{fontSize: "16px", textAlign: "end", marginBottom: "10px"}}>
                            contact@TheAdvanta.com
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            167-169 5th Floor
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            Great Portland Street
                        </div>
                        <div style={{fontSize: "12px", textAlign: "end"}}>
                            Canada, W1W 5PF
                        </div>
                    </div> 
                </div>
            </Banner>
            <Banner style={{backgroundColor: "#445884"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        @2025 Advanta Technologies | In order to improve your browsing experience Advanta Technologies, uses cookies on this site.
                    </div>
                    <div style={{fontSize: "16px", textAlign: "start"}}>
                        By continuing to use our site you agree to our 
                        <Link to="/404" style={{color: "white", margin: "0px 10px"}}>
                            Privacy Policy
                        </Link>
                    </div>
                    {/* <FlexContainer style={{fontSize: "12px", textAlign: "start", marginTop: "20px", alignItems: "center"}}>
                   
                    <SocialMediaContainer>
                        <a href="">
                            <img
                                style={{marginLeft: "30px"}}
                                src={facebook}
                                height={50}
                                >
                            </img>
                        </a>
                        <a href="">
                            <img style={{marginLeft: "30px"}}
                                src={youtube}
                                height={50}
                                >
                            </img>
                        </a>
                    </SocialMediaContainer> 
                    </FlexContainer> */}
                </div>
          
            </Banner>
            <CopyrightContainer>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
