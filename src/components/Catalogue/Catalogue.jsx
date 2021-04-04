import {useEffect, useState} from "react";
import styled from "styled-components";

import {getShoppingItems} from "../../service/service";
import Screens from "../../common/screenSizes";
import CatalogueItem from "../CatalogueItem/CatalogueItem";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const shoppingItems = await getShoppingItems();
      setItems(shoppingItems);
    }

    fetchData();
  }, []);

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
