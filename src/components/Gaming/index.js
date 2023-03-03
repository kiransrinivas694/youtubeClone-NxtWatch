import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import SeparateHeader from '../SeparateHeader'
import SideBar from '../SideBar'
import FailureResult from '../FailureResult'
import LoadingResult from '../LoadingResult'
import GamingVideoItem from '../GamingVideoItem'
import ThemeContext from '../../context/Theme'

import {
  BodyContainer,
  SideBarMainContainer,
  RightSideContentContainer,
  MainContainer,
} from '../SavedVideos/styledComponents'

import {GamingVideosContainer} from './styledComponents'

const statusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideosList: [], isGamingStatus: statusConstants.loading}

  componentDidMount() {
    this.getGamingVideosList()
  }

  onRetry = () => {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({isGamingStatus: statusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const {videos} = data
      const updatedVideos = videos.map(each => ({
        id: each.id,

        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      console.log(updatedVideos)

      this.setState({
        gamingVideosList: updatedVideos,
        isGamingStatus: statusConstants.success,
      })
    } else {
      this.onGetGamingVideosApiFailure()
    }
  }

  onGetGamingVideosApiFailure = () => {
    this.setState({isGamingStatus: statusConstants.failure})
  }

  onGetGamingVideoResults = () => {
    const {gamingVideosList} = this.state

    return (
      <GamingVideosContainer>
        {gamingVideosList.map(each => (
          <GamingVideoItem key={each.id} details={each} />
        ))}
      </GamingVideosContainer>
    )
  }

  getFinalGamingResults = () => {
    const {isGamingStatus} = this.state

    switch (isGamingStatus) {
      case statusConstants.success:
        return this.onGetGamingVideoResults()
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
        {value => {
          const {isLight} = value
          return (
            <MainContainer isLight={isLight} data-testid="gaming">
              <Header />
              <BodyContainer isLight={isLight}>
                <SideBarMainContainer isLight={isLight}>
                  <SideBar />
                </SideBarMainContainer>
                <RightSideContentContainer>
                  <SeparateHeader title="Gaming" />

                  {this.getFinalGamingResults()}
                </RightSideContentContainer>
              </BodyContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
