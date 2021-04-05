import styled from "styled-components";
import {connect} from "react-redux";

import OrderForm from "../OrderForm/OrderForm";
import OrderList from "../OrderList/OrderList";
import TotalCostLabel from "../TotalCostLabel/TotalCostLabel";
import Screens from "../../common/screenSizes";

const Container = styled.div`
display: flex;
flex-direction: column-reverse;
  max-width: 1200px;
  width: 75%;
  margin: 80px auto 0 auto;

  & > * {
      margin-bottom: 20px;
  }

  @media screen and (min-width: ${Screens.md}) {
    flex-direction: column;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${Screens.md}) {
    flex-direction: row;

    & > *:first-child {
        flex: 2;
        margin-right: 20px;
    }

    & > *:last-child {
        flex: 1;
        height: 265px;
    }
  }
`;

const EmtpyCardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px;
  font-size: 1.5rem;
`;

const Cart = ({totalCost, isOrderListEmty}) => {
  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Container>
      <OrderContainer>
        {!isOrderListEmty && <OrderList />}
        {isOrderListEmty && <EmtpyCardInfo>Your Cart is Empty</EmtpyCardInfo>}
        <OrderForm onSubmit={handleSubmit}/>
      </OrderContainer>
      <TotalCostLabel>Total: {totalCost}₴</TotalCostLabel>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {cart, total} = state;
  
  return {
    isOrderListEmty: Object.keys(cart).length === 0,
    totalCost: total
  };
}

export default connect(mapStateToProps)(Cart);
