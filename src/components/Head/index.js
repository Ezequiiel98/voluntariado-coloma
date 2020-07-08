import React from 'react';
import { Helmet } from "react-helmet";

import styles from './index.module.scss';

export default function Head({title, children}) {
  return(
    <Helmet>
      <title>{title} | Coloma</title>
      {children}
    </Helmet>
  );}
