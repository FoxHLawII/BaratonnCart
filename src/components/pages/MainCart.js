import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeItem, increaseItem, decreaseItem, resetItems } from 'Actions/cartActions.js'

class MainCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    let total=0;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    const renderItems = () => {
      const { items, removeItem, increaseItem, decreaseItem } = this.props;
      if (!!items.length) {
        return items.map((i) => {
          let val = i.item.price.replace("$", "").replace(",", "");
          val = parseInt(val) * i.quantity;
          total +=val;
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
          <div className="total">
            <span>Total: {formatter.format(total)}</span>
            <button onClick={() => { this.props.resetItems()}}>Comprar</button>
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
`;

const CartFooter = styled.div`
  height: 30px;
  width: 100%;
  background-color: #9b9b9b;
  border-radius: 0 0 8px 8px;
  .total {
    display: flex;
    justify-content: space-around;
    color: #fff;
    font-weight: bold;
  }
  .total button {
    color: #9b9b9b;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 2px;
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
    decreaseItem: decreaseItem,
    resetItems: resetItems
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCart);