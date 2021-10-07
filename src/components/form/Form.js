import React, {useState} from 'react';
import styles from './form.module.css'
import Input from "../input/Input";
import Button from "../button/Button";

const Form = () => {

  const [state, setState] = useState({
	password: '',
	email: ''
  })

  function onChangeInput(event) {
	const {value, name} = event.target
	setState((prev) => (({...prev, [name]: value})))
  }

  return (
	<form className={styles.root}>
	  <h1>Login form</h1>
	  <Input
		onChange={onChangeInput}
		name="email"
		label="Email"
		value={state.email}
	  />
	  <Input
		onChange={onChangeInput}
		name="password"
		label="Password"
		value={state.password}
	  />
	  <Button>Submit</Button>
	</form>
  );
};

export default Form;
