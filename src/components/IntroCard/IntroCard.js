import React, { useState } from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader } from './IntroCard.element'
import one from '../../images/1.png'
import two from '../../images/2.png'
import axios from 'axios';

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = (props) => {
    const [email, setEmail] = useState(0, "")
    const [show, toggleModal]  = useState(1)

    const submitLead = () => {
        // axios.post(
        //     `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?course=${'none'}&email=${email}&name=${''}&mobile=${''}`,
        //     email,
        //     {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        // );
        toggleModal(show+1)
    }

    return (
        <>
        {/* <Form emailInput={email} showInput={show}/> */}
        <IntroCardContainer>
            <IntroLeftContainerHeader>
                <div>
                <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px"}}>
                    Ready to transform your business ?
                </IntroTitle>
                <DescriptionContainer style={{marginBottom: "5px"}}>
                    {'Get started and see how AI can transform your marketing, sales and business processes.'}
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "12px", marginBottom: "10px"}}>
                    {/* {'Get in touch'} */}
                </DescriptionContainer>
                <div style={{display: "flex"}}>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email"></InputField>
                    <Button style={{borderTopLeftRadius:"0px", borderBottomLeftRadius: "0px"}} onClick={submitLead}>Get in touch</Button>
                </div>
                <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                    {'Join our mailing list or arrange a callback.'}
                </DescriptionContainer>
                </div>
            </IntroLeftContainerHeader>
            <IntroLeftContainer className="" style={{flexBasis: "50%", background: "linear-gradient(to right, #53648B, #627092)"}}>
                <div style={{width: "100%", padding: "20px"}}>
                    <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                        <img
                            src={one}
                            style={{width: "30%", objectFit: "contain", }}
                            >
                        </img>
                        <img
                            src={two}
                            style={{width: "70%", objectFit: "contain", }}
                            >
                        </img>
                    </div>

                    {/* <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <FeatureItem>
                        Experienced Mentors
                    </FeatureItem>
                    <FeatureItem>
                        Professional Traders
                    </FeatureItem>
                    <FeatureItem>
                        Weekly Webinars
                    </FeatureItem>
                    </div> */}
                </div>
            </IntroLeftContainer>
        </IntroCardContainer>
        </>
    )
}

export default IntroCard
