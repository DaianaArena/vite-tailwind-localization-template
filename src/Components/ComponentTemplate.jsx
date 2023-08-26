import React from 'react'
import "../i18n";
import { useTranslation } from "react-i18next";

const ComponentTemplate = () => {

  const { t, i18n } = useTranslation();
  const textList = {
    test: t("test")
  }


  return (
    <h1>{textList.test}</h1>
  )
}

export default ComponentTemplate

/* REMEMBER YOU HAVE TO USE IT IN ANOTHER FILE! HOW? 

//import the new component
import ComponentTemplate from "./Components/LenguageSelector/ComponentTemplate";

//call it in your jsx 
<ComponentTemplate/>
*/