import styled from "styled-components";

const Header = () => {
  return (
    <HeaderArr>
      <h1>Hader</h1>
      <p>헤더</p>
    </HeaderArr>
  );
};

const HeaderArr = styled.div`
  background-color: blue;
`;

export default Header;
