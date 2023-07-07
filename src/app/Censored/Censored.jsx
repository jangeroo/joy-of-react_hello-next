"use client";

import * as React from "react";
import styles from "./Censored.module.css";

export default function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);
  return (
    <button
      className={`${styles.unstyled} ${
        isCensored ? styles.censored : undefined
      }`}
      onClick={() => setIsCensored(!isCensored)}
    >
      {children}
    </button>
  );
}
