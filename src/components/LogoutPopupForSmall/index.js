import 'reactjs-popup/dist/index.css'
import {IoLogOutOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/Theme'

import {
  LogButtonForSmall,
  ModalContainer,
  Text,
  CloseButton,
  ConfirmLogoutButton,
  ButtonsContainer,
  StyledPopup,
} from './styledComponents'

const LogoutPopupForSmall = props => (
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
            <LogButtonForSmall type="button" isLight={isLight}>
              <IoLogOutOutline />
            </LogButtonForSmall>
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
export default withRouter(LogoutPopupForSmall)
