import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 0px;
  margin-right: 0px;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#0f0f0f')};
`

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`
export const RightSideContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isLight ? '#f9f9f9' : 'black')};
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isLight ? '#f9f9f9' : 'black')};
`
export const BottomDetailsContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const TitleHeading = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  font-size: 17px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsAndLikesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const Views = styled.p`
  color: #7e858e;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const PublishedDate = styled.p`
  color: #7e858e;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export const LikesAndSaveContainer = styled.div`
  display: flex;
`
export const SymbolsButton = styled.button`
  font-size: 20px;
  display: flex;
  color: ${props => {
    console.log(props.isColor)
    return props.isColor === true ? '#2563eb' : '#64748b'
  }};
  align-items: center;
  margin-right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const SpanElement = styled.span`
  margin-left: 5px;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Separator = styled.hr`
  color: red;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ChannelNameAndDetailsContainer = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  width: 40px;
  align-self: flex-start;
  margin-right: 20px;
`
export const Name = styled.h1`
  color: #7e858e;
  font-size: 15px;
  margin-bottom: 5px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const Subscribers = styled.p`
  color: #7e858e;
  margin-bottom: 30px;
`

export const Description = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DescriptionForLarge = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  line-height: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
