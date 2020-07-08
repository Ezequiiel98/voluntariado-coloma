import React from 'react';
import { Helmet } from "react-helmet";

export default function Head({title, children}) {
  return(
    <Helmet>
      <title>{title} | Coloma</title>
      {children}
    </Helmet>
  );}
