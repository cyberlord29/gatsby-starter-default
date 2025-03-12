import React from 'react'
// import metric from '../../img/metric.svg'
import nehal from '../../images/nehal.jpeg'
import man from '../../images/nehal.jpeg'

import { Banner, AboutContainer } from './About.element'
import { FlexContainer } from '../../globalStyles'

const About = (props) => {
    return (
        <div style={{backgroundColor: "#F7F9FF"}}>
            <Banner style={{ height: "auto" }}>
            <FlexContainer style={{ display: "flex", justifyContent: "center", padding: "0px 0px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "25px 0px"}}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "2px" }}>
                        {/* <img
                            src={metric}
                            height={50}
                        >
                        </img> */}
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>86%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "290px", marginTop: "4px"}}>
                        of traders improved their trading after joining London Trading Institute.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",margin: "25px 0px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <img
                            src={metric}
                            height={50}
                        >
                        </img> */}
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>92%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "230px", marginTop: "4px"}}>
                        of traders believe the membership is a good value.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "25px 0px"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <img
                            src={metric}
                            height={50}
                        >
                        </img> */}
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>98%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "290px", marginTop: "4px"}}>
                        of traders believe our scans help them come to The market prepared.
                    </div>
                </div>
            </FlexContainer>
            </Banner>
            <Banner></Banner>
            <AboutContainer>
                <FlexContainer className="mobile-reverse-col" style={{alignItems: "center"}}>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who are the London Trading Institute?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", fontWeight: "normal" }}>
                            We are a Group of Financial Traders that run a Privately Traded Investment Fund in London.<br/><br/>
                            As of right now, the two owners Andy and Alberto manage over $2.5M in funds and trade everything from FX to Crypto to Algorithmic Trading Systems.<br/><br/> 
                            Based either online or in our state of the art offices, we run a variety of programmes so that students can learn directly from Professional Traders.<br/><br/> 
                            Our goal is to bridge the gap between theoretical knowledge and the practical elements required for you to consistently make money in the markets.
                        </div>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div>
                        <img
                            src={man}
                            style={{width: "100%"}}
                        >
                        </img>
                    </div>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who is Andy Demi?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", fontWeight: "normal"}}>
                        A Trader for 18 years, he’s worked on the Trading Floors at some of the Biggest Banks & Hedge Funds such as J.P. Morgan, Schroders & Barclays Capital.<br/><br/> 
                        Whilst managing a $200M account for a Hedge Fund back in 2015, part of Andy’s job was to teach the Junior Traders how to make more money.<br/><br/>
                        They once made $1.5M in 1 day of trading and their Success uncovered a Passion for Training & Mentoring and this is how LTI was born.<br/><br/>
                        A respected figure within the London Financial District, he has appeared as a guest speaker at Financial Events, TV Shows and Universities.<br/><br/>
                        He is proud to be working in collaboration with Middlesex University to provide course content for one of the modules of their finance degrees.
                        </div>
                    </div>
                </FlexContainer>
                <FlexContainer className="mobile-reverse-col" style={{alignItems: "center"}}>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who is Alberto Pallotta ?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", fontWeight: "normal"}}>
                            Alberto started his trading career within the financial industry 17 years ago, beginning by trading stocks; through his tenure in the industry he has achieved some incredible feats. Alberto is an engineering graduate, possessing a Masters in Financial Mathematics, and is a Fitch Certified Quant.<br/><br/>
                            Alberto engages in both algorithmic and discretionary trading. He trades options, futures and ETFs (the latter which he also invests in). Due to his expertise, credentials and his passion for teaching, Alberto is frequently asked to be a guest lecturer in several universities. Including Middlesex University, Warwick University and London Metropolitan University.
                        </div>
                    </div>
                    <div>
                        <img
                            className="alberto-pic"
                            src={nehal}
                            style={{width: "450px"}}
                        >
                        </img>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div style={{padding: "50px"}}>
                        <div style={{fontSize: "24px", color:"#172647"}}>
                            Middlesex University
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", fontWeight: "normal"}}>
                        As part of a cohesive partnership between the London Trading Institute and Middlesex University, students from the Economics and Finance degrees have had the opportunity to learn the core foundational and practical components of Applied Financial Trading.<br/><br/>
                        Through our joint mission of helping students fulfil their academic potential, we have been able to help hundreds of students to learn more about Investments and Financial Trading, and in particular the practical skills needed to build a fruitful career in a very demanding industry.<br/><br/>
                        We are proud of what we have achieved to date, and we look forward to working together for many more years with our collective goal of enhancing lives through education.
                        </div>
                    </div>
                </FlexContainer>
            </AboutContainer>
        </div>
    )
}

export default About
