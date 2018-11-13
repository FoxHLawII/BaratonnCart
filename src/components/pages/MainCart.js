import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeItem, increaseItem, decreaseItem } from 'Actions/cartActions.js'

class MainCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    const renderItems = () => {
      const { items, removeItem, increaseItem, decreaseItem } = this.props;
      console.log(!!items.length)
      if (!!items.length) {
        return items.map((i) => {
          let val = i.item.price.replace("$", "").replace(",", "");
          val = parseInt(val) * i.quantity;
          val = formatter.format(val);
          return (
            <CartItem key={i.item.id}>
              <CartItemImage src={i.item.available ? "/boxNormal.png" : "/boxInactive.png"} />
              <CartItemDescription>
                <p>{i.item.name}</p>
                <p>{val}</p>
                <span>Cant: 
                  <button onClick={() => { decreaseItem(i.item.id) }}> - </button>
                  {i.quantity}
                  <button onClick={() => { increaseItem(i.item.id) }}> + </button>
                </span>
              </CartItemDescription>
              <a href="#" onClick={() => { removeItem(i.item.id) }}>x</a>
            </CartItem>
          )
        });
      } else {
        return <p>No hay elementos aún</p>
      }
    }
    return (
      <CartWrapper className="collapse" id="cartWrapper">
        <CartHeader>
          <p>Tu Carrito</p>
        </CartHeader>
        <CartBody>
          {
            renderItems()
          }
        </CartBody>
        <CartFooter>
          <div className="available">
          </div>
        </CartFooter>
      </CartWrapper>
    );
  }
}

const CartWrapper = styled.div`
margin-top: 10px;
  height: auto;
  min-height: 100px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
`;

const CartHeader = styled.div`
  height: 30px;
  width: 100%;
  background-color: #9b9b9b;
  border-radius: 8px 8px 0 0;
  text-align: center;
  p {
    color: white;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

const CartBody = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
    color: #9b9b9b;
  div p {
  }
`;

const CartFooter = styled.div`
  height: 30px;
  width: 100%;
  background-color: #9b9b9b;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-between;
  .price, .available {
    width: 50%;
  }
  .price {
    border-right: 1px solid #fff;
    color: #fff;
    font-weight: 600;
    font-size: 19px;
  }
  .available {
    border-left: 1px solid #fff;
    color: #fff;
    font-size: small;
    padding-top: 5px;
    background-color: ${props => props.available ? "#3dca00" : "#e9e9e9"};
    color: ${props => props.available ? "#fff" : "#9b9b9b"}
  }
`;
const CartItem = styled.div`
  width: 300px;
  height: 100px;
  margin: 10px;
  position: relative;
  background-color: #f3f3f3;
  border-radius: 7px;
  a {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 8px 2px 8px;
    color: #fff;
    background-color: #9b9b9b;
    border-radius: 5px;
    border: none;
    margin: 5px;
  }
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
    background-color: #fff;
    border-radius: 5px;
    border: none;
    margin: 5px;
    cursor: pointer;
    color: #9b9b9b;
    font-weight: bold;
  }
`;

const mapStateToProps = (state) => {
  return {
    items: state.cart.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeItem: removeItem,
    increaseItem: increaseItem,
    decreaseItem: decreaseItem
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCart);