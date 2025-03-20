import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #445588;
  height: 275px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 36px;
  padding: 0px 3rem;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;


export const CourseBanner = styled.div`
  background-color: #172647;
  color: white;
  margin: 20px 0px;
  text-align: center;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  background: #F7F9FF;
  align-items: center;
  justify-content: center;
`

export const NavItem = styled.div`
  padding: 0px 1rem;
  cursor: pointer;
  margin-bottom: 7px;
  z-index: 88;
`;

export const Underline = styled.div`
    height: 5px;
    background: #172647;
    border-radius: 4px;
    width: 100%;
`;

export const CourseContainer = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #17264717, 0px 3px 6px #00000029;
  padding: 40px 00px;
  margin: 0rem 9rem;
  max-width: 70%;
  position: relative;
  top: -10px;
  @media (max-width: 500px) {
    margin: 0rem 1rem;
    max-width: 100%;

  }
`;

export const CoursesContainer = styled.div`
  background-color: white;
`;

export const Header = styled.div`
  padding: 40px 20px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: #5DA9FF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;


export const CourseItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
  background: linear-gradient(135deg, #445884 0%, #627092 100%);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: calc(33.33% - 20px);
  padding: 28px;
  min-height: 320px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px -5px rgba(68, 88, 132, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(93, 169, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(68, 88, 132, 0.35);

    &::before {
      opacity: 1;
    }
  }

  ul.arrows {
    margin: 15px 0;
    padding-left: 20px;
    list-style: none;

    li {
      position: relative;
      padding: 4px 0;
      font-size: 15px;
      line-height: 1.5;
      opacity: 0.9;

      &::before {
        content: '→';
        position: absolute;
        left: -20px;
        color: #5DA9FF;
      }
    }
  }

  p {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.95;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 24px;
    min-height: 280px;
  }
`;
