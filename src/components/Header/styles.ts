import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.375rem;
  width: 100%;
  padding-left: 3.2rem;
  background: ${props=> props.theme.turquoise};
  color: ${props=> props.theme.white};
  font: 700 1.5rem Asap;
  
  nav{
   height: 100%;
   display: flex;
  }
  img{
  height: 100%;
  }
`;

export default Container;
