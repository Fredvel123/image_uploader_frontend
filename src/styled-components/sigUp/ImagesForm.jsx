import styled from 'styled-components';


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
    background:  ${({state}) => state !== null ? "#009688": "#217cb8"}   ;
    padding: 2vh 5%;
    transition: ease-in .2s;
    /* &:hover {
      background: #bd42ad;
    } */
  }
`