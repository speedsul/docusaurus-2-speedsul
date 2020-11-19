import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as S from "./styled";
import Card from "./../../componets/card/index";

function Services() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout

      title={`Serviços ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <S.Container>
        <Card />
        <Card />
        <Card />

      </S.Container>
    </Layout>
  );
}

export default Services;
