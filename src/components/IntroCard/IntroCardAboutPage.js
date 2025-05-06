import React from 'react'
import { IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, IntroLeftContainerHeader } from './IntroCard.element'
import { FlexContainer } from '../../globalStyles'
import { CourseItem } from '../Courses/Courses.elements'
import styled from 'styled-components'
import one from '../../images/1.png'
import two from '../../images/2.png'
import nehal from '../../images/nehal.jpeg'
import man from '../../images/man.jpeg'

const TeamSection = styled.section`
  background: #5DA9FF;
  padding: 60px 0;
  color: #445884;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  margin: 20px 7% 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    margin: 20px 20px 60px;
  }
`

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 7%;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;

  letter-spacing: 1.2px;
  color: #445884;
  position: relative;
  padding-bottom: 20px;
  display: inline-block;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const TeamCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;

  &:hover {
    transform: translateY(-5px);
  }
`

const TeamImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${TeamCard}:hover & img {
    transform: scale(1.02);
  }
`

const TeamInfo = styled.div`
  padding: 25px 0;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TeamMemberName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #445884;
`

const TeamMemberTitle = styled.div`
  font-size: 16px;
  color: #5DA9FF;
  margin-bottom: 15px;
  font-weight: 500;
`

const TeamMemberBio = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #627092;
  opacity: 0.9;
  margin-bottom: 20px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  a {
    color: #445884;
    font-size: 15px;
    opacity: 0.8;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
      opacity: 1;
      color: #5DA9FF;
    }
  }
`

const AboutFeatureCard = styled(CourseItem)`
  width: calc(33.33% - 30px);
  min-height: 280px;
  background: linear-gradient(135deg, #445884 0%, #627092 100%);
  padding: 32px;
  margin: 0;
  cursor: default;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(68, 88, 132, 0.35);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    min-height: auto;
    padding: 28px;
  }
`

const CardTitle = styled.h3`
  color: white;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 1.2px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const CardDescription = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const IntroCardAboutPage = () => {
  const teamMembers = [
    {
      name: "Sharief Mahmood",
      title: "Founder | B.Tech & MBA Schulich",
      bio: "Experienced management consultant with 6+ years of expertise in business strategy, technology, and transformative AI projects to drive business value. Skilled in optimizing operations, enabling data-driven decision-making, and delivering strategic impact.",
      image: nehal,
      social: {
        linkedin: "https://www.linkedin.com/in/shaik-mahmood-sharief/",
        twitter: "https://twitter.com",
        email: "mailto:nehal@example.com"
      }
    },
    {
      name: "Maneesh Dharma",
      title: "Co-Founder | B.Tech, Computer Science & Engineering",
      bio: "Over 7 years of experience in building scalable digital products, optimizing business processes, and integrating AI solutions. Specializing in system design, software architecture, automation, and product development.",
      image: man,
      social: {
        linkedin: "https://www.linkedin.com/in/man-eesh/",
        twitter: "https://twitter.com",
        email: "mailto:maneesh@example.com"
      }
    }
  ];

  const features = [
    {
      title: "Who we are?",
      description: "We specialize in AI-driven solutions, helping businesses leverage data to enhance automation, decision-making, and customer experiences."
    },
    {
      title: "What we do?",
      description: "We build AI-powered systems, including chatbots, intelligent knowledge bases, personalized recommendations, and content generation tools to drive efficiency and engagement."
    },
    {
      title: "Why choose us?",
      description: "Our team consists of business experts, AI experts, and engineers with deep industry experience."
    }
  ]

  return (
    <div>
      <IntroCardContainer>
        <IntroLeftContainerHeader>
          <div>
            <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", fontSize: "50px"}}>
              Who are we?
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "18px", marginTop: "5px", maxWidth: "500px"}}>
              Advanta has a vested interest in the success of our customers; if they succeed we succeed.<br/><br/>
              We share our passion for innovation to nurture and inspire the next generation of businesses built and leveraged by AI.
            </DescriptionContainer>
          </div>
        </IntroLeftContainerHeader>
        <IntroLeftContainer className="" style={{flexBasis: "50%", background: "linear-gradient(to right, #53648B, #627092)"}}>
          <div style={{width: "100%", padding: "20px"}}>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
              <img src={one} style={{width: "30%", objectFit: "contain"}} alt="Feature 1" />
              <img src={two} style={{width: "70%", objectFit: "contain"}} alt="Feature 2" />
            </div>
          </div>
        </IntroLeftContainer>
      </IntroCardContainer>

      <FlexContainer style={{
        backgroundColor: "#F7F9FF",
        padding: "50px 7%",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {features.map((feature, index) => (
          <AboutFeatureCard key={index}>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </AboutFeatureCard>
        ))}
      </FlexContainer>

      <div style={{ textAlign: 'center', padding: '80px 7% 0' }}>
        <SectionTitle>Our Founders</SectionTitle>
        {/* <p style={{ color: '#627092', fontSize: '18px', maxWidth: '600px', margin: '20px auto 40px', opacity: '0.9' }}>
          Meet our founders
        </p> */}
      </div>

      <TeamSection>
        <TeamContainer>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamImageContainer>
                  <img src={member.image} alt={member.name} />
                </TeamImageContainer>
                <TeamInfo>
                  <div>
                    <TeamMemberName>{member.name}</TeamMemberName>
                    <TeamMemberTitle>{member.title}</TeamMemberTitle>
                    <TeamMemberBio>{member.bio}</TeamMemberBio>
                  </div>
                  <SocialLinks>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </SocialLinks>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamContainer>
      </TeamSection>
    </div>
  )
}

export default IntroCardAboutPage