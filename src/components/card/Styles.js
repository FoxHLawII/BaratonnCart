import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 210px;
  width: 190px;
  margin: 20px auto;
  background-color: #f3f3f3;
  border-radius: 8px;
`;

const CardHeader = styled.div`
  height: 30px;
  width: 100%;
  background-color: #9b9b9b;
  border-radius: 8px 8px 0 0;
  p {
    color: white;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;

const CardBody = styled.div`
  height: 150px;
  width: 100%;
  div {
    width: 80%;
    margin: 15px auto;
    border-radius: 5px;
    background-color: #fff;
  }
  div p {
    color: #b1b1b1;
  }
  img {
    width: 45%;
  }
`;

const CardFooter = styled.div`
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
    background-color: ${props => props.available ? "#3dca00" :"#e9e9e9"};
    color: ${props => props.available ? "#fff" : "#9b9b9b"}
  }
`;

export { CardWrapper, CardHeader, CardBody, CardFooter };
