import styled from "@emotion/styled";
import {Table} from "@mui/material"
const StyledTable = styled(Table)`
  background-color: #fff;
  border-radius: 10px;
  white-space: pre;
  thead {
    tr {
      th {
    background-color: #eef2f7;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    height: 40px;
    text-transform: capitalize;
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
    font-size: 1rem;   
      }
    }
  }
`;
export { StyledTable }