import styled from 'styled-components';
// colors 
import colors from '../colors.json';

export const ImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 3vh 0;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    background:  ${({state}) => state !== null ? "#05e210": "#217cb8"}   ;
    padding: 2vh 5%;
    transition: ease-in .2s;
    color: ${colors.gray};
    text-align: ${({status}) => !status ? "center" : "" };
    width: ${({status}) => !status ? "120px" : "" };
    /* position: ${({status}) => !status ? "fixed" : "" } ; */
    /* top: ${({status}) => !status ? "10vh" : "" } ; */
    /* left: ${({status}) => !status ? "1%" : "" }; */
  }
`