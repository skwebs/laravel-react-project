import { useEffect } from 'react';
const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);


  return (
    <>
      <h1>Login</h1>
    </>
  )
}

export default Login
