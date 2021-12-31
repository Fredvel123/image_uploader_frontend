import styled from 'styled-components';
// color & fonst 
import colors from '../colors.json';
import fonts from '../fonst.json';
// icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Title = styled.h3` 
  color: ${colors.gray};
  font-family: ${fonts.letter4};
  margin: 4vh 0;
  font-size: 30px;
  text-align: center;
`

export const ProfileStyled = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 5vh 0;
    cursor: pointer;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 3px solid ${colors.pink} ;
    object-fit: cover;
    transition: ease-in-out .1s;
  }
  img:hover {
    transition: ease-in-out .4s;
    border: none;
    border-radius: 0;
    transform: scale(1.3);
  }
  h3 {
    font-family: ${fonts.letter1};
    font-size: 20px;
  }
  h4 {
    margin-top: 2vh;
    font-family: ${fonts.letter2};
  }
` 
export const LogOut = styled.button`
  position: fixed;
  border: none;
  cursor: pointer;
  background: ${colors.grayDark};
  padding: 1%;
  transition: ease-in-out .2s;
  top: 2vh;
  left: 1%;
  &:hover {
    background: ${colors.gray};
  }
`
export const AddImage = styled.button`
  position: fixed;
  border: none;
  cursor: pointer;
  background: ${colors.grayDark};
  padding: 1%;
  transition: ease-in-out .2s;
  top: 10vh;
  left: 1%;
  &:hover {
    background: ${colors.gray};
  }
`

export const ErrorMessage = styled.h3`
  margin-top: 8vh;
  text-align: center;
  color: ${colors.grayDark};
`

export const WindowToAddImg = styled.div`
  transition: ease-in-out .3s;
  transform: ${({state}) => !state ? "translateX()" : "translateX(-300%)" };
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: column;
  padding: 4% 0;
  background: #333333b2;
  position: fixed;
  top: 5%;
  left: 10%;
  overflow: auto;
  img {
      height: 55vh;
    margin: 3% 0;
    /* width: 450px; */
  }
  button {
    padding: 1%;
    width: 120px;
    border: none;
    cursor: pointer;
    transition: ease-in-out .1s;
    &:hover {
      background: #009688;
    }
  }
`
export const CloseWindow = styled(FontAwesomeIcon)`
  font-size: 25px;
  position: absolute;
  top: 6%;
  right: 5%;
  cursor: pointer;
` 

export const CardsImages = styled.div`
  columns: 5 320px;
  margin: 0 15px;
  column-gap: 10px;
  display: inline-block;
  text-align: center;
  img {
    width: 100%;
    margin: .5rem auto;
    break-inside: avoid;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s;
  }
  @media screen and (max-width: 770px) {
    columns: 5 220px;
  }
`