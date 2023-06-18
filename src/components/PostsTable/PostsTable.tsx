import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
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
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledPostsPage, StyledTable } from "./PostsTable.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { deletePost, fetchPosts } from "../../store/posts/postsActions";
import DeleteModal from "../DeleteModal/DeleteModal";
import { debounce } from "lodash";
type Props = {};

const PostsTable = (props: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState<number | null>(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (event) => {
    setRowsPerPage(+event?.target.value);
    setPage(0);
  };
  const dispatch = useDispatch();
  const {
    data: posts,
    loading,
    error,
  } = useSelector((state: RootState) => state.posts);

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

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setPostIdToDelete(null);
  };
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> =  ( e ) => {
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
    dispatch(fetchPosts(''));
  }, [dispatch]);
  if (error) return <div>{error}</div>;

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
        <TextField
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ alignSelf: "end", width: "300px" }}
          placeholder="Search..."
        />
        {
          loading ?<div>Loading...</div>:
          <>
        <TableContainer sx={{ maxHeight: 440 }}>
          <StyledTable stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((post) => (
                  <TableRow key={post.id}>
                    <TableCell align="left">{post.title}</TableCell>
                    <TableCell align="center">{post.body}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleDeleteClick(post.id)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton onClick={() => navigate(`/${post.id}`)}>
                        <EditIcon />
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
        </>
        }
      </Box>
      <DeleteModal
        open={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </StyledPostsPage>
  );
};

export default PostsTable;
