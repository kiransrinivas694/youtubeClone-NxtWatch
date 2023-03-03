import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeVideoItemContainer = styled.li`
  color: black;
  list-style-type: none;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: ${props => (props.istrending === 'true' ? '100%' : '47%')};
    margin: ${props => (props.istrending === 'true' ? '20px' : '8px')};
    margin-top: ${props => (props.istrending === 'true' ? '30px' : '8px')};
  }
  @media screen and (min-width: 768px) {
    width: ${props => (props.istrending === 'true' ? '100%' : '31%')};
    margin: ${props => (props.istrending === 'true' ? '20px' : '5px')};
    margin-top: ${props => (props.istrending === 'true' ? '30px' : '8px')};
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 8px;
    flex-direction: ${props =>
      props.istrending === 'true' ? 'row' : 'column'};
  }
  @media screen and (min-width: 768px) {
    margin: 5px;
    flex-direction: ${props =>
      props.istrending === 'true' ? 'row' : 'column'};
  } ;
`

export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-left: ${props => (props.istrending === 'true' ? '20px' : '0px')};
    width: ${props => (props.istrending === 'true' ? '50%' : '100%')};
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 40px;
`
export const OnlyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`

export const VideoTitle = styled.p`
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
  color: #64748b;
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
  color: #64748b;
  font-size: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const PublishedDate = styled.p`
  color: #64748b;
  font-size: 10px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const FirstDot = styled.div`
  color: #64748b;
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
  color: #64748b;
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
  font-size: 20px;
  @media screen and (min-width: 576px) {
    padding-bottom: 10px;
  }
`
