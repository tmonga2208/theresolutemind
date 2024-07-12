import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function SimpleDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlenew = () => {
  window.location.href = 'https://videocalltm.vercel.app/';
}

  return (
    <div>
    <button type="button"
                className="rounded-full flex items-center justify-center"
                onClick={handleClickOpen}
                ><img className='cover' style={{width:'32px', height:'32px'}} src={props.btnlogo} alt='vc'></img></button>
                {handleClickOpen && (
                  <>
                  <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>{props.btntitle}</DialogTitle>
                  <DialogContent>
                  <DialogContentText>
                  {props.btncontent}
                  </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button onClick={handleClose} color="primary">
                  {props.btnno}
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                  {props.btnyes}
                 </Button>
                 </DialogActions>
                 </Dialog>
                 </>
                )}
    </div>
  );
}

export default SimpleDialog;
