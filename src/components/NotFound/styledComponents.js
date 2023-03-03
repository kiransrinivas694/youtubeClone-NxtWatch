import styled from 'styled-components'

export const ContentContainer = styled.div`
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 50px;
  align-items: center;
  background-color: ${props => (props.isLight ? '#ebebeb' : 'black')};
`

export const Image = styled.img`
  width: 70%;
  max-width: 400px;
`
export const Heading = styled.h1`
  color: ${props => (props.isLight ? 'black' : 'white')};
  text-align: center;
  width: 90%;
  margin-top: 20px;
`

export const Description = styled.p`
  color: ${props => (props.isLight ? 'black' : 'white')};
  text-align: center;
  width: 90%;
`
