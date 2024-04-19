import { Component } from "react";
import { IconShoppingCart, IconHeartFilled, IconHeart } from "@tabler/icons-react";
import propTypes from "prop-types"

export default class ItemProduct extends Component {
  state = {
    count: 0,
    isSave: false,
  };

  handleDecrement = () => {
    if (this.state.count === 0) return;
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleChangeSave = () => {
    this.setState({ isSave: !this.state.isSave }, () => {
      if (this.state.isSave) {
        this.props.changeSaveCount(1);
      } else {
        this.props.changeSaveCount(-1);
      }
    });
  };

  render() {
    const { image, title, price } = this.props;
    return (
      <div>
        <div className="card shadow-sm h-100">
          <img
            src={image}
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />

          <div className="card-body">
            <h5 className="card-title fw-light">{title}</h5>
            <p className="fw-bold">Rp. {price}</p>
          </div>

          <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center justify-content-start column-gap-4">
              {this.state.count === 0 ? (
                <button 
                onClick={this.handleIncrement}
                className="d-flex align-items-center column-gap-2 btn btn-primary">
                  <IconShoppingCart />
                  Add Item
                </button>
              ) : (
                <>
                  <button
                    onClick={this.handleDecrement}
                    className="btn btn-primary"
                  >
                    -
                  </button>

                  <span>{this.state.count}</span>

                  <button
                    onClick={this.handleIncrement}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </>
              )}
            </div>

            <button onClick={this.handleChangeSave} className="btn btn-link">
                <i>{this.state.isSave ? <IconHeartFilled/> : <IconHeart/>}</i>
            </button>

          </div>
        </div>
      </div>
    );
  }
}
ItemProduct.propTypes = {
    changeSaveCount : propTypes.func.isRequired
}