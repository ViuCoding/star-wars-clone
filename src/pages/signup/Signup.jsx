import { useState } from "react";

// styles
import "./Signup.scss";

// images
import Factions from "../../assets/factions.png";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useSignup();

  // functions
  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className='signup-page container'>
      <h1>Empire or Rebellion ?</h1>
      <form className='signup-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            id='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            id='password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <div className='error-container'>{error && <p>{error}</p>}</div>

        <button className='btn'>SIGN UP</button>
      </form>
      {/* ERROR */}
      <div className='image-container'>
        <img src={Factions} alt='' />
      </div>
    </div>
  );
}
