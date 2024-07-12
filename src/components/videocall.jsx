import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Button } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import '../css/videocall.css'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

// Assuming 'app' is your Firebase app initialization
import { app } from '../firee12';

const VideoCall = (widthwindow) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [callId, setCallId] = useState('');
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [isLocalVideoFloating, setIsLocalVideoFloating] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Call ID:', callId);
    setOpen(false);
  };
  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  const pc = useMemo(() => new RTCPeerConnection(servers), []);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  const storedUserEmail = localStorage.getItem('userEmail');
  if (storedUserEmail) {
    setCurrentUser({ email: storedUserEmail });
  }
}, []);

  // Initialize Firestore
  const firestore = getFirestore(app);

  useEffect(() => {
    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };
  }, [pc]);

  const startCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setLocalStream(stream);
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));

    const callDocRef = await addDoc(collection(firestore, 'calls'), {});
    const offerCandidates = collection(callDocRef, 'offerCandidates');
    const answerCandidates = collection(callDocRef, 'answerCandidates');

    setCallId(callDocRef.id);
    alert(`Call ID: ${callDocRef.id}`);

    pc.onicecandidate = (event) => {
      event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
    };

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(callDocRef, { offer });

    onSnapshot(callDocRef, (snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      });
    });
  };

  const startCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setLocalStream(stream);
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  };

  const acceptCall = async (callId) => {
    const callDocRef = doc(firestore, 'calls', callId);
    const answerCandidates = collection(callDocRef, 'answerCandidates');
    const offerCandidates = collection(callDocRef, 'offerCandidates');

    pc.onicecandidate = (event) => {
      event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
    };

    const callDoc = await getDoc(callDocRef);
    const callData = callDoc.data();

    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await updateDoc(callDocRef, { answer });

    onSnapshot(offerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  useEffect(() => {
    if (localStream) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localStream, remoteStream]);

  useEffect(() => {
  pc.onconnectionstatechange = () => {
    if (pc.connectionState === 'failed') {
      alert('Call Disconnected...');
    }
  };
}, [pc]);

  const stopCamera = () => {
  if (localStream) {
    localStream.getTracks().forEach(track => {
      track.stop();
    });
    setLocalStream(null);
  }
};

const hangupCall = () =>{
  setLocalStream(null);
  setRemoteStream(null);
  localVideoRef.current.srcObject = null;
  remoteVideoRef.current.srcObject = null;
  pc.close();
  setCallId('');
  console.log('Call Ended');
}

  return (
    <div className='bigvc'>
      <div className="video-container flex md:flex-col lex-wrap">
    <video
    className="tm2 local-video"
    ref={localVideoRef}
    autoPlay
    playsInline
    muted 
    ></video>
  <video
    className='tm2 w-full h-screen'
    ref={remoteVideoRef}
    autoPlay
    playsInline
  ></video>
    </div>
      <div className='lowerbar w-full sm:w-3/4 flex flex-row flex-wrap gap-2 justify-between'>
        {currentUser 
         && (
        currentUser.email === 'kritimonga1407@gmail.com' ? (
        <Button variant="contained" color="primary" onClick={startCall}>Create Key</Button>
        ) : (
          <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Enter Call ID
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Call ID</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="callId"
            label="Call ID"
            type="text"
            fullWidth
            variant="standard"
            value={callId}
            onChange={(e) => setCallId(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <div>
    </div>
        <Button variant="contained" sx={{ bgcolor: 'green', '&:hover': { bgcolor: 'darkgreen' } }} onClick={() => acceptCall(callId)}>Accept Call</Button>
        </>
        )
      )}
      <Button variant="contained" color="primary" onClick={startCam}>Start cam</Button>
        <Button variant="contained" onClick={stopCamera} >Stop Camera</Button>
        <Button variant="contained" onClick={() => {
          localStream.getAudioTracks().forEach(track => track.stop());
        }}>Stop Microphone</Button>
        <Button variant="contained" sx={{ bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }} onClick={hangupCall}>Hangup</Button>
      </div>
    </div>
  );
};

export default VideoCall;