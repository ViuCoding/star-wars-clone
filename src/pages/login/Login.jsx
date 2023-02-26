import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.scss";

// images
import YingYang from "../../assets/yingyangSW.png";
export default function Login() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, success } = useLogin();

  // functions
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className='login-page container'>
      <h1>Welcome back</h1>

      <form className='login-form' onSubmit={handleSubmit}>
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

        <button className='btn'>LOG IN</button>
      </form>

      <div className='image-container'>
        <img src={YingYang} alt='' />
      </div>
    </div>
  );
}
