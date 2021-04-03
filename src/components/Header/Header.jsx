import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

import Colors from "../../common/colors";
import Button from "../Button/Button";

const HeaderBar = styled.div`
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
  letter-spacing: 0.1rem;
  font-weight: bold;
`;

const TotalCostLabel = styled.div`
  text-transform: uppercase;
  text-shadow: 1px 1px 20px;
  margin-right: auto;
`;

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const totalCost = 55000;

  return (
    <HeaderBar>
      {!location.pathname.includes("/cart") && (
        <Contnainer>
          {totalCost > 0 && (
            <TotalCostLabel>Total: {totalCost}₴</TotalCostLabel>
          )}
          <CartButton onClick={() => history.push("/cart")}>Cart</CartButton>
        </Contnainer>
      )}
    </HeaderBar>
  );
};

export default Header;
