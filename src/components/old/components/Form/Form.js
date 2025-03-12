import React, {useEffect, useState} from 'react'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from '../ContactForm/ContactForm.elements'
import { Button } from '../Courses/Courses.elements'
import { Modal, ModalContainer } from '../../globalStyles'
import axios from 'axios';
import { navigate } from "gatsby"

const IndexPage = (props) => {
  const {emailInput, showInput, isCourse} = props
  const [display, toggleModal] = useState(false)
  const [email, setEmail]  = useState(emailInput)
  const [name, setName]  = useState()
  const [mobile, setMobile]  = useState()

  const submitLead = () => {
    // axios.post(
    //   `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?course=${course}&email=${email}&name=${name}&mobile=${mobile}`,
    //   email,
    //   {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    // );
    navigate('/thank-you');
  }
  useEffect(() => {
    if(showInput>1)
    toggleModal(true)
  }, [showInput])

  useEffect(() => {
    setEmail(emailInput)
  }, [emailInput])

    if(!display) return(<></>);

    return (
      <>
        <ModalContainer>
          <Modal>
            <span style={{display: display,textAlign: "right", margin: "15px", fontSize: "20px", cursor: "pointer", color: "grey"}}
            onClick={()=>{toggleModal(false)}}>&#x2715;</span>
            <FormContainer style={{margin: "20px 5%"}}>
                <ContactLabel style={{fontSize: "26px"}}>
                  Let us know more about you
                </ContactLabel>
                <div id="eliteFormIntro"></div>
                {!isCourse && <iframe src="https://link.elite360.io/widget/form/J11rF0mdeN5wriZvoySY" style={{border: "none", width: "100%", height: "500px"}} scrolling="no"  id="J11rF0mdeN5wriZvoySY"></iframe>}
                {isCourse && <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
                  <iframe src="https://link.elite360.io/widget/form/jnMEBpE6U5adoDjslcQU" style={{border: "none", height: "500px"}} scrolling="no" id="jnMEBpE6U5adoDjslcQU"></iframe>
                </div>
                }
                {/* <InputContainer>
                    <Label>
                        Name
                    </Label>
                    <InputField onChange={(e)=>{setName(e.target.value)}} id="name"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Mobile
                    </Label>
                    <InputField onChange={(e)=>{setMobile(e.target.value)}} id="number"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Email
                    </Label>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} id="email" value={email}/>
                </InputContainer>
                <Button style={{fontSize: "30px"}} onClick={submitLead}>Submit</Button> */}
            </FormContainer>
          </Modal>
      </ModalContainer>
      </>
    )
}

export default IndexPage