import React from "react";
import { CardType } from "../../redux/cards-reducer";
import s from "./Card.module.css"

export type CardTypeItem = {
  item: CardType;
};

export const Card = (props: CardTypeItem) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={props.item.image} alt="" />
        <div className={s.city}>{props.item.country}</div>
      </div>
      <div className={s.price}>{props.item.price} Br</div>
      <div className={s.description}>{props.item.name}, {props.item.producer}</div>


    </div>
  );
};
