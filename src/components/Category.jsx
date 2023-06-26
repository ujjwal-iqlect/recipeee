import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/French"}>
        <GiChopsticks />
        <h4>French</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  margin: 2rem auto;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 410px) {
    display: none;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.65rem;
    margin-top: 0.35rem;
    font-weight: 400;
  }

  svg {
    color: #fff;
    font-size: 1rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }

  @media screen and (max-width: 480px) {
    width: 4rem;
    height: 4rem;
    h4 {
      font-size: 0.5rem;
    }
  }
`;

export default Category;
