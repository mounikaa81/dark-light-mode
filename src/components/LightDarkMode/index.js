// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChange = () => {
    const {isDarkMode} = this.state

    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modCls

    const {isDarkMode} = this.state

    const modeText = isDarkMode
      ? ((modCls = 'Dark-Mode'), 'Light Mode')
      : ((modCls = 'Light-Mode'), 'Dark Mode')

    return (
      <div className="white-outside">
        <div className={modCls}>
          <h1 className="">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChange}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
