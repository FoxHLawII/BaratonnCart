import React from 'react';
import { CardWrapper, CardHeader, CardBody, CardFooter } from 'Components/card/Styles';

const Card = (props) => {
  const { name, price, quantity, available } = props.product;
  return (
    <CardWrapper>
      <CardHeader>
        <p>{name}</p>
      </CardHeader>
      <CardBody>
        <div>
          <p>Existencia: {quantity}</p>
        </div>
        {
          available
            ? <img src="/boxNormal.png" />
            : <img src="/boxInactive.png" />
        }
      </CardBody>
      <CardFooter available={available}>
        <div className="price">
          {price}
        </div>
        <div className="available">
          {available ? "Disponible" : "No disponible"}
        </div>
      </CardFooter>
    </CardWrapper>
  );
}

export default Card;