import styled from "styled-components";

export const HomeStyled = styled.div`
  transition: ease-in-out .2s;
  position: ${({state}) => state ? "" : "absolute" };
  transform: ${({state}) => state ? "translateY()" : "translateY(-200%)" };
`