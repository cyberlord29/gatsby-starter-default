import React from 'react'
import { YellowButton } from '../../globalStyles'
import { ContactLabel, Form, FormContainer, InputContainer, InputField, Label } from './ContactForm.elements'

const ContactForm = () => {
    const submitForm = async (e) => {
        const { name, email, mobile } = e.target.elements;
        let formData = {
            name: name.value,
            email: email.value,
            mobile: mobile.value,
        };
        let response = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formData),
        });
        alert("Thank you for contacting us, someone will get back to you soon");
    };
    return (
        <FormContainer>
            <Form onSubmit = {submitForm}>
                <ContactLabel>
                    Contact Us
                </ContactLabel>
                <InputContainer>
                    <Label>
                        Full Name
                    </Label>
                    <InputField id="name"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Email
                    </Label>
                    <InputField id="email"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Mobile
                    </Label>
                    <InputField id="mobile"/>
                </InputContainer>
                <YellowButton wrap>Submit</YellowButton>
            </Form>
        </FormContainer>
    )
}

export default ContactForm
