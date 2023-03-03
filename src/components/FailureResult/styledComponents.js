import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

export const FailureImage = styled.img`
  width: 70%;
  max-width: 400px;

  margin-bottom: 40px;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  width: 90%;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const FailureDescription = styled.p`
  font-size: 15px;
  text-align: center;
  width: 80%;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const FailureRetryButton = styled.button`
  padding: 10px 30px 10px 30px;
  border: none;
  background-color: #4f46e5;
  color: white;
  border-radius: 5px;
`
