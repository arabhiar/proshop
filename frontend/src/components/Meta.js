import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  const { title, description, keywords } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell best products in affordable price",
  keywords:
    "electronics, buy electronics, cheap, best electronics, lowest price, value for money",
};

export default Meta;
