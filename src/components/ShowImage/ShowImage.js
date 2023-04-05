import React from "react";
import nissanImage from "../../images/nissan.jpg";
import "./ShowImage.css";

class ShowImage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isVisible: false
  }

  handleClick() {
    this.setState({isVisible: !this.state.isVisible})
  }

  componentDidMount() {
    console.log("Перший render компоненту ShowImage");
  }

  componentDidUpdate() {
    this.state.isVisible ? alert("Компонент ShowImage відкривається") : alert("Компонент ShowImage закривається");
  }

  render() {
    return (
      <div className="container">
        <h3 className='title'>ShowImage Component</h3>
        {this.state.isVisible && <img src={nissanImage} alt="Nissan X-Trail 2023" className="car-img"></img>}
        <button className="car-btn" onClick={this.handleClick}>Show Nissan X=Trail 2023</button>
      </div>
    )
  }
}

export default ShowImage;
