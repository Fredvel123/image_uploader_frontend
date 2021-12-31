import styled from "styled-components";
// colors & fonts
import fonts from "../fonst.json";
import colors from "../colors.json";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SignIn = styled.div`
  transition: ease-in-out .3s;
  transform: ${({state}) => state ? 'translateX(0)' : 'translateX(500%)' };
  background-color: ${colors.dark};
  padding: 5% 5%;
  h4 {
    text-align: center;
    font-family: ${fonts.letter1};
    color: ${colors.grayDark};
  }
  span {
    color: #33e70f;
    cursor: pointer;
    &:hover {
      color: #ee2d1f;
    }
  }
`

export const Header = styled.div`
  padding: 4vh 0;
  /* background: #2649aa; */
  display: flex;
  align-items: center;
  h3 {
    font-family: ${fonts.letter1};
    font-size: 35px;
    margin-left: 10px;
  }
`
export const ButtonLeft = styled(FontAwesomeIcon)`
  padding: 1% 3%;
  color: ${colors.gray};
  font-size: 30px;
  border: 2px solid ${colors.grayDark};
  border-radius: 15px;
  cursor: pointer;
  transition: ease-in-out .3s;
  &:hover{
    background: #353864;
  }
`

export const Button =  styled.button`
  width: 99%;
  border: none;
  margin-top: 5vh;
  padding: 2vh 10%; 
  font-size: 20px;
  cursor: pointer;
  font-family: ${fonts.letter2};
  background: ${colors.pink};
  &:hover {
    background: #1094bd;
  }
`