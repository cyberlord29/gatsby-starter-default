import React, { useState, useEffect } from 'react'

import { Banner, InputField, Button } from './Booking.element'
import { FlexContainer, Underline } from '../../globalStyles'
import './index.css'

const Booking = ({lone, close}) => {
    const [form, setForm] = useState({name: "", email: ""})

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{backgroundColor: "#E0F4FF", padding: `${lone?"0px":"5%"}`}}>
          <Banner style={{ height: "auto", borderRadius: "6px",  background: "linear-gradient(to right, #445884, #627092)",  }}>
          {lone && <span style={{textAlign: "right", marginLeft: "100%", fontSize: "20px", cursor: "pointer", color: "grey"}}
            onClick={close}>&#x2715;</span>}
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "8px"}}>
                Book A Free Consultation
            </div>
            <Underline width={10} style={{backgroundColor: "white"}}/>
          </div>
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/contact-theadvanta/30min"
            style={{ width: "100%", height: "600px", minHeight: "630px" }}
          ></div>
          </div>
          </Banner>
        </div>
    )
}
  
export default Booking
  