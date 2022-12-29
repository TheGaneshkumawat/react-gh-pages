import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: [`https://pets-images.dev-apis.com/pets/none.jpg`],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              key={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              alt="animal-thumbnail"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
