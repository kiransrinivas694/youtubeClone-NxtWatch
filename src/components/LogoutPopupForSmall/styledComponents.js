import styled from 'styled-components'
import Popup from 'reactjs-popup'

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
    width: 90%;
    max-width: 400px;
    border: none;
    border-radius: 5px;
    padding: 0px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 30px 0px 30px;

  margin: 0px;
`
export const Text = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  text-align: center;
`

export const CloseButton = styled.button`
  color: #616e7c;
  background-color: transparent;
  border: 1px solid #616e7c;
  margin: 10px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
`
export const ConfirmLogoutButton = styled.button`
  color: red;
  background-color: #3b82f6;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  border-radius: 5px;

  margin: 10px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
