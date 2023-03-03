import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => (props.isLight ? 'black' : 'white')};
  background-color: ${props => (props.isLight ? 'white' : 'black')};
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
