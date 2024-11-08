import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore.getState().isAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]); // Only rerun when isAuthenticated or navigate changes

  // If not authenticated, return nothing while redirecting
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default ProtectedRoute;
