import styled from "@emotion/styled";
import { Typography, TextField, Button } from '@mui/material';

export const PageContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
padding:50px;
background-color: #f7f8fb;  
flex-direction: column;
`;
export const HeaderContainer = styled.div`
display: flex;
align-items: start;
`
export const StyledTitle = styled(Typography)`
    text-transform: capitalize;
`
export const StyledButton = styled(Button)`
  width: 80px;
  background-color: #6c757d;
  &:hover {
    background-color: #6c757dbb;
  };
  align-self: center;
`
export const StyledTextField = styled(TextField)`
    font-family: Nunito, sans-serif;
    color:#6c757d;
    font-weight: 700;
    font-size: 1.5rem;
    width: 100%;
`

export const StyledPaper = styled.form`
padding: 16px;
justify-content: space-between;
min-height: 300px;  
margin-bottom: 16px;
display: flex;
background-color:#fff;
border-radius: 8px;
flex-direction: column;
width: 600px
`;
export const StyledContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 16px;
`