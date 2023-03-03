import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 0px;
  margin-right: 0px;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => (props.isLight ? '#ffffff' : 'black')};
`

export const SideBarMainContainer = styled.div`
  width: 40%;
  max-width: 250px;
  flex-grow: 1;
  background-color: ${props => (props.isLight ? '#ffffff' : '#383838')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const RightSideContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const NoVideosContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const NoVideoImage = styled.img`
  width: 70%;
  max-width: 600px;
`

export const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${props => (props.isLight ? 'black' : 'white')};
  margin-top: 20px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => (props.isLight ? 'black' : 'white')};
  text-align: center;
`
export const SavedVideosContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
`
