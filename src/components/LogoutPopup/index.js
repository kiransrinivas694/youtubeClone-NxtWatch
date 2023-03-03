import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import ThemeContext from '../../context/Theme'

import {
  LogButton,
  ModalContainer,
  Text,
  CloseButton,
  ConfirmLogoutButton,
  ButtonsContainer,
  StyledPopup,
} from './styledComponents'

const LogoutPopup = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value
      const {history} = props
      const onLogoutConfirm = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <StyledPopup
          modal
          trigger={
            <LogButton type="button" isLight={isLight}>
              Logout
            </LogButton>
          }
          isLight={isLight}
        >
          {close => (
            <>
              <ModalContainer>
                <Text isLight={isLight}>Are you sure, you want to logout</Text>
              </ModalContainer>
              <ButtonsContainer>
                <CloseButton type="button" onClick={() => close()}>
                  Cancel
                </CloseButton>
                <ConfirmLogoutButton type="button" onClick={onLogoutConfirm}>
                  Confirm
                </ConfirmLogoutButton>
              </ButtonsContainer>
            </>
          )}
        </StyledPopup>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(LogoutPopup)
