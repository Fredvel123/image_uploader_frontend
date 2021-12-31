import styled from "styled-components";

export const HomeStyled = styled.div`
  margin: 1vh 7%;
  transition: ease-in-out .2s;
  position: ${({state}) => state ? "" : "absolute" };
  transform: ${({state}) => state ? "translateY()" : "translateY(-200%)" };
`