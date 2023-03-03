import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'
import LoadingResult from '../LoadingResult'
import HomeVideoItem from '../HomeVideoItem'
import SeparateHeader from '../SeparateHeader'
import ThemeContext from '../../context/Theme'

import {TrendingVideosContainer} from './styledComponents'

import {
  BodyContainer,
  SideBarMainContainer,
  RightSideContentContainer,
  MainContainer,
} from '../SavedVideos/styledComponents'

import SideBar from '../SideBar'
import FailureResult from '../FailureResult'

const statusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], isLoading: statusConstants.loading}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  onRetry = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({isLoading: statusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: each.channel,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      console.log(updatedVideos)

      this.setState({
        trendingVideosList: updatedVideos,
        isLoading: statusConstants.success,
      })
    } else {
      this.onGetTrendingVideosApiFailure()
    }
  }

  onGetTrendingVideosApiFailure = () => {
    this.setState({isLoading: statusConstants.failure})
  }

  onGetTrendingVideoResults = () => {
    const {trendingVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value

          return (
            <TrendingVideosContainer isLight={isLight}>
              {trendingVideosList.map(each => (
                <HomeVideoItem key={each.id} details={each} trending="true" />
              ))}
            </TrendingVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  getFinalResults = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case statusConstants.success:
        return this.onGetTrendingVideoResults()
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
            <MainContainer isLight={isLight} data-testid="trending">
              <Header />
              <BodyContainer isLight={isLight}>
                <SideBarMainContainer isLight={isLight}>
                  <SideBar />
                </SideBarMainContainer>
                <RightSideContentContainer>
                  <SeparateHeader title="Trending" />
                  {this.getFinalResults()}
                </RightSideContentContainer>
              </BodyContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
