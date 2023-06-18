import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    IconButton,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
  } from "@mui/material";
import { StyledTable } from './PostsTable.styles';
import staticPosts from './PostsTable.constants';
type Props = {}

const PostsTable = (props: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (event) => {
    setRowsPerPage(+event?.target.value);
    setPage(0);
  };

return (
<div style={{width: '1000px'}}>
    <StyledTable>
    <TableHead>
      <TableRow>
        <TableCell align="left">Title</TableCell>
        <TableCell align="center">Description</TableCell>
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {staticPosts
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((post) => (
          <TableRow>
            <TableCell align="left">{post.title}</TableCell>
            <TableCell align="center">{post.description}</TableCell>
            <TableCell align="center">
              <IconButton>
                <DeleteIcon/>
              </IconButton>
              <IconButton>
                <EditIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
    </StyledTable>
    <TablePagination
    sx={{ px: 2 }}
    page={page}
    component="div"
    rowsPerPage={rowsPerPage}
    count={staticPosts.length}
    onPageChange={handleChangePage}
    rowsPerPageOptions={[5, 10, 25]}
    onRowsPerPageChange={handleChangeRowsPerPage}
    nextIconButtonProps={{ "aria-label": "Next Page" }}
    backIconButtonProps={{ "aria-label": "Previous Page" }}
/>
</div>
  )
}

export default PostsTable