import ThemeContext from '../../context/Theme'

import {
  FailureContainer,
  FailureImage,
  FailureDescription,
  FailureHeading,
  FailureRetryButton,
} from './styledComponents'

const FailureResult = props => {
  const {retryFunction} = props

  const onRetryButton = () => {
    retryFunction()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value

        const logoUrl = isLight
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={logoUrl} alt="failure view" />
            <FailureHeading isLight={isLight}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isLight={isLight}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureRetryButton type="button" onClick={onRetryButton}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureResult
