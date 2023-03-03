import {
  StyledLink,
  VideoItemContainer,
  Image,
  Heading,
  ViewCount,
} from './styledComponents'

import ThemeContext from '../../context/Theme'

const GamingVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value

        return (
          <StyledLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <Heading isLight={isLight}>{title}</Heading>
              <ViewCount>{viewCount} Watching Worldwide</ViewCount>
            </VideoItemContainer>
          </StyledLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
