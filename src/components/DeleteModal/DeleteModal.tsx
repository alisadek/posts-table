import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>   
        <p>Are you sure you want to delete this post?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
