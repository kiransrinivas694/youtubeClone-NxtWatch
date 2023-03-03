import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/Theme'

import {
  SideBarContainer,
  SideBarItemContainer,
  StyledLink,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value

      return (
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
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
