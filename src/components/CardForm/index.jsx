/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import "./card-form.css";
import { useForm } from "react-hook-form";
import { MdAttachMoney, MdOutlineGroups } from "react-icons/md";

import { Button } from "../Button/";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaxaServicoContext } from "../../context";
const schema = yup
  .object({
    conta: yup
      .number()
      .typeError(" Can't be zero ")
      .required()
      .min(1, " Can't be zero")
      .positive(),
    numberPeoples: yup
      .number()
      .typeError(" Can't be zero ")
      .required()
      .min(1, " Can't be zero")
      .positive(),
  })
  .required();

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { handleTaxaServico, handleHabilit, isHabilit } =
    useContext(TaxaServicoContext);

  const onSubmit = (data) => {
    console.log(data);
    handleTaxaServico(
      data.conta,
      data.percente ? data.percente : data.custom,
      data.numberPeoples
    );
  };
  return (
    <section className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            Bill
            <span className="error" role="alert">
              {errors.conta?.message}
            </span>
          </legend>
          <div className="input-icons">
            <MdAttachMoney className="icons" />
            <input
              className="input"
              type="texto"
              placeholder="0.00"
              {...register("conta", { required: true, min: 1 })}
              aria-invalid={errors.conta ? "true" : "false"}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Select Tip %</legend>
          <div className="form-btns">
            <div className="btn-radio">
              <label htmlFor="cinco">5%</label>
              <input
                className="input-radio"
                id="cinco"
                type="radio"
                value="5"
                disabled={isHabilit}
                onClick={handleHabilit}
                {...register("percente")}
              />
            </div>
            <div className="btn-radio">
              <label htmlFor="dez">10%</label>
              <input
                className="input-radio"
                id="dez"
                type="radio"
                value="10"
                disabled={isHabilit}
                onClick={handleHabilit}
                {...register("percente")}
              />
            </div>
            <div className="btn-radio">
              <label htmlFor="quinze">15%</label>
              <input
                className="input-radio"
                id="quinze"
                type="radio"
                value="15"
                disabled={isHabilit}
                onClick={handleHabilit}
                {...register("percente")}
              />
            </div>

            <div className="btn-radio">
              <label htmlFor="vinte-cinco">25%</label>
              <input
                className="input-radio"
                id="vinte-cinco"
                type="radio"
                value="25"
                disabled={isHabilit}
                onClick={handleHabilit}
                {...register("percente")}
              />
            </div>

            <div className="btn-radio">
              <label htmlFor="cinquenta">50%</label>
              <input
                className="input-radio"
                id="cinquenta"
                type="radio"
                value="50"
                disabled={isHabilit}
                onClick={handleHabilit}
                {...register("percente")}
              />
            </div>
            <div className="custom">
              <input
                type="text"
                placeholder="Custom"
                disabled={isHabilit}
                onChange={handleHabilit}
                {...register("custom")}
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Number of People
            <span className="error" role="alert">
              {errors.numberPeoples?.message}
            </span>
          </legend>
          <div className="input-icons">
            <MdOutlineGroups className="icons" />
            <input
              className="input"
              type="text"
              placeholder="0"
              {...register("numberPeoples", { required: true, min: 1 })}
              aria-invalid={errors.numberPeoples ? "true" : "false"}
            />
          </div>
        </fieldset>
        <div>
          <Button type="submit" name="Calcular" />
        </div>
      </form>
    </section>
  );
};

export default CardForm;
