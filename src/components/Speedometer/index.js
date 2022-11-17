import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  applyAcceleration = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  applyBrakes = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state

    const speed = count

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="upper-para">Speed is {speed}mph</h1>
        <p className="lower-para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.applyAcceleration}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={this.applyBrakes}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
