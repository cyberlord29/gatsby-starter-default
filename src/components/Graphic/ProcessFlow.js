import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../globalStyles';

const SectionContainer = styled.div`
  width: 100%;
  padding: 80px 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 155px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #2A5F9E;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #5DA9FF;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 700px;
    align-items: flex-start;
    padding-top: 40px;
  }
`;

const Container = styled.div`
  width: 1000px;
  height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
  }
`;

const CirclesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -300px;

  @media (max-width: 768px) {
    left: 0;
  }

`;

const ContentBox = styled.div`
  position: absolute;
  left: 600px;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 3;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
  }
`;

const ConnectionPoint = styled.div`
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 4px;
  background: white;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.3s ease 1s, width 1s ease, left 1s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentTitle = styled.h3`
  color: #2A5F9E;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 600;
`;

const ContentText = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
`;

const StageContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${props => props.color || '#ffffff'};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 1;
  border: 1.5px solid rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    z-index: 2;

    & + ${ContentBox} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const StageNumber = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color || '#4A90E2'};
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const StageTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
  line-height: 1.3;
  padding: 0 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
    padding: 0 10px;
  }
`;

const ProcessFlow = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [rotation, setRotation] = React.useState(0);
  const [selectedStage, setSelectedStage] = React.useState(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedStage) {
        setRotation(prev => (prev - 60 + 360) % 360);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedStage]);

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
    // Calculate the rotation needed based on device type
    const targetAngle = isMobile ? 90 : 0;
    const targetRotation = (360 - (stage.baseAngle - (isMobile ? 90 : 0))) % 360;
    setRotation(targetRotation);
  };

  const stages = [
    {
      id: 1,
      title: 'Analyze Your Requirements & Goals',
      color: '#7FB5FF',
      baseAngle: 0,
      radius: 220,
      mobileRadius: 120,
      content: 'First, we listen. We start by sitting down with you to understand your business objectives, challenges, and what you\'re hoping to achieve. Whether your goal is to increase online sales, improve user engagement, or automate operations, we gather all the details.\n\nWe conduct thorough interviews with key stakeholders to capture different perspectives and requirements. This helps us create a comprehensive understanding of your needs.\n\nOur team will also analyze market trends and competitor solutions to ensure we design a solution that gives you a competitive edge.'
    },
    {
      id: 2,
      title: 'Scrutinize Your Data & Current Systems',
      color: '#6AAEF2',
      baseAngle: 60,
      radius: 220,
      mobileRadius: 120,
      content: 'Next, we look at what you have. Our team will review any relevant data you provide – analytics reports, user data, operational data, etc. – along with your existing systems and processes. We want to see where you stand.\n\nWe analyze your current tech stack, identify bottlenecks, and map out your data flows. This deep dive helps us understand your infrastructure and pinpoint areas for improvement.\n\nOur experts will also evaluate your existing tools and platforms to ensure we build solutions that integrate seamlessly with your current setup.'
    },
    {
      id: 3,
      title: 'Draw Up a Roadmap',
      color: '#5A9FEA',
      baseAngle: 120,
      radius: 220,
      mobileRadius: 120,
      content: 'With goals clear and insights in hand, we collaborate with your team to sketch out a solution roadmap. This roadmap is basically our game plan – it outlines the strategies, tools, and timeline we recommend for your digital transformation journey.\n\nWe break down the project into manageable phases, each with clear deliverables and milestones. This phased approach allows for regular checkpoints and adjustments.\n\nOur roadmap includes detailed technical specifications, resource allocation, and risk mitigation strategies to ensure smooth execution.'
    },
    {
      id: 4,
      title: 'Prototype & Implement Solutions',
      color: '#4A90E2',
      baseAngle: 180,
      radius: 220,
      mobileRadius: 120,
      content: 'Now the real build begins. We believe in rapid prototyping, so we often create a proof-of-concept or prototype of the key solution early on – be it an AI model demo, a simplified app feature, or a process automation snippet – to validate our approach.\n\nWe use cutting-edge technologies and best practices to develop robust, scalable solutions. Our agile development process ensures regular updates and continuous improvement.\n\nThroughout implementation, we maintain open communication channels and provide regular progress updates to keep you informed and involved.'
    },
    {
      id: 5,
      title: 'Test, Refine & Verify',
      color: '#357ABD',
      baseAngle: 240,
      radius: 220,
      mobileRadius: 120,
      content: 'Before anything goes live, we put it through the wringer. We test thoroughly – checking that the new website functions on all devices, the AI chatbot handles various questions correctly, or the automation flows work in all scenarios.\n\nOur comprehensive testing suite includes unit tests, integration tests, and user acceptance testing. We also perform security audits and performance optimization.\n\nWe gather feedback from key stakeholders and end-users to make necessary refinements and ensure the solution meets all requirements.'
    },
    {
      id: 6,
      title: 'Deploy & Support',
      color: '#2A5F9E',
      baseAngle: 300,
      radius: 220,
      mobileRadius: 120,
      content: 'Time to go live! We assist in deploying the final, tailored system into your production environment. If it\'s a website or app, we handle the launch; if it\'s an internal tool, we roll it out to your team.\n\nWe provide comprehensive training and documentation to ensure your team can effectively use and maintain the solution. Our support team remains available to address any questions or issues.\n\nWe also set up monitoring systems to track performance and identify potential issues early, ensuring your solution continues to deliver value long after launch.'
    }
  ].map(stage => ({
    ...stage,
    // Adjust baseAngle for mobile view
    baseAngle: isMobile ? (stage.baseAngle + 90) % 360 : stage.baseAngle
  }));

  return (
    <OuterWrapper>
      <Container>
        <CirclesContainer>
          {stages.map((stage) => {
            const radius = isMobile ? stage.mobileRadius : stage.radius;
            const angle = (stage.baseAngle + rotation) % 360;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const isAtActiveAngle = isMobile ? angle === 90 : angle === 0;

            return (
              <StageContainer
                key={stage.id}
                color={stage.color}
                onClick={() => handleStageClick(stage)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transition: 'transform 1s ease-in-out'
                }}
              >
                <StageNumber color={stage.color}>{stage.id}</StageNumber>
                <StageTitle>{stage.title}</StageTitle>
              </StageContainer>
            );
          })}
        </CirclesContainer>
        
        {stages.map((stage) => {
          const angle = (stage.baseAngle + rotation) % 360;
          const isAtActiveAngle = isMobile ? angle === 90 : angle === 0;
          const contentBoxLeft = 600;
          const distance = 200; // Simplified distance for connection point
          return (
          <>
            { isAtActiveAngle && <ContentBox
              key={`content-${stage.id}`}
              style={{
                opacity: isAtActiveAngle ? 1 : 0,
                visibility: isAtActiveAngle ? 'visible' : 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <ContentTitle>{`${stage.id}. ${stage.title}`}</ContentTitle>
              <ContentText>{stage.content}</ContentText>
            </ContentBox>}
            </>
          );
        })}
      </Container>
    </OuterWrapper>
  );
};

const ProcessFlowSection = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>Our Development Process</Title>
        <Description>
          We follow a systematic approach to deliver exceptional results. Our proven process ensures transparency, efficiency, and successful outcomes for every project.
        </Description>
      </TitleContainer>
      <ProcessFlow />
    </SectionContainer>
  );
};

export default ProcessFlowSection; 