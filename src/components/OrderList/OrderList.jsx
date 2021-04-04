import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../actionCreators/actionCreators";
import OrderListItem from "../OrderListItem/OrderListItem";

const Container = styled.ul`
  list-style: none;

  & > li {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const OrderList = ({ items, addItemToCart, removeItemFromCart }) => {
  const orderListItems = items.map((item) => {
    const { id, imgUrl, title, price, count } = item;
    return (
      <li key={id}>
        <OrderListItem
          imgUrl={imgUrl}
          title={title}
          price={price}
          count={count}
          onAddItem={() => addItemToCart(item)}
          onRemoveItem={() => removeItemFromCart(id)}
        />
      </li>
    );
  });

  return <Container>{orderListItems}</Container>;
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return { items: Object.values(cart) };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItemToCart, removeItemFromCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
