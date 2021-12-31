import styled from "styled-components";
// colors & fonts
import colors from '../colors.json';
import fonts from '../fonst.json';

export const RegisterStyled = styled.div`
  padding: 15vh 20%;
  @media screen and (max-width: 450px) {
    padding: 15vh 4%;
  }
  text-align: center;
  h3 {
    margin-top: 5vh ;
    font-family: ${fonts.letter1};
  }
  h2 {
    color: ${colors.gray};
    font-family: ${fonts.letter4};
  }
`
export const ButtonBox = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  button {
    font-family: ${fonts.letter1};
    font-size: 20px;
    border: none;
    margin: 2vh 15%;
    height: 8vh;
    cursor: pointer;
    transition: ease-in-out .1s;
    background: ${colors.pink};
    &:hover {
      background: ${colors.grayDark};
    }
  }
`