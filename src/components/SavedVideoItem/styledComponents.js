import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideoItemContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const Heading = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  font-size: 15px;
`

export const BelowDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  color: #94a3b8;
  font-size: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  color: #94a3b8;
  font-size: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const PublishedDate = styled.p`
  color: #94a3b8;
  font-size: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const FirstDot = styled.div`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SecondDot = styled.div`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    padding-bottom: 10px;
  }
`
