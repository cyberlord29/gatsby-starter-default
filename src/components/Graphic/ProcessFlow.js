import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #5DA9FF;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Container = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
  }
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

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    z-index: 2;
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

const Arrow = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(${props => props.rotation}deg);
  z-index: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ProcessFlow = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stages = [
    {
      id: 1,
      title: 'Discovery',
      color: '#4A90E2',
      angle: 0,
      radius: 220,
      mobileRadius: 120
    },
    {
      id: 2,
      title: 'Design',
      color: '#5A9FEA',
      angle: 90,
      radius: 220,
      mobileRadius: 120
    },
    {
      id: 3,
      title: 'Development',
      color: '#6AAEF2',
      angle: 180,
      radius: 220,
      mobileRadius: 120
    },
    {
      id: 4,
      title: 'Delivery',
      color: '#357ABD',
      angle: 270,
      radius: 220,
      mobileRadius: 120
    }
  ];

  return (
    <OuterWrapper>
      <Container>
        {stages.map((stage) => {
          const radius = isMobile ? stage.mobileRadius : stage.radius;
          const x = Math.cos((stage.angle * Math.PI) / 180) * radius;
          const y = Math.sin((stage.angle * Math.PI) / 180) * radius;

          return (
            <React.Fragment key={stage.id}>
              <StageContainer
                color={stage.color}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <StageNumber color={stage.color}>{stage.id}</StageNumber>
                <StageTitle>{stage.title}</StageTitle>
              </StageContainer>
              {stage.id < 4 && (
                <Arrow
                  rotation={stage.angle + 45}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Container>
    </OuterWrapper>
  );
};

export default ProcessFlow; 