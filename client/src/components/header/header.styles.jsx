import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  background-color: #6AAA01;  //#A9F214; 

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 120px;
  padding: 5px 5px 5px 10px;
  display: flex;
  flex-direction: column;
  color: white
  font-weight: bold;

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    padding: 0;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

export const OptionDiv = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: white
  font-weight: bold;
`;

export const LogoImg = styled.img`
  height: 64px;
  width: 64px;
`;
