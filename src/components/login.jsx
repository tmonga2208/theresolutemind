import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firee12'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Store user's email in local storage upon successful login
      localStorage.setItem('userEmail', formData.email);
      navigate('/clientpage'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="p-10 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" onChange={handleChange} value={formData.email} />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" onChange={handleChange} value={formData.password} />
        <button type="submit" className="w-full p-2 mb-3 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;