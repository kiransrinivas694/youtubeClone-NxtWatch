import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 0px;
  margin-right: 0px;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
`

export const BodyContainer = styled.div`
  display: flex;
  height : 150vh
  width: 100%;
  overflow-y : scroll;
  ::-webkit-scrollbar {
  display: none;
}
  background-color: ${props => (props.isLight ? 'transparent' : 'black')};
`
export const SideBarMainContainer = styled.div`
  width: 40%;
  max-width: 250px;
  flex-grow: 1;
  background-color: ${props => (props.isLight ? 'white' : '#383838')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const RightSideContentContainer = styled.div`
  width: 100%;
  min-height: 140vh;
`
export const PremiumContainer = styled.div`
  width: 100%;
  height: 250px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px 20px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const LogoAndCloseContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const LogoImage = styled.img`
  width: 200px;
`
export const PremiumDescription = styled.p`
  width: 90%;
  max-width: 500px;
  font-size: 20px;
  font-family: roboto;
  margin-top: 30px;
`
export const GetItButton = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: transparent;
`
export const NonPremiumContainer = styled.div`
  width: 100%;

  background-color: background-color: ${props =>
    props.isLight ? '#f8fafc' : 'black'};;
`
export const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  padding: 20px;
`
export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  color: ${props => (props.isLight ? 'black' : 'white')};
  background-color: transparent;
  border: 1px solid ${props => (props.isLight ? 'black' : 'white')};
`
export const SearchIconButton = styled.button`
  padding: 5px 30px 5px 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isLight ? 'black' : 'white')};
`
export const HomeVideosListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 0px 10px 20px 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 10px 0px 10px;
  }
`
export const HomeNoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const NoResultsImage = styled.img`
  width: 70%;
  max-width: 400px;
`
export const NoResultsHeading = styled.h1`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const NoResultsDescription = styled.p`
  font-size: 15px;
  text-align: center;
  width: 80%;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const RetryButton = styled.button`
  padding: 10px 30px 10px 30px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 5px;
`
export const CrossMark = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
