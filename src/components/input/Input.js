import React from 'react';
import styles from './input.module.css'

const Input = ({name, value, label, onChange}) => {
  return (
	<label className={styles.root}>
	  <input
		className={styles.input}
		type="text"
		required={true}
		name={name}
		value={value}
		onChange={onChange}
	  />
	  <span>{label}</span>
	</label>
  );
};

export default Input;
