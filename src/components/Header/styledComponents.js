import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isLight ? 'white' : '#383838')};
  @media screen and (min-width: 767px) {
    padding: 20px 10px 20px 10px;
  }
`

export const LogoImage = styled.img`
  width: 100px;
  @media screen and (min-width: 767px) {
    width: 150px;
    margin-left: 20px;
  }
`
export const NavbarForSmallDevices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const NavSmallButton = styled.div`
  background-color: transparent;
  border: none;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 20px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const NavbarForLargeDevices = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const NavLargeButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const ProfileImage = styled.img`
  width: 30px;
`

export const LogoutButton = styled.div`
  background-color: transparent;
  border: 1px solid ${props => (props.isLight ? '#3b82f6' : 'white')};

  padding: 5px 10px 5px 10px;
  margin-left: 10px;
  color: ${props => (props.isLight ? '#3b82f6' : 'white')};
`
export const NavItemForSmallDevices = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
