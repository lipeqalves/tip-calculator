export const CalculoTaxaServico = (valor, percento) => {
  const taxaServico = (parseFloat(valor) * parseInt(percento)) / 100;
  return taxaServico.toFixed(2);
};

export const CalculoTaxaServicoPessoa = (valor, percento, pessoa) => {
  const taxaServicoPessoa =
    (parseFloat(CalculoTaxaServico(valor, percento)) + parseFloat(valor)) /
    pessoa;

  return taxaServicoPessoa.toFixed(2);
};
