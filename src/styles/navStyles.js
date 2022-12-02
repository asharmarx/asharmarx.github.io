import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const MyNavBar = styled(Nav)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 2rem;
  text-decoration: none;
  font-size: 3.5rem;
  padding-bottom: 1rem;
  gap: 5rem;

  @media screen and (max-width: 850px) {
    display: block;
    font-size: 1.75rem;
    padding: 1rem 0;
  }
`;
