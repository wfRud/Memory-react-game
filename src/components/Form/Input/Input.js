import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const {
    inputType,
    handleInput,
    validFields,
    placeHolder,
    inputValue,
    nameField,
    typeError,
    errorMessage
  } = props;
  return (
    <>
      <input
        type={inputType}
        placeholder={placeHolder}
        name={nameField}
        onChange={handleInput}
        value={inputValue}
        autoComplete="off"
        onBlur={validFields}
        className={styles.inputsField}
      />
      {typeError && inputValue !== "" ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : null}
    </>
  );
};

export default Input;
