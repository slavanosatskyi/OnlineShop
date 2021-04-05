import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import OrderForm from "../OrderForm/OrderForm";
import OrderList from "../OrderList/OrderList";
import TotalCostLabel from "../TotalCostLabel/TotalCostLabel";
import Screens from "../../common/screenSizes";
import { closeOrder, postOrder } from "../../actionCreators/actionCreators";
import { SUCCEED } from "../../common/orderState.js";

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

const ThanksgivingMessageBlock = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px;
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

const Cart = ({ totalCost, isOrderListEmty, shouldRedirect, postOrder, closeOrder }) => {
  const handleSubmit = (values) => {
    postOrder(values);
  };

  const history = useHistory();
  if (shouldRedirect) {
    setTimeout(() => {
      closeOrder();
      history.push("/");
    }, 3000);
  }

  return (
    <Container>
      {shouldRedirect && <ThanksgivingMessageBlock>Thank you for your order!</ThanksgivingMessageBlock>}
      {!shouldRedirect && <OrderContainer>
        {!isOrderListEmty && <OrderList />}
        {isOrderListEmty && <EmtpyCardInfo>Your Cart is Empty</EmtpyCardInfo>}
        <OrderForm onSubmit={handleSubmit} />
      </OrderContainer>}
      <TotalCostLabel>Total: {totalCost}₴</TotalCostLabel>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { cart, total, order } = state;

  return {
    isOrderListEmty: Object.keys(cart).length === 0,
    totalCost: total,
    shouldRedirect: order === SUCCEED,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postOrder, closeOrder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
