import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, Modal } from '@mui/material';

import { StyledDialogTitle } from './ViewPostModal.styles';

interface Post {
  title: string;
  body: string;
}

interface PostModalProps {
  post: Post | null;
  open: boolean;
  onClose: () => void;
}

const ViewPostModal: React.FC<PostModalProps> = ({ post, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
          <Dialog open={open} onClose={onClose}>
      <StyledDialogTitle>{post?.title}</StyledDialogTitle>
      <DialogContent>   
        <p>{post?.body}</p>
      </DialogContent>
      <DialogActions>
        <Button sx={{color:'#aa0082'}} onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
    </Modal>
  );
};

export default ViewPostModal

