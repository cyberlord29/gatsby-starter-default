import React, {useState} from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import { FlexContainer, RadioButton, RadioButtonLabel } from '../../globalStyles';
import { navigate } from "gatsby"
import { Banner } from '../Courses/Courses.elements';

const IntroCard = (props) => {  


    return (
        <div>
          <Banner style={{justifyContent: "center"}}>
              Our Courses
          </Banner>
        </div>
    )
}

export default IntroCard
