import styled from "styled-components";

import Button from "../Button/Button";
import TextBlock from "../TextBlock/TextBlock";
import Colors from "../../common/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px;
  height: 300px;
  padding-bottom: 10px;
  color: ${Colors.text};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const BuyButton = styled(Button)`
  width: 80%;
  padding: 10px 0;
`;

const CatalogueItem = ({ imgUrl, title, price, onClick }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imgUrl} alt="" />
      </ImageContainer>
      <TextBlock>
        <p><b>Title:</b> {title}</p>
        <p><b>Price:</b> {price}₴</p>
      </TextBlock>
      <BuyButton onClick={onClick}>Buy</BuyButton>
    </Container>
  );
};

export default CatalogueItem;
