import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import {ImCross} from 'react-icons/im'

import LoadingResult from '../LoadingResult'
import FailureResult from '../FailureResult'
import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/Theme'

import {
  BodyContainer,
  SideBarMainContainer,
  RightSideContentContainer,
  PremiumContainer,
  LogoAndCloseContainer,
  LogoImage,
  PremiumDescription,
  GetItButton,
  NonPremiumContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  HomeVideosListContainer,
  HomeNoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsDescription,
  RetryButton,
  CrossMark,
  MainContainer,
} from './styledComponents'

const statusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    searchInput: '',
    searchText: '',
    isPremiumShowing: true,

    isLoading: statusConstants.loading,
  }

  componentDidMount() {
    this.getHomeVideosListOf()
  }

  onRetry = () => {
    this.getHomeVideosListOf()
  }

  getHomeVideosListOf = async () => {
    this.setState({isLoading: statusConstants.loading})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`

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

      this.setState({
        homeVideosList: updatedVideos,
        isLoading: statusConstants.success,
      })
    } else {
      this.onGetHomeVideosApiFailure()
    }
  }

  onGetHomeVideosApiFailure = () => {
    this.setState({
      isLoading: statusConstants.failure,
    })
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchClick = () => {
    const {searchInput} = this.state
    console.log(searchInput)
    this.setState({searchText: searchInput}, this.getHomeVideosListOf)
  }

  onGetHomeVideosResult = () => {
    const {homeVideosList} = this.state
    console.log('now')

    console.log(formatDistanceToNow(new Date(2021, 8, 20)))
    console.log('now')

    return (
      <HomeVideosListContainer>
        {homeVideosList.map(each => (
          <HomeVideoItem key={each.id} details={each} />
        ))}
      </HomeVideosListContainer>
    )
  }

  onGetEmptyVideosResult = isLight => (
    <HomeNoResultsContainer>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultsHeading isLight={isLight}>
        No Search results found
      </NoResultsHeading>
      <NoResultsDescription isLight={isLight}>
        Try different key words or remove search filter
      </NoResultsDescription>
      <RetryButton onClick={this.onEmptyResultsRetry}>Retry</RetryButton>
    </HomeNoResultsContainer>
  )

  onEmptyResultsRetry = () => {
    this.getHomeVideosListOf()
  }

  showPremiumBanner = () => (
    <PremiumContainer data-testid="banner">
      <LogoAndCloseContainer>
        <CrossMark
          onClick={this.OnPremiumBannerRemove}
          data-testid="close"
          type="button"
        >
          <ImCross />
        </CrossMark>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
      </LogoAndCloseContainer>
      <PremiumDescription>
        Buy NXT Watch Premium prepaid plans with UPI
      </PremiumDescription>
      <GetItButton type="button">GET IT NOW</GetItButton>
    </PremiumContainer>
  )

  OnPremiumBannerRemove = () => {
    this.setState({isPremiumShowing: false})
  }

  onGetHomeVideosList = isLight => {
    const {homeVideosList} = this.state
    const isTrue = homeVideosList.length > 0

    switch (isTrue) {
      case true:
        return this.onGetHomeVideosResult()

      default:
        return this.onGetEmptyVideosResult(isLight)
    }
  }

  checkStatusAndGetResults = isLight => {
    const {isLoading} = this.state
    switch (isLoading) {
      case statusConstants.success:
        return this.onGetHomeVideosList(isLight)
      case statusConstants.failure:
        return <FailureResult retryFunction={this.onRetry} />
      case statusConstants.loading:
        return <LoadingResult />
      default:
        return null
    }
  }

  render() {
    const {isPremiumShowing} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value

          return (
            <MainContainer data-testid="home" isLight={isLight}>
              <Header />
              <BodyContainer isLight={isLight}>
                <SideBarMainContainer isLight={isLight}>
                  <SideBar />
                </SideBarMainContainer>
                <RightSideContentContainer>
                  {isPremiumShowing ? this.showPremiumBanner() : null}
                  <NonPremiumContainer isLight={isLight}>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onSearchInputChange}
                        isLight={isLight}
                      />
                      <SearchIconButton
                        type="button"
                        isLight={isLight}
                        onClick={this.onSearchClick}
                        data-testid="searchButton"
                      >
                        <BiSearch />
                      </SearchIconButton>
                    </SearchContainer>
                    {this.checkStatusAndGetResults(isLight)}
                  </NonPremiumContainer>
                </RightSideContentContainer>
              </BodyContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
