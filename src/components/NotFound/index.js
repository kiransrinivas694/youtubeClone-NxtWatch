import Header from '../Header'
import {
  BodyContainer,
  SideBarMainContainer,
  RightSideContentContainer,
} from '../Home/styledComponents'
import SideBar from '../SideBar'

import {Image, ContentContainer, Heading, Description} from './styledComponents'

import ThemeContext from '../../context/Theme'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value

      const logoUrl = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <BodyContainer isLight={isLight}>
            <SideBarMainContainer isLight={isLight}>
              <SideBar />
            </SideBarMainContainer>
            <RightSideContentContainer>
              <ContentContainer isLight={isLight}>
                <Image src={logoUrl} alt="not found" />
                <Heading isLight={isLight}>Page Not Found</Heading>
                <Description isLight={isLight}>
                  we are sorry, the page you requested could not be found.
                </Description>
              </ContentContainer>
            </RightSideContentContainer>
          </BodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
