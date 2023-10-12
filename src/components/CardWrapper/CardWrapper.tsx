import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dataCardsType } from "../../redux/cards-reducer";
import { AppRootStateType } from "../../redux/store";
import { Card } from "../Card/Card";
import s from "./CardWrapper.module.css"


export const CardWrapper = () => {
  const cards = useSelector<AppRootStateType, dataCardsType>(
    (state) => state.cards
  );

  const navigate = useNavigate();

  const { name } = useParams();

  const goBack = () => navigate(-1);

  const item = cards.find((el) => el.name === name);
  if (!item) return null;
  return (
    <div className={s.wrapper}>
      <div className={s.card__wrapper}>
        <Card item={item} />
        <p>{item.details}</p>
        <button className={s.button} onClick={() => goBack()}>Назад</button>
      </div>
    </div>
  );
};


