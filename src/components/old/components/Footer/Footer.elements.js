import styled from 'styled-components';

export const FooterContainer = styled.div`
    text-align: center;
`;

export const NavIconContainer = styled.div`
    cursor: pointer;
    margin-left: 45%;
    display: flex;
`;

export const Banner = styled.div`
  background-color: #172647;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;
  padding: 40px 90px;
  font-size: 36px;
  @media (max-width: 500px) {
    padding: 40px 40px;
  }
}
`;

export const IconLabelContainer = styled.div`
    display: flex;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    margin: auto;
    padding-top: 20px;
    width: 150px;
`;

export const CopyrightContainer = styled.p`
    color: grey;
`;

export const IconLabel = styled.h5`
    padding-left: 10px;
    padding-top: 20px;
    color: black;
    font-size: 1.3rem;
    vertical-align: middle;
`;
