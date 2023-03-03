import {HiFire} from 'react-icons/hi'

import {HeadingContainer, FireIcon, Heading} from './styledComponents'

import ThemeContext from '../../context/Theme'

const SeparateHeader = props => {
  const {title} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLight} = value

        return (
          <HeadingContainer isLight={isLight}>
            <FireIcon isLight={isLight}>
              <HiFire />
            </FireIcon>
            <Heading isLight={isLight}>{title}</Heading>
          </HeadingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SeparateHeader
