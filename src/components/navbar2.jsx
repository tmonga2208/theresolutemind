import React, { useState, useEffect } from "react";
import '../css/navbar2.css';
import { auth } from '../firee12';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged ,signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const storage = getStorage();

function NavBar2() {
  const auth = getAuth();
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        const profilePicRef = ref(storage, `profileImages/${user.uid}.png`);
        getDownloadURL(profilePicRef)
          .then((url) => {
            setProfilePicUrl(url);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const userObj = JSON.parse(storedUser);
          const profilePicRef = ref(storage, `profileImages/${userObj.uid}.png`);
          getDownloadURL(profilePicRef)
            .then((url) => {
              setProfilePicUrl(url);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    });
  }, []);

  const handleCk = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('currentUser');
      navigate('/');
    }).catch((error) => {
      console.error("Logout Error:", error);
    });
  };

  return (
    <>
      <nav style={{ height: "70px" }} className="flex flex-row justify-between bg-black w-full">
        <div className="hamburger flex items-center cursor-pointer" onClick={handleCk}>
          <svg className="w-6 h-6 m-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>
        <div className="rounded-full flex items-center m-2 ">
          <a href="/profile">
            <img style={{ width: "40px", height: "40px" }} className="rounded-full w-full h-full p-1"
              src={profilePicUrl}
              alt="profile"
            />
          </a>
        </div>
      </nav>
      {isSidebarActive && (
        <div style={{ height: "100vh" }} className="sidebar bg-gray-800 text-white w-64 h-full absolute">
          <ul className="list-none p-4">
            <li className="p-2 cursor-pointer">Home</li>
            <li className="p-2 cursor-pointer">Messages</li>
            <li className="p-2 cursor-pointer" onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar2;