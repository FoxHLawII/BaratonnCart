import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

class MainCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    const renderItems = () => {
      const { items } = this.props;
      if (items !== []) {
        return items.map((i) => {
          return (
            <CartItem key={i.item.id}>
              <CartItemImage src={i.item.available ? "/boxNormal.png" : "/boxInactive.png"} />
              <CartItemDescription>
                <p>{i.item.name}</p>
                <p>{i.item.price}</p>
                <span>Cant: <button>-</button> {i.quantity} <button>+</button></span>
              </CartItemDescription>
            </CartItem>
          )
        });
      }
    }
    return (
      <CartWrapper className="collapse" id="cartWrapper">
        {
          renderItems()
        }
      </CartWrapper>
    );
  }
}

const CartWrapper = styled.div`
  height: auto;
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CartItem = styled.div`
  width: 300px;
  height: 100px;
  margin: 10px;
`;

const CartItemImage = styled.img`
  height: 80px;
  width: 80px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
`;

const CartItemDescription = styled.div`
  height: 80px;
  margin: 10px;
  display: inline-block;
  p {
    margin: 0;
  }
  span button {
    height: 25px;
    width: 25px;
    background-color: #fe7378;
    border: none;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  console.log("​mapStateToProps -> state.cart.cart", state.cart.cart)
  return {
    items: state.cart.cart
  }
}

const mapDispatchToPros = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps)(MainCart);