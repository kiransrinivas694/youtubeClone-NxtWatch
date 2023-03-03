import styled from 'styled-components'

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px 10px 20px;
  background-color: ${props => (props.isLight ? '#ebebeb' : '#424242')};
  align-items: center;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 20px 20px 20px 40px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 20px 20px 40px;
  }
`
export const FireIcon = styled.div`
  background-color: ${props => (props.isLight ? '#cbd5e1' : 'black')};
  color: red;
  font-size: 15px;
  padding: 10px 12px 7px 12px;

  border-radius: 50%;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 20px;

    padding: 15px 15px 10px 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;

    padding: 20px 22px 15px 22px;
  }
`
export const Heading = styled.h1`
  color: ${props => (props.isLight ? 'black' : 'white')};
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-left: 10px;
  }
`
