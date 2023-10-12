import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataCardsType } from "../../redux/cards-reducer";
import { AppRootStateType } from "../../redux/store";
import { Card } from "../Card/Card";
import s from './Cards.module.css'


export const Cards = () => {
  const cards = useSelector<AppRootStateType, dataCardsType>(
    (state) => state.cards
  );

  return (
    <div className={s.wrapper}>
      {cards.map((el) => (
        <Link key={el.id} to={`/${el.name}`}>
          <Card item={el}></Card>
        </Link>
      ))}
    </div>
  );
};
