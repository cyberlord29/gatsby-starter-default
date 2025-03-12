import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #172647;
  height: 275px;
  color: white;
  padding: 40px 9rem;
  font-size: 36px;
  @media (max-width: 500px) {
    padding: 40px 4rem;
    font-size: 16px;
  }
`;

export const InputField = styled.input`
    display: block;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    border: none;
    padding: 10px 12px;
    width: 200px;
    margin-top: 10px;
    height: 50px;
`;

export const Button = styled.button`
    background: #FFAB00 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    border: none;
    margin-top: 10px;
    height: 50px;
    padding: 0px 10px;
    color: white;
    width: 400px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
`;
