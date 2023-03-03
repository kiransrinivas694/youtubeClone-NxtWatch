import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Login from './components/Login'

import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosContext from './context/SavedVideosContext'
import ThemeContext from './context/Theme'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
// Replace your code here

class App extends Component {
  state = {savedVideosList: [], isLight: true}

  changeInVideos = videoDetails => {
    const {savedVideosList} = this.state

    const isPresent = savedVideosList.filter(
      each => each.id === videoDetails.id,
    )

    if (isPresent.length === 0) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    } else {
      const newSavedVideosList = savedVideosList.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({savedVideosList: newSavedVideosList})
    }
  }

  onThemeChange = () => {
    const {isLight} = this.state

    this.setState({isLight: !isLight})
  }

  render() {
    const {savedVideosList, isLight} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isLight,
          onThemeChange: this.onThemeChange,
        }}
      >
        <SavedVideosContext.Provider
          value={{
            savedVideos: savedVideosList,
            changeInVideos: this.changeInVideos,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
