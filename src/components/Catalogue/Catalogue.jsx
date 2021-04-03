import styled from "styled-components";

import Screens from "../../common/screenSizes";
import CatalogueItem from "../CatalogueItem/CatalogueItem";

const items = [
  {
    id: 4385628774,
    imgUrl: "https://picsum.photos/id/225/200/130",
    price: 65,
    title: "Tea",
  },
  {
    id: 7295240990,
    imgUrl: "https://picsum.photos/id/1080/200/130",
    price: 643,
    title: "Strawberry",
  },
  {
    id: 4433767114,
    imgUrl: "https://picsum.photos/id/124/200/130",
    price: 850,
    title: "Boat",
  },
  {
    id: 5787337918,
    imgUrl: "https://picsum.photos/id/157/200/130",
    price: 635,
    title: "Skateboard",
  },
  {
    id: 4820126162,
    imgUrl: "https://picsum.photos/id/2/200/130",
    price: 420,
    title: "Laptop",
  },
  {
    id: 9173311267,
    imgUrl: "https://picsum.photos/id/21/200/130",
    price: 211,
    title: "Shoes",
  },
];

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 75%;
  margin: 80px auto 0 auto;

  & > * {
    margin: 0 0 20px 0;
    width: 100%;
    @media screen and (min-width: ${Screens.sm}) {
      margin-right: 1%;
      width: 48%;
    }
    @media screen and (min-width: ${Screens.md}) {
      width: 32%;
    }
    @media screen and (min-width: ${Screens.lg}) {
      width: 24%;
    }
    @media screen and (min-width: ${Screens.xl}) {
      width: 19%;
    }
  }
`;

const Catalogue = () => {
  const catalogueItems = items.map(({ id, imgUrl, title, price }) => {
    return (
      <li key={id}>
        <CatalogueItem imgUrl={imgUrl} title={title} price={price} />
      </li>
    );
  });
  
  return <Container>{catalogueItems}</Container>;
};

export default Catalogue;
