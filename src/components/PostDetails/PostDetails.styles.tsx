import styled from "@emotion/styled";
import { Typography, TextField, Button } from "@mui/material";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 50px;
  background-color: #edffef;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTitle = styled(Typography)`
  text-transform: capitalize;
  color: #aa0082;
`;
export const StyledButton = styled(Button)`
  width: 80px;
  background-color: #aa0082;
  &:hover {
    background-color: #aa0082bb;
  }
  align-self: center;
`;
export const StyledTextField = styled(TextField)`
  font-family: Nunito, sans-serif;
  color: #6c757d;
  font-weight: 700;
  font-size: 1.5rem;
  width: 100%;
`;

export const StyledPaper = styled.form`
  padding: 16px;
  justify-content: space-between;
  min-height: 300px;
  margin-bottom: 16px;
  display: flex;
  border: 1.5px solid #aa0082;
  border-radius: 8px;
  flex-direction: column;
  width: 600px;
`;
export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
