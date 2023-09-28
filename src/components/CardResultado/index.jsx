import { MdAttachMoney } from "react-icons/md";
import { Button } from "../Button";
import "./card-resultado.css";
import { useContext } from "react";
import { TaxaServicoContext } from "../../context";

const CardForm = () => {
  //const valor = 280.0;
  const { taxaServico, taxaServicoPeople, handleReset, isHabilit } = useContext(TaxaServicoContext);
  return (
    <section className="card-resultado">
      <div className="resultado">
        <div className="tip">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p className="valor">
          <MdAttachMoney /> {taxaServico}
        </p>
      </div>
      <div className="resultado">
        <div className="total">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="valor">
          <MdAttachMoney /> {taxaServicoPeople}
        </p>
      </div>
      <div className="btn-reset">
        <Button type="reset" name="RESET" onClick={handleReset} disabled={!isHabilit} />
      </div>
    </section>
  );
};

export default CardForm;
