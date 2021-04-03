import styled from "styled-components";

const items = [
  {
    id: 4385628774,
    imgUrl: "https://picsum.photos/id/225/200/300",
    price: 65,
    title: "Tea",
  },
  {
    id: 7295240990,
    imgUrl: "https://picsum.photos/id/1080/200/300",
    price: 643,
    title: "Strawberry",
  },
  {
    "id ": 4433767114,
    imgUrl: "https://picsum.photos/id/124/200/300",
    price: 850,
    title: "Boat",
  },
  {
    id: 5787337918,
    imgUrl: "https://picsum.photos/id/157/200/300",
    price: 635,
    title: "Skateboard",
  },
  {
    id: 4820126162,
    imgUrl: "https://picsum.photos/id/2/200/300",
    price: 420,
    title: "Laptop",
  },
  {
    id: 9173311267,
    imgUrl: "https://picsum.photos/id/21/200/300",
    price: 211,
    title: "Shoes",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px 5% 0 5%;
  @media screen and (min-width: 720px) {
    margin: 80px 10% 0 10%;
  }
  border: 2px solid red;
`;

const Catalogue = () => {
  return <Container>Catalogue</Container>;
};

export default Catalogue;
