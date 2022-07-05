import React, { Component } from "react";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proName: "",
      proPrice: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // This will not reload the whole page on add btn.
              this.props.addItem(
                this.state.proName,
                Number(this.state.proPrice) // this typeCasting is to fix the react treating as string mayBe
              );
            }}
          >
            <div className="form-group col-4">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="name"
                placeholder="Enter Name"
                name="proName"
                onChange={(val) => {
                  this.setState({
                    proName: val.currentTarget.value,
                  });
                }}
                value={this.state.proName} // Reflect change into the text fields after user adding in state.
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="Price">Price</label>
              <input
                type="number"
                className="form-control"
                id="priceInput"
                placeholder="price"
                name="proPrice"
                onChange={(val) => {
                  this.setState({
                    proPrice: Number(val.currentTarget.value),
                  });
                }}
                value={this.state.proPrice}
              />
            </div>
            <button type="submit" className="btn btn-primary col-4">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
