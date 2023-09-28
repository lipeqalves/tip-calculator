/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  CalculoTaxaServico,
  CalculoTaxaServicoPessoa,
} from "../util/TaxaDeServico";

export const TaxaServicoContext = createContext();

export const TaxaServicoContextProvider = ({ children }) => {
  const [taxaServico, setTaxaServico] = useState(0);
  const [taxaServicoPeople, setTaxaServicoPeople] = useState(0);

  const handleTaxaServico = (conta, percente, pessoa) => {
    setTaxaServico(CalculoTaxaServico(conta, percente));
    setTaxaServicoPeople(CalculoTaxaServicoPessoa(conta, percente, pessoa));
  };
  const handleReset = () => {
    setTaxaServico(0);
    setTaxaServicoPeople(0);
    setIsHabilit(false);
  };

  const [isHabilit, setIsHabilit] = useState(false);
  const handleHabilit = () => {
    setIsHabilit(true)
  }
  return (
    <TaxaServicoContext.Provider
      value={{ taxaServico, handleTaxaServico, taxaServicoPeople, handleReset, isHabilit, handleHabilit }}
    >
      {children}
    </TaxaServicoContext.Provider>
  );
};
