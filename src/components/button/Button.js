import React from 'react';
import styles from './button.module.css'

const Button = ({children, ...props}) => {
  return (
	<button
	  type={"submit"}
	  className={styles.root} {...props}>
	  {children}
	</button>
  );
};

export default Button;
