import styled from "styled-components";

import Colors from "../../common/colors";

const Button = styled.button`
    background-color: ${Colors.darkParimry};
    color: ${Colors.text};
    border-radius: 5%;
    border: none;
    box-shadow: 0px 2px 5px rgba(10, 10, 10, 50);
    text-transform: uppercase;
    outline: none;
    transition: background-color 0.2s, box-shadow 0.2s;
    &:hover {
        background-color: ${Colors.lightPrimary};
    }
    &:active {
        box-shadow: none
    }
`;

export default Button;