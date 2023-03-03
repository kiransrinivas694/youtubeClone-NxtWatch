import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

import {BsSun} from 'react-icons/bs'
import SideBarForSmall from '../SideBarForSmall'
import ThemeContext from '../../context/Theme'
import LogoutPopup from '../LogoutPopup'
import LogoutPopupForSmall from '../LogoutPopupForSmall'
import NavItemsPopupForSmall from '../NavItemsPopupForSmall'

import {
  NavbarContainer,
  LogoImage,
  NavbarForSmallDevices,
  NavSmallButton,
  NavbarForLargeDevices,
  NavLargeButton,
  ProfileImage,
  NavItemForSmallDevices,
  ListItem,
} from './styledComponents'

class Header extends Component {
  state = {isSmallBarShowing: false}

  onHamburgerClick = () => {
    const {isSmallBarShowing} = this.state
    this.setState({isSmallBarShowing: !isSmallBarShowing})
  }

  render() {
    const {isSmallBarShowing} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight, onThemeChange} = value

          const onThemeClick = () => {
            onThemeChange()
          }

          const LogoUrl = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <>
              <NavbarContainer isLight={isLight}>
                <Link to="/">
                  <LogoImage src={LogoUrl} alt="website logo" />
                </Link>

                <NavbarForSmallDevices>
                  <NavSmallButton
                    type="button"
                    onClick={onThemeClick}
                    isLight={isLight}
                  >
                    {isLight ? <FaMoon /> : <BsSun />}
                  </NavSmallButton>

                  <NavItemsPopupForSmall />
                  <LogoutPopupForSmall />
                </NavbarForSmallDevices>
                <NavbarForLargeDevices>
                  <ListItem>
                    <NavLargeButton
                      type="button"
                      onClick={onThemeClick}
                      isLight={isLight}
                      data-testid="theme"
                    >
                      {isLight ? <FaMoon /> : <BsSun />}
                    </NavLargeButton>
                  </ListItem>
                  <ListItem>
                    <NavLargeButton type="button">
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavLargeButton>
                  </ListItem>

                  <LogoutPopup />
                </NavbarForLargeDevices>
              </NavbarContainer>
              {isSmallBarShowing ? (
                <NavItemForSmallDevices>
                  <SideBarForSmall />
                </NavItemForSmallDevices>
              ) : null}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
