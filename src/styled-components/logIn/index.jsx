import styled from "styled-components";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// colors and fonts
import fonts from '../fonst.json';
import colors from '../colors.json';

export const LogInStyled = styled.div`
  background-color: ${colors.dark};
  padding: 5% 5%;
  h4 {
    text-align: center;
    font-family: ${fonts.letter1};
    color: ${colors.grayDark};
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