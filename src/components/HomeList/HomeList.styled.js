import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
list-style-type: none;
`;

export const ListLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover {
    color: orange;

  }
`;