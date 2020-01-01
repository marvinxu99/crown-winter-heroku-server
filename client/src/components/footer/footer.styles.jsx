import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-top: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #04BC04;

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 30%;
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
  font-weight: bold;
`;

export const OptionDiv = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;
