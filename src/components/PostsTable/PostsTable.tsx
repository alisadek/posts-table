import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { deletePost, fetchPosts } from "../../store/posts/postsActions";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  Skeleton,
  InputAdornment,
  Box,
} from "@mui/material";
import DeleteModal from "../DeleteModal/DeleteModal";
import ViewPostModal from "../ViewPostModal/ViewPostModal";

import { Post } from "../../store/posts/postsTypes";
import { RootState } from "../../store/store";
import { StyledPostsPage, StyledTable } from "./PostsTable.styles";

type Props = {};

const PostsTable = (props: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState<number | null>(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const {
    data: posts,
    loading,
    error,
  } = useSelector((state: RootState) => state.posts);

  const handleChangePage = (
    _: any,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (postId: number) => {
    setPostIdToDelete(postId);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (postIdToDelete) {
      dispatch(deletePost(postIdToDelete));
    }
    setDeleteModalOpen(false);
    setPostIdToDelete(null);
  };

  const handleViewClick = (post: Post) => {
    setViewModalOpen(true);
    setSelectedPost(post);
  };

  const handleViewCancel = () => {
    setViewModalOpen(false);
    setSelectedPost(null);
  };
  
  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setPostIdToDelete(null);
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const debouncedSearch = debounce((query) => {
      dispatch(fetchPosts(query));
    }, 500);

    debouncedSearch(searchQuery);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, dispatch]);

  useEffect(() => {
    dispatch(fetchPosts(""));
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <StyledPostsPage>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/breadfast-brand.svg"
            alt="logo"
          />
          <TextField
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#aa0082" }} />
                </InputAdornment>
              ),
            }}
            sx={{ alignSelf: "end", width: "300px",border: "1.5px solid #aa0082", borderRadius: "5px" }}
            placeholder="Search..."
          />
        </Box>
        {loading ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Skeleton variant="rectangular" height={56} />
            {[...Array(rowsPerPage)].map((_, index) => (
              <Skeleton key={index} variant="rectangular" height={56} />
            ))}
          </Box>
        ) : (
          <Box sx={{ border: "1.5px solid #aa0082", borderRadius: "8px" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <StyledTable stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((post) => (
                      <TableRow key={post.id}>
                        <TableCell
                          width="100px"
                          sx={{ maxWidth: "100px" }}
                          align="left"
                        >
                          {post.title}
                        </TableCell>
                        <TableCell
                          width="600px"
                          sx={{ maxWidth: "600px" }}
                          align="left"
                        >
                          {post.body}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton onClick={() => handleViewClick(post)}>
                            <VisibilityIcon sx={{ color: "#aa0082" }} />
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeleteClick(post.id)}
                          >
                            <DeleteIcon sx={{ color: "#aa0082" }} />
                          </IconButton>
                          <IconButton onClick={() => navigate(`/${post.id}`)}>
                            <EditIcon sx={{ color: "#aa0082" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
            <TablePagination
              sx={{ px: 2 }}
              page={page}
              component="div"
              rowsPerPage={rowsPerPage}
              count={posts.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box>
        )}
      </Box>
      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
      <ViewPostModal
        post={selectedPost}
        open={viewModalOpen}
        onClose={handleViewCancel}
      />
    </StyledPostsPage>
  );
};

export default PostsTable;
