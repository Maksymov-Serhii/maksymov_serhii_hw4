import React from "react";
import nissanImage from "../../images/nissan.jpg";
import "./ShowImage.css";

class ShowImage extends React.Component {
  state = {
    isVisible: false
  }

  componentDidUpdate() {
    this.state.isVisible ? alert("Компонент відкривається") : alert("Компонент закривається");
  }

  render() {
    return (
      <div className="container">
        <h3 className='title'>ShowImage Component</h3>
        {this.state.isVisible === true && <img src={nissanImage} alt="Nissan X-Trail 2023" className="car-img"></img>}
        <button className="car-btn" onClick={() => {
          this.state.isVisible ? this.setState({isVisible: false}) : this.setState({isVisible: true})
        }}>Show Nissan X=Trail 2023</button>
      </div>
    )
  }
}

export default ShowImage;