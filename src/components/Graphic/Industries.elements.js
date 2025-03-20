import styled from 'styled-components';
import { Link } from 'gatsby';

export const IndustriesSection = styled.section`
  padding: 80px 7%;
  background: #F7F9FF;
`

export const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 42px;
  color: #445884;
  margin-bottom: 20px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 18px;
  color: #627092;
  line-height: 1.6;
  margin-bottom: 20px;

  a {
    color: #5DA9FF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const IndustryCard =  styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(68, 88, 132, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(68, 88, 132, 0.15);
  }
`

export const IndustryTitle = styled.h3`
  font-size: 24px;
  color: #445884;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;


  ${IndustryCard}:hover &:after {
    opacity: 1;
    transform: translateX(0);
  }
`

export const IndustryDescription = styled.p`
  font-size: 16px;
  color: #627092;
  line-height: 1.6;
  margin: 0;
` 