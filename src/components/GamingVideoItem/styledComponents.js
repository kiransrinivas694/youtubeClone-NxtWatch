import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 45%;
  margin: 5px;
  margin-top: 20px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    width: 27%;
    margin-top: 40px;
  }
`

export const VideoItemContainer = styled.li`
  list-style-type: none;

  width: 100%;
`
export const Image = styled.img`
  width: 100%;
`

export const Heading = styled.p`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 2px;
  color: ${props => (props.isLight ? 'black' : 'white')};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-top: 15px;
  }
`

export const ViewCount = styled.p`
  font-size: 10px;
  color: #94a3b8;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
