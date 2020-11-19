import React from "react";
import * as S from "./style";
const CardItem = ({ children, colorTitle, title, color }) => {
  return (
    <S.Container className="teste">
      <S.CardItem color={color}>
        <S.Title colorTitle={colorTitle}>{title || "Sem titulo"}</S.Title>
        <S.Content>{children}</S.Content>
      </S.CardItem>
    </S.Container>
  );
};

export default CardItem;
