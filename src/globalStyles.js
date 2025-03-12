import styled, {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "League Spartan";
    font-weight: 800;
    letter-spacing: 0.7px;
}
.no-mobile{
    display: inherit;
}
@media (max-width: 500px) {
 .no-mobile{
    display: none;
 }
}
body{
    line-height: 1.5;
}
`;


export const Bullet = styled.div`
    display: inline-block;
    margin-right: 15px;
    width: 8px;
    background: #172647 0% 0% no-repeat padding-box;
    height: 8px;
    border-radius: 2px;
    opacity: 1;
`;

export const CarouselBullet = styled.div`
    display: inline-block;
    margin-right: 15px;
    cursor: pointer;
    width: 20px;
    background: ${props => props.selected?"#172647 0% 0% no-repeat padding-box":"rgb(190, 217, 255) 0% 0% no-repeat padding-box"};
    height: 10px;
    border-radius: 20px;
    opacity: 1;
`;

export const YellowButton = styled.button`
    background-color: #0070ba;
    font-weight: 600;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #0070ba;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #0070ba;
    }
    ${props => props.maxWidth && css`
        font-size: 1rem;
        width: 100%;`};
`;

export const Header = styled.div`
  padding: 40px 20px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

export const WhiteButton = styled.button`
    background-color: ${props => props.selected?'#0070ba':'white'};
    font-size: 1rem;
    font-weight: 600;
    width: 150px;
    margin-right: 10px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #0070ba;
    cursor: pointer;
    margin: 5px 5px;
    color: ${props => !props.selected?'#0070ba':'white'};
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #0070ba;
        color: white;
    }
    ${props => props.maxWidth && css`
        width: 100%;`};
`;

export const FlexContainer = styled.div`
    display: flex;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
  display: flex;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  background-color: white;
  padding: 8px;
  margin-top: 50px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RDiv = styled.div`
    padding: 2rem 7rem;
    background-color: #F7F9FF;
    @media (max-width: 500px) {
        padding: 2rem 1rem;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: rgba(255,255,255,0.5);
    border-radius: 6px;
    top: 0px;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 50px;
    z-index: 99;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 6px;
    z-index: 100;
    border: 2px solid #FFAB00;
    opacity: 100%;
`;

export const Underline = styled.div`
    height: 5px;
    background: #172647;
    border-radius: 4px;
    width: 80%;
    margin-top: 5px;
`;
export default GlobalStyle;