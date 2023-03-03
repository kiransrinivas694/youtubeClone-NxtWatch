import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'

import SavedVideosContext from '../../context/SavedVideosContext'
import ThemeContext from '../../context/Theme'

import {
  StyledReactPlayer,
  PlayerWrapper,
  RightSideContentContainer,
  ContentContainer,
  BottomDetailsContainer,
  TitleHeading,
  ViewsAndLikesSection,
  ViewsAndDateContainer,
  Views,
  PublishedDate,
  LikesAndSaveContainer,
  SymbolsButton,
  SpanElement,
  Separator,
  ChannelNameAndDetailsContainer,
  ChannelLogo,
  Name,
  Subscribers,
  Description,
  ChannelDetails,
  DescriptionForLarge,
  MainContainer,
} from './styledComponents'

import Header from '../Header'
import {BodyContainer, SideBarMainContainer} from '../Home/styledComponents'

import SideBar from '../SideBar'
import FailureResult from '../FailureResult'
import LoadingResult from '../LoadingResult'

const statusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: '',
    isDetailsStatus: statusConstants.loading,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({isDetailsStatus: statusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const details = data.video_details
      const updatedDetails = {
        id: details.id,
        title: details.title,
        videoUrl: details.video_url,
        thumbnailUrl: details.thumbnail_url,
        channel: details.channel,
        viewCount: details.view_count,
        publishedAt: details.published_at,
        description: details.description,
      }

      this.setState({
        videoDetails: updatedDetails,
        isDetailsStatus: statusConstants.success,
      })
    } else {
      this.onGetVideoDetailsApiFailure()
    }
  }

  onGetVideoDetailsApiFailure = () => {
    this.setState({isDetailsStatus: statusConstants.failure})
  }

  onGetVideoDetailsResults = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      title,
      videoUrl,

      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    const presentDate = formatDistanceToNow(new Date(publishedAt))

    const splitted = presentDate.split(' ')

    const newPublishedDate = `${splitted[1]} ${splitted[2]} ago`

    const channelDetails = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }
    const {name, profileImageUrl, subscriberCount} = channelDetails
    const savedText = isSaved ? 'Saved' : 'Save'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {changeInVideos} = value

          const onSaveClick = () => {
            this.setState({isSaved: !isSaved})

            changeInVideos(videoDetails)
          }

          return (
            <ThemeContext.Consumer>
              {value1 => {
                const {isLight} = value1

                return (
                  <ContentContainer isLight={isLight}>
                    <PlayerWrapper>
                      <StyledReactPlayer
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </PlayerWrapper>
                    <BottomDetailsContainer>
                      <TitleHeading isLight={isLight}>{title}</TitleHeading>
                      <ViewsAndLikesSection>
                        <ViewsAndDateContainer>
                          <Views>{viewCount} Views</Views>
                          <PublishedDate>{newPublishedDate}</PublishedDate>
                        </ViewsAndDateContainer>
                        <LikesAndSaveContainer>
                          <SymbolsButton
                            onClick={this.onLikeClick}
                            isColor={isLiked}
                            type="button"
                          >
                            <BiLike />
                            <SpanElement>Like</SpanElement>
                          </SymbolsButton>
                          <SymbolsButton
                            onClick={this.onDislikeClick}
                            isColor={isDisliked}
                            type="button"
                          >
                            <BiDislike />
                            <SpanElement>Dislike</SpanElement>
                          </SymbolsButton>
                          <SymbolsButton
                            onClick={onSaveClick}
                            isColor={isSaved}
                            type="button"
                          >
                            <BiListPlus />
                            <SpanElement>{savedText}</SpanElement>
                          </SymbolsButton>
                        </LikesAndSaveContainer>
                      </ViewsAndLikesSection>
                      <Separator />
                      <ChannelNameAndDetailsContainer>
                        <ChannelLogo src={profileImageUrl} />
                        <ChannelDetails>
                          <Name>{name}</Name>
                          <Subscribers>
                            {subscriberCount} Subscribers
                          </Subscribers>
                          <Description isLight={isLight}>
                            {description}
                          </Description>
                        </ChannelDetails>
                      </ChannelNameAndDetailsContainer>
                      <DescriptionForLarge isLight={isLight}>
                        {description}
                      </DescriptionForLarge>
                    </BottomDetailsContainer>
                  </ContentContainer>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  onLikeClick = () => {
    const {isLiked} = this.state

    if (isLiked === false) {
      this.setState({isLiked: true, isDisliked: false})
    } else {
      this.setState({isLiked: false, isDisliked: false})
    }
  }

  onDislikeClick = () => {
    const {isDisliked} = this.state

    if (isDisliked === false) {
      this.setState({isLiked: false, isDisliked: true})
    } else {
      this.setState({isLiked: false, isDisliked: false})
    }
  }

  onGetFinalDetails = () => {
    const {isDetailsStatus} = this.state

    switch (isDetailsStatus) {
      case statusConstants.success:
        return this.onGetVideoDetailsResults()
      case statusConstants.failure:
        return <FailureResult retryFunction={this.onRetry} />
      case statusConstants.loading:
        return <LoadingResult />
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value2 => {
          const {isLight} = value2

          return (
            <MainContainer isLight={isLight} data-testid="videoItemDetails">
              <Header />
              <BodyContainer>
                <SideBarMainContainer isLight={isLight}>
                  <SideBar isLight={isLight} />
                </SideBarMainContainer>
                <RightSideContentContainer isLight={isLight}>
                  {this.onGetFinalDetails()}
                </RightSideContentContainer>
              </BodyContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
