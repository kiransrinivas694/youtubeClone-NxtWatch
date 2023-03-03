import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLight ? 'white' : '#212121')};
`

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 16px 0px ${props => (props.isLight ? '#bfbfbf' : 'black')};
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`

export const LogoImage = styled.img`
  width: 100px;
  text-align: center;
  align-self: center;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 800;
  color: ${props => (props.isLight ? 'black' : 'white')};
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  outline: none;
  border: 1px solid ${props => (props.isLight ? 'black' : 'white')};
  background-color: transparent;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const InputCheckbox = styled.input`
  margin-right: 5px;
  height: 15px;
  width: 15px;
`
export const ShowPasswordText = styled.label`
  font-size: 14px;
  font-weight: bold;
  font-family: roboto;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const LoginButton = styled.button`
  width: 100%;
  padding: 10px 10px 10px 10px;
  background-color: blue;
  color: #ffffff;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-top: 20px;
  font-family: roboto;
`
