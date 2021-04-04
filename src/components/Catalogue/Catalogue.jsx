import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getShoppingItems } from "../../service/service";
import Screens from "../../common/screenSizes";
import CatalogueItem from "../CatalogueItem/CatalogueItem";
import { addItemToCart } from "../../actionCreators/actionCreators";

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

const Catalogue = ({ addItemToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const shoppingItems = await getShoppingItems();
      setItems(shoppingItems);
    }

    fetchData();
  }, []);

  const catalogueItems = items.map((item) => {
    const { id, imgUrl, title, price } = item;
    return (
      <li key={id}>
        <CatalogueItem
          imgUrl={imgUrl}
          title={title}
          price={price}
          onClick={() => addItemToCart(item)}
        />
      </li>
    );
  });

  return <Container>{catalogueItems}</Container>;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItemToCart }, dispatch);
};

export default connect(null, mapDispatchToProps)(Catalogue);
