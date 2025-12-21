import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('auth') === 'true';
    setIsAuthenticated(userLoggedIn);
  }, []);

  return { isAuthenticated };
};

export default useAuth;