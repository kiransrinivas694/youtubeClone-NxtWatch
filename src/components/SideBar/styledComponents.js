import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  flex-direction: column;
`

export const SideBarBottomDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const SideBarItemContainer = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
`
export const Text = styled.p`
  color: black;
  margin-left: 30px;

  font-family: Roboto;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const Contact = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  margin-bottom: 5px;
`

export const LogosContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  width: 25px;
  margin-right: 5px;
  margin-bottom: 5px;
`
export const Description = styled.p`
  color: black;
`
