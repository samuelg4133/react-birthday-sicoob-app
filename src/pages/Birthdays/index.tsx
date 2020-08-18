import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const Birthdays: React.FC = () => {
  const { mes } = useParams();

  return <Header title={mes}></Header>;
};

export default Birthdays;
