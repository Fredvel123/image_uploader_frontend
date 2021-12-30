import styled from "styled-components";
// colors and fonts
import colors from '../colors.json';
import fonts from '../fonst.json';

export const DivInput = styled.div`
  /* to do that the icon is above the input is import to do "position relative" */
  padding: 1vh 0;
`

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
    border: 2px solid ${colors.pink} ;
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