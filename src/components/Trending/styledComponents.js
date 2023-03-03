import styled from 'styled-components'

export const TrendingVideosContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => (props.isLight ? '#f4f4f4' : 'black')};
`
