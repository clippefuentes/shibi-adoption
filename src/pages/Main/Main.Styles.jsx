import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const MainButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;
`;

export const MainLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`;
