import React from "react";

class ShouldUpdate extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    changeStateCounter: 0,
    visible: false,
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.changeStateCounter <= 3;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible) {
      this.setState({changeStateCounter: this.state.changeStateCounter + 1})
    }
  }

  render() {
    const divClass = this.state.visible ? "visible-block" : "hidden-block";

    return (
      <div className="container">
        <h3 className='title'>ShouldUpdate Component</h3>
        <h3>Change State Counter: {this.state.changeStateCounter}</h3>
        <div className={divClass}>Some magic!</div>
        <button className="state-btn" onClick={this.handleClick}>Change state</button>
      </div>
    )
  }
}

export default ShouldUpdate;
