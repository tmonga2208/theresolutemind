import React, { useEffect, useState } from "react";
import { db } from "../firee12";
import { collection, addDoc, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import getAuth

function ChatUser() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
    } else {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, []);

  useEffect(() => {
    if (!selectedUser || !currentUser) return;
    const messagesRef = collection(db, "messages");
    let q = query(messagesRef, 
                  where("userId", "in", [currentUser.uid, selectedUser.id]),
                  where("senderId", "in", [currentUser.uid, selectedUser.id]),
                  orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [selectedUser, currentUser]);

  useEffect(() => {
    const storage = getStorage();
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      const usersPromises = querySnapshot.docs.map(async (doc) => {
        const userData = doc.data();
        const imgRef = ref(storage, `profileImages/${doc.id}.png`);
        const imgUrl = await getDownloadURL(imgRef).catch(() => 'defaultImageUrl');
        return {
          id: doc.id,
          ...userData,
          profileImageUrl: imgUrl,
        };
      });

      Promise.all(usersPromises).then((users) => {
        const filteredUsers = users.filter(user => user.id === "mhq2kNSAhLM5a9OJsA0JuWONmd93");
        setUsers(filteredUsers);
      });
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "" || !selectedUser || !currentUser) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: new Date(),
        userId: selectedUser.id,
        senderId: currentUser.uid,
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="flex h-screen">
      {(windowWidth > 768 || !selectedUser) && (
        <div className="w-1/3 bg-gray-100 overflow-auto">
          {users.map((user) => (
            <div key={user.id} className="p-4 flex items-center border-b border-gray-300 cursor-pointer" onClick={() => setSelectedUser(user)}>
              <img src={user.profileImageUrl} alt={user.username} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <p className="text-lg font-semibold">{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {(windowWidth > 768 || selectedUser) && (
        <div className="w-full flex flex-col">
          {selectedUser ? (
            <>
              <div className="p-4 shadow-lg">
                <h1 className="text-2xl font-bold">Chat with {selectedUser.username}</h1>
              </div>
              <div className="flex-grow overflow-auto p-4">
                {messages.map((message) => (
                  <div key={message.id} className={`mb-4 ${message.senderId === currentUser?.uid ? 'text-right' : 'text-left'}`}>
                    <div className={`${message.senderId === currentUser?.uid ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} rounded-lg p-2 inline-block`}>
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-300">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message"
                  className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <button type="submit" className="">Send</button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>Select a Psychologist to start chatting.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatUser;