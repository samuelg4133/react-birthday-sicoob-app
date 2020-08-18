import styled from "styled-components";

const Container = styled.div`
  margin: 40px auto;
  padding: 48px;
  display: flex;
  max-width: 730px;
  background: #f0f0f5;
  border-radius: 8px;
  flex-direction: column;

  h1, h2{
    font-weight: bold;
    font-size: 24px;
    color: #00ae9d;
  }

  legend {
    margin: 32px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #00ae9d;
  }
  
  h4{
    margin-bottom: 10px;
  }
  
  option, select{
    font-size: 1rem;
    height: 2rem;
    border-radius: 0.4rem;
    padding: 0 0.6rem;
  }
  
  fieldset{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  a{
    background: #003641;
    color: white;
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  a:hover{
    background-color: #00ae9d;
    color: #003641;
  }
  
  hr{
  margin: 1rem 0;
  width: 100%;
  background: ${props=>props.theme.lightGreen};
  height: 0.2rem;
  }
`;

export default Container;
