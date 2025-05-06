import React from 'react';
import styled from 'styled-components';
import logo from '../../images/1.png';

const SectionContainer = styled.div`
  width: 100%;
  padding: 80px 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
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
  max-width: 1200px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #5DA9FF;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);

  @media (max-width: 1024px) {
    transform: scale(0.85);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
    transform: scale(0.8);
  }

  @media (max-width: 480px) {
    transform: scale(0.7);
  }
`;

const CenterCircle = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0.5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: transform 0.5s ease;
  overflow: hidden;
  animation: pulse 2s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  &:hover {
    animation: none;
    transform: scale(1.05);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const OuterCircle = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  border-style: dashed;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.8);
  animation: rotate 20s linear infinite;

  @media (max-width: 768px) {
    width: 340px;
    height: 340px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CenterLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
`;

const CenterText = styled.h3`
  text-align: center;
  color: white;
  margin: 0;
  font-size: 18px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const OptionContainer = styled.div`
  position: absolute;
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0px;
  background: ${props => props.color || '#ffffff'};
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  transition: all 0.5s ease;
  color: white;
  z-index: 1;

  @media (max-width: 768px) {
    height: auto;
    min-height: 55px;
    padding: 10px 0;
    max-width: 200px;
  }

  &:hover {
    transform: scale(1.1) translate(${props => props.x}px, ${props => props.y}px) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    z-index: 3;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => props.isLeft ? 'row-reverse' : 'row'};
  padding: ${props => props.isLeft ? '0px 0px 0px 20px' : '0px 20px 0px 0px'};

  @media (max-width: 768px) {
    padding: ${props => props.isLeft ? '0px 0px 0px 15px' : '0px 15px 0px 0px'};
  }
`;

const OptionIcon = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    min-width: 38px;
  }

  ${OptionContainer}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const OptionTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: left;
  line-height: 1.3;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    white-space: normal;
    max-width: 140px;
  }
`;

const BusinessInfographic = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const options = [
    { 
      id: 1, 
      title: 'Web Services', 
      color: '#4A90E2', 
      angle: 0, 
      radius: 220,
      mobileAngle: 0,
      mobileRadius: 140
    },
    { 
      id: 2, 
      title: 'AI Applications', 
      color: '#5A9FEA', 
      angle: 30, 
      radius: 220,
      mobileAngle: 45,
      mobileRadius: 160
    },
    { 
      id: 3, 
      title: 'Strategy, Sales and Marketing', 
      color: '#6AAEF2', 
      angle: 150, 
      radius: 260,
      mobileAngle: 135,
      mobileRadius: 150
    },
    { 
      id: 4, 
      title: 'Automation', 
      color: '#357ABD', 
      angle: 180,
      radius: 220,
      mobileAngle: 180,
      mobileRadius: 140
    },
    { 
      id: 5, 
      title: 'Applications & Product Development', 
      color: '#2868A9', 
      angle: 207, 
      radius: 280,
      mobileAngle: 225,
      mobileRadius: 160
    },
    { 
      id: 6, 
      title: 'Customer Data Intelligence', 
      color: '#1B5695', 
      angle: 330, 
      radius: 260,
      mobileAngle: 315,
      mobileRadius: 150
    },
  ];

  return (
    <OuterWrapper>
      <Container>
        <OuterCircle />
        <CenterCircle>
          <CenterLogo src={logo} alt="Business Logo" />
        </CenterCircle>
        {options.map((option) => {
          const angle = isMobile ? option.mobileAngle : option.angle;
          const radius = isMobile ? option.mobileRadius : option.radius;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const isLeft = x < 0;

          return (
            <OptionContainer
              key={option.id}
              color={option.color}
              x={x}
              y={y}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <InnerContainer isLeft={isLeft}>
                <OptionIcon>
                  {/* Icon placeholder */}
                </OptionIcon>
                <OptionTitle>{option.title}</OptionTitle>
              </InnerContainer>
            </OptionContainer>
          );
        })}
      </Container>
    </OuterWrapper>
  );
};

const BusinessInfographicSection = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>Our Services</Title>
        <Description>
          We offer a comprehensive suite of technology solutions to help businesses thrive in the digital age.
        </Description>
      </TitleContainer>
      <OuterWrapper>
        <BusinessInfographic />
      </OuterWrapper>
    </SectionContainer>
  );
};

export default BusinessInfographicSection; 