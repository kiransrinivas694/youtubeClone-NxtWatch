import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

export const LogButtonForSmall = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding: 5px 10px 5px 10px;

  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const StyledPopup = styled(Popup)`
  &-content {
    background-color: ${props => (props.isLight ? 'white' : 'black')};
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    border: none;

    padding: 0px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &-overlay {
    background-color: transparent;
  }
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  margin-top: 30px;
  margin-right: 20px;
  margin-bottom: 200px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${props => (props.isLight ? 'black' : 'white')};
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`

export const SideBarItemContainer = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
  margin-left: 50px;
`
export const Text = styled.p`
  color: black;
  margin-left: 30px;

  font-family: Roboto;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
