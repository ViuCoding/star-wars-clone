import { useState } from "react";

// styles
import "./Signup.scss";

// images
import Factions from "../../assets/factions.png";

export default function Signup() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // functions
  const handleSubmit = e => {
    e.preventDefault();

    console.log(email, password);
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

        <button className='btn'>SIGN UP</button>
      </form>

      <div className='image-container'>
        <img src={Factions} alt='' />
      </div>
    </div>
  );
}
