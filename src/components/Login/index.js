import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/Theme'

import {
  MainContainer,
  ContentContainer,
  LoginFormContainer,
  LogoImage,
  InputContainer,
  LabelText,
  Input,
  ShowPasswordContainer,
  InputCheckbox,
  ShowPasswordText,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    type: 'password',
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginApiSuccess(data)
    } else {
      this.onLoginApiFailure(data)
    }
  }

  onLoginApiSuccess = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginApiFailure = data => {
    const errorMsg = data.error_msg
    console.log(errorMsg)
    this.setState({errorMsg, isError: true})
  }

  onCheckboxClick = event => {
    if (event.target.checked === true) {
      this.setState({type: 'text'})
    } else {
      this.setState({type: 'password'})
    }
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {type, username, password, isError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLight} = value

          const logoUrl = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <MainContainer isLight={isLight}>
              <ContentContainer>
                <LoginFormContainer onSubmit={this.onLogin} isLight={isLight}>
                  <LogoImage src={logoUrl} alt="website logo" />
                  <InputContainer>
                    <LabelText htmlFor="username" isLight={isLight}>
                      USERNAME
                    </LabelText>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      onChange={this.onUsernameChange}
                      value={username}
                      isLight={isLight}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelText htmlFor="password" isLight={isLight}>
                      PASSWORD
                    </LabelText>
                    <Input
                      type={type}
                      id="password"
                      placeholder="Password"
                      onChange={this.onPasswordChange}
                      value={password}
                      isLight={isLight}
                    />
                  </InputContainer>
                  <ShowPasswordContainer>
                    <InputCheckbox
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onCheckboxClick}
                    />
                    <ShowPasswordText htmlFor="checkbox" isLight={isLight}>
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isError ? <ErrorMessage>*{errorMsg}</ErrorMessage> : null}
                </LoginFormContainer>
              </ContentContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
