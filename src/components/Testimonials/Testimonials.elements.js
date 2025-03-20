import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  padding: 80px 0;
  background: #f8f9fa;
  overflow: hidden;
`;

export const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TestimonialsTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 0 15px;
  min-height: 250px;
  min-width: calc(33.333% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1024px) {
    min-width: calc(50% - 30px);
  }
  
  @media (max-width: 768px) {
    min-width: calc(100% - 30px);
  }
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const AuthorTitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const TestimonialsHeader = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #2A5F9E;
  margin-bottom: 50px;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#5DA9FF' : '#ddd'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#5DA9FF' : '#bbb'};
  }
`; 