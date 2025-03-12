import React, { useState } from 'react'

import { Banner, InputField, Button } from './Booking.element'
import { FlexContainer, Underline } from '../../globalStyles'
import './index.css'

const Booking = ({lone, close}) => {

    const [form, setForm]  = useState({name: "", email: ""})

    const initCalendly = () => {
      console.log(form)
       window.Calendly.initPopupWidget({
        //  url: 'https://link.elite360.io/widget/bookings/lti-strategy-call',
         prefill: form
       });
    }

    return (
        <div id="calendly" style={{backgroundColor: "#F7F9FF", padding: `${lone?"0px":"5%"}`}}>
          <Banner style={{ height: "auto", borderRadius: "6px" }}>
          {lone && <span style={{textAlign: "right", marginLeft: "100%", fontSize: "20px", cursor: "pointer", color: "grey"}}
            onClick={close}>&#x2715;</span>}
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "8px"}}>
                Book A Free Consultation
            </div>
            <Underline width={10} style={{backgroundColor: "white"}}/>
          </div>
          <div id="elite"></div>
              <FlexContainer style={{marginBottom: "30px" }}>
                <div style={{marginRight: "10px", marginTop: "14px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>First Name</div>
                    <InputField id="name" onChange={(e)=>setForm({...form,name: e.target.value})} placeholder="Your First name"></InputField>
                </div>
                <div style={{marginTop: "15px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>Last Name</div>
                    <InputField id="email"onChange={(e)=>setForm({...form,email: e.target.value})} placeholder="Your Last name"></InputField>
                </div>
              </FlexContainer>
              <FlexContainer style={{marginBottom: "30px" }}>
                <div style={{marginRight: "10px", marginTop: "15px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>Email</div>
                    <InputField id="email"onChange={(e)=>setForm({...form,email: e.target.value})} placeholder="Type your email"></InputField>
                </div>
                <div style={{ marginTop: "14px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>Telephone</div>
                    <InputField id="name" onChange={(e)=>setForm({...form,name: e.target.value})} placeholder="Type your number"></InputField>
                </div>
              </FlexContainer>
              <Button onClick={initCalendly}>BOOK FREE CONSULATION</Button>
          </div>
          </Banner>
        </div>
    )
  }
  
  export default Booking
  