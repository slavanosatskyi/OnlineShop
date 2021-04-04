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

const Cart = ({totalCost}) => {
  return (
    <Container>
      <OrderContainer>
        <OrderList />
        <OrderForm />
      </OrderContainer>
      <TotalCostLabel>Total: {totalCost}₴</TotalCostLabel>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {total} = state;

  return {
    totalCost: total
  };
}

export default connect(mapStateToProps)(Cart);
