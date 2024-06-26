import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false, buttonText: 'Subscribe'}

  onClickSubscribeButton = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
      buttonText: prevState.isSubscribe ? 'Subscribe' : 'Subscribed',
    }))
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="intro">Thank you! Happy Learning</p>
        <div>
          <button
            type="button"
            className="button"
            onClick={this.onClickSubscribeButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
