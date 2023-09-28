export const CalculoTaxaServico = (valor, percento) => {
  const taxaServico = (parseFloat(valor) * parseInt(percento)) / 100;
  return taxaServico.toFixed(2);
};

export const CalculoTaxaServicoPessoa = (valor, percento, pessoa) => {
  const taxaServicoPessoa = (parseFloat(CalculoTaxaServico(valor, percento)) + parseFloat(valor)) / pessoa;
  // console.log(CalculoTaxaServico(valor, percento))
  // console.log(valor)
  // console.log(pessoa)
  // console.log(taxaServicoPessoa)
  return taxaServicoPessoa.toFixed(2);
};
//CalculoTaxaServicoPessoa(50, 10, 2);
