import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyle>
      <h2>nav</h2>
      <p>nav내용</p>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  background-color: pink;
`;

export default Nav;
