// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isBoll: 'card1', text: 'Light Mode'}

  onButton = () => {
    this.setState(prevState => {
      console.log(`${prevState.isBoll}`)
      if (prevState.isBoll !== 'card1') {
        return {isBoll: 'card1', text: 'Light Mode'}
      }
      return {isBoll: 'card2', text: 'Dark Mode'}
    })
  }

  render() {
    const {isBoll, text} = this.state
    return (
      <div className="container">
        <div className={isBoll}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button className="button" onClick={this.onButton}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
