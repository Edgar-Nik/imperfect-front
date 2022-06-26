import React from "react";
import { Helmet } from "react-helmet";
import MainCircle from "../components/common/MainCircle";
import TextContentBlock from "../components/common/TextContentBlock";

const Contacts = () => {
  return (
    <div className="page-height-container">
      <Helmet>
        <title>Contacts | Imperfect</title>
      </Helmet>
      <div className="text-block">
        <MainCircle />
        <TextContentBlock title={"contacts"}>
          Imperfect Casting Union has an aim to unite all fields of art by
          making \it more active and profitable while keeping the creative
          spirit. The platform allows companies or private creators to find
          needed specialists within few clicks, meanwhile the
          specialists/artists have a chance to not only take part in different
          projects, but also be legally protected from illegal actions of
          clients or companies.
        </TextContentBlock>
      </div>
    </div>
  );
};

export default Contacts;
