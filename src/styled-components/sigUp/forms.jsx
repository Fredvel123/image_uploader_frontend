import styled from "styled-components";
// colors and fonts
import colors from '../colors.json';
import fonts from '../fonst.json';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DivInput = styled.div`
  /* to do that the icon is above the input is import to do "position relative" */
  padding: 1vh 0;
  position: relative;
`
export const Icon = styled(FontAwesomeIcon)`
  color: ${({state}) => state ? colorsInput.exit : colorsInput.error };
  display: ${({state}) => state === null ? "none" : "block" };
  /* to do that the icon is above the input is import to do "position absolute" here */
  position: absolute;
  bottom: 3.5vh;
  right: 2.5%;
  width: 16px;
  transition: ease-in .1s;
  height: 16px;
  font-size: 16px !important ;
  z-index: 100;
`
const colorsInput={
  exit: "#39e642",
  error: "#e72424"
}

export const Input = styled.input`
  width: 95%;
  font-weight: 500;
  font-family: ${fonts.letter1};
  height: 5vh;
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${colors.dark};
  background: ${colors.dark};
  transition: ease-in .1s;
  padding: 1vh 1.5%;
  &:focus {
    outline: none;
    border: 2px solid ${({state}) => state ? colorsInput.exit : colorsInput.error };
  }
  &::placeholder{
    font-size: 15px;
    color: #ffffffa0;
  }
`

export const Label = styled.label`
  font-family: ${fonts.letter3};
  margin-left: 0.5%;
`