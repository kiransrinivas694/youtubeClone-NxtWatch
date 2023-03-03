import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/Theme'

import {
  SavedVideoItemContainer,
  ThumbnailImg,
  StyledLink,
  DetailsContainer,
  Heading,
  BelowDetailsContainer,
  ChannelName,
  FirstDot,
  ViewsAndDateContainer,
  Views,
  SecondDot,
  PublishedDate,
} from './styledComponents'

const SavedVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name} = channel

  const presentDate = formatDistanceToNow(new Date(publishedAt))

  const splitted = presentDate.split(' ')

  const newPublishedDate = `${splitted[1]} ${splitted[2]} ago`

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value

        return (
          <SavedVideoItemContainer>
            <StyledLink to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <Heading isLight={isLight}>{title}</Heading>
                <BelowDetailsContainer>
                  <ChannelName>{name}</ChannelName>
                  <FirstDot>
                    <BsDot />
                  </FirstDot>
                  <ViewsAndDateContainer>
                    <Views>{viewCount} Views</Views>
                    <SecondDot>
                      <BsDot />
                    </SecondDot>

                    <PublishedDate>{newPublishedDate}</PublishedDate>
                  </ViewsAndDateContainer>
                </BelowDetailsContainer>
              </DetailsContainer>
            </StyledLink>
          </SavedVideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem

/* <HomeVideoItemContainer>
      <StyledLink>
        <Thumbnail src={thumbnailUrl} width="400px" />
        <DetailsContainer>
          <ProfileImage src={profileImageUrl} />
          <OnlyDetailsContainer>
            <VideoTitle>{title}</VideoTitle>
            <BelowDetailsContainer>
              <ChannelName>{name}</ChannelName>
              
            </BelowDetailsContainer>
          </OnlyDetailsContainer>
        </DetailsContainer>
      </StyledLink>
    </HomeVideoItemContainer> */
