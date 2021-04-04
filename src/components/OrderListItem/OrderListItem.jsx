import styled from "styled-components";

import Screens from "../../common/screenSizes";
import TextBlock from "../TextBlock/TextBlock";
import Button from "../Button/Button";

const Container = styled.div`
  display: flex;
  box-shadow: 0 2px 10px;
  height: 100px;
`;

const ImageContainer = styled.div`
  display: none;
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${Screens.sm}) {
    display: block;
  }
`;

const OrderTextBlock = styled(TextBlock)`
  padding: 10px 0 10px 10px;
  font-size: 1rem;
  & p {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const OrderButton = styled(Button)`
  width: 30px;
  height: 30px;
  font-size: 1.4rem;
`;

const CountText = styled.p`
  width: 30px;
  text-align: center;
`;

const OrderListItem = ({
  imgUrl,
  title,
  price,
  count,
  onAddItem,
  onRemoveItem,
}) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imgUrl} alt=""></img>
      </ImageContainer>
      <OrderTextBlock>
        <p>Title: {title}</p>
        <p>Price: {price}₴</p>
      </OrderTextBlock>
      <ButtonGroup>
        <OrderButton onClick={onAddItem}>+</OrderButton>
        <CountText>{count}</CountText>
        <OrderButton onClick={onRemoveItem}>-</OrderButton>
      </ButtonGroup>
    </Container>
  );
};

export default OrderListItem;
