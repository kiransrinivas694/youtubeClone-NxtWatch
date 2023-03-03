import Header from '../Header'

import SideBar from '../SideBar'
import SavedVideosContext from '../../context/SavedVideosContext'
import ThemeContext from '../../context/Theme'

import {
  NoVideosContainer,
  NoVideoImage,
  Heading,
  Description,
  SavedVideosContainer,
  BodyContainer,
  SideBarMainContainer,
  RightSideContentContainer,
  MainContainer,
} from './styledComponents'
import SeparateHeader from '../SeparateHeader'
import SavedVideoItem from '../SavedVideoItem'

const SavedVideos = () => {
  const getNoSavedVideos = isLight => (
    <NoVideosContainer>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Heading isLight={isLight}>No saved videos found</Heading>
      <Description isLight={isLight}>
        You can save your videos while watching them
      </Description>
    </NoVideosContainer>
  )

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideos} = value

        const isLength = savedVideos.length

        const isGreater = isLength > 0

        const getSavedVideos = () => (
          <>
            <SeparateHeader title="Saved Videos" />
            <SavedVideosContainer>
              {savedVideos.map(each => (
                <SavedVideoItem details={each} key={each.id} trending="true" />
              ))}
            </SavedVideosContainer>
          </>
        )

        return (
          <ThemeContext.Consumer>
            {value1 => {
              const {isLight} = value1

              return (
                <MainContainer data-testid="savedVideos" isLight={isLight}>
                  <Header />
                  <BodyContainer isLight={isLight}>
                    <SideBarMainContainer isLight={isLight}>
                      <SideBar />
                    </SideBarMainContainer>
                    <RightSideContentContainer>
                      {isGreater ? getSavedVideos() : getNoSavedVideos(isLight)}
                    </RightSideContentContainer>
                  </BodyContainer>
                </MainContainer>
              )
            }}
          </ThemeContext.Consumer>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default SavedVideos
