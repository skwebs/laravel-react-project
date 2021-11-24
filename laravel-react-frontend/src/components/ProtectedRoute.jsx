import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = true;
    // const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const ProtectedComponent = props.protectedComp;

  return (
    <>
      <ProtectedComponent />
    </>
  )
}

export default ProtectedRoute
