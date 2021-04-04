import styled from "styled-components";
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form'

import Button from "../Button/Button";
import Colors from "../../common/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 10px;
  padding: 10px;

  & input {
      margin-bottom: 10px;
  }
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 5px;
`;

const OrderButton = styled(Button)`
    width: 100%;
    padding: 10px 0;
    background-color: ${Colors.accentColor};
    font-size: 1.5rem;
`;

const OrderForm = ({isOrderListEmpty}) => {
  return (
    <Form>
      <Input required placeholder="NAME"></Input>
      <Input required placeholder="SURNAME"></Input>
      <Input required placeholder="ADDRESS"></Input>
      <Input required placeholder="PHONE" type="tel"></Input>
      {!isOrderListEmpty && <OrderButton>Order</OrderButton>}
    </Form>
  );
};

const mapStateToProps = (state) => {
  const {cart} = state;
  return {
    isOrderListEmpty: Object.keys(cart).length === 0
  }
};

export default reduxForm({form: "order"})(connect(mapStateToProps)(OrderForm));
