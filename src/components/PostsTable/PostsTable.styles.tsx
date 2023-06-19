import styled from "@emotion/styled";
import {Table} from "@mui/material"
const StyledTable = styled(Table)`
  background-color: #fff;
  border-radius: 50px;
  white-space: pre;
  thead {
    tr {
      th {
    background-color: #eef2f7;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    height: 40px;
    text-transform: capitalize;
        width: 30%;
    font-size: 1rem;        
      }
    }
  }
  tbody {
    tr {
      td {
        padding-left: 16px;
        text-transform: capitalize;
        font-family: Nunito, sans-serif;
        width: 30%;
        white-space: pre-wrap;
    font-size: 1rem;   
      }
    }
  }
`;
const StyledPostsPage = styled.div`
  width: 100vw;
  padding: 30px;
  height: 100vh;
  display: flex;
  background-color:#edffef;
  justify-content: center;
  align-items: center;
`;
export { StyledTable, StyledPostsPage }