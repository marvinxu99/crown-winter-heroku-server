import styled from 'styled-components';
//import winter1 from '../../assets/images/winter-winter.jpeg';

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const AdminPageWarning = styled.h2`
  color: red;
  margin: 20px 30px;
`;

export const WinterImageContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 60px;
  overflow: hidden;
  margin: 20px 30px;
`;

export const WinterImageSmall = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const LoadShopDataDiv = styled.div`
  margin-left: 30px 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: DodgerBlue;
  margin: 20px 30px;
`;

export const TestButton1 = styled.button`
  background-color: #f1f1f1;
  width: 200px;
  margin: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  pointer-events: auto;

  &:hover {
    cursor: pointer;
    background-color: #545454;
  }
`;

export const TestButton2 = styled.button`
  border: none;
  width: 200px;
  //height: 32px;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  background-color: #eee;
  transition: all ease-in-out 0.9s;
  cursor: pointer;

  &:hover{
    border: 1px solid #888;
    background-color: #ddd;
  }
`;
