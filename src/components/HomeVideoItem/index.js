import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/Theme'

import './index.css'

import {
  HomeVideoItemContainer,
  Thumbnail,
  DetailsContainer,
  ProfileImage,
  OnlyDetailsContainer,
  VideoTitle,
  BelowDetailsContainer,
  ChannelName,
  ViewsAndDateContainer,
  Views,
  PublishedDate,
  FirstDot,
  SecondDot,
  StyledLink,
} from './styledComponents'

const HomeVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value

      const {details, trending} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
      const {name} = channel
      const profileImageUrl = channel.profile_image_url

      const isTrending = trending
      const presentDate = formatDistanceToNow(new Date(publishedAt))

      const splitted = presentDate.split(' ')

      const newPublishedDate = `${splitted[1]} ${splitted[2]} ago`

      return (
        <HomeVideoItemContainer istrending={isTrending}>
          <StyledLink to={`/videos/${id}`} istrending={isTrending}>
            <Thumbnail
              src={thumbnailUrl}
              istrending={isTrending}
              alt="video thumbnail"
            />
            <DetailsContainer istrending={isTrending}>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <OnlyDetailsContainer>
                <VideoTitle isLight={isLight}>{title}</VideoTitle>
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
              </OnlyDetailsContainer>
            </DetailsContainer>
          </StyledLink>
        </HomeVideoItemContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeVideoItem
