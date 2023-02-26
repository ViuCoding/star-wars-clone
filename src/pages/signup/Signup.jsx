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

  const { signup, error, success } = useSignup();

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

        {/* ERROR */}
        <div className='error-container' style={{ color: "crimson" }}>
          {error && <p>{error}</p>}
        </div>
        {/* SUCCESS */}
        <div className='success-container' style={{ color: "limegreen" }}>
          {success && <p>{success}</p>}
        </div>

        <button className='btn'>SIGN UP</button>
      </form>
      <div className='image-container'>
        <img src={Factions} alt='' />
      </div>
    </div>
  );
}
