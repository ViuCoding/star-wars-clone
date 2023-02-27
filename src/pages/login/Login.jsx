import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// context
import { useUserContext } from "../../hooks/useUserContext";

// styles
import "./Login.scss";

// images
import YingYang from "../../assets/yingyangSW.png";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { user } = useUserContext();

  if (user) {
    return <Navigate to='/' replace />;
  }

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useLogin();

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

        <button className='btn'>LOG IN</button>
      </form>

      <div className='image-container'>
        <img src={YingYang} alt='' />
      </div>
    </div>
  );
}
