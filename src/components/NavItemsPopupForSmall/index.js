import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {ImCross} from 'react-icons/im'

import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/Theme'

import {
  LogButtonForSmall,
  StyledPopup,
  SideBarContainer,
  SideBarItemContainer,
  StyledLink,
  CloseButton,
} from './styledComponents'

const NavItemsPopupForSmall = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value

      return (
        <StyledPopup
          modal
          trigger={
            <LogButtonForSmall type="button" isLight={isLight}>
              <GiHamburgerMenu />
            </LogButtonForSmall>
          }
          isLight={isLight}
        >
          {close => (
            <>
              <CloseButton
                type="button"
                isLight={isLight}
                onClick={() => close()}
              >
                <ImCross />
              </CloseButton>
              <SideBarContainer isLight={isLight}>
                <SideBarItemContainer>
                  <AiFillHome />
                  <StyledLink to="/" isLight={isLight}>
                    Home
                  </StyledLink>
                </SideBarItemContainer>
                <SideBarItemContainer>
                  <HiFire />
                  <StyledLink to="/trending" isLight={isLight}>
                    Trending
                  </StyledLink>
                </SideBarItemContainer>
                <SideBarItemContainer>
                  <SiYoutubegaming />
                  <StyledLink to="/gaming" isLight={isLight}>
                    Gaming
                  </StyledLink>
                </SideBarItemContainer>
                <SideBarItemContainer>
                  <HiSaveAs />
                  <StyledLink to="/saved-videos" isLight={isLight}>
                    Saved Videos
                  </StyledLink>
                </SideBarItemContainer>
              </SideBarContainer>
            </>
          )}
        </StyledPopup>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(NavItemsPopupForSmall)
