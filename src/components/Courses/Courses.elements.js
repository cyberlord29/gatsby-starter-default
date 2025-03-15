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
  background-color: #F7F9FF;
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
`;


export const CourseItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
  box-shadow: 0px 12px 33px 0px #445884;
  background: linear-gradient(to right, #445884, #627092);
  border-radius: 16px;
  border: none;
  background-color: white;
  width: 300px;
  padding: 10px 30px;
  margin: 20px;
  margin-right: 5%;
`;
