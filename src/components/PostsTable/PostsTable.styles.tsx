import styled from "@emotion/styled";
import {Table} from "@mui/material"
const StyledTable = styled(Table)`
  border-radius: 50px;
  white-space: pre;
  thead {
    tr {
      th {
      background-color: #edffef;
      font-family: Nunito, sans-serif;
      font-weight: 700;
      border-radius: 20px 20px 0 0;
      height: 40px;
      text-transform: capitalize;
      padding-top: 20px;
      width: 50%;
      font-size: 1rem;        
      }
      th:first-of-type {
        width: 10%;
        padding-left:30px;
      }
    }
  }
  tbody {
    tr {
      td:first-of-type {
        padding-left: 30px;
        padding-top: 10px;
      }
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