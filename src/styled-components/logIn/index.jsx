import styled from "styled-components";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// colors and fonts
import fonts from '../fonst.json';
import colors from '../colors.json';

export const LogInStyled = styled.div`
  transition: ease-in-out .1s;
  position:  ${({state}) => state ? "" : "absolute" };
  transform: ${({state}) => state ? 'translateX(0)' : 'translateX(-100%)' };
  background-color: ${colors.dark};
  padding: 5% 5%;
  h4 {
    margin-top: 2vh;
    text-align: center;
    font-family: ${fonts.letter1};
    color: ${colors.grayDark};
  }
  button {
    cursor: pointer;
    width: 99%;
    border: none;
    margin-top: 5vh;
    padding: 2vh 10%; 
    font-size: 20px;
    color: ${colors.gray};
    font-family: ${fonts.letter2};
    background: ${colors.pink};
    transition: ease-in .1s;
  }
  button:hover {
    background: #1094bd;
  }
`

export const Header = styled.div`
  padding: 4vh 0;
  /* background: #2649aa; */
  display: flex;
  align-items: center;
  h3 {
    color: ${colors.gray};
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