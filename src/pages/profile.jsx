import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { doc, getDoc ,updateDoc } from 'firebase/firestore';
import { db } from '../firee12'; 
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
const storage = getStorage();

function UserInfo() {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [displayName, setDisplayName] = useState(''); 
  const [editableDisplayName, setEditableDisplayName] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        if (currentUser.providerData[0].providerId === 'google.com') {
          setProfilePicUrl(currentUser.photoURL);
        } else {
          const profilePicRef = ref(storage, `profileImages/${currentUser.uid}.png`);
          getDownloadURL(profilePicRef)
            .then((url) => {
              setProfilePicUrl(url);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDisplayName(docSnap.data().displayName);
          setEditableDisplayName(docSnap.data().displayName);
        } else {
          console.log('No such document!');
        }
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    handleUpload(selectedFile);
  };

  const handleUpload = (fileToUpload) => {
    if (fileToUpload) {
      const storageRef = ref(storage, `profileImages/${user.uid}.png`);
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

      uploadTask.on('state_changed',  
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfilePicUrl(downloadURL);
          });
        }
      );
    }
  };

const updateDisplayName = () => {
  if (user && editableDisplayName !== undefined) {
    const userDoc = doc(db, 'users', user.uid);
    updateDoc(userDoc, {
      displayName: editableDisplayName,
    }).then(() => {
      console.log('Display name updated successfully');
    }).catch((error) => {
      console.error('Error updating display name:', error);
    });
  } else {
    console.log('No user is currently logged in or display name is undefined.');
  }
};

  if (!user) {
    return <div>No user is currently logged in.</div>;
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <header className='w-full h-12 flex flex-row bg-black text-white'>
      <Link to ='/clientpage'><button className='h-full font-3xl'>Back</button></Link>
      <h1 className='h-full w-full flex justify-center items-center '>User Info</h1>
      </header>
      <div>
      <div className='w-60 m-20 flex flex-col justify-center items-center'>
      <label htmlFor="fileInput">
      <img className='w-40 h-40 rounded-full' src={profilePicUrl} alt="Profile" />
      </label>
      <input  id="fileInput" type="file" onChange={handleFileChange} />
      <p>Email: {user.email}</p>
     <input value={editableDisplayName} onChange={(e) => setEditableDisplayName(e.target.value)}/>
     <button onClick={updateDisplayName}>Save Changes</button>
      </div>
      </div>
    </div>
  );
}

export default UserInfo;