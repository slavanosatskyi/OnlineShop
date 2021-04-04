import styled from "styled-components";

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

const OrderForm = () => {
  return (
    <Form>
      <Input placeholder="NAME"></Input>
      <Input placeholder="SURNAME"></Input>
      <Input placeholder="ADDRESS"></Input>
      <Input placeholder="PHONE"></Input>
      <OrderButton>Order</OrderButton>
    </Form>
  );
};

export default OrderForm;
