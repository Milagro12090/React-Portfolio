import React, { useState } from "react";

import styles from "./contact.module.css";

function Form() {
  const [formState, setFromState] = useState({
    name: "",
    email: "",
    message: "",
  });

  



  return (
    <div className={styles.form}>
      <h1>Contact Me</h1>
        <p>To contact by phone you can reach me at 720-412-8870</p>
      
        <p>To contact by email please reach me at rileycostello@gmail.com</p>
      
    </div>
  );
}

export default Form;
