import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc ,doc ,getFirestore} from 'firebase/firestore';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();
    const db = getFirestore();
  
    const signUp = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        const auth = getAuth();
        await setPersistence(auth, browserLocalPersistence);
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
        const storage = getStorage();
        // Upload the profile image to Firebase Storage
        const profilePicRef = ref(storage, `profileImages/${user.uid}.png`);
  
        const uploadTask = uploadBytesResumable(profilePicRef, profileImage);
        // Get the URL of the uploaded image
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Handle the upload progress
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.error(error);
            alert('Upload failed!'); 
          }, 
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
              await updateProfile(user, { displayName: username, photoURL: downloadURL })
              console.log('Profile updated:', user);
              await user.reload();
                  await setDoc(doc(db, 'users', user.uid), {
                    username: username,
                  });
                  navigate('/login');
                  alert('Signup Success')
          }
        );
      } catch (error) {
        console.error(error);
        alert('Signup failed!');
      }

    };

  return (
    <div className='w-full h-full flex items-center justify-center bg-gray-100'>
    <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-center justify-center h-screen ">
      <form className="p-10 bg-white rounded-lg shadow-l" onSubmit={signUp}>
            <input className="w-full p-2 mb-3 border rounded" id="em" type="text" placeholder="Email" required onChange={e => setEmail(e.target.value)}></input>
            <input className="w-full p-2 mb-3 border rounded" id="us" type="text" placeholder="Name" required onChange={e => setUsername(e.target.value)}></input>
            <input className="w-full p-2 mb-3 border rounded" id="pa" type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}></input>
            <input className="w-full p-2 mb-3 border rounded" id="cpa" type="password" placeholder="Confirm Password" required onChange={e => setConfirmPassword(e.target.value)}></input>
            <input className="w-full p-2 mb-3 border rounded" id="img" type="file" placeholder="Profile Pic" onChange={e => {
            const file = e.target.files[0];
            setProfileImage(file);
            console.log(file);
            }}></input>
            <input type="submit" className="w-full p-2 text-white bg-blue-500 rounded" value="Signup"/>
          </form>
          <p>Already have an account <Link className='text-blue-500' to="/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Signup;