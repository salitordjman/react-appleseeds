// import React, { useState } from "react";
import React from "react";
import TextLength from "./components/TextLength";
import "./App.css";

const App = () => {
  const string =
    "dfghdg dhgde erg etrgh erthe hje hjryjmfyjdt jer j djdtj dtj er5 erytjfk md 5weu jdfyk d ysd jkdfghdg dhgde erg etrgh erthe hje hjryjmfyjdt jer j djdtj dtj er5 erytjfk md 5weu jdfyk d ysd jktdt ikdzrtuijdf gkmvh dudfjf c jhxcdhtdf ytncgncnv  dftjfhm vh  dxj sdryhdj fdfghdg dhgde erg etrgh erthe hje hjryjmfyjdt jer j djdtj dtj er5 erytjfk md 5weu jdfyk d ysd jktdt ikdzrtuijdf gkmvh dudfjf c jhxcdhtdf ytncgncnv  dftjfhm vh  dxj sdryhdj ftdt ikdzrtuijdf gkmvh dudfjf c jhxcdhtdf ytncgncnv  dftjdfghdg dhgde erg etrgh erthe hje hjryjmfyjdt jer j djdtj dtj er5 erytjfk md 5weu jdfyk d ysd jktdt ikdzrtuijdf gkmvh dudfjf c jhxcdhtdf ytncgncnv  dftjfhm vh  dxj sdryhddfghdg dhgde erg etrgh erthe hje hjryjmfyjdt jer j djdtj dtj er5 erytjfk md 5weu jdfyk d ysd jktdt ikdzrtuijdf gkmvh dudfjf c jhxcdhtdf ytncgncnv  dftjfhm vh  dxj sdryhdj fj ffhm vh  dxj sdryhdj f";

  return (
    <>
      <TextLength maxLength={50} newString={string} />
    </>
  );
};

export default App;
