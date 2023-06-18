import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { Typography, IconButton, Box, Button } from "@mui/material";
import {
  HeaderContainer,
  PageContainer,
  StyledButton,
  StyledContentContainer,
  StyledPaper,
  StyledTextField,
  StyledTitle,
} from "./PostDetails.styles";
import EditIcon from "@mui/icons-material/Edit";
import { fetchPost, updatePost } from "../../store/posts/postsActions";
import { Post } from "../../store/posts/postsTypes";

const PostDetails: React.FC = () => {
  const { postId } = useParams();
  const parsedPostId = parseInt(postId ?? "0", 10);
  const [isEdit, setIsEdit] = useState(true);
  const {
    singlePost: post,
    loading,
    error,
  } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Post>({
    title: "",
    body: "",
    id: 0,
  });
  useEffect(() => {
    dispatch(fetchPost(parsedPostId));
  }, [dispatch, parsedPostId]);
  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!post) {
    return <Typography variant="subtitle1">Post not found</Typography>;
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePost(formData));
    setIsEdit(false);
  };

  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <PageContainer>
      <StyledPaper onSubmit={handleSubmit}>
        <StyledContentContainer>
          <HeaderContainer>
            {isEdit ? (
              <StyledTextField
                name="title"
                onChange={handleInputChange}
                value={formData.title}
                label="Title"
                variant="standard"
              />
            ) : (
              <StyledTitle
                fontWeight={700}
                fontFamily="Nunito, sans-serif"
                color="#6c757d"
                variant="h5"
              >
                {post.title}
              </StyledTitle>
            )}
            {!isEdit && (
              <IconButton onClick={() => setIsEdit(true)}>
                <EditIcon />
              </IconButton>
            )}
          </HeaderContainer>
          {isEdit ? (
            <StyledTextField
              name="body"
              onChange={handleInputChange}
              multiline
              rows={5}
              value={formData.body}
              label="Body"
            />
          ) : (
            <Typography
              variant="body1"
              fontFamily="Nunito, sans-serif"
              color="#abb1b5"
            >
              {post.body}
            </Typography>
          )}
        </StyledContentContainer>
        {isEdit && (
        <Box display="flex" justifyContent="center" gap={4}>
          <Button onClick={()=> setIsEdit(false)} sx={{color: "#6c757d"}} variant="text">
            Cancel
          </Button>
          <StyledButton type="submit" variant="contained">
            Submit
          </StyledButton>
        </Box>
        )}
      </StyledPaper>
    </PageContainer>
  );
};

export default PostDetails;
