import styled from "styled-components";

import OrderListItem from "../OrderListItem/OrderListItem";

const items = [
  {
    id: 4385628774,
    imgUrl: "https://picsum.photos/id/225/200/130",
    price: 65,
    title: "Tea",
    count: 2,
  },
  {
    id: 7295240990,
    imgUrl: "https://picsum.photos/id/1080/200/130",
    price: 643,
    title: "Strawberry",
    count: 1,
  },
  {
    id: 4433767114,
    imgUrl: "https://picsum.photos/id/124/200/130",
    price: 850,
    title: "Boat",
    count: 1,
  },
];

const Container = styled.ul`
  list-style: none;

  & > li {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const OrderList = () => {
  const orderListItems = items.map(({ id, imgUrl, title, price, count }) => {
    return (
      <li key={id}>
        <OrderListItem
          imgUrl={imgUrl}
          title={title}
          price={price}
          count={count}
        />
      </li>
    );
  });

  return <Container>{orderListItems}</Container>;
};

export default OrderList;
