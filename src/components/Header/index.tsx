import React from "react";

import Container from "./styles";

import header from "../../assets/header.svg";

interface HeaderProps{
    title?: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
        <Container>
            Aniversariantes {title}
            <nav>
                <img src={header} alt="Sicoob"/>
            </nav>
        </Container>
  );
};

export default Header;
