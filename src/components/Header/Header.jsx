import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import styled from "styled-components";

import Colors from "../../common/colors";
import Button from "../Button/Button";
import TotalCostLabel from "../TotalCostLabel/TotalCostLabel";

const HeaderBar = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 72px;
  padding: 0 20px;
  background-color: ${Colors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  color: ${Colors.text};
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  z-index: 1;
`;

const Contnainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 215px;
`;

const CartButton = styled(Button)`
  width: 80px;
  height: 40px;
  margin-left: 10px;
`;

const ToCatalogueLink = styled.div`
  margin-right: auto;

  & > a {
    color: ${Colors.text};
    font-size: 1.2rem;
    transition: color 0.2s;

    &:hover {
      color: ${Colors.secondaryText}
    }
  }
`;

const Header = ({totalCost}) => {
  const history = useHistory();
  const location = useLocation();
  const isCartOpened = location.pathname.includes("/cart");

  return (
    <HeaderBar>
      {!isCartOpened && (
        <Contnainer>
          {totalCost > 0 && (
            <TotalCostLabel>Total: {totalCost}₴</TotalCostLabel>
          )}
          <CartButton onClick={() => history.push("/cart")}>Cart</CartButton>
        </Contnainer>
      )}
      {isCartOpened && (
        <ToCatalogueLink>
          <Link to="/">To Catalogue</Link>
        </ToCatalogueLink>
      )}
    </HeaderBar>
  );
};

const mapStateToProps = (state) => {
  const {total} = state;

  return {
    totalCost: total,
  }
}

export default connect(mapStateToProps)(Header);
