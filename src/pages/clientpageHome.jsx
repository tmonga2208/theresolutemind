import React, { useState, useEffect } from 'react';
import ChatUser from './chatuser';
import Chat from './chat';
import NavBar2 from '../components/navbar2';

function ClientPageHome() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  const storedUserEmail = localStorage.getItem('userEmail');
  if (storedUserEmail) {
    setCurrentUser({ email: storedUserEmail });
  }
}, []);

  return (
      <div>
        <NavBar2/>
      {currentUser ? (
        currentUser.email === 'kritimonga1407@gmail.com' ? (
          <Chat />
        ) : (
          <ChatUser />
        )
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
}

export default ClientPageHome;