import React, { Component } from 'react';
import SeasonDisplay from './components/Season';
import Spinner from './layout/spinner/Spinner';

class App extends Component {
  state = {
    lat: '',
    long: "",
    error: null
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT -- RENDERED")
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
      (error) => this.setState({ error: error.message })
    )
  }

  componentDidUpdate() {
    console.log("COMPONENT UPDATED --=> RERENDERED")
  }
  renderContent() {
    const season = this.state.error ? <div> {this.state.error} </div> : <SeasonDisplay lat={this.state.lat} long={this.state.long} />
    if (this.state.lat || this.state.long || this.state.error) {
      return season
    }
    return <Spinner message="please accept location request" />

  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }

}

export default App;
