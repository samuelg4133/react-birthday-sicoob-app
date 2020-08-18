import React, {useState} from "react";
import {Link} from "react-router-dom";

import Container from "./styles";

const Main: React.FC = () => {
    const [month, setMonth] = useState("1");

  return (
    <Container>
      <h1>Solicitações</h1>

      <legend>
        <h2>Aniversariantes</h2>
        <span>Selecione um mês</span>
      </legend>
        <fieldset>
            <strong>
            <h4>Mês</h4>
            <select value={month} onChange={(e)=>{
                setMonth(e.target.value);
                console.log(e.target.value);
            }}>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            </strong>
        </fieldset>
        <hr/>
        <Link to={`/aniversariantes/${month}`}>Baixar</Link>
    </Container>
  );
};

export default Main;
